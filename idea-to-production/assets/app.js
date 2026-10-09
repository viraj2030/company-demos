(() => {
  const D = window.ITP_DATA;
  const CH = window.ITP_CHARTS;
  const STATE_KEY = "itp-v2";
  const CHECK_KEY = "itp-checklist-v1";
  const DAY = 86400000;
  let uid = 0;
  const nextId = (p) => `${p}-${++uid}`;
  const esc = (v) => String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
  };

  const defaultState = () => ({
    version: 2,
    done: {},
    quiz: {},
    exam: { best: 0, last: 0 },
    team: { roles: D.teamRoles.filter((r) => r.defaultOn).map((r) => r.id), areas: "web app" },
    certName: "Viraj"
  });

  const loadState = () => {
    try {
      const raw = JSON.parse(localStorage.getItem(STATE_KEY) || "null");
      if (!raw || raw.version !== 2) return defaultState();
      return Object.assign(defaultState(), raw, {
        done: raw.done || {},
        quiz: raw.quiz || {},
        exam: Object.assign({ best: 0, last: 0 }, raw.exam || {}),
        team: Object.assign({ roles: defaultState().team.roles, areas: "web app" }, raw.team || {})
      });
    } catch {
      return defaultState();
    }
  };
  let state = loadState();
  const saveState = () => localStorage.setItem(STATE_KEY, JSON.stringify(state));

  const loadChecks = () => {
    try { return JSON.parse(localStorage.getItem(CHECK_KEY) || "{}") || {}; } catch { return {}; }
  };
  const saveChecks = (map) => localStorage.setItem(CHECK_KEY, JSON.stringify(map));

  const quizzesFor = (chapterId) => D.quiz.filter((q) => q.chapterId === chapterId);
  const chapterById = (id) => D.chapters.find((c) => c.id === id);
  const skillMeta = (id) => D.skills.find((s) => s.id === id) || { id, label: id };

  const possibleFor = (skill) =>
    D.chapters.filter((c) => c.skill === skill).length +
    D.quiz.filter((q) => q.skill === skill).length;

  const quizEarned = (qid) => {
    const rec = state.quiz[qid];
    if (!rec) return false;
    return rec.first === "correct" || rec.box === 3;
  };

  const mastery = () => D.skills.map((s) => {
    const possible = possibleFor(s.id) || 1;
    let earned = 0;
    D.chapters.filter((c) => c.skill === s.id).forEach((c) => { if (state.done[c.id]) earned += 1; });
    D.quiz.filter((q) => q.skill === s.id).forEach((q) => { if (quizEarned(q.id)) earned += 1; });
    return { skill: s.id, label: s.label, earned, possible, score: Math.round(100 * earned / possible) };
  });

  const meanScore = () => {
    const axes = mastery();
    return Math.round(axes.reduce((a, x) => a + x.score, 0) / axes.length);
  };

  const dueReviews = () => {
    const now = Date.now();
    return Object.entries(state.quiz)
      .filter(([, rec]) => rec && rec.due != null && rec.due <= now && rec.box < 3)
      .map(([id]) => id);
  };

  const runtime = {
    pr: { scenario: "happy-path", index: 0, fixed: false, failOn: false, feedback: null },
    sim: { started: false, step: 0, chosen: null, meters: { ...D.sim.base }, path: [], outcome: null },
    trees: {},
    cases: {},
    exam: { started: false, index: 0, picked: null, answers: [], finished: false },
    xTopic: "",
    search: "",
    gloss: "",
    boardSize: 1,
    boardPick: 0,
    pipe: 0,
    botNode: 0,
    anatomy: "description",
    briefOpen: "",
    cost: { ...D.costDefaults },
    budget: { ...D.budgetDefaults },
    gatesOn: {}
  };

  D.trees.forEach((t) => { runtime.trees[t.id] = { node: t.root, path: [], leaf: null }; });
  D.cases.forEach((c) => { runtime.cases[c.id] = 0; });

  function renderToggle(grownUp, sources) {
    const bodyId = nextId("card-body");
    const src = (sources || []).map((s) => esc(s)).join(" ");
    return `
      <button type="button" data-testid="card-toggle" aria-expanded="false" aria-controls="${bodyId}">Grown-up version</button>
      <div data-testid="card-body" id="${bodyId}" hidden>
        <p class="grown">${esc(grownUp)}</p>
        ${src ? `<p class="sources">Sources: ${src}</p>` : ""}
      </div>`;
  }

  function renderCard(card) {
    return `<article class="card">
      <h3>${esc(card.title)}</h3>
      <p class="badge">Like I'm 6</p>
      <p class="kid">${esc(card.kid)}</p>
      ${renderToggle(card.grownUp, card.sources)}
    </article>`;
  }

  function renderQuiz(q) {
    const rec = state.quiz[q.id];
    const locked = Boolean(rec);
    const options = q.options.map((opt) => `
      <button type="button" data-testid="quiz-option" data-correct="${opt.correct ? "true" : "false"}" data-why="${esc(opt.why)}">${esc(opt.text)}</button>`).join("");
    const fb = locked
      ? `<div data-testid="quiz-feedback" class="quiz-feedback" data-state="${rec.first}">${esc(rec.first === "correct" ? "First answer counted as correct." : "First answer counted as wrong. It is in review.")}</div>`
      : `<div data-testid="quiz-feedback" class="quiz-feedback" hidden></div>`;
    return `<div class="quiz" data-testid="quiz" data-qid="${esc(q.id)}" data-skill="${esc(q.skill)}" data-chapter="${esc(q.chapterId)}">
      <p class="kicker">Scenario</p>
      <p>${esc(q.scenario)}</p>
      <h3>${esc(q.q)}</h3>
      <div class="stack">${options}</div>
      ${fb}
    </div>`;
  }

  function renderRecap(lines) {
    return `<aside class="recap"><h3>Remember</h3><ol>${lines.map((l) => `<li>${esc(l)}</li>`).join("")}</ol></aside>`;
  }

  function renderTemplate(t) {
    return `<article class="template" data-testid="template" data-template="${esc(t.id)}">
      <h3>${esc(t.title)}</h3>
      <p class="muted">${esc(t.why)} Source: ${esc(t.source)}</p>
      <pre>${esc(t.body)}</pre>
      <button type="button" data-testid="template-copy" data-copied="false">Copy</button>
    </article>`;
  }

  function renderPipeline() {
    const i = runtime.pipe;
    const step = D.pipeline[i];
    const buttons = D.pipeline.map((s, idx) => `
      <button type="button" class="pipeline-step" data-testid="pipeline-step" data-id="${esc(s.id)}" aria-pressed="${idx === i ? "true" : "false"}">
        <span class="step-index">Step ${idx + 1} of ${D.pipeline.length}</span>${esc(s.label)}
      </button>`).join("");
    return `<section class="widget" data-testid="pipeline">
      <h3>The path</h3>
      <p class="kid">Tap a step. See who does it. The last step sends you back to the idea.</p>
      <div class="stack">${buttons}</div>
      <div class="detail" data-testid="pipeline-detail">
        <p class="badge">${esc(step.label)}</p>
        <p>${esc(step.kid)}</p>
        <p>${esc(step.grownUp)}</p>
        <p class="who"><strong>Who does it.</strong> ${esc(step.whoDoesIt)}</p>
      </div>
    </section>`;
  }

  function renderBoardPicker() {
    const i = runtime.boardPick;
    const board = D.boards[i];
    const buttons = D.boards.map((b, idx) => `
      <button type="button" class="board-option" data-testid="board-option" data-name="${esc(b.name)}" aria-pressed="${idx === i ? "true" : "false"}">${esc(b.name)}</button>`).join("");
    return `<section class="widget" data-testid="board-picker">
      <h3>Pick a board</h3>
      <p class="kid">Tap a name. See if it fits a solo builder with bots.</p>
      <div class="stack">${buttons}</div>
      <div class="detail" data-testid="board-result">
        <p class="badge">${esc(board.name)}</p>
        <p><strong>Best for.</strong> ${esc(board.bestFor)}</p>
        <p><strong>Free tier.</strong> ${esc(board.freeTier)}</p>
        <p><strong>Agent fit.</strong> ${esc(board.agentFit)}</p>
        <p><strong>Verdict.</strong> ${esc(board.verdict)}</p>
      </div>
    </section>`;
  }

  function boardValue(id, n) {
    const spec = D.boardPricing[id];
    if (spec.kind === "zero") return 0;
    if (spec.kind === "per-user") return spec.unit * n;
    if (spec.kind === "after-free") return Math.max(0, n - spec.free) * spec.unit;
    if (spec.kind === "cap-paid") return n > spec.cap ? "paid" : 0;
    return 0;
  }

  function renderBoardChart() {
    const n = runtime.boardSize;
    const ids = ["github-projects", "linear-basic", "azure-devops", "jira"];
    const series = ids.map((id) => ({
      id,
      label: D.boardPricing[id].label,
      points: Array.from({ length: 20 }, (_, i) => {
        const size = i + 1;
        const v = boardValue(id, size);
        return { x: size, y: v };
      })
    }));
    const readouts = ids.map((id) => {
      const v = boardValue(id, n);
      return `<div class="stat" data-testid="board-cost" data-board="${id}" data-value="${v}">${esc(D.boardPricing[id].label)}: ${v === "paid" ? "paid" : "$" + v}</div>`;
    }).join("");
    return `<section class="widget">
      <h3>Cost by team size</h3>
      <p class="muted">Example numbers, change them. Jira above 10 shows paid. Our sources do not list that price.</p>
      <label class="field-label" for="board-team-size">Team size</label>
      <input id="board-team-size" data-testid="board-team-size" type="number" inputmode="decimal" min="1" max="20" value="${n}" />
      <div data-testid="board-chart">${CH.lineChart(series, { testid: "board-chart-svg", label: `Board cost at team size ${n}` })}</div>
      ${readouts}
    </section>`;
  }

  function renderTeamOrg() {
    const i = runtime.botNode;
    const node = D.team[i];
    const buttons = D.team.map((n, idx) => `
      <button type="button" class="bot-node" data-testid="bot-node" data-id="${esc(n.id)}" aria-pressed="${idx === i ? "true" : "false"}">${esc(n.role)}</button>`).join("");
    return `<section class="widget" data-testid="bot-team">
      <h3>The team</h3>
      <p class="kid">Tap a role. See the job, what it must never do, and who it reports to.</p>
      <div class="org">${buttons}</div>
      <div class="detail" data-testid="bot-detail">
        <p class="badge">${esc(node.role)}</p>
        <p><strong>Job.</strong> ${esc(node.job)}</p>
        <p><strong>Never does.</strong> ${esc(node.neverDoes)}</p>
        <p><strong>Reports to.</strong> ${esc(node.reportsTo)}</p>
      </div>
    </section>`;
  }

  function areaList() {
    return String(state.team.areas || "").split(",").map((s) => s.trim()).filter(Boolean);
  }

  function reportsTo(roleId) {
    const front = state.team.roles.includes("front-door");
    if (!front) return "Viraj";
    if (roleId === "front-door" || roleId === "ops-bot") return "Viraj";
    if (roleId === "eng-lead") return "Front door";
    return roleId.startsWith("area:") ? "Eng lead" : (state.team.roles.includes("eng-lead") ? "Eng lead" : "Front door");
  }

  function directCount() {
    const front = state.team.roles.includes("front-door");
    const areas = areaList();
    if (!front) return state.team.roles.length + areas.length;
    return 1 + (state.team.roles.includes("ops-bot") ? 1 : 0);
  }

  function teamSpecText() {
    const roles = D.teamRoles.filter((r) => state.team.roles.includes(r.id));
    const areas = areaList();
    const lines = ["# Team spec", "", `Areas: ${areas.join(", ") || "none"}`, ""];
    roles.forEach((r) => {
      lines.push(`## ${r.name}`);
      lines.push(`Name: ${r.name}`);
      lines.push(`Job: ${r.job}`);
      lines.push(`Never: ${r.never}`);
      lines.push(`Reports to: ${reportsTo(r.id)}`);
      lines.push(`Routines: ${r.routines}`);
      lines.push("");
    });
    areas.forEach((a) => {
      const name = `Area engineer: ${a}`;
      lines.push(`## ${name}`);
      lines.push(`Name: ${name}`);
      lines.push(`Job: Own ${a}. Reproduce bugs, launch a cloud agent, require before and after evidence, keep the board current.`);
      lines.push("Never: Write code on the bot computer. Merge. Touch secrets or prod.");
      lines.push(`Reports to: ${reportsTo("area:" + a)}`);
      lines.push("Routines: Every 30 minutes check open PRs for failing CI, Bugbot findings and conflicts.");
      lines.push("");
    });
    return lines.join("\n");
  }

  function renderTeamBuilder() {
    const roles = D.teamRoles.map((r) => `
      <label class="role-row">
        <input type="checkbox" data-testid="team-role" data-role="${esc(r.id)}" ${state.team.roles.includes(r.id) ? "checked" : ""} />
        <span><strong>${esc(r.name)}</strong><span class="how">${esc(r.job)}</span></span>
      </label>`).join("");
    const warn = directCount() > 5
      ? `<p data-testid="team-warning">You have more than 5 direct reports. Peter Yang: most people cannot drive more than 4-5 threads.</p>`
      : "";
    return `<section class="widget" data-testid="team-builder">
      <h3>Team builder</h3>
      <p class="kid">Tick the bots you want. Name the areas. Copy a spec you can paste.</p>
      ${roles}
      <label class="field-label" for="team-area">Areas (comma separated)</label>
      <input id="team-area" data-testid="team-area" type="text" value="${esc(state.team.areas)}" />
      ${warn}
      <label class="field-label" for="team-spec">Team spec</label>
      <textarea id="team-spec" data-testid="team-spec" class="team-spec" readonly>${esc(teamSpecText())}</textarea>
      <button type="button" data-testid="team-copy" data-copied="false">Copy spec</button>
    </section>`;
  }

  function renderLevelPath() {
    const steps = D.levels.map((lvl) => {
      const total = lvl.chapterIds.length;
      const done = lvl.chapterIds.filter((id) => state.done[id]).length;
      const pct = total ? Math.round(100 * done / total) : 0;
      return `<button type="button" class="level-step" data-testid="level-step" data-level="${esc(lvl.id)}" data-complete="${pct}">
        <span class="step-index">${esc(lvl.title)} ${pct}%</span>${esc(lvl.promise)}
      </button>`;
    }).join("");
    return `<section class="widget"><h3>Level path</h3><div class="level-path" data-testid="level-path">${steps}</div></section>`;
  }

  function renderRadar(full) {
    const axes = mastery();
    const svg = CH.radarChart(axes, { testid: full ? "mastery-radar" : undefined, size: full ? 300 : 72, label: `Mastery radar, mean ${meanScore()} percent` });
    if (!full) return svg;
    return `<section class="widget" id="mastery-radar-wrap">
      <h3>Mastery radar</h3>
      <p class="kid">Eight skills. A bar fills when you finish a chapter or get a quiz right on the first try.</p>
      ${svg}
    </section>`;
  }

  function renderReviewDeckInline() {
    const n = dueReviews().length;
    return `<section class="widget">
      <h3>Review deck</h3>
      <p class="kid">Wrong first answers come back here. Box 2 waits a day. Box 3 waits three days.</p>
      <p>Due now: <strong data-testid="review-count" data-value="${n}">${n}</strong></p>
      <button type="button" data-testid="review-start">Start review</button>
    </section>`;
  }

  function costMath(cfg) {
    const interval = Number(cfg.interval) || 60;
    const tin = Number(cfg.tokensIn) || 0;
    const tout = Number(cfg.tokensOut) || 0;
    const cache = Math.max(0, Math.min(100, Number(cfg.cacheShare) || 0)) / 100;
    const pin = Number(cfg.priceIn) || 0;
    const pc = Number(cfg.priceCache) || 0;
    const pout = Number(cfg.priceOut) || 0;
    const per = (tin * (1 - cache) * pin + tin * cache * pc + tout * pout) / 1e6;
    const runs = Math.round(10080 / interval);
    const weekly = runs * per;
    return { interval, per, runs, weekly, monthly: weekly * 52 / 12 };
  }

  function renderCostCalc() {
    const c = runtime.cost;
    const m = costMath(c);
    const intervals = [5, 15, 30, 60, 240, 1440];
    const items = intervals.map((iv) => {
      const w = costMath({ ...c, interval: iv }).weekly;
      return { label: iv === 1440 ? "day" : iv + "m", value: Number(w.toFixed(2)), valueLabel: w.toFixed(2), selected: iv === m.interval, testid: "cost-bar", attrs: { "data-interval": iv } };
    });
    return `<section class="widget" data-testid="cost-calc">
      <h3>Routine cost calculator</h3>
      <p class="muted">Example numbers, change them. Illustrative: Cursor list prices, not Grok Bot's meter.</p>
      <label class="field-label" for="cost-interval">Interval (minutes)</label>
      <select id="cost-interval" data-testid="cost-interval">${intervals.map((iv) => `<option value="${iv}" ${iv === c.interval ? "selected" : ""}>${iv}</option>`).join("")}</select>
      <label class="field-label" for="cost-tokens-in">Tokens in</label>
      <input id="cost-tokens-in" data-testid="cost-tokens-in" type="number" inputmode="decimal" value="${c.tokensIn}" />
      <label class="field-label" for="cost-tokens-out">Tokens out</label>
      <input id="cost-tokens-out" data-testid="cost-tokens-out" type="number" inputmode="decimal" value="${c.tokensOut}" />
      <label class="field-label" for="cost-cache-share">Cache share %</label>
      <input id="cost-cache-share" data-testid="cost-cache-share" type="number" inputmode="decimal" value="${c.cacheShare}" />
      <label class="field-label" for="cost-price-in">Price in</label>
      <input id="cost-price-in" data-testid="cost-price-in" type="number" inputmode="decimal" value="${c.priceIn}" />
      <label class="field-label" for="cost-price-cache">Price cache</label>
      <input id="cost-price-cache" data-testid="cost-price-cache" type="number" inputmode="decimal" value="${c.priceCache}" />
      <label class="field-label" for="cost-price-out">Price out</label>
      <input id="cost-price-out" data-testid="cost-price-out" type="number" inputmode="decimal" value="${c.priceOut}" />
      <div class="row">${Object.entries(D.modelPrices).map(([id, p]) => `<button type="button" data-cost-preset="${id}">${esc(p.label)}</button>`).join("")}</div>
      <p class="stat">Weekly runs <strong data-testid="cost-weekly-runs" data-value="${m.runs}">${m.runs}</strong></p>
      <p class="stat">Cost per run <strong data-testid="cost-per-run" data-value="${m.per.toFixed(4)}">${m.per.toFixed(4)}</strong></p>
      <p class="stat">Weekly USD <strong data-testid="cost-weekly-usd" data-value="${m.weekly.toFixed(2)}">${m.weekly.toFixed(2)}</strong></p>
      <p class="muted">Monthly (x 52 / 12): $${m.monthly.toFixed(2)}</p>
      <div data-testid="cost-chart">${CH.barChart(items, { testid: "cost-chart", label: `Weekly routine cost $${m.weekly.toFixed(2)} at ${m.interval} minutes` })}</div>
      <p>GrokBotRadar: a routine firing 672 times a week. Every run rereads the Bot's whole chat. Fix: hourly. 168 runs. Same signal.</p>
      <p class="muted">Audit prompt: Audit your own usage for me. List every routine you own. For each one, tell me: 1. How often it runs 2. How many runs that is per week 3. Whether it posts a message even when nothing changed 4. Whether this is also the Bot I chat with most. Then tell me which one is costing me the most and how to slow it down without breaking the job.</p>
    </section>`;
  }

  function budgetMath(cfg) {
    const prices = D.modelPrices[cfg.model] || D.modelPrices["grok-4-7"];
    const tin = Number(cfg.tokensIn) || 0;
    const tout = Number(cfg.tokensOut) || 0;
    const cache = Math.max(0, Math.min(100, Number(cfg.cacheShare) || 0)) / 100;
    const per = (tin * (1 - cache) * prices.in + tin * cache * prices.cache + tout * prices.out) / 1e6;
    const usd = Number(cfg.usd) || 0;
    const prs = Math.floor(usd / (per || 1));
    return { per, prs, prices };
  }

  function renderBudgetCalc() {
    const b = runtime.budget;
    const m = budgetMath(b);
    const items = Object.entries(D.modelPrices).map(([id, p]) => {
      const per = budgetMath({ ...b, model: id }).per;
      const prs = Math.floor((Number(b.usd) || 0) / (per || 1));
      return { label: p.label.replace("Claude ", ""), value: prs, selected: id === b.model, testid: "budget-bar", attrs: { "data-model": id } };
    });
    return `<section class="widget" data-testid="budget-calc">
      <h3>PR budget calculator</h3>
      <p class="muted">Example numbers, change them. Anchor: 148 PRs in 30 days at about $300 list (jorgediazapps), about $2.03 each.</p>
      <label class="field-label" for="budget-usd">Budget USD</label>
      <input id="budget-usd" data-testid="budget-usd" type="number" inputmode="decimal" value="${b.usd}" />
      <label class="field-label" for="budget-tokens-in">Tokens in</label>
      <input id="budget-tokens-in" data-testid="budget-tokens-in" type="number" inputmode="decimal" value="${b.tokensIn}" />
      <label class="field-label" for="budget-cache-share">Cache share %</label>
      <input id="budget-cache-share" data-testid="budget-cache-share" type="number" inputmode="decimal" value="${b.cacheShare}" />
      <label class="field-label" for="budget-tokens-out">Tokens out</label>
      <input id="budget-tokens-out" data-testid="budget-tokens-out" type="number" inputmode="decimal" value="${b.tokensOut}" />
      <div class="row">${Object.entries(D.modelPrices).map(([id, p]) => `<button type="button" class="budget-model" data-testid="budget-model" data-model="${id}" aria-pressed="${id === b.model ? "true" : "false"}">${esc(p.label)}</button>`).join("")}</div>
      <p class="stat">Per PR <strong data-testid="budget-per-pr" data-value="${m.per.toFixed(2)}">${m.per.toFixed(2)}</strong></p>
      <p class="stat">PRs this month <strong data-testid="budget-prs" data-value="${m.prs}">${m.prs}</strong></p>
      <div data-testid="budget-chart">${CH.barChart(items, { testid: "budget-chart", label: `${m.prs} PRs at $${Number(b.usd)} on ${m.prices.label}`, marker: 148, markerLabel: "148 at ~$300" })}</div>
    </section>`;
  }

  function uncaughtCount() {
    const on = runtime.gatesOn;
    return D.failureModes.filter((f) => !f.caughtBy.some((g) => on[g])).length;
  }

  function renderGateChart() {
    const toggles = D.gateMeta.map((g) => `
      <label class="gate-row">
        <input type="checkbox" data-testid="gate-toggle" data-gate="${g.id}" ${runtime.gatesOn[g.id] ? "checked" : ""} />
        <span>${esc(g.label)}</span>
      </label>`).join("");
    const rows = D.failureModes.map((f) => {
      const caught = f.caughtBy.some((g) => runtime.gatesOn[g]);
      return `<div class="failure-row" data-testid="failure-row" data-failure="${f.id}" data-caught="${caught ? "true" : "false"}"><strong>${esc(f.title)}</strong> ${caught ? "caught" : "slips through"}</div>`;
    }).join("");
    const u = uncaughtCount();
    return `<section class="widget" data-testid="gate-chart">
      <h3>Risk vs gates</h3>
      <p class="muted">Teaching model, not measured.</p>
      ${toggles}
      <p>Uncaught: <strong data-testid="gate-uncaught" data-value="${u}">${u}</strong></p>
      ${rows}
      <svg role="img" aria-label="${u} failure types still uncaught" viewBox="0 0 340 80" width="100%" height="80">
        <rect x="10" y="20" width="${Math.max(8, (u / 8) * 320)}" height="28" fill="var(--bad)" rx="6"></rect>
        <text x="20" y="40" fill="#fff" font-size="14">${u} uncaught</text>
      </svg>
    </section>`;
  }

  function renderScaleChart() {
    const items = D.scaleData.map((s) => ({
      label: s.label, value: s.value, valueLabel: String(s.value), testid: "scale-bar", attrs: { "data-key": s.key }
    }));
    return `<section class="widget">
      <h3>Scale chart</h3>
      <p class="kid">Threads a person can drive, agents by hand, a bot fleet, then PRs per month.</p>
      <div data-testid="scale-chart">${CH.barChart(items, { testid: "scale-chart", label: "Scale: 5 threads, 15 manual agents, 200 bot fleet, 148 and 2500 PRs" })}</div>
    </section>`;
  }

  function renderDora() {
    return `<svg role="img" aria-label="DORA five metrics: lead time, deploy frequency, recovery time, change fail rate, rework rate" viewBox="0 0 340 170" width="100%" height="170">
      <text x="8" y="18" font-size="12" fill="currentColor">Throughput</text>
      <rect x="8" y="28" width="100" height="44" fill="var(--accent-soft)" stroke="var(--accent)" rx="8"></rect>
      <text x="16" y="48" font-size="10" fill="currentColor">Lead time</text>
      <text x="16" y="62" font-size="9" fill="currentColor">commit to live</text>
      <rect x="118" y="28" width="100" height="44" fill="var(--accent-soft)" stroke="var(--accent)" rx="8"></rect>
      <text x="126" y="48" font-size="10" fill="currentColor">Deploy freq</text>
      <rect x="228" y="28" width="104" height="44" fill="var(--accent-soft)" stroke="var(--accent)" rx="8"></rect>
      <text x="236" y="48" font-size="10" fill="currentColor">Recovery</text>
      <text x="8" y="96" font-size="12" fill="currentColor">Instability</text>
      <rect x="8" y="106" width="150" height="44" fill="var(--warn-soft)" stroke="var(--warn)" rx="8"></rect>
      <text x="16" y="132" font-size="10" fill="currentColor">Change fail rate</text>
      <rect x="170" y="106" width="162" height="44" fill="var(--warn-soft)" stroke="var(--warn)" rx="8"></rect>
      <text x="178" y="132" font-size="10" fill="currentColor">Rework rate</text>
    </svg>`;
  }

  function renderAnatomy() {
    const parts = [
      { id: "description", label: "Description", kid: "The rules that stay true." },
      { id: "memory", label: "Memory", kid: "A cache. Not the source of truth." },
      { id: "skills", label: "Skills", kid: "The how-to recipe." },
      { id: "routines", label: "Routines", kid: "The clock or the doorbell." },
      { id: "connectors", label: "Connectors", kid: "Logins to apps. Tokens stay on the backend." },
      { id: "computer", label: "Shared computer", kid: "Work surface, not a lock." },
      { id: "teammates", label: "Teammates", kid: "Two to six in a group chat." }
    ];
    const cur = parts.find((p) => p.id === runtime.anatomy) || parts[0];
    return `<section class="widget">
      <h3>Bot anatomy</h3>
      <svg role="img" aria-label="Seven parts of a Grok Bot" viewBox="0 0 340 90" width="100%" height="90">
        <rect x="10" y="16" width="320" height="58" rx="12" fill="var(--accent-soft)" stroke="var(--accent)"></rect>
        <text x="170" y="50" text-anchor="middle" fill="currentColor" font-size="14">${esc(cur.label)}</text>
      </svg>
      <div class="anatomy">${parts.map((p) => `<button type="button" data-anatomy="${p.id}" aria-pressed="${p.id === cur.id ? "true" : "false"}">${esc(p.label)}</button>`).join("")}</div>
      <p>${esc(cur.kid)}</p>
    </section>`;
  }

  function renderHelperTable() {
    return `<section class="widget"><h3>Who does this job</h3>
      <div class="table-wrap"><table>
        <tr><th>Job</th><th>Who</th></tr>
        <tr><td>Route asks, watch, draft</td><td>Grok Bot</td></tr>
        <tr><td>Write code on its own computer</td><td>Cloud agent</td></tr>
        <tr><td>Comment on the PR</td><td>Bugbot</td></tr>
        <tr><td>Pick the market and the merge</td><td>You</td></tr>
      </table></div>
    </section>`;
  }

  function renderBriefCompare() {
    return `<section class="widget">
      <h3>Vague vs good</h3>
      <div class="compare">
        <button type="button" class="compare-col ${runtime.briefOpen === "bad" ? "open" : ""}" data-brief="bad">
          <strong>Vague</strong>
          <p>Make me a quote app.</p>
          <p class="problem">No user, no done-means, no model. The agent guesses.</p>
        </button>
        <button type="button" class="compare-col ${runtime.briefOpen === "good" ? "open" : ""}" data-brief="good">
          <strong>Good</strong>
          <p>A plumber quotes from a van. Done means: a PDF downloads on an iPhone. Model: Grok 4.7.</p>
          <p class="problem">Tap to hide. This is the F1 shape.</p>
        </button>
      </div>
    </section>`;
  }

  function renderConflict() {
    return `<section class="widget">
      <h3>Two agents, one file</h3>
      <svg role="img" aria-label="Two agents edit quote.ts and the PR shows a conflict" viewBox="0 0 340 140" width="100%" height="140">
        <rect x="20" y="16" width="120" height="44" rx="8" fill="var(--accent-soft)"></rect>
        <text x="80" y="42" text-anchor="middle" font-size="11">Agent A</text>
        <rect x="200" y="16" width="120" height="44" rx="8" fill="var(--accent-soft)"></rect>
        <text x="260" y="42" text-anchor="middle" font-size="11">Agent B</text>
        <rect x="90" y="80" width="160" height="44" rx="8" fill="var(--bad-soft)" stroke="var(--bad)"></rect>
        <text x="170" y="106" text-anchor="middle" font-size="11">Conflict in quote.ts</text>
      </svg>
      <p>Rebase on main, resolve, re-run checks. Next time, one area per bot.</p>
    </section>`;
  }

  function renderFreeTiers() {
    return `<section class="widget"><h3>Free tier numbers</h3>
      <div class="table-wrap"><table>
        <tr><th>Host</th><th>Free facts</th></tr>
        <tr><td>GitHub Pages</td><td>1 GB site, 100 GB bandwidth a month, 10 minute deploy timeout, 10 builds an hour. Not for commercial SaaS.</td></tr>
        <tr><td>Vercel Hobby</td><td>$0, personal non-commercial. 100 GB transfer, 1M function calls, instant rollback.</td></tr>
        <tr><td>Vercel Pro</td><td>$20/mo with $20 credit. Commercial ok.</td></tr>
        <tr><td>Supabase Free</td><td>500 MB, 50,000 MAU, 1 GB files, 2 projects, pause after 1 week idle.</td></tr>
        <tr><td>Supabase Pro</td><td>From $25/mo. 8 GB disk, 100,000 MAU, 7 day backups.</td></tr>
        <tr><td>Sentry Developer</td><td>Free for one user, errors and tracing, email alerts. Team $26/mo.</td></tr>
      </table></div>
    </section>`;
  }

  function currentPr() {
    return D.prScenarios.find((s) => s.id === runtime.pr.scenario) || D.prScenarios[0];
  }

  function renderPrLab() {
    const sc = currentPr();
    const st = sc.states[runtime.pr.index];
    const chips = D.prScenarios.map((s) => `
      <button type="button" class="pr-scenario" data-testid="pr-scenario" data-scenario="${s.id}" aria-pressed="${s.id === sc.id ? "true" : "false"}">${esc(s.title)}</button>`).join("");
    const blocked = Boolean(st.fixes) && !runtime.pr.fixed;
    const fixes = (st.fixes && !runtime.pr.fixed) ? st.fixes.map((f) => `
      <button type="button" data-testid="pr-fix-option" data-correct="${f.correct ? "true" : "false"}">${esc(f.text)}</button>`).join("") : "";
    const fb = runtime.pr.feedback
      ? `<p data-testid="pr-fix-feedback" class="pr-fix-feedback" data-state="${runtime.pr.feedback.state}">${esc(runtime.pr.feedback.why)}</p>`
      : "";
    const mergeEl = (sc.id === "bugbot-neutral" && st.mergeGate)
      ? `<p data-testid="pr-merge-blocked" data-value="${runtime.pr.failOn ? "true" : "false"}">${runtime.pr.failOn ? "Merge is blocked. Fail-on-unresolved is on." : "Merge is not blocked. Findings are still neutral."}</p>`
      : "";
    const toggle = sc.id === "bugbot-neutral"
      ? `<label class="check-row"><input type="checkbox" data-testid="bugbot-fail-toggle" ${runtime.pr.failOn ? "checked" : ""} /><span>Bugbot fails on unresolved findings</span></label>`
      : "";
    return `<section class="widget" data-testid="pr-lab">
      <h3>PR lab</h3>
      <p class="kid">Pick a path. Some paths break. Pick the fix.</p>
      <div class="chips">${chips}</div>
      <div data-testid="pr-sim">
        <p data-testid="pr-sim-step" class="pr-state" data-step="${runtime.pr.index}" data-status="${st.status}"><span class="status-dot"></span>${esc(st.label)}</p>
        <div class="detail">
          <p>${esc(st.kid)}</p>
          <p>${esc(st.grownUp)}</p>
          <p class="who"><strong>Who.</strong> ${esc(st.actor)}</p>
          ${toggle}${mergeEl}${fixes ? `<div class="stack">${fixes}</div>` : ""}${fb}
        </div>
        <div class="row">
          <button type="button" data-testid="pr-sim-back">Back</button>
          <button type="button" data-testid="pr-sim-next" ${blocked ? 'aria-disabled="true"' : ""}>Next</button>
          <button type="button" data-testid="pr-sim-reset">Reset</button>
        </div>
      </div>
    </section>`;
  }

  function simOutcome() {
    const m = runtime.sim.meters;
    const risk = Math.max(0, m.risk);
    if (risk >= 5) return "incident";
    if (m.signal <= 0) return "wrong-thing";
    if (m.cost >= 100) return "over-budget";
    return "shipped-safe";
  }

  function renderSim() {
    const sim = runtime.sim;
    if (!sim.started) {
      return `<section class="widget" data-testid="sim">
        <h3>Idea to production simulator</h3>
        <p class="muted">Teaching model, not measured. Costs use the routine calculator's example numbers.</p>
        <button type="button" class="primary" data-testid="sim-start">Start a project</button>
      </section>`;
    }
    const meters = ["days", "cost", "risk", "signal"].map((k) => {
      const raw = k === "risk" ? Math.max(0, sim.meters.risk) : sim.meters[k];
      return `<div class="meter-row"><span>${k}</span><div class="meter-bar"><div class="meter-fill" style="width:${Math.min(100, Math.abs(raw) * (k === "cost" ? 0.3 : 8))}%"></div></div><strong data-testid="sim-meter" data-meter="${k}" data-value="${raw}">${raw}</strong></div>`;
    }).join("");
    const chartItems = ["days", "cost", "risk", "signal"].map((k) => ({
      label: k, value: k === "risk" ? Math.max(0, sim.meters.risk) : Math.max(0, sim.meters[k]), testid: "sim-bar"
    }));
    if (sim.outcome) {
      const out = D.sim.outcomes.find((o) => o.id === sim.outcome);
      return `<section class="widget" data-testid="sim">
        <div data-testid="sim-chart">${CH.barChart(chartItems, { label: `Outcome meters, cost ${sim.meters.cost}, risk ${Math.max(0, sim.meters.risk)}` })}</div>
        ${meters}
        <div data-testid="sim-outcome" data-outcome="${sim.outcome}">
          <h3>${esc(out.title)}</h3>
          <p>${esc(out.kid)}</p>
          <p>Your path: ${sim.path.map((p) => p.opt).join(", ")}</p>
          <p><a href="#${out.chapter}">Open the chapter that teaches the fix</a></p>
        </div>
        <button type="button" data-testid="sim-restart">Start over</button>
      </section>`;
    }
    const step = D.sim.steps[sim.step];
    const opts = !sim.chosen ? step.options.map((o) => `
      <button type="button" data-testid="sim-option" data-option-id="${o.id}">${esc(o.label)}</button>`).join("") : "";
    const chosen = sim.chosen ? `<p>${esc(sim.chosen.consequence)}</p><button type="button" data-testid="sim-continue">Continue</button>` : "";
    return `<section class="widget" data-testid="sim">
      <p class="muted">Teaching model, not measured. Costs use the routine calculator's example numbers.</p>
      <div data-testid="sim-chart">${CH.barChart(chartItems, { label: "Simulator meters for days, cost, risk, signal" })}</div>
      ${meters}
      <div data-testid="sim-step" data-step-id="${step.id}">
        <h3>${esc(step.q)}</h3>
        <p class="kid">${esc(step.kid)}</p>
        <div class="stack">${opts}</div>
        ${chosen}
      </div>
    </section>`;
  }

  function renderTree(id) {
    const tree = D.trees.find((t) => t.id === id);
    const st = runtime.trees[id];
    const path = st.path.map((p) => esc(p.label)).join(" > ");
    let body;
    if (st.leaf) {
      const leaf = tree.leaves[st.leaf];
      body = `<div data-testid="dtree-leaf" data-leaf="${st.leaf}"><h3>${esc(leaf.answer)}</h3><p>${esc(leaf.why)}</p><p class="sources">Sources: ${leaf.sources.map(esc).join(" ")}</p></div>`;
    } else {
      const node = tree.nodes[st.node];
      body = `<p>${esc(node.q)}</p><div class="stack">${node.options.map((o) => `<button type="button" data-testid="dtree-option" data-option-id="${o.id}">${esc(o.label)}</button>`).join("")}</div>`;
    }
    return `<section class="widget" data-testid="dtree" data-tree="${id}">
      <h3>${esc(tree.title)}</h3>
      <p data-testid="dtree-path">${path || "Start"}</p>
      ${body}
      <button type="button" data-testid="dtree-reset">Reset</button>
    </section>`;
  }

  function renderCase(id) {
    const c = D.cases.find((x) => x.id === id);
    const i = runtime.cases[id] || 0;
    const step = c.steps[i];
    const marks = c.steps.map((_, idx) => `<i class="${idx <= i ? "on" : ""}"></i>`).join("");
    const caseLabel = `Case step ${i + 1} of ${c.steps.length}: ${step.title}`;
    return `<section class="widget" data-testid="case-study" data-case="${id}">
      <h3>${esc(c.title)}</h3>
      <p class="muted">${esc(c.source)}</p>
      <div class="timeline" aria-hidden="true">${marks}</div>
      <svg role="img" aria-label="${esc(caseLabel)}" viewBox="0 0 340 24" width="100%" height="24">
        ${c.steps.map((_, idx) => `<circle cx="${12 + idx * (316 / Math.max(c.steps.length - 1, 1))}" cy="12" r="${idx === i ? 6 : 3}" fill="${idx <= i ? "var(--accent)" : "var(--line)"}"></circle>`).join("")}
      </svg>
      <div data-testid="case-step" data-step="${i}" data-total="${c.steps.length}">
        <p class="badge">${esc(step.label)}</p>
        <h3>${esc(step.title)}</h3>
        <p data-testid="case-who">${esc(step.who)}</p>
        <p>${esc(step.what)}</p>
        <p class="muted">${esc(step.artifact)} · ${esc(step.time)}</p>
      </div>
      <div class="row">
        <button type="button" data-testid="case-back">Back</button>
        <button type="button" data-testid="case-next">Next</button>
      </div>
    </section>`;
  }

  function renderFailures() {
    return D.failureModes.map((f) => `<article class="failure-card">
      <h3>${esc(f.title)}</h3>
      <p><strong>See.</strong> ${esc(f.see)}</p>
      <p><strong>Cause.</strong> ${esc(f.cause)}</p>
      <p><strong>Fix.</strong> ${esc(f.fix)}</p>
      <p><strong>Gate.</strong> ${esc(f.gate)}</p>
    </article>`).join("");
  }

  function renderExam() {
    const ex = runtime.exam;
    if (!ex.started) {
      return `<section class="widget" data-testid="exam">
        <h3>Expert exam</h3>
        <p>Twelve questions. Nine to pass.</p>
        <button type="button" class="primary" data-testid="exam-start">Start exam</button>
      </section>`;
    }
    if (ex.finished) {
      const score = ex.answers.filter(Boolean).length;
      const pass = score >= 9;
      const axes = mastery();
      const cert = pass ? `<div class="cert" data-testid="certificate">
        <p class="kicker">Idea to production: Expert practitioner</p>
        <label class="field-label" for="certificate-name">Name</label>
        <input id="certificate-name" data-testid="certificate-name" type="text" value="${esc(state.certName || "Viraj")}" />
        <p>${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date().getMonth()]} ${new Date().getDate()} ${new Date().getFullYear()}</p>
        ${CH.radarChart(axes, { size: 240, label: `Certificate radar, mean ${meanScore()} percent` })}
        ${axes.map((a) => `<p data-testid="certificate-skill" data-skill="${a.skill}" data-score="${a.score}">${esc(a.label)}: ${a.score}</p>`).join("")}
      </div>` : `<p>No certificate. Review: ${D.exam.filter((q, i) => !ex.answers[i]).map((q) => {
        const ch = D.chapters.find((c) => c.skill === q.skill);
        return `<a href="#${ch ? ch.id : "start-here"}">${esc(skillMeta(q.skill).label)}</a>`;
      }).join(", ")}</p>`;
      return `<section class="widget exam-box" data-testid="exam">
        <p data-testid="exam-score" data-score="${score}" data-total="12">You scored ${score} of 12.</p>
        ${cert}
        <button type="button" data-testid="exam-start">Try again</button>
      </section>`;
    }
    const q = D.exam[ex.index];
    return `<section class="widget exam-box" data-testid="exam">
      <p class="kicker">Question ${ex.index + 1} of 12</p>
      <div data-testid="exam-question">
        <h3>${esc(q.q)}</h3>
        <div class="stack">${q.options.map((o) => `<button type="button" data-testid="exam-option" data-correct="${o.correct ? "true" : "false"}">${esc(o.text)}</button>`).join("")}</div>
        ${ex.picked != null ? `<p class="quiz-feedback" data-state="${ex.picked ? "correct" : "wrong"}">${esc((q.options.find((o) => o.correct === ex.picked) || {}).why || "")}</p><button type="button" data-testid="exam-next">Next</button>` : ""}
      </div>
    </section>`;
  }

  function renderChecklist() {
    const stored = loadChecks();
    const groups = [];
    D.checklist.forEach((item) => {
      let g = groups.find((x) => x.phase === item.phase);
      if (!g) { g = { phase: item.phase, items: [] }; groups.push(g); }
      g.items.push(item);
    });
    const ticked = D.checklist.filter((i) => stored[i.key]).length;
    const body = groups.map((g) => `<h3 class="phase">${esc(g.phase)}</h3>` + g.items.map((item) => {
      const hid = nextId("how");
      return `<label class="check-row">
        <input type="checkbox" data-testid="checklist-item" data-key="${esc(item.key)}" ${stored[item.key] ? "checked" : ""} />
        <span>
          <strong>${item.order}. ${esc(item.label)}</strong>
          <span class="check-why">${esc(item.why)}</span>
          <button type="button" data-testid="card-toggle" aria-expanded="false" aria-controls="${hid}">How</button>
          <span id="${hid}" data-testid="card-body" hidden class="how">${esc(item.how)} <a href="#${item.chapter}">Open chapter</a></span>
        </span>
      </label>`;
    }).join("")).join("");
    return `<section class="widget" data-testid="checklist">
      <h3>Tick these in order</h3>
      <p>Ticked: <strong data-testid="checklist-progress" data-value="${ticked}">${ticked}</strong></p>
      ${body}
    </section>`;
  }

  function renderFromX() {
    const topics = ["team", "gates", "cost", "failures", "loops", "setup"];
    const chips = topics.map((t) => `<button type="button" data-testid="x-filter" data-topic="${t}" aria-pressed="${runtime.xTopic === t ? "true" : "false"}">${t}</button>`).join("");
    const posts = D.xPosts.map((p) => {
      const hide = runtime.xTopic && !p.topic.split(/[ ,]+/).includes(runtime.xTopic);
      return `<article class="x-post" data-testid="x-post" data-topic="${esc(p.topic)}" ${hide ? "hidden" : ""}>
        <p class="kicker">@${esc(p.handle)}</p>
        <blockquote>${esc(p.quote)}</blockquote>
        <p>${esc(p.takeaway)}</p>
        <a href="${esc(p.url)}" target="_blank" rel="noopener">Open on X</a>
        <p><a href="#${p.chapter}">Chapter</a></p>
      </article>`;
    }).join("");
    return `<section class="widget" data-testid="from-x"><div class="chips">${chips}</div>${posts}</section>`;
  }

  function renderGlossary() {
    const q = runtime.gloss.trim().toLowerCase();
    const items = D.glossary.map((g) => {
      const hide = q && !(g.term.toLowerCase().includes(q) || g.kid.toLowerCase().includes(q));
      return `<article class="glossary-item" data-testid="glossary-term" data-term="${esc(g.term.toLowerCase())}" ${hide ? "hidden" : ""}>
        <h3>${esc(g.term)}</h3>
        <p>${esc(g.kid)}</p>
        <a href="#${g.chapter}">Open ${esc(g.chapter)}</a>
      </article>`;
    }).join("");
    return `<section class="widget" data-testid="glossary">
      <label class="field-label" for="glossary-search">Filter</label>
      <input id="glossary-search" data-testid="glossary-search" class="glossary-filter" type="search" value="${esc(runtime.gloss)}" placeholder="Type a word" />
      ${items}
    </section>`;
  }

  function renderWidget(name) {
    const map = {
      "level-path": renderLevelPath,
      "mastery-radar": () => renderRadar(true),
      "review-deck": renderReviewDeckInline,
      pipeline: renderPipeline,
      "case-quote-app": () => renderCase("quote-app"),
      "bot-anatomy": renderAnatomy,
      "helper-table": renderHelperTable,
      "template-research-prompt": () => renderTemplate(D.templates.find((t) => t.id === "research-prompt")),
      "brief-compare": renderBriefCompare,
      "template-brief": () => renderTemplate(D.templates.find((t) => t.id === "brief")),
      "template-ticket": () => renderTemplate(D.templates.find((t) => t.id === "ticket")),
      "board-picker": renderBoardPicker,
      "dtree-board": () => renderTree("board"),
      "board-chart": renderBoardChart,
      "conflict-svg": renderConflict,
      "template-agents-md": () => renderTemplate(D.templates.find((t) => t.id === "agents-md")),
      "template-environment-json": () => renderTemplate(D.templates.find((t) => t.id === "environment-json")),
      "pr-lab": renderPrLab,
      "template-pr-description": () => renderTemplate(D.templates.find((t) => t.id === "pr-description")),
      "gate-chart": renderGateChart,
      "dtree-merge": () => renderTree("merge"),
      "template-branch-protection": () => renderTemplate(D.templates.find((t) => t.id === "branch-protection")),
      "template-ci-workflow": () => renderTemplate(D.templates.find((t) => t.id === "ci-workflow")),
      "template-bugbot-yaml": () => renderTemplate(D.templates.find((t) => t.id === "bugbot-yaml")),
      "template-bugbot-md": () => renderTemplate(D.templates.find((t) => t.id === "bugbot-md")),
      "dtree-hosting": () => renderTree("hosting"),
      "free-tiers": renderFreeTiers,
      dora: () => `<section class="widget"><h3>DORA's five</h3><p class="kid">Speed and stability are not tradeoffs. Do not set a metric as a goal.</p>${renderDora()}</section>`,
      "bot-team": renderTeamOrg,
      "team-builder": renderTeamBuilder,
      "dtree-automate": () => renderTree("automate"),
      "template-routine-prompt": () => renderTemplate(D.templates.find((t) => t.id === "routine-prompt")),
      "cost-calc": renderCostCalc,
      "budget-calc": renderBudgetCalc,
      "template-auto-review-rules": () => renderTemplate(D.templates.find((t) => t.id === "auto-review-rules")),
      "failure-cards": renderFailures,
      "scale-chart": renderScaleChart,
      "case-lingxi-org": () => renderCase("lingxi-org"),
      "case-test-fix-loop": () => renderCase("test-fix-loop"),
      "case-poteto-loop": () => renderCase("poteto-loop"),
      sim: renderSim,
      exam: renderExam,
      templates: () => D.templates.map(renderTemplate).join(""),
      checklist: renderChecklist,
      "from-x": renderFromX,
      glossary: renderGlossary
    };
    return map[name] ? map[name]() : "";
  }

  function renderChapter(ch, index) {
    const done = !!state.done[ch.id];
    const kicker = ch.level ? `${ch.level} · ${skillMeta(ch.skill).label}` : "Reference";
    return `<section class="chapter" data-chapter="${esc(ch.id)}" id="${esc(ch.id)}">
      <div class="chapter-head">
        <p class="kicker">${esc(kicker)} · Chapter ${index + 1}</p>
        <h2>${esc(ch.title)}</h2>
        <p class="badge">Like I'm 6</p>
        <p class="kid">${esc(ch.kid)}</p>
        ${renderToggle(ch.grownUp, [])}
      </div>
      ${ch.cards.map(renderCard).join("")}
      ${(ch.widgets || []).map(renderWidget).join("")}
      ${quizzesFor(ch.id).map(renderQuiz).join("")}
      ${renderRecap(ch.recap || [])}
      <button type="button" class="chapter-done" data-testid="chapter-done" aria-pressed="${done ? "true" : "false"}">${done ? "Got this" : "I've got this"}</button>
    </section>`;
  }

  function paintHeader() {
    const pct = meanScore();
    const bar = document.querySelector("[data-testid=progress]");
    const fill = document.getElementById("progress-fill");
    const text = document.getElementById("progress-text");
    if (bar) {
      bar.setAttribute("data-progress", String(pct));
      bar.setAttribute("aria-valuenow", String(pct));
    }
    if (fill) fill.style.width = `${pct}%`;
    if (text) text.textContent = `${pct} percent`;
    const mini = document.getElementById("mini-radar");
    if (mini) mini.innerHTML = CH.radarChart(mastery(), { size: 72, label: `Mini radar ${pct} percent` });
    const n = dueReviews().length;
    document.querySelectorAll("[data-testid=review-count]").forEach((el) => {
      el.setAttribute("data-value", String(n));
      el.textContent = `${n} due`;
    });
    const axes = document.querySelectorAll("[data-testid=mastery-axis]");
    if (axes.length) {
      const map = Object.fromEntries(mastery().map((a) => [a.skill, a]));
      axes.forEach((el) => {
        const a = map[el.getAttribute("data-skill")];
        if (!a) return;
        el.setAttribute("data-earned", String(a.earned));
        el.setAttribute("data-possible", String(a.possible));
        el.setAttribute("data-score", String(a.score));
      });
    }
    document.querySelectorAll("[data-testid=level-step]").forEach((el) => {
      const lvl = D.levels.find((l) => l.id === el.getAttribute("data-level"));
      if (!lvl) return;
      const total = lvl.chapterIds.length;
      const done = lvl.chapterIds.filter((id) => state.done[id]).length;
      el.setAttribute("data-complete", String(total ? Math.round(100 * done / total) : 0));
    });
    paintNav();
  }

  function paintNav() {
    const nav = document.getElementById("chapter-nav");
    if (!nav) return;
    const groups = [
      { title: "Beginner", ids: D.levels[0].chapterIds },
      { title: "Practitioner", ids: D.levels[1].chapterIds },
      { title: "Expert", ids: D.levels[2].chapterIds },
      { title: "Reference", ids: D.chapters.filter((c) => !c.level).map((c) => c.id) }
    ];
    nav.innerHTML = groups.map((g) => `<p class="nav-group">${g.title}</p>` + g.ids.map((id) => {
      const ch = chapterById(id);
      return `<a class="chapter-nav-link" data-testid="chapter-nav-link" href="#${id}" data-chapter="${id}">${state.done[id] ? "✓ " : ""}${esc(ch.title)}</a>`;
    }).join("")).join("");
  }

  function searchIndex() {
    const items = [];
    D.chapters.forEach((ch) => {
      items.push({ chapter: ch.id, text: [ch.title, ch.kid, ch.grownUp, ...(ch.recap || [])].join(" ") });
      ch.cards.forEach((c) => items.push({ chapter: ch.id, text: [c.title, c.kid, c.grownUp].join(" ") }));
    });
    D.glossary.forEach((g) => items.push({ chapter: g.chapter, text: g.term + " " + g.kid }));
    D.templates.forEach((t) => items.push({ chapter: "templates", text: t.title + " " + t.why + " " + t.body }));
    D.templates.forEach((t) => {
      if (t.id === "branch-protection") items.push({ chapter: "gates", text: t.title + " " + t.body });
    });
    return items;
  }

  function paintSearch() {
    const box = document.getElementById("search-results");
    const q = runtime.search.trim().toLowerCase();
    if (!q) { box.hidden = true; box.innerHTML = ""; return; }
    const seen = new Set();
    const hits = [];
    searchIndex().forEach((it) => {
      if (it.text.toLowerCase().includes(q) && !seen.has(it.chapter)) {
        seen.add(it.chapter);
        hits.push(it);
      }
    });
    box.hidden = hits.length === 0;
    box.innerHTML = hits.slice(0, 8).map((h) => {
      const ch = chapterById(h.chapter);
      return `<button type="button" class="search-result" data-testid="search-result" data-chapter="${h.chapter}">${esc(ch ? ch.title : h.chapter)}</button>`;
    }).join("");
  }

  function replaceWidget(rootSel, html) {
    const root = document.querySelector(rootSel);
    if (!root) return;
    const wrap = document.createElement("div");
    wrap.innerHTML = html.trim();
    const next = wrap.firstElementChild;
    if (next) root.replaceWith(next);
  }

  function copyText(text, btn) {
    const done = () => {
      btn.setAttribute("data-copied", "true");
      btn.textContent = "Copied";
      setTimeout(() => { btn.setAttribute("data-copied", "false"); btn.textContent = btn.hasAttribute("data-testid") && btn.getAttribute("data-testid") === "team-copy" ? "Copy spec" : "Copy"; }, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch {}
        ta.remove();
        done();
      });
    } else {
      done();
    }
  }

  function openReview() {
    const ids = dueReviews();
    const sheet = document.getElementById("review-sheet");
    const card = document.getElementById("review-card");
    if (!ids.length) {
      card.innerHTML = `<p>Nothing due.</p><button type="button" id="review-close">Close</button>`;
      sheet.hidden = false;
      return;
    }
    const q = D.quiz.find((x) => x.id === ids[0]);
    card.innerHTML = `
      <p class="kicker">Review</p>
      <p>${esc(q.scenario)}</p>
      <h3>${esc(q.q)}</h3>
      <div class="stack">${q.options.map((o) => `<button type="button" data-testid="quiz-option" data-correct="${o.correct ? "true" : "false"}" data-why="${esc(o.why)}" data-review="${q.id}">${esc(o.text)}</button>`).join("")}</div>
      <button type="button" id="review-close">Close</button>`;
    sheet.hidden = false;
  }

  function answerReview(qid, correct, why, card) {
    const rec = state.quiz[qid] || { first: "wrong", box: 1, due: Date.now() };
    if (correct) {
      rec.box = Math.min(3, (rec.box || 1) + 1);
      rec.due = Date.now() + (rec.box === 2 ? DAY : 3 * DAY);
    } else {
      rec.box = 1;
      rec.due = Date.now();
    }
    state.quiz[qid] = rec;
    saveState();
    const fb = document.createElement("p");
    fb.className = "quiz-feedback";
    fb.setAttribute("data-state", correct ? "correct" : "wrong");
    fb.textContent = why;
    card.appendChild(fb);
    paintHeader();
    setTimeout(() => {
      if (dueReviews().length) openReview();
      else document.getElementById("review-sheet").hidden = true;
    }, 400);
  }

  function jump(id) {
    location.hash = "#" + id;
    scrollToId(id);
    const nav = document.getElementById("chapter-nav");
    const tog = document.getElementById("chapter-nav-toggle");
    if (nav) nav.hidden = true;
    if (tog) tog.setAttribute("aria-expanded", "false");
    const box = document.getElementById("search-results");
    if (box) box.hidden = true;
  }

  function bindApp(app) {
    app.addEventListener("click", (e) => {
      const t = e.target.closest("[data-testid], button, a, input, label");
      if (!t) return;
      const tid = t.getAttribute("data-testid");

      if (tid === "card-toggle") {
        const open = t.getAttribute("aria-expanded") === "true";
        t.setAttribute("aria-expanded", String(!open));
        const body = document.getElementById(t.getAttribute("aria-controls"));
        if (body) body.hidden = open;
        return;
      }

      if (tid === "chapter-done") {
        const sec = t.closest("[data-chapter]");
        const id = sec && sec.getAttribute("data-chapter");
        if (!id) return;
        state.done[id] = true;
        saveState();
        t.setAttribute("aria-pressed", "true");
        t.textContent = "Got this";
        paintHeader();
        return;
      }

      if (tid === "quiz-option" && t.closest("[data-testid=quiz]")) {
        const quiz = t.closest("[data-testid=quiz]");
        const qid = quiz.getAttribute("data-qid");
        const ok = t.getAttribute("data-correct") === "true";
        if (!state.quiz[qid]) {
          state.quiz[qid] = {
            first: ok ? "correct" : "wrong",
            box: ok ? 3 : 1,
            due: ok ? Date.now() + 3 * DAY : Date.now()
          };
          saveState();
        }
        const fb = quiz.querySelector("[data-testid=quiz-feedback]");
        fb.hidden = false;
        fb.setAttribute("data-state", ok ? "correct" : "wrong");
        fb.innerHTML = quiz.querySelectorAll("[data-testid=quiz-option]").length
          ? [...quiz.querySelectorAll("[data-testid=quiz-option]")].map((b) => `<div>${esc(b.textContent)}: ${esc(b.getAttribute("data-why"))}</div>`).join("")
          : esc(t.getAttribute("data-why"));
        paintHeader();
        const radar = document.querySelector("[data-testid=mastery-radar]");
        if (radar) replaceWidget("[data-testid=mastery-radar]", CH.radarChart(mastery(), { testid: "mastery-radar", size: 300, label: `Mastery radar, mean ${meanScore()} percent` }));
        return;
      }

      if (tid === "pipeline-step") {
        runtime.pipe = D.pipeline.findIndex((s) => s.id === t.getAttribute("data-id"));
        replaceWidget("[data-testid=pipeline]", renderPipeline());
        return;
      }
      if (tid === "board-option") {
        runtime.boardPick = D.boards.findIndex((b) => b.name === t.getAttribute("data-name"));
        replaceWidget("[data-testid=board-picker]", renderBoardPicker());
        return;
      }
      if (tid === "bot-node") {
        runtime.botNode = D.team.findIndex((n) => n.id === t.getAttribute("data-id"));
        replaceWidget("[data-testid=bot-team]", renderTeamOrg());
        return;
      }
      if (t.hasAttribute("data-anatomy")) {
        runtime.anatomy = t.getAttribute("data-anatomy");
        const host = t.closest(".widget");
        if (host) host.outerHTML = renderAnatomy();
        return;
      }
      if (t.hasAttribute("data-brief")) {
        runtime.briefOpen = t.getAttribute("data-brief");
        const host = t.closest(".widget");
        if (host) host.outerHTML = renderBriefCompare();
        return;
      }
      if (tid === "pr-scenario") {
        runtime.pr = { scenario: t.getAttribute("data-scenario"), index: 0, fixed: false, failOn: false, feedback: null };
        replaceWidget("[data-testid=pr-lab]", renderPrLab());
        return;
      }
      if (tid === "pr-sim-next") {
        const st = currentPr().states[runtime.pr.index];
        const blocked = Boolean(st.fixes) && !runtime.pr.fixed;
        if (blocked) return;
        runtime.pr.index = Math.min(currentPr().states.length - 1, runtime.pr.index + 1);
        runtime.pr.feedback = null;
        replaceWidget("[data-testid=pr-lab]", renderPrLab());
        return;
      }
      if (tid === "pr-sim-back") {
        runtime.pr.index = Math.max(0, runtime.pr.index - 1);
        runtime.pr.fixed = false;
        runtime.pr.feedback = null;
        replaceWidget("[data-testid=pr-lab]", renderPrLab());
        return;
      }
      if (tid === "pr-sim-reset") {
        runtime.pr.index = 0;
        runtime.pr.fixed = false;
        runtime.pr.feedback = null;
        replaceWidget("[data-testid=pr-lab]", renderPrLab());
        return;
      }
      if (tid === "pr-fix-option") {
        const st = currentPr().states[runtime.pr.index];
        const ok = t.getAttribute("data-correct") === "true";
        const picked = (st.fixes || []).find((f) => f.text === t.textContent);
        runtime.pr.feedback = { state: ok ? "correct" : "wrong", why: (picked && picked.why) || t.textContent };
        if (ok) runtime.pr.fixed = true;
        replaceWidget("[data-testid=pr-lab]", renderPrLab());
        return;
      }
      if (tid === "sim-start") {
        runtime.sim = { started: true, step: 0, chosen: null, meters: { ...D.sim.base }, path: [], outcome: null };
        replaceWidget("[data-testid=sim]", renderSim());
        return;
      }
      if (tid === "sim-option") {
        const step = D.sim.steps[runtime.sim.step];
        const opt = step.options.find((o) => o.id === t.getAttribute("data-option-id"));
        runtime.sim.chosen = opt;
        runtime.sim.meters.days += opt.days;
        runtime.sim.meters.cost += opt.cost;
        runtime.sim.meters.risk += opt.risk;
        runtime.sim.meters.signal += opt.signal;
        runtime.sim.path.push({ step: step.id, opt: opt.id });
        replaceWidget("[data-testid=sim]", renderSim());
        return;
      }
      if (tid === "sim-continue") {
        if (runtime.sim.step >= D.sim.steps.length - 1) {
          runtime.sim.outcome = simOutcome();
        } else {
          runtime.sim.step += 1;
          runtime.sim.chosen = null;
        }
        replaceWidget("[data-testid=sim]", renderSim());
        return;
      }
      if (tid === "sim-restart") {
        runtime.sim = { started: false, step: 0, chosen: null, meters: { ...D.sim.base }, path: [], outcome: null };
        replaceWidget("[data-testid=sim]", renderSim());
        return;
      }
      if (tid === "dtree-option") {
        const box = t.closest("[data-testid=dtree]");
        const id = box.getAttribute("data-tree");
        const tree = D.trees.find((x) => x.id === id);
        const st = runtime.trees[id];
        const node = tree.nodes[st.node];
        const opt = node.options.find((o) => o.id === t.getAttribute("data-option-id"));
        st.path.push({ id: opt.id, label: opt.label });
        if (tree.leaves[opt.next]) st.leaf = opt.next;
        else st.node = opt.next;
        replaceWidget(`[data-testid=dtree][data-tree="${id}"]`, renderTree(id));
        return;
      }
      if (tid === "dtree-reset") {
        const box = t.closest("[data-testid=dtree]");
        const id = box.getAttribute("data-tree");
        const tree = D.trees.find((x) => x.id === id);
        runtime.trees[id] = { node: tree.root, path: [], leaf: null };
        replaceWidget(`[data-testid=dtree][data-tree="${id}"]`, renderTree(id));
        return;
      }
      if (tid === "case-next" || tid === "case-back") {
        const box = t.closest("[data-testid=case-study]");
        const id = box.getAttribute("data-case");
        const c = D.cases.find((x) => x.id === id);
        const cur = runtime.cases[id] || 0;
        runtime.cases[id] = tid === "case-next" ? Math.min(c.steps.length - 1, cur + 1) : Math.max(0, cur - 1);
        replaceWidget(`[data-testid=case-study][data-case="${id}"]`, renderCase(id));
        return;
      }
      if (tid === "template-copy" || tid === "team-copy") {
        const host = t.closest("[data-testid=template], [data-testid=team-builder]");
        const pre = host && (host.querySelector("pre") || host.querySelector("[data-testid=team-spec]"));
        copyText(pre ? (pre.value || pre.textContent) : "", t);
        return;
      }
      if (tid === "x-filter") {
        const topic = t.getAttribute("data-topic");
        runtime.xTopic = runtime.xTopic === topic ? "" : topic;
        replaceWidget("[data-testid=from-x]", renderFromX());
        return;
      }
      if (tid === "budget-model") {
        runtime.budget.model = t.getAttribute("data-model");
        replaceWidget("[data-testid=budget-calc]", renderBudgetCalc());
        return;
      }
      if (t.hasAttribute("data-cost-preset")) {
        const p = D.modelPrices[t.getAttribute("data-cost-preset")];
        runtime.cost.priceIn = p.in;
        runtime.cost.priceCache = p.cache;
        runtime.cost.priceOut = p.out;
        replaceWidget("[data-testid=cost-calc]", renderCostCalc());
        return;
      }
      if (tid === "exam-start") {
        runtime.exam = { started: true, index: 0, picked: null, answers: [], finished: false };
        replaceWidget("[data-testid=exam]", renderExam());
        return;
      }
      if (tid === "exam-option") {
        runtime.exam.picked = t.getAttribute("data-correct") === "true";
        runtime.exam.answers[runtime.exam.index] = runtime.exam.picked;
        replaceWidget("[data-testid=exam]", renderExam());
        return;
      }
      if (tid === "exam-next") {
        if (runtime.exam.index >= D.exam.length - 1) {
          runtime.exam.finished = true;
          const score = runtime.exam.answers.filter(Boolean).length;
          state.exam.last = score;
          state.exam.best = Math.max(state.exam.best || 0, score);
          saveState();
        } else {
          runtime.exam.index += 1;
          runtime.exam.picked = null;
        }
        replaceWidget("[data-testid=exam]", renderExam());
        return;
      }
      if (tid === "review-start") {
        openReview();
        return;
      }
      if (tid === "level-step") {
        const lvl = D.levels.find((l) => l.id === t.getAttribute("data-level"));
        if (lvl) jump(lvl.chapterIds[0]);
      }
    });

    app.addEventListener("change", (e) => {
      const t = e.target;
      const tid = t.getAttribute("data-testid");
      if (tid === "checklist-item") {
        const map = loadChecks();
        if (t.checked) map[t.getAttribute("data-key")] = true;
        else delete map[t.getAttribute("data-key")];
        saveChecks(map);
        const n = D.checklist.filter((i) => map[i.key]).length;
        const prog = document.querySelector("[data-testid=checklist-progress]");
        if (prog) {
          prog.setAttribute("data-value", String(n));
          prog.textContent = String(n);
        }
        return;
      }
      if (tid === "team-role") {
        const role = t.getAttribute("data-role");
        const set = new Set(state.team.roles);
        if (t.checked) set.add(role); else set.delete(role);
        state.team.roles = [...set];
        saveState();
        replaceWidget("[data-testid=team-builder]", renderTeamBuilder());
        return;
      }
      if (tid === "gate-toggle") {
        runtime.gatesOn[t.getAttribute("data-gate")] = t.checked;
        replaceWidget("[data-testid=gate-chart]", renderGateChart());
        return;
      }
      if (tid === "bugbot-fail-toggle") {
        runtime.pr.failOn = t.checked;
        replaceWidget("[data-testid=pr-lab]", renderPrLab());
        return;
      }
      if (tid === "cost-interval" || tid === "cost-tokens-in" || tid === "cost-tokens-out" || tid === "cost-cache-share" || tid === "cost-price-in" || tid === "cost-price-cache" || tid === "cost-price-out") {
        const costMap = {
          "cost-interval": "interval",
          "cost-tokens-in": "tokensIn",
          "cost-tokens-out": "tokensOut",
          "cost-cache-share": "cacheShare",
          "cost-price-in": "priceIn",
          "cost-price-cache": "priceCache",
          "cost-price-out": "priceOut"
        };
        runtime.cost[costMap[tid]] = tid === "cost-interval" ? Number(t.value) : t.value;
        replaceWidget("[data-testid=cost-calc]", renderCostCalc());
      }
    });

    app.addEventListener("input", (e) => {
      const t = e.target;
      const tid = t.getAttribute("data-testid");
      if (tid === "team-area") {
        state.team.areas = t.value;
        saveState();
        const spec = document.querySelector("[data-testid=team-spec]");
        if (spec) spec.value = teamSpecText();
        const warnOn = directCount() > 5;
        const box = document.querySelector("[data-testid=team-builder]");
        if (box) {
          let w = box.querySelector("[data-testid=team-warning]");
          if (warnOn && !w) {
            w = document.createElement("p");
            w.setAttribute("data-testid", "team-warning");
            w.textContent = "You have more than 5 direct reports. Peter Yang: most people cannot drive more than 4-5 threads.";
            spec.before(w);
          }
          if (!warnOn && w) w.remove();
        }
        return;
      }
      if (tid === "board-team-size") {
        runtime.boardSize = Math.max(1, Math.min(20, Number(t.value) || 1));
        const host = t.closest(".widget");
        if (host) host.outerHTML = renderBoardChart();
        return;
      }
      if (tid === "glossary-search") {
        runtime.gloss = t.value;
        replaceWidget("[data-testid=glossary]", renderGlossary());
        const input = document.querySelector("[data-testid=glossary-search]");
        if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
        return;
      }
      if (tid === "certificate-name") {
        state.certName = t.value;
        saveState();
        return;
      }
      const costMap = {
        "cost-interval": "interval",
        "cost-tokens-in": "tokensIn",
        "cost-tokens-out": "tokensOut",
        "cost-cache-share": "cacheShare",
        "cost-price-in": "priceIn",
        "cost-price-cache": "priceCache",
        "cost-price-out": "priceOut"
      };
      if (costMap[tid]) {
        runtime.cost[costMap[tid]] = tid === "cost-interval" ? Number(t.value) : t.value;
        const keep = tid;
        const val = t.value;
        replaceWidget("[data-testid=cost-calc]", renderCostCalc());
        const again = document.querySelector(`[data-testid=${keep}]`);
        if (again && again.tagName !== "SELECT") { again.focus(); }
        return;
      }
      const budMap = {
        "budget-usd": "usd",
        "budget-tokens-in": "tokensIn",
        "budget-cache-share": "cacheShare",
        "budget-tokens-out": "tokensOut"
      };
      if (budMap[tid]) {
        runtime.budget[budMap[tid]] = t.value;
        replaceWidget("[data-testid=budget-calc]", renderBudgetCalc());
      }
    });
  }

  function bindChrome() {
    const start = document.getElementById("start-btn");
    if (start) start.addEventListener("click", () => jump("start-here"));
    const mini = document.getElementById("mini-radar-btn");
    if (mini) mini.addEventListener("click", () => jump("start-here"));
    document.querySelectorAll("[data-testid=review-start]").forEach((btn) => btn.addEventListener("click", openReview));
    const tog = document.getElementById("chapter-nav-toggle");
    const nav = document.getElementById("chapter-nav");
    tog.addEventListener("click", () => {
      const open = nav.hidden;
      nav.hidden = !open;
      tog.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => {
      const a = e.target.closest("[data-testid=chapter-nav-link]");
      if (!a) return;
      e.preventDefault();
      jump(a.getAttribute("data-chapter"));
    });
    const search = document.getElementById("search-input");
    search.addEventListener("input", () => {
      runtime.search = search.value;
      paintSearch();
    });
    document.getElementById("search-results").addEventListener("click", (e) => {
      const b = e.target.closest("[data-testid=search-result]");
      if (!b) return;
      jump(b.getAttribute("data-chapter"));
      search.value = "";
      runtime.search = "";
      paintSearch();
    });
    document.getElementById("review-sheet").addEventListener("click", (e) => {
      if (e.target.id === "review-close" || e.target.id === "review-sheet") {
        document.getElementById("review-sheet").hidden = true;
        return;
      }
      const opt = e.target.closest("[data-review]");
      if (!opt) return;
      answerReview(opt.getAttribute("data-review"), opt.getAttribute("data-correct") === "true", opt.getAttribute("data-why"), document.getElementById("review-card"));
    });
  }

  function init() {
    const app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = D.chapters.map(renderChapter).join("") +
      `<p class="footnote">Facts, quotes, numbers, handles, and post URLs come from docs/research.md (8 Oct 2026) and docs/research-v2.md (9 Oct 2026). Teaching model numbers are labelled. Example calculator numbers are labelled.</p>`;
    bindApp(app);
    bindChrome();
    paintHeader();
    if (location.hash) {
      const id = location.hash.slice(1);
      if (document.getElementById(id)) scrollToId(id);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
