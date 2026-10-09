# Research v2: depth for "Idea to production"

Compiled 9 Oct 2026 for Viraj. This file adds to `research.md` (v1, compiled 8 Oct 2026). Both files are the only allowed fact sources for the page.

Rules for whoever uses this file:
- X posts below were read with the `x` connector on 9 Oct 2026. Quotes are verbatim. Docs were read with WebFetch on 9 Oct 2026.
- Labels: **VERIFIED** means a doc or post says it. **INFERRED** means we worked it out from verified facts. **AUTHORED** means a template or example we wrote for teaching, built on the cited facts. **ASSUMPTION** means a number we picked so a calculator has a default; the page must show it as editable and say it is an example.
- Do not add posts, numbers, handles or URLs that are not here or in `research.md`.

---

## A. New practitioner sources from X (all VERIFIED)

### A1. Lingxi Li, "Grok Bot for Engineering" (article), 31 Aug 2026
https://x.com/lingxi/status/2094493172516966781 (1.04M views, 8,040 bookmarks when read)
- "Think of Grok Bot as a highly capable engineering intern, with its own computers, that can manage coding agents and learn from how you work."
- Team results he lists: "@poteto shipped 2,000+ PRs in the past month." "@baltaaazr and @shaoruu built the foundation of Grok Bot in four weeks, using Grok Bot." "I built Grok Bot iOS v0 in three weeks".
- Five engineer bots, one area each: mobile shared layer and iOS; Desktop client and CI/CD; infrastructure and unclear-owner user issues; Android; the harness. "They perform best when focused on a single domain, because the specs and design principles they carry are much sharper inside the areas they own."
- "Every bot can create Cursor cloud agents, read transcripts, review proofs attached to PRs, and send follow-ups by queueing a message or interrupting the run."
- On a task: "they kick off a cloud agent with my skills invoked, along with a thorough prompt detailing what needs to be done and what proof is expected." Named personal skills: /lingxi-design, /react-native-best-practices, /lingxi-review, /lingxi-product.
- Proof bar example: "you must verify the screenshot includes the changes I asked for, with proof showing before vs. after".
- "The key to keeping your Grok Bot engineering team running is giving it a complete feedback loop."
- Flakiness: "one-off flakiness rarely reaches me at all, the exception being when Grok Bot doesn't have the security permissions to fix it itself."
- Shared Notion database as status board. "Every 30 minutes, they review the database and check each PR for: Bugbot comments or security findings, verifying whether each one is legitimate. Failing CI runs. Merge conflicts." Off items go back to "Working". Good items go to "Ready for Review" with an automatic code review run.
- Merge rule: "If the review is highly confident and the blast radius is low, the PR is merged automatically. Otherwise, I'll review the code and the proof when I'm back".
- Scale: "Before Grok Bot, I could manually manage 15 cloud agents at a time. Now my fleet manages more than 200 simultaneously".
- Ops bot "Jenny", "the only bot on the team who doesn't write code". "Every morning at 5 a.m., Jenny meets 1:1 with every bot on the team to review our playbook, surface blockers". Mistakes go to Jenny for "root-cause analysis and a postmortem", she "updates the playbook and announces the changes". She onboards new bots.
- Nightly audits "Every night at 3 a.m." for code cleanup, dead logic, load time, bundle size. More ideas: security audits, CI/CD build-time audits, internationalization audits, parity audits, catch-up audits of PRs merged in the past 24 hours.
- P0 process: "they start a temporary routine that checks the transcript every five minutes ... Please note that this can burn tokens much faster than you think, so only use it for true urgency."
- Tips: "Treat Grok Bot like a talented intern", "If you notice you're doing something more than once a day and it follows a clear pattern, discuss it with your bots", "Daily meetings for bots are extremely effective", "Be more hands-off ... Give them enough freedom to ship when it's safe, and be more cautious in areas with higher risk."
- Reply, 1 Sep 2026: "my bots never write code on their machines. cloud agents do all the lifting. bots drive them." https://x.com/lingxi/status/2094694492083503564

### A2. Summaries of Lingxi's setup (useful framing)
- beamnxw, 5 Oct 2026, with a paste-ready brief: "Own [AREA] of [REPO]. Reproduce [BUG], then launch a cloud agent using the relevant repo skills. Require before/after evidence for [USER FLOW] and a PR. Inspect the result, follow up on failures, and keep the task board current. Send me the PR and checks for review; leave merging to me" https://x.com/beamnxw/status/2107197545868931542
- Vikram Dias, 1 Sep 2026: "If you copy this, copy the merge bar, not the headcount. Define blast radius. Define who may merge. Keep spend, send, and prod write behind you." https://x.com/BigVikDada/status/2094654032216477952
- Balta (Grok Bot team), 11 Aug 2026: "i found that 3-4 agents each specializing in specific areas plus one manager agent to delegate works really well." https://x.com/baltaaazr/status/2087251248315875726

### A3. Test-and-fix loop, Alton Peques, "Muse x Cursor for Product Building", 5 Oct 2026
https://x.com/altonpeques/status/2106909033215217724
- "Muse tests my app in the browser, and when it hits a bug, it launches a Cursor agent that writes the fix and opens the PR. I review, merge, deploy."
- Real example: "two creator approvals were failing. Paid approvals threw a false \"add a payment method\" error even though Stripe was connected. Gifted approvals just failed silently." The testing agent "wrote up the full bug report with repro steps, API responses, and auth state, and launched a Cursor agent on it. The agent found the bug, opened the PR, I merged, the fix deployed, and both creators got approved minutes later."
- Setup: "a Cursor API key, a Cloud agent environment linked to the repo, and a prompt template ... What's broken, how to reproduce it, what the expected behavior is, what not to touch, and instructions to open a PR without merging. Merging stays my call. Deploy is automatic from main."
- (Muse is another agent product. Teach the loop shape; a Grok Bot can play the tester role.)

### A4. poteto's daily loop, full text, 6 Oct 2026
https://x.com/poteto/status/2107510472601985336
"1. watch this slack channel for feedback about our app 2. create a ticket for this in Linear 3. create a Cursor cloud agent to triage and reproduce the issue on its own computer, using pstack 4. if the issue clearly reproduces, put up a fix and fuzz the pull request with a small swarm of agents 5. if the fuzz has no issues, ping me on Slack, and rebase and auto-merge the PR after 1 hour unless i request changes". Also: routines run "on a schedule (\"check my email every morning\") or as a reaction to something".

### A5. Cost and scale anchors
- jorgediazapps, 25 Sep 2026: "Flow: send a task (even from my iPhone) → agent opens its own branch → Bugbot reviews → merge → deploy. 148 PRs in 30 days. Almost no laptop time. List price ~$300/mo (I'm on a ~$99 promo)." https://x.com/jorgediazapps/status/2103499532478918816 . INFERRED: about $2.03 per PR at list price ($300 / 148).
- GrokBotRadar usage audit, 3 Oct 2026, full prompt: "Audit your own usage for me. List every routine you own. For each one, tell me: 1. How often it runs 2. How many runs that is per week 3. Whether it posts a message even when nothing changed 4. Whether this is also the Bot I chat with most. Then tell me which one is costing me the most and how to slow it down without breaking the job." Fix: "hourly. 168 runs. Same signal." https://x.com/GrokBotRadar/status/2106501043160854740 . INFERRED: 672 runs a week is one run every 15 minutes (7 x 24 x 4).
- Gabin, 24 Sep 2026, a churn complaint: "usage limits are too tight, even on the $200 sub" and "everything get sluggish after 15 bots" https://x.com/g48in/status/2103058062160384112
- William (iChuloo), 30 Aug 2026: "Less than 24 hours using Grok @bot and spending about $400 in premium sub and on-demand" with 5 agents. https://x.com/iChuloo/status/2094075849725120830
- Jacob Rothfield, 29 Aug 2026: on Ultra, cloud agent tasks failed with "You've used all included Cloud Agent usage. Enable on-demand usage to continue using Cloud Agents." https://x.com/JacobRothfield/status/2093605382669435124
- Simo, 1 Sep 2026, the right question: "when one loops on a flaky test, does it stop or just keep burning budget?" https://x.com/SlimAssiliX/status/2094857952343540023
- MintScope, 3 Oct 2026: "named finish line for the fix + hard revoke mid-run, or a flaky PR becomes unbounded spend." https://x.com/Mintscope1/status/2106411033682481522
- Nandan Priyadarshi, 1 Sep 2026: "I let a cloud agent pick its own model once. It grabbed the thinking one for a CSS tweak and burned the session. agents.md now says pass the model in the prompt." https://x.com/nandanpri/status/2094677450907087311
- Uber via hochulambo, 22 Aug 2026: "More than 70% of Uber's pull requests are now opened by agents" and "Their cloud agent stops at a draft PR and proves the feature against the Figma spec in a simulator before it is allowed to touch CI" and "What is left is CI capacity, experiment slots, and deciding what should be built at all." https://x.com/hochulambo/status/2091189107175109006

### A6. Failure modes from practitioners
- Sergey Karayev, 6 Aug 2026: "Coding agents should not grade their own homework. Our coding agent said it was done, with tests passing. Then our QA agent opened the app and found the feature was broken." https://x.com/sergeykarayev/status/2085425779903807862
- Yanis, 13 Aug 2026: "The failures that scare me are the green ones ... never accept a status, ask for the evidence. Not \"tests pass\" but the command it ran and the output" https://x.com/yanis__42/status/2087875278835945884
- Hash, 28 Aug 2026: "agent edits a file, tests pass, but it silently dropped an error branch ... deletions are where agents lie to you." https://x.com/0xhashlol/status/2093358892738650560
- Agentic Cybersecurity, 15 Aug 2026: "We ran three agents on the same repo once. One force-pushed over another's branch, a third opened a PR that deleted the test suite. Now we pin each agent to its own worktree and never let them share remotes." https://x.com/HermesShield/status/2088624382885203998
- Necø, 1 Jul 2026: "the agent makes the tests pass, but passing tests aren't the same as correct behavior." https://x.com/Necmttn/status/2072276034641445131
- whemo, 22 Sep 2026: "most failures happen between jobs: wrong agent gets the task, weak research moves forward, something gets marked done too early, or a bot takes an action it shouldn't." https://x.com/whemohere/status/2102446296216875495
- Faizan Khalid, 7 Sep 2026: cloud agents seem tuned to "get this thing built and roll out a PR asap", so a research-only ask turned into building. https://x.com/faizankmahs/status/2096963534919758228
- Zain Akram, 6 Oct 2026: "if your code only runs on your machine, the cloud agent is just exposing that ... the agent failing is really a reproducibility audit of your project." https://x.com/zainakrams/status/2107592808228159593
- Michal Barus, 2 Oct 2026: "One loose instruction and an agent pushes or merges while I'm on a client call. What keeps it in check is Auto-review rules." https://x.com/webjuice_ie/status/2105968656261795949
- Mark Holloway, 30 Sep 2026: "Launch-day cloud agents look magical until auth, flaky tools or a half-done PR stalls you." https://x.com/0xKetone/status/2105288025970180602
- akshat, 2 Oct 2026: "so @bot just spawned a cursor cloud agent on its own because it saw a PR was failing it's CI checks." https://x.com/akshat_OwO/status/2105953465919013192
- Cursor changelog summary (SupersocksIntel, 20 Aug 2026): "Agents auto-subscribe to PRs they create and keep going: fix CI, answer bot" comments. https://x.com/SupersocksIntel/status/2090413094946136471
- Rollouts summary (Sophie Chen, 24 Sep 2026): "Rollouts attaches to a PR, writes a monitoring plan from the diff, then watches the deploy per env. Staging healthy ≠ prod healthy." https://x.com/hhhh39333043536/status/2102928161642352968

---

## B. New doc facts (all VERIFIED)

### B1. Grok Bot (Cursor docs and SpaceXAI docs)
Sources: https://cursor.com/docs/grok-bot/work , https://docs.x.ai/grok-bot/skills-routines-and-automations , https://docs.x.ai/grok-bot/approvals-security-and-privacy , https://cursor.com/docs/grok-bot/security.md
- Create a separate Bot "when the work has a distinct goal, set of tools, working style, approval boundary, or recurring schedule." "a General Helper does neither."
- Example job description from the docs: "Own the weekly account-health review. Pull product usage and support signals, flag evidence of churn or expansion, and produce a linked watch list for the customer-success team. Never contact a customer or change an account without approval."
- Description vs message: "Use the conversation for task-specific instructions, and the description for rules that should remain true".
- Memory: "Memory is not a substitute for an authoritative source ... put safety boundaries in the description rather than in memory."
- Group chats: "select two to six Bots". Handoffs: "Ask for a single owner at each stage; parallel handoffs create duplicate work and noisy updates."
- Reviewable results: "direct source links, screenshots with the relevant state visible, timestamps, a concise action log, and an explicit list of anything the Bot couldn't verify."
- Shared computer: "Every Bot on your account uses the same computer ... the screens are work surfaces, not security boundaries. Don't place a credential on the computer if another of your Bots shouldn't be able to use it."
- Plugins: "OAuth tokens are held on Cursor's connector backend, and the Bot invokes tools without receiving them."
- A useful skill states: when to use it, required inputs and access, the sequence of work, how to validate the result, what to return, what requires approval.
- Routine confirm list: "the owning Bot, the schedule and time zone, the input source, the expected result, the approval boundary, and what happens when a source is missing."
- Event triggers: "Avoid broad listeners like \"every new message\", which create noise, consume usage, and act on irrelevant input."
- "A test run performs real work."
- Limits: "A Bot can own up to 50 routines, and the app keeps the 20 most recent run records for each routine. Routine schedules must be at least five minutes apart. Deleting a routine is immediate and has no undo."
- Design routines for trust: "Automate preparation before execution", "Include a no-data and stale-data policy", "Make retries idempotent where possible", "Re-test after a website, connector, or source format changes."
- Auto Review: "Ask first rules always stop matching actions for you. Allow automatically rules let matching actions proceed only when the automated review does not identify another reason to stop. If both kinds of rule match, Ask first wins." Example rules: "Ask first before sending any external email." "Ask first before changing a production dashboard." "Allow automatically when running `git status` in `/workspace/reports`." Avoid "allow everything in the browser". "Auto Review is model-based and should complement, not replace, least privilege".
- Auto Review covers "shell commands, plugin calls, computer use, automation writes (changes to routines and event triggers), and delegation such as Cloud Agent and subagent launches." It "doesn't review every side effect. Memory writes ... are examples."
- Approvals from unattended work (routine, trigger, another Bot) "expire after about 10 minutes".

### B2. Cursor cloud agents and environment
Sources: https://cursor.com/docs/cloud-agent , https://cursor.com/docs/cloud-agent/setup
- "Not setting up a development environment for your cloud agents is like not giving your engineers a computer."
- "Cursor can set up your dev environment in the cloud in less than 10 minutes."
- Resolution order: `.cursor/environment.json` in the repo, then personal saved environment, then team saved environment.
- Install script "must be idempotent". Long-running processes go in `start` or `terminals`, not `install`.
- Recommend an AGENTS.md section titled "Cursor Cloud specific instructions".
- Secrets: Secrets tab, exposed as env vars; environment-scoped secrets; "Secrets are injected when an agent starts. Agents already running won't pick up new secrets".
- 2FA: add the TOTP secret; agent runs `oathtool --totp -b "$TOTP_SECRET"`.
- Hooks from `.cursor/hooks.json` run in cloud agents.
- Start from scratch creates a draft Origin repo; "Publish" links to Vercel and deploys the default branch.
- Billing: "charged at API pricing for the selected model ... a larger context window can increase token usage and costs."

### B3. Cursor prices (https://cursor.com/docs/models , https://cursor.com/pricing)
- Plans: Hobby free; Pro $20/mo; Pro Plus $60/mo; Ultra $200/mo; Teams Standard $40/user/mo, Premium $120/user/mo.
- Cursor Models pool per million tokens: Grok 4.7 input $2, cache read $0.5, output $6 (Fast 2x). Composer 2.5 input $0.5, cache read $0.2, output $2.5.
- Example third-party: Claude Opus 5.5 input $4, cache read $0.2, output $20. GPT-5.6 Luna input $0.2, output $1.2.
- Usage guide: "Daily Agent users: Typically $60–$100/mo total usage" (the source uses an en dash; on the page write "$60 to $100 a month"). "Power users (multiple agents/automation): Often $200+/mo total usage".
- Teams: Cursor Token Rate $0.25 per million tokens on third-party models.

### B4. Bugbot (https://cursor.com/docs/bugbot)
- Status conclusions: `success` (no issues and none unresolved), `neutral` ("This is the default conclusion when Bugbot reports findings"), `failure` (issues found and "configured to fail on unresolved issues").
- Repo config `.cursor/config/bugbot.yaml`, read from the base branch; "a PR cannot change how Bugbot reviews itself. Use code review and `CODEOWNERS` to control who can change this file."
- Effort levels: low, default, high, smart (usage-based plans only).
- PR summary into the description by default. `@cursor remember [fact]` teaches a rule. `bugbot run verbose=true` lists rules used.
- Autofix modes: Off, Create New Branch (recommended), Commit to Existing Branch (max 3 attempts per PR). Autofix bills Cloud Agent credits and needs on-demand usage.
- Run Bugbot before pushing with `/review-bugbot`.
- Example BUGBOT.md rule from the docs: "If the PR modifies files in {server/**, api/**, backend/**} and there are no changes in {**/*.test.*, **/__tests__/**, tests/**}, then: Add a blocking Bug titled \"Missing tests for backend changes\"".

### B5. GitHub rulesets and branch protection (https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)
- Require a pull request before merging; required approvals; dismiss stale approvals when new commits are pushed; require review from code owners; require approval of the most recent reviewable push (someone other than the last pusher); require conversation resolution; allowed merge methods.
- Require status checks to pass. Strict mode "Require branches to be up to date before merging" is the default.
- Require linear history (squash or rebase only). Block force pushes (on by default). Restrict deletions (on by default). Require deployments to succeed (for example staging). Require signed commits. Require secret scanning alerts resolved (preview). Restrict file paths.
- Required checks can be pinned to a source app so only that app can set the status.

### B6. GitHub auto-merge, push protection, Actions, Pages
- Auto-merge "merges a pull request automatically after all required reviews and status checks pass" and "is shown only on pull requests that cannot be merged immediately". https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
- Push protection "blocks pushes that contain secrets before they reach your repository". Push protection for users is on by default for public repos. https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection
- Actions: free for public repos on standard runners. GitHub Free private repos: 2,000 minutes a month. Linux 2-core $0.006 per minute after that. A failed 5-minute run plus a 10-minute re-run uses 15 minutes. https://docs.github.com/en/billing/concepts/product-billing/github-actions
- Pages: site up to 1 GB, soft bandwidth 100 GB a month, deploy timeout 10 minutes, soft limit 10 builds an hour. "not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site ... (SaaS)" and "shouldn't be used for sensitive transactions like sending passwords or credit card numbers." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

### B7. Hosting, data, monitoring free tiers
- Vercel (https://vercel.com/pricing): Hobby $0, "for personal, non-commercial use"; Pro $20/mo with a $20 included credit. Hobby includes 100 GB fast data transfer, 1M function invocations, unlimited deployments, instant rollback, automatic CI/CD. Spend management: default $200 on-demand budget, optional hard limit that pauses projects.
- Supabase (https://supabase.com/pricing): Free $0 with 500 MB database, 50,000 monthly active users, 1 GB file storage, 2 active projects, "paused after 1 week of inactivity". Pro from $25/mo with 8 GB disk, 100,000 MAU, daily backups for 7 days, spend cap on by default. Dev and prod: "create two projects ... the Free Plan includes two free projects."
- Sentry (https://sentry.io/pricing/): Developer plan free for one user with error monitoring and tracing and email alerts. Team $26/mo.

### B8. DORA delivery metrics (https://dora.dev/guides/dora-metrics-four-keys/, updated 5 Jan 2026)
- Five metrics. Throughput: change lead time (commit to production), deployment frequency, failed deployment recovery time. Instability: change fail rate, deployment rework rate.
- "speed and stability are not tradeoffs". Pitfall: "Setting metrics as a goal" (Goodhart's law). Advice: "reducing the batch size of changes".

---

## C. Cost math (worked, for the calculators)

### C1. Routine cost per week (INFERRED formula, ASSUMPTION defaults)
- runs per week = 10080 / interval in minutes (10080 = 7 x 24 x 60).
- cost per run = (input tokens x (1 - cache share) x input price + input tokens x cache share x cache price + output tokens x output price) / 1,000,000.
- Defaults (ASSUMPTION, editable, labelled "example"): 50,000 input tokens per run (GrokBotRadar: "Every run rereads the Bot's whole chat"), 2,000 output tokens, cache share 0 percent, Grok 4.7 prices from Cursor docs ($2 in, $0.5 cache read, $6 out). These are Cursor model list prices used to teach the shape of the math. Grok Bot's own usage metering is not published per token, so the page must say "illustrative".
- Cost per run with defaults = 50,000 x 2 / 1e6 + 2,000 x 6 / 1e6 = 0.100 + 0.012 = $0.112.
- Weekly cost table with defaults:

| Interval | Runs per week | Weekly cost |
|---|---|---|
| 5 min | 2016 | $225.79 |
| 15 min | 672 | $75.26 |
| 30 min | 336 | $37.63 |
| 60 min | 168 | $18.82 |
| 240 min | 42 | $4.70 |
| 1440 min (daily) | 7 | $0.78 |

- Lesson: going from every 15 minutes to hourly cuts runs by 75 percent (672 to 168), which is GrokBotRadar's fix. A routine that posts "nothing changed" costs the same as one that finds something.

### C2. Cost per cloud agent PR (ASSUMPTION defaults)
- cost per PR = (input tokens x (1 - cache share) x input price + input tokens x cache share x cache price + output tokens x output price) / 1e6.
- Defaults: 2,000,000 input tokens, 80 percent cache reads, 60,000 output tokens, Grok 4.7 prices. = 400,000 x 2 / 1e6 + 1,600,000 x 0.5 / 1e6 + 60,000 x 6 / 1e6 = 0.80 + 0.80 + 0.36 = $1.96.
- PRs per month for a budget = floor(budget / cost per PR). $100 gives 51. $300 gives 153.
- Reality check (VERIFIED anchor): jorgediazapps, 148 PRs in 30 days at about $300 a month list price, about $2.03 per PR all-in.
- Model choice changes the bill a lot: the same PR on Claude Opus 5.5 ($4 in, $0.2 cache, $20 out) = 400,000 x 4 / 1e6 + 1,600,000 x 0.2 / 1e6 + 60,000 x 20 / 1e6 = 1.60 + 0.32 + 1.20 = $3.12. On Composer 2.5 ($0.5, $0.2, $2.5) = 0.20 + 0.32 + 0.15 = $0.67.
- Loops are the danger: a cloud agent that retries a flaky test ten times costs roughly ten PRs' worth (INFERRED). Bugbot Autofix stops at 3 attempts per PR on an existing branch (VERIFIED).

### C3. Board cost by team size (VERIFIED prices, INFERRED formula)
- GitHub Projects: $0 at any size on GitHub Free (projects come with the account).
- Linear: Free for unlimited members but 250 issues and 2 teams. Basic $10 x users per month billed yearly.
- Azure DevOps: first 5 Basic users free, then $6 per extra user per month. Cost = max(0, users - 5) x 6.
- Jira: free up to 10 users. Above 10, a paid plan; price not in our sources, so the chart shows "paid" instead of a number.
- Team of 8: GitHub $0, Linear Basic $80, Azure $18, Jira $0.

### C4. GitHub Actions minutes (VERIFIED)
- Public repo: free. Private repo on GitHub Free: 2,000 minutes a month, then $0.006 a minute on Linux 2-core. 300 PRs a month x 5-minute CI = 1,500 minutes, inside the free 2,000 (INFERRED). Re-runs count.

---

## D. Decision trees (AUTHORED, built on the facts above)

### D1. Which board
- Are you alone or under 3 people? 
  - Yes. Is your code on GitHub? Yes: **GitHub Issues plus a GitHub Project**. No (Azure Repos): **Azure Boards**.
  - No. Does your employer already run Microsoft DevOps? Yes: **Azure Boards**. No: Do you have more than 250 open and past issues or need cycles and triage? Yes: **Linear Basic**. No: **Linear Free** or GitHub Projects.
  - Over 10 people in a company that already uses Atlassian: **Jira**.
- Why: GitHub Projects sits next to code and PRs and agents start from `@cursor` on an issue. Linear has `@cursor` too and poteto's loop uses it. Linear free stops at 250 issues.

### D2. Which hosting
- Static page with no logins and no payments? **GitHub Pages** (free, 1 GB site, not for commercial SaaS).
- Needs logins or data?
  - Personal or non-commercial: **Vercel Hobby plus Supabase Free** (Supabase free pauses after 1 week idle).
  - Commercial: **Vercel Pro ($20) plus Supabase Pro ($25)**. Two Supabase projects for staging and prod, or Branching.
  - Takes payments: add **Stripe**; never on GitHub Pages ("shouldn't be used for sensitive transactions").

### D3. Should I automate this yet?
- Has a bot done it by hand twice with a clean result? No: **not yet, keep doing it by hand with the bot and correct it**.
- Yes. Is it saved as a skill? No: **save the skill first**.
- Yes. Does it send, post, pay, delete or touch prod? Yes: **routine that drafts, with an Ask first rule on the final step**. No: next.
- How often does the input really change? Minutes: **event trigger with a narrow match, not a 5-minute timer**. Hours: **hourly**. Days: **daily at a set time**.
- Always: no-data policy, stale-data policy, quiet when nothing changed, test run on safe input.

### D4. Can this PR auto-merge?
- All required checks green, Bugbot with fail-on-unresolved green, a verifier that is not the builder approved, proof attached, and blast radius low (docs, copy, tests, an isolated page)? **Auto-merge after a wait window** (poteto: 1 hour).
- Touches auth, payments, data migrations, secrets, infra or CI config? **Human merges.**
- Lingxi's rule (VERIFIED): "If the review is highly confident and the blast radius is low, the PR is merged automatically."

---

## E. Failure modes and how experts debug them (AUTHORED from the cited facts)

| Failure | What you see | Root cause | Expert fix | Gate that would have caught it |
|---|---|---|---|---|
| Red CI | `test` check fails | Code or test broke, or the agent's env differs from CI | Read the failing log line, reproduce in the agent VM, fix the cause, push. Never "re-run until green" | CI required |
| Flaky test loop | Same test passes and fails; agent keeps retrying; spend climbs | Test depends on timing or network | Cap retries, quarantine the test in its own PR, fix root cause. MintScope: "named finish line ... hard revoke mid-run" | Retry cap, spend limit |
| Green but broken | Checks pass, the feature does not work in the browser | Agent graded its own homework (Karayev) | Separate verifier opens the app and attaches a screenshot or video; ask for "the command it ran and the output" (Yanis) | Verifier agent, proof in PR |
| Silent deletion | Tests pass, an error branch or test file vanished | Agent removed code it found inconvenient (Hash, HermesShield) | Review removed lines first; BUGBOT.md rule that blocks deleting tests | Bugbot rule, CODEOWNERS on tests |
| Bugbot found a bug but PR merged | Bugbot comment exists, merge button green | Findings default to `neutral` | Enable fail-on-unresolved or have the bot triage every finding before merge | Bugbot failure status required |
| Merge conflict | "This branch has conflicts" | Two agents edited the same file | One area per bot (Lingxi), small PRs, rebase and re-run checks | Area ownership, strict up-to-date checks |
| Stale approval | Approved PR got new commits | Approval was for an older diff | Turn on "dismiss stale approvals" or "approval of the most recent push" | Ruleset setting |
| Secret in a commit | Push blocked, or key visible in history | Key pasted into code or chat | Rotate the key now, remove it, use the Secrets tab and env vars | Push protection |
| Missing secret in agent | Agent cannot log in or call an API | Secret added after the agent started | Start a new agent; secrets inject at start | Env setup checklist |
| Works locally, not in cloud | Agent fails setup | Repo not reproducible (Zain Akram) | Agent-led environment setup, idempotent install script, AGENTS.md cloud section | environment.json |
| Routine burns budget | Out of usage by Wednesday | 672 runs a week rereading the whole chat | Usage audit prompt, slow to hourly, stay quiet when nothing changed | Cost calculator, weekly audit |
| Wrong model | One small task ate the session | Agent picked an expensive thinking model (Nandan) | Pass the model in the prompt; write it in AGENTS.md | Brief template field |
| Research turned into building | Asked for research, got a PR | Cloud agents lean toward shipping (Faizan) | Say "research only, no code, no PR" and set a stop condition | Brief "out of scope" line |
| Staging fine, prod broken | Users report errors after deploy | Env differences | Error bot on new errors only, Rollouts per env, instant rollback on Vercel | Monitoring, rollback |
| Approval expired | Routine stopped, card says Expired | Unattended approvals expire after about 10 minutes | Ask the bot to try again when you are there; move the risky step to a draft | Routine design |
| Bot overreach | A bot pushed or merged during a call | Loose instruction (Michal Barus) | Narrow Ask first rules for push, merge, send | Auto Review |

---

## F. Templates (AUTHORED; every field traces to a cited source)

### F1. Product brief
```
Brief: <name>
Target user: <one real person type, e.g. "a plumber who quotes jobs from his van">
Problem today: <how they do it now and why it hurts>
Evidence: <3 links or quotes from research, each labelled VERIFIED / INFERRED>
Riskiest assumption: <the one thing that kills it if false>
Cheapest test: <how we check it in 2 days or less>
Outcome: <what changes for the user, with a number if possible>
Must-haves (v1): <3 to 5 bullets>
Not building (v1): <list>
Edge cases: <list>
Done means: <a check anyone can run, e.g. "a quote PDF downloads on an iPhone at the live link">
Proof wanted: <phone screenshots, a 30 second video, test output>
Constraints: <stack, budget, deadline, what not to touch>
Model: <name the model; do not let the agent choose>
```
Sources: Fenech step 4 (v1 research section 3), pstack prompt fields (v1 section 7), Nandan's model lesson (A5).

### F2. Ticket (GitHub issue)
```
Title: Quote form saves draft when signal drops
Goal: A plumber can lose signal mid-quote and not lose the quote.
Done means:
- [ ] Turn off network on the quote page, fill 3 fields, turn network on: fields still there
- [ ] Test in tests/quote-draft.test.ts covers it
- [ ] Phone screenshot before and after in the PR
Out of scope: syncing drafts across devices
Area: quote-form   Labels: feature, area:quote-form
Start: comment "@cursor take this, use poteto-mode, open a PR, do not merge"
```

### F3. PR description
```
What: Save quote drafts to local storage on every field change.
Why: Ticket #42. Plumbers lose quotes when signal drops.
How: useDraft hook writes to localStorage, restored on load. No server change.
Proof:
- tests/quote-draft.test.ts: 4 passed (command and output pasted below)
- Before/after phone screenshots attached
- 20 second video of airplane-mode test
Risk: Low. Touches one page. No auth, payments, data or CI files.
Rollback: Revert this PR. No data migration.
Not done: Cross-device sync (separate ticket).
```

### F4. Routine prompt
```
Every weekday at 8:00 Europe/London, run the "New errors digest" skill on the
Sentry project quote-app. Report only errors first seen in the last 24 hours.
If there are none, post nothing. If Sentry is unreachable, say so and do not
use yesterday's data. For each new error, open a GitHub issue labelled bug
with the stack trace link, then stop. Never close issues, never post outside
this chat, never start a cloud agent without asking me.
```
Built from: Cursor routine confirm list (B1), Pinuts_ "Only NEW errors" (v1), GrokBotRadar quiet rule.

### F5. Branch protection checklist (ruleset on `main`)
```
[x] Require a pull request before merging
[x] Required approvals: 1
[x] Dismiss stale pull request approvals when new commits are pushed
[x] Require approval of the most recent reviewable push
[x] Require conversation resolution before merging
[x] Require status checks to pass: test, Cursor Bugbot
[x] Require branches to be up to date before merging
[x] Require linear history (squash merges only)
[x] Block force pushes
[x] Restrict deletions
[ ] Require deployments to succeed: staging (turn on once staging exists)
[x] Allow auto-merge in repo settings (used only for low blast radius PRs)
Plus: Bugbot set to fail on unresolved issues; push protection on.
```

### F6. CI workflow `.github/workflows/ci.yml`
```yaml
name: ci
on:
  pull_request:
  push:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm test
```
The job name `test` becomes the required check name.

### F7. Bugbot config `.cursor/config/bugbot.yaml` (fields from the docs)
```yaml
version: 1
triggers:
  drafts: false
  frequency: everyPush
review:
  effort: default
prSummary:
  mode: description
  riskScore: true
autofix:
  mode: newBranch
```

### F8. `.cursor/BUGBOT.md`
```
- If a PR deletes or skips a test, add a blocking Bug "Test removed".
- If a PR changes server/** with no change in tests/**, add a blocking Bug "Missing tests".
- Any API key, token or password in code is a blocking Bug "Secret in code".
```

### F9. `AGENTS.md`
```
# How to work in this repo
- Run `npm test` before every push. Paste the command and output in the PR.
- Small PRs. One ticket per PR.
- Never delete or skip a test to make CI pass.
- Never merge. Open the PR and stop.
- Use the model named in the brief.

## Cursor Cloud specific instructions
- Install: `npm ci`. Dev server: `npm run dev` on port 3000.
- Login for tests uses TEST_EMAIL and TEST_PASSWORD from secrets.
- Attach phone-width (390 px) screenshots of every changed page.
```

### F10. `.cursor/environment.json`
```json
{
  "install": "npm ci",
  "start": "",
  "terminals": [{ "name": "dev", "command": "npm run dev" }]
}
```
Note: `install` must be idempotent (Cursor docs). The docs show `install` with `build`/`snapshot`; the `terminals` shape here is AUTHORED, so the page should label this file "starter, check the schema link".

### F11. Bot job description (format from Cursor docs, B1)
```
Name: Quote Eng Lead
Job: Own the quote-app repo. Turn my asks into tickets with done-means, launch
one Cursor cloud agent per ticket with poteto-mode, require phone screenshots
and test output, follow up until checks are green, keep the board current.
Every 30 minutes check open PRs for failing CI, Bugbot findings and conflicts.
Never write code yourself. Never merge. Never touch secrets or prod settings.
Ask first before anything leaves the box.
Reports to: Viraj (through the front door bot).
```

### F12. Research bot prompt (ludoonchart fields, v1 section 9)
```
Outcome: a one-page answer to "do UK plumbers pay for quote apps?" with 5+ sources.
Sources first: pricing pages, app store reviews, forum posts by plumbers.
Label every claim VERIFIED, INFERRED or UNKNOWN with the link beside it.
Stop when: 5 sources agree, or 45 minutes, or 30 pages read.
Retries: 2 per source, then mark UNKNOWN.
Never: sign up, buy, or contact anyone.
Hand off: a Notion page plus a 5-line summary to Architect.
```

### F13. Auto Review rules (examples in the docs' style)
```
Ask first before sending any external email or chat message.
Ask first before merging any pull request.
Ask first before pushing to main.
Ask first before changing a routine or event trigger.
Ask first before starting more than 3 cloud agents at once.
Allow automatically when running git status or npm test in /workspace.
```

---

## G. Real timelines (VERIFIED unless marked)

| What | Time | Source |
|---|---|---|
| Cloud agent environment, agent-led setup | under 10 minutes | Cursor docs |
| Grok Bot iOS v0 | 3 weeks | Lingxi |
| Grok Bot foundation | 4 weeks | Lingxi |
| PRs per month, one engineer | 2,000+ to 2,500 | Lingxi, poteto |
| PRs in 30 days, solo builder from a phone | 148 | jorgediazapps |
| Board sweep by engineer bots | every 30 minutes | Lingxi |
| Ops bot 1:1s | daily 5 a.m. | Lingxi |
| Nightly audits | 3 a.m. | Lingxi |
| P0 transcript checks | every 5 minutes | Lingxi |
| Auto-merge wait window | 1 hour | poteto |
| Bug found to fix deployed | "minutes later" | Alton Peques |
| Pages deploy timeout | 10 minutes | GitHub docs |
| Unattended approval expiry | about 10 minutes | SpaceXAI docs |
| Shortest routine interval | 5 minutes | SpaceXAI docs |
| Concurrent agents one human can manage by hand | 15 | Lingxi |
| Threads most people can drive | 4 to 5 | Peter Yang (v1) |
| Concurrent agents with a bot team | 200+ | Lingxi |

---

## H. Worked case studies

### H1. Viraj's quote app, idea to a monitored live app (AUTHORED worked example; times are INFERRED estimates)

| # | Step | Who | What happens | Artifact | Time |
|---|---|---|---|---|---|
| 1 | Idea | Viraj | Writes one line: "plumbers lose quotes when signal drops and re-type them at night" | Note in Notion | 10 min |
| 2 | Research | Research bot | Runs F12 prompt. Finds pricing pages and reviews, labels claims | Notion page, 5 sources | 45 min |
| 3 | Riskiest assumption | Viraj + Architect | "Plumbers will quote on a phone, not paper." Cheapest test: ask 5 plumbers, show a clickable mock | Test plan | 1 day |
| 4 | Decide | Viraj | 4 of 5 say yes. Keep. (Founder decides, bot gathers) | Decision line in Notion | 5 min |
| 5 | Brief | Architect drafts, Viraj approves | F1 template with done-means and proof | brief.md | 30 min |
| 6 | Repo and rules | Architect via cloud agent | New repo, `main` ruleset (F5), CI (F6), AGENTS.md (F9), Bugbot on with F7 and F8, push protection on | First PR | 1 hour |
| 7 | Board | Architect | GitHub Project with Backlog, Ready, In progress, In review, Done. Tickets from the brief (F2) | 6 issues | 20 min |
| 8 | Environment | Cloud agent | Agent-led setup, secrets added in the Secrets tab | Active Build | 10 min |
| 9 | Build | Cloud agent | `@cursor` on ticket 1. Branch, code, tests, screenshots | PR #1 | 1 to 3 hours |
| 10 | Checks | CI, Bugbot | CI fails once (missing test file). Agent reads the log, fixes, pushes. Bugbot flags an unhandled error; agent fixes it | Green checks | 30 min |
| 11 | Verify | Verifier agent (not the builder) | Opens the preview on a 390 px phone, runs the done-means, attaches video | Verdict comment | 20 min |
| 12 | Approve and merge | Viraj | Reads the proof, approves, squash merges | Merge | 5 min |
| 13 | Deploy | Vercel | Deploys from `main` automatically; preview per PR earlier | Live URL | 2 min |
| 14 | Watch | Error bot routine | F4 routine, daily 8:00, new errors only, quiet when nothing | Daily digest | daily |
| 15 | Feedback | Feedback bot | Watches X and a form for "quote" mentions, files issues | New tickets | hourly |
| 16 | Improve | Architect | Picks the top ticket each morning, back to step 9 | Next PR | loop |

Total to first live version: about 3 to 5 working days, most of it waiting on plumbers in step 3 (INFERRED).

### H2. Lingxi's engineering org (VERIFIED, A1)
1. Task arrives from Lingxi or Slack. 2. The area bot (one of five) launches a cloud agent with his skills and a proof bar. 3. The bot watches the transcript and screenshots, pushes back if visuals do not match. 4. Every 30 minutes it sweeps the Notion board for Bugbot findings, failing CI and conflicts. 5. Problems go back to "Working" with a follow-up to the agent. 6. Clean PRs go to "Ready for Review" plus an automatic code review. 7. High confidence and low blast radius merge automatically. 8. Everything else waits for Lingxi in the morning. 9. Mistakes go to Jenny (ops bot) for a postmortem and a playbook update. 10. Jenny's 5 a.m. 1:1s keep every bot on the playbook. 11. 3 a.m. nightly audits produce cleanup PRs. Result: from 15 agents by hand to 200+.

### H3. Alton Peques's test-and-fix loop (VERIFIED, A3)
1. Testing agent signs up as a new brand and walks the real flow. 2. Paid approvals throw a false payment error; gifted approvals fail silently. 3. Testing agent writes a bug report with repro steps, API responses and auth state. 4. It launches a Cursor cloud agent with a template: what is broken, how to reproduce, expected behaviour, what not to touch, open a PR without merging. 5. Agent finds the bug and opens a PR. 6. Alton reviews and merges. 7. Deploy runs from `main`. 8. Both creators approved minutes later; testing continues on the fixed app.

### H4. poteto's feedback loop (VERIFIED, A4)
Slack feedback, Linear ticket, cloud agent reproduces with pstack, fix plus fuzz with a swarm, ping, rebase and auto-merge after 1 hour unless changes requested.

---

## I. Glossary additions (AUTHORED plain definitions)

Ruleset: the list of rules GitHub enforces on a branch. Required check: a test that must pass before merge. Neutral: a check result that neither passes nor fails; Bugbot uses it for findings by default. Auto-merge: GitHub merges by itself once every rule passes. Preview deployment: a private copy of the site for one PR. Rollback: going back to the last good version. environment.json: the file that tells a cloud agent how to set up its computer. Idempotent: safe to run twice, ends the same. Blast radius: how much breaks if this change is wrong. Change fail rate: share of deploys that need a fix right away. Lead time: time from commit to live. Push protection: GitHub blocking a push that contains a secret. CODEOWNERS: a file naming who must approve changes to some files. Verifier: a checker that did not write the change. Flaky test: a test that passes and fails with no code change. Worktree: a separate working folder for one branch.
