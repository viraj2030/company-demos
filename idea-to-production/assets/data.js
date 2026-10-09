window.ITP_DATA = {
  skills: [
    { id: "plan", label: "Plan" },
    { id: "board", label: "Board" },
    { id: "code", label: "Code" },
    { id: "gates", label: "Gates" },
    { id: "ship", label: "Ship" },
    { id: "watch", label: "Watch" },
    { id: "team", label: "Team" },
    { id: "cost-safety", label: "Cost" }
  ],
  levels: [
    { id: "beginner", title: "Beginner", promise: "See the whole map", chapterIds: ["start-here", "whole-map", "helpers", "idea-good", "brief"] },
    { id: "practitioner", title: "Practitioner", promise: "Run one loop yourself", chapterIds: ["board", "code-home", "builders", "the-pr", "gates", "going-live", "watching"] },
    { id: "expert", title: "Expert", promise: "Scale it", chapterIds: ["bot-team", "routines-trust", "cost", "safety", "when-it-breaks", "scale", "simulator", "exam"] }
  ],
  chapters: [
    {
      id: "start-here", level: "beginner", skill: "plan", title: "Start here",
      kid: "This is a course you tap, not a wall of words. You will leave able to run one idea to a live app with bots, then scale the loop.",
      grownUp: "Andrej Karpathy said on 2 Oct 2026 to ask for output in HTML so you get an interactive webpage, and that diagrams are easier to parse than long writing. He pointed at ASD-STE100, a simple-English spec. This page follows that: short sentences, taps, and two fact files.",
      recap: ["Tap first, then open the grown-up fact.", "Mastery is quizzes and chapters you finish, not scrolling.", "Karpathy asked for a page, not an essay."],
      cards: [
        { title: "What you can do at the end", kid: "Write a brief. Pick a board. Start a cloud agent. Read a red check. Price a routine. Build a small bot team. Pass a 12-question exam.", grownUp: "v1 named the parts. v2 makes you decide, calculate, fail, fix, and prove. The gap review said experts are made by red CI, Bugbot findings that do not block, conflicts, leaked keys, and routines that burn the week.", sources: ["docs/research.md section 0", "docs/research-v2.md"] },
        { title: "How to use this page", kid: "Read the short line. Open Grown-up version when you want the source. Play every widget. Mark I've got this when you can teach the chapter.", grownUp: "Three levels sit in the path. The radar has eight skills. Wrong quiz answers go to a review deck. Search and Jump take you back later.", sources: ["docs/research.md section 0"] },
        { title: "Why a page", kid: "A page you can tap is a small machine. Press a part. See the next part.", grownUp: "Karpathy: Web pages. Ask for output in HTML to get a beautiful, interactive webpage. He also said you can ask for large, custom, discardable software artifacts that would never have made sense to create before.", sources: ["https://x.com/karpathy/status/2105819303471976479"] }
      ],
      widgets: ["level-path", "mastery-radar", "review-deck"],
      quizIds: ["q-start-1", "q-start-2"]
    },
    {
      id: "whole-map", level: "beginner", skill: "plan", title: "The whole map",
      kid: "An idea becomes a live app in a loop: prove it, write it down, ticket it, build it, check it, ship it, watch it, then pick the next ticket.",
      grownUp: "Michael Fenech's sequence is problem, research, challenge, brief, simple stack, cloud agent, smallest useful version, then feed learning back. The page pipeline is idea, validate, brief, board ticket, branch, cloud agent, PR, CI plus AI review, human approve, merge, deploy, monitor, feedback.",
      recap: ["Founder decides. Bot gathers.", "The last step is the next ticket, not a finish line.", "One idea, one loop, many PRs."],
      cards: [
        { title: "The loop in one breath", kid: "Problem to research to brief to build to deploy to users to feedback to improve.", grownUp: "Fenech: Problem, Research, Brief, Build, Deploy, Users, Feedback, Improve. People skip the problem all the time. Then 3 weeks later they wonder why they can't get users.", sources: ["https://x.com/Michael_Fenech_/status/2098648721428996379"] },
        { title: "Who does each mile", kid: "You pick the problem. A research bot finds proof. An architect writes tickets. A cloud agent writes code. Checks and a verifier judge. You merge.", grownUp: "poteto: the first mile is figuring out what work you should even be doing. The last mile is following through. Bot hands tasks to Cursor agents that write code in the cloud on their own computers.", sources: ["https://x.com/poteto/status/2107510472601985336"] }
      ],
      widgets: ["pipeline", "case-quote-app"],
      quizIds: ["q-map-1", "q-map-2"]
    },
    {
      id: "helpers", level: "beginner", skill: "team", title: "Meet your helpers",
      kid: "A Grok Bot is a named helper with rules, memory, recipes, timers, logins, a shared box, and teammates. A cloud agent is the builder with its own computer. Bugbot reads the PR. You decide.",
      grownUp: "Kevin Connors: Grok Bot is a staff, not one butler. Named bots share one cloud computer. GrokBotRadar: Description = the rules. Skill = the how. Routine = the when. Cursor docs: memory is not a substitute for an authoritative source. Group chats select two to six Bots. Every Bot on your account uses the same computer. The screens are work surfaces, not security boundaries.",
      recap: ["Memory is a cache, not the rulebook.", "The shared computer is not a lock.", "Bots drive. Cloud agents lift. You merge."],
      cards: [
        { title: "Seven parts of a bot", kid: "Rules, memory, skills, routines, connectors, the box, teammates.", grownUp: "Create a separate Bot when the work has a distinct goal, set of tools, working style, approval boundary, or recurring schedule. A General Helper does neither. Use the conversation for task-specific instructions, and the description for rules that should remain true.", sources: ["docs/research.md section 1", "docs/research-v2.md B1"] },
        { title: "Memory is not the source of truth", kid: "Do not hide safety in memory. Put it in the description.", grownUp: "Cursor docs: Memory is not a substitute for an authoritative source. Put safety boundaries in the description rather than in memory.", sources: ["docs/research-v2.md B1"] },
        { title: "Group chats and the shared box", kid: "Two to six bots in a chat. They all share one computer. A key on the box is a key for every bot.", grownUp: "Group chats: select two to six Bots. Ask for a single owner at each stage. Parallel handoffs create duplicate work. Every Bot on your account uses the same computer. Don't place a credential on the computer if another of your Bots shouldn't be able to use it.", sources: ["docs/research-v2.md B1"] },
        { title: "Who does which job", kid: "Grok Bot routes and watches. Cloud agent writes code on its own VM. Bugbot comments on the PR. You pick markets and merges.", grownUp: "Lingxi: my bots never write code on their machines. Cloud agents do all the lifting. Bots drive them. Bugbot reviews pull requests. You still gate the merge.", sources: ["https://x.com/lingxi/status/2094694492083503564"] }
      ],
      widgets: ["bot-anatomy", "helper-table"],
      quizIds: ["q-help-1", "q-help-2", "q-help-3"]
    },
    {
      id: "idea-good", level: "beginner", skill: "plan", title: "Is the idea good?",
      kid: "Start with the stuck person. Gather proof. Name the guess that kills the idea. Run the cheapest test. Then keep or kill.",
      grownUp: "Fenech starts with the user, then market research, then assumption challenges. Bot gathers. Founder decides. ludoonchart: research this deeply has no finish line. Use a measurable outcome, primary sources, labels, retries, and a stop condition.",
      recap: ["Evidence before enthusiasm.", "Name the riskiest assumption.", "Give the research bot a stop rule."],
      cards: [
        { title: "Problem first", kid: "Who is stuck? How do they cope today? Why does today hurt?", grownUp: "Fenech step 1: who the user is, what problem they have, how they solve it today, why the current way is frustrating.", sources: ["https://x.com/Michael_Fenech_/status/2098648705717153898"] },
        { title: "Evidence, then the cheapest test", kid: "Look at prices, complaints, and workarounds. Then test the one guess that, if wrong, kills the idea.", grownUp: "Fenech step 2 and 3. You want evidence, not just enthusiasm. Ask what would make this fail. The quote-app test: ask 5 plumbers if they will quote on a phone.", sources: ["docs/research.md section 3", "docs/research-v2.md H1"] },
        { title: "Keep or kill", kid: "If the cheap test fails, stop. If it holds, write the brief.", grownUp: "In the worked quote-app case, 4 of 5 plumbers said yes. Keep. Founder decides. Bot gathers.", sources: ["docs/research-v2.md H1"] }
      ],
      widgets: ["template-research-prompt"],
      quizIds: ["q-idea-1", "q-idea-2"]
    },
    {
      id: "brief", level: "beginner", skill: "plan", title: "Write the brief",
      kid: "A brief is the one page you hand the builder. It says who, why, done-means, what to skip, the proof, and the model name.",
      grownUp: "Fenech step 4: target user, core problem, outcome, must-haves, what NOT to build, edge cases, MVP. pstack: goal, done check, proof, what you know, constraints. Pitfall: a duration is not a finish condition. Nandan: name the model. Do not let the agent pick.",
      recap: ["Done means is a check anyone can run.", "Name the model in the brief.", "Vague briefs make the agent guess."],
      cards: [
        { title: "Vague vs good", kid: "A one-liner makes the agent invent the product. A good brief names the user, the test, and the model.", grownUp: "Nandan Priyadarshi: I let a cloud agent pick its own model once. It grabbed the thinking one for a CSS tweak and burned the session. agents.md now says pass the model in the prompt.", sources: ["https://x.com/nandanpri/status/2094677450907087311"] },
        { title: "Ticket from the brief", kid: "Each ticket is one job: goal, done-means, out of scope, area, and @cursor.", grownUp: "Cloud agents start from a GitHub issue with @cursor. The F2 ticket names a quote-draft test and says open a PR, do not merge.", sources: ["docs/research-v2.md F2"] }
      ],
      widgets: ["brief-compare", "template-brief", "template-ticket"],
      quizIds: ["q-brief-1", "q-brief-2"]
    },
    {
      id: "board", level: "practitioner", skill: "board", title: "The board",
      kid: "A board is a shared wall of tickets. Start next to the code. Move later if volume or your employer forces it.",
      grownUp: "GitHub Projects is free with the account. Linear Free caps at 250 issues and 2 teams. Basic is $10 per user per month billed yearly. Azure first 5 Basic users free, then $6. Jira free up to 10 users; above that our sources only say paid. Cursor starts from @cursor on a GitHub issue or in Linear.",
      recap: ["Solo on GitHub: GitHub Issues plus a Project.", "Linear Free stops at 250 issues or 2 teams.", "One area per ticket so agents do not collide."],
      cards: [
        { title: "GitHub Project setup", kid: "New project, board template, columns Backlog Ready In progress In review Done. Link the repo. Write goal plus done-means.", grownUp: "Turn on built-in workflows (item closed to Done, PR merged to Done). Labels like bug, feature, research. Comment @cursor take this on the issue.", sources: ["docs/research.md section 4"] },
        { title: "When to leave GitHub", kid: "Need cycles, triage, or more than 250 issues? Linear. Employer on Microsoft? Azure Boards. Big Atlassian shop? Jira.", grownUp: "poteto's loop uses Linear. Team of 8: GitHub $0, Linear Basic $80, Azure $18, Jira $0.", sources: ["docs/research-v2.md C3 D1"] }
      ],
      widgets: ["board-picker", "dtree-board", "board-chart"],
      quizIds: ["q-board-1", "q-board-2"]
    },
    {
      id: "code-home", level: "practitioner", skill: "code", title: "Where code lives",
      kid: "A repo holds the history. A branch is a safe copy. Main stays clean. A PR asks to join the copy back.",
      grownUp: "Origin is Cursor's git forge, early beta, not on free plans. Merge commit keeps every commit. Squash is one logical change. Rebase is linear history. Require linear history means squash or rebase only. Two agents on one file make a conflict: rebase, resolve, re-run checks. Give each bot its own area.",
      recap: ["One area per bot.", "Squash suits one-ticket agent PRs.", "Never force push over main."],
      cards: [
        { title: "Repo, branch, commit, main", kid: "Repo is the folder with history. Branch is a copy. Commit is a snapshot. Main is the clean line.", grownUp: "Cloud agents clone from GitHub, GitLab, Azure DevOps, or Bitbucket and work on a separate branch, then push for handoff.", sources: ["docs/research.md section 5"] },
        { title: "Merge methods and linear history", kid: "Merge keeps the joins. Squash smushes to one commit. Rebase lines commits up.", grownUp: "GitHub: squash when a pull request represents one logical change. Rulesets can require linear history and block force pushes by default.", sources: ["docs/research.md section 5", "docs/research-v2.md B5"] },
        { title: "Merge conflicts", kid: "Two agents edited quote.ts. The PR cannot merge until you rebase and fix the overlap.", grownUp: "HermesShield: three agents on one repo. One force-pushed. A third deleted the test suite. Pin each agent to its own worktree. Lingxi: they perform best when focused on a single domain.", sources: ["https://x.com/HermesShield/status/2088624382885203998", "docs/research-v2.md A1"] }
      ],
      widgets: ["conflict-svg"],
      quizIds: ["q-code-1", "q-code-2"]
    },
    {
      id: "builders", level: "practitioner", skill: "code", title: "The builders",
      kid: "A local agent works on your laptop while you watch. A cloud agent has its own computer and can run while your phone is off.",
      grownUp: "Cursor can set up the cloud environment in less than 10 minutes. Resolution: .cursor/environment.json, then personal, then team. Install must be idempotent. Secrets inject when an agent starts. Recommend an AGENTS.md section titled Cursor Cloud specific instructions. Name the model. Artifacts and remote desktop are how you see proof.",
      recap: ["environment.json first.", "Secrets at start, not mid-run.", "Name the model. Do not let it pick."],
      cards: [
        { title: "Environment setup", kid: "Not setting up the environment is like not giving an engineer a computer.", grownUp: "Agent-led setup in under 10 minutes. Long-running processes go in start or terminals, not install. 2FA: add the TOTP secret; agent runs oathtool. Hooks from .cursor/hooks.json run in cloud.", sources: ["docs/research-v2.md B2"] },
        { title: "AGENTS.md and the model", kid: "Write how to test, what never to do, and which model to use.", grownUp: "Billing is at API pricing for the selected model. A larger context window can increase token usage. Nandan burned a session when the agent picked a thinking model for CSS.", sources: ["docs/research-v2.md B2 B3 A5"] },
        { title: "Artifacts and the desktop", kid: "Ask for phone screenshots and a short video. Watch the remote desktop if you need to see the run.", grownUp: "Cloud agents produce merge-ready PRs with artifacts. Chris Simpson: ask your bot to take a video of the surface. That has become the fastest way to verify if something is done.", sources: ["docs/research.md section 6", "https://x.com/ChrisSimpson/status/2100008272367624581"] }
      ],
      widgets: ["template-agents-md", "template-environment-json"],
      quizIds: ["q-build-1", "q-build-2"]
    },
    {
      id: "the-pr", level: "practitioner", skill: "gates", title: "The PR",
      kid: "A pull request is the polite ask to put a branch into main. Proof beats a claim. Some PRs fail. That is the lesson.",
      grownUp: "Cloud agents subscribe to PRs they create and drive CI and bot comments. Bourke Floyd: Skill encodes the proof. You still gate the merge. Diffs are cheap. Proof is the product. pstack: the agent that judges a change is never the one that wrote it.",
      recap: ["Attach the command and the output.", "A red check is a clue, not a retry button.", "Verifier is never the builder."],
      cards: [
        { title: "Proof over claims", kid: "Do not accept tests pass. Ask for the command and the output.", grownUp: "Yanis: The failures that scare me are the green ones. Never accept a status, ask for the evidence.", sources: ["https://x.com/yanis__42/status/2087875278835945884"] },
        { title: "PR description", kid: "What, why, how, proof, risk, rollback, not done.", grownUp: "Lingxi's proof bar: you must verify the screenshot includes the changes I asked for, with proof showing before vs. after.", sources: ["docs/research-v2.md A1 F3"] }
      ],
      widgets: ["pr-lab", "template-pr-description"],
      quizIds: ["q-pr-1", "q-pr-2"]
    },
    {
      id: "gates", level: "practitioner", skill: "gates", title: "The gates",
      kid: "Gates are the locks on main. Each lock stops a different kind of mess. Bugbot findings start as neutral, so requiring the check is not enough.",
      grownUp: "Bugbot conclusions: success, neutral (default when it reports findings), failure when configured to fail on unresolved issues. Require status checks. Dismiss stale approvals. Require approval of the most recent reviewable push. Require linear history. Block force pushes. Auto-merge shows only when a PR cannot merge immediately. Verifier is never the builder.",
      recap: ["Findings default to neutral.", "Turn on fail-on-unresolved.", "Toggle gates in the chart. See what still slips."],
      cards: [
        { title: "Branch protection, one by one", kid: "PR required. One approval. Dismiss stale. Latest pusher cannot self-approve. Conversations resolved. Checks green. Branch up to date. Linear history. No force push. No delete.", grownUp: "Required checks can be pinned to a source app. Strict mode Require branches to be up to date before merging is the default. Require deployments to succeed once staging exists.", sources: ["docs/research-v2.md B5 F5"] },
        { title: "CI and Bugbot files", kid: "A workflow named test becomes the required check. bugbot.yaml lives on the base branch so a PR cannot rewrite its own judge.", grownUp: "Effort levels: low, default, high, smart. Autofix: Off, Create New Branch (recommended), Commit to Existing Branch (max 3 attempts). BUGBOT.md can block deleted tests.", sources: ["docs/research-v2.md B4 F6 F7 F8"] },
        { title: "Auto-merge", kid: "Only after every required check is green, proof is attached, and blast radius is low.", grownUp: "Lingxi: If the review is highly confident and the blast radius is low, the PR is merged automatically. poteto waits 1 hour unless she requests changes.", sources: ["docs/research-v2.md A1 A4 D4"] }
      ],
      widgets: ["gate-chart", "dtree-merge", "template-branch-protection", "template-ci-workflow", "template-bugbot-yaml", "template-bugbot-md"],
      quizIds: ["q-gate-1", "q-gate-2", "q-gate-3"]
    },
    {
      id: "going-live", level: "practitioner", skill: "ship", title: "Going live",
      kid: "Dev is your sandbox. Preview is one PR. Staging is a practice copy. Prod is the real thing. Pages is for static pages, not shops.",
      grownUp: "GitHub Pages: 1 GB site, 100 GB bandwidth a month, 10 minute deploy timeout, 10 builds an hour. Not for commercial SaaS or sensitive transactions. Vercel Hobby is for personal, non-commercial use. Pro is $20/mo. Supabase Free: 500 MB, 50,000 MAU, pauses after 1 week idle. Pro from $25/mo. Push protection blocks secrets before they reach the repo.",
      recap: ["Pages is not a shop.", "Hobby is not commercial.", "Staging healthy is not prod healthy."],
      cards: [
        { title: "Four rooms", kid: "Dev, preview, staging, prod. Users only see prod.", grownUp: "Sophie Chen on Rollouts: Staging healthy is not prod healthy. Branch protection can require a staging deploy to succeed.", sources: ["https://x.com/hhhh39333043536/status/2102928161642352968"] },
        { title: "Secrets and rollback", kid: "Rotate a leaked key first. Then remove it. Store the new one in the Secrets tab. Vercel Hobby and Pro both have instant rollback.", grownUp: "Push protection is on by default for public repos. Secrets inject when an agent starts. Agents already running will not pick up new secrets.", sources: ["docs/research-v2.md B2 B6 B7"] }
      ],
      widgets: ["dtree-hosting", "free-tiers"],
      quizIds: ["q-ship-1", "q-ship-2"]
    },
    {
      id: "watching", level: "practitioner", skill: "watch", title: "Watching it",
      kid: "Watch new errors, not old noise. Watch each environment. Send X feedback back to the board.",
      grownUp: "DORA has five metrics. Throughput: change lead time, deployment frequency, failed deployment recovery time. Instability: change fail rate, deployment rework rate. Speed and stability are not tradeoffs. Pitfall: setting metrics as a goal. Pinuts_: Only NEW errors. poteto: monitor X, send feature requests to the tracker, bugs to a cloud agent.",
      recap: ["New errors only.", "Rollouts per environment.", "X to board to fixer."],
      cards: [
        { title: "Error bot and Rollouts", kid: "A morning digest of first-seen errors. Rollouts writes a watch plan from the PR and watches the deploy.", grownUp: "Rollouts attaches to a PR, writes a monitoring plan from the diff, then watches the deploy per env. It reports verified healthy, regression detected, or inconclusive. It does not merge or roll back on its own.", sources: ["docs/research.md section 11", "docs/research-v2.md A6"] },
        { title: "Feedback from X", kid: "Watch product mentions. File tickets. That is the loop.", grownUp: "poteto: ask your Grok Bot to monitor X for user feedback. Feature requests to the issue tracker. Bug reports to a cursor cloud agent. The loop is complete.", sources: ["https://x.com/poteto/status/2107963437154435182"] }
      ],
      widgets: ["dora"],
      quizIds: ["q-watch-1", "q-watch-2"]
    },
    {
      id: "bot-team", level: "expert", skill: "team", title: "Your bot team",
      kid: "You talk to a front door. An eng lead never writes code. Area bots each own one slice. An ops bot runs the playbook. Most people can drive 4 to 5 threads.",
      grownUp: "Lingxi runs five engineer bots, one area each, plus Jenny the ops bot. Before Grok Bot he could manage 15 cloud agents. The fleet now manages more than 200. Balta: 3-4 agents plus one manager. Peter Yang: most people are not capable of driving more than 4-5 threads. Vikram: copy the merge bar, not the headcount.",
      recap: ["One area per bot.", "Front door plus eng lead, not seven chats.", "Ops bot does not write code."],
      cards: [
        { title: "Lingxi's org", kid: "Five area bots. Jenny at 5 a.m. Board sweep every 30 minutes. Nightly audits at 3 a.m.", grownUp: "Every bot can create Cursor cloud agents, read transcripts, review proofs, and send follow-ups. If review is highly confident and blast radius is low, merge automatically.", sources: ["docs/research-v2.md A1 H2"] },
        { title: "Job descriptions", kid: "Name, job, never, reports to, routines. One page per bot.", grownUp: "Cursor docs example: Own the weekly account-health review. Never contact a customer or change an account without approval.", sources: ["docs/research-v2.md B1 F11"] }
      ],
      widgets: ["bot-team", "team-builder"],
      quizIds: ["q-team-1", "q-team-2"]
    },
    {
      id: "routines-trust", level: "expert", skill: "team", title: "Routines and trust",
      kid: "Watch, correct, save a skill, then maybe a timer. A test run does real work. Approvals die in about 10 minutes.",
      grownUp: "A Bot can own up to 50 routines. The app keeps the 20 most recent run records. Schedules at least five minutes apart. Deleting a routine is immediate and has no undo. Design for trust: prepare before execute, no-data and stale-data policy, idempotent retries. Avoid broad listeners like every new message. Automate only after two clean hand runs.",
      recap: ["Two clean hand runs, then a skill, then a routine.", "Quiet when nothing changed.", "Test runs are real."],
      cards: [
        { title: "Limits", kid: "50 routines. 5 minutes apart. 20 run records. No undo on delete.", grownUp: "Approvals from unattended work expire after about 10 minutes. A test run performs real work.", sources: ["docs/research-v2.md B1"] },
        { title: "Trust ladder", kid: "Task, fix, skill, test, routine. Not prompt then timer.", grownUp: "Peter Yang quoting poteto: watch, correct, skill, then routine once it nails the task in one shot. Michael Fenech: Task, Fix, Skill, Test, Routine.", sources: ["docs/research.md section 14"] },
        { title: "No-data and stale-data", kid: "If the source is missing, say so. Do not use yesterday.", grownUp: "Routine confirm list: owning Bot, schedule and time zone, input source, expected result, approval boundary, and what happens when a source is missing.", sources: ["docs/research-v2.md B1 F4"] }
      ],
      widgets: ["dtree-automate", "template-routine-prompt"],
      quizIds: ["q-rout-1", "q-rout-2"]
    },
    {
      id: "cost", level: "expert", skill: "cost-safety", title: "Cost and budgets",
      kid: "A 15 minute timer runs 672 times a week. Hourly is 168. Same signal if the world does not change faster than that.",
      grownUp: "GrokBotRadar: a routine firing 672 times a week. Every run rereads the Bot's whole chat. Fix: hourly. 168 runs. Same signal. Cursor list prices used here are illustrative. Grok 4.7: $2 in, $0.5 cache, $6 out. Plans: Hobby free, Pro $20, Pro Plus $60, Ultra $200. Daily agent users often $60 to $100 a month. Power users $200+.",
      recap: ["Slow the timer before you buy a bigger plan.", "Loops are the danger.", "148 PRs in 30 days at about $300 list is the live anchor."],
      cards: [
        { title: "GrokBotRadar story", kid: "Audit every routine. Count weekly runs. Stay quiet when nothing changed. Slow the one that costs the most.", grownUp: "The audit prompt is in the calculator. jorgediazapps: 148 PRs in 30 days. List price about $300 a month. About $2.03 each. William spent about $400 in under 24 hours with 5 agents.", sources: ["https://x.com/GrokBotRadar/status/2106501043160854740", "https://x.com/jorgediazapps/status/2103499532478918816"] },
        { title: "Loop danger", kid: "A flaky test that retries ten times costs about ten PRs.", grownUp: "Simo: when one loops on a flaky test, does it stop or just keep burning budget? MintScope: named finish line for the fix plus hard revoke mid-run. Bugbot Autofix stops at 3 attempts.", sources: ["docs/research-v2.md A5 C2"] }
      ],
      widgets: ["cost-calc", "budget-calc"],
      quizIds: ["q-cost-1", "q-cost-2", "q-cost-3"]
    },
    {
      id: "safety", level: "expert", skill: "cost-safety", title: "Safety",
      kid: "Ask first for send, merge, push, and prod. Allow the boring safe commands. Secrets stay out of chat. Auto Review does not see every side effect.",
      grownUp: "Ask first rules always stop matching actions. Allow automatically proceeds only when review finds no other reason to stop. If both match, Ask first wins. Covers shell, plugins, computer use, automation writes, and Cloud Agent launches. Does not review every side effect. Memory writes are examples. Auto Review is model-based and should complement, not replace, least privilege.",
      recap: ["Ask first wins.", "Do not allow everything in the browser.", "Sandbox is code, not a wish."],
      cards: [
        { title: "Docs examples", kid: "Ask first before sending any external email. Ask first before changing a production dashboard. Allow git status in a reports folder.", grownUp: "Avoid allow everything in the browser. Michal Barus: one loose instruction and an agent pushes or merges while I'm on a client call. What keeps it in check is Auto-review rules.", sources: ["docs/research-v2.md B1 F13", "https://x.com/webjuice_ie/status/2105968656261795949"] },
        { title: "Blast radius and sandbox", kid: "How much breaks if this change is wrong? Lock keys with code, not a prompt.", grownUp: "Andrew Ng: a sandbox gives limited permissions. Secret API keys, browser login credentials, and arbitrary websites are inaccessible by default. These restrictions are implemented in deterministic code rather than by prompting an LLM.", sources: ["https://x.com/AndrewYNg/status/2104660347730969087"] }
      ],
      widgets: ["template-auto-review-rules"],
      quizIds: ["q-safe-1", "q-safe-2"]
    },
    {
      id: "when-it-breaks", level: "expert", skill: "gates", title: "When things break",
      kid: "Experts read the log, reproduce, and fix the cause. They do not re-run until green or delete the test.",
      grownUp: "Table E in research-v2 lists what you see, the root cause, the expert fix, and the gate that would have caught it. Sergey Karayev: coding agents should not grade their own homework. Hash: deletions are where agents lie to you.",
      recap: ["Read the failing line first.", "A green check can still be wrong.", "Each failure has a gate."],
      cards: [
        { title: "How to read a failure card", kid: "What you see. Why. The fix. The gate you will turn on next.", grownUp: "whemo: most failures happen between jobs: wrong agent, weak research, marked done too early, or a bot takes an action it shouldn't.", sources: ["docs/research-v2.md E A6"] }
      ],
      widgets: ["failure-cards"],
      quizIds: ["q-break-1", "q-break-2"]
    },
    {
      id: "scale", level: "expert", skill: "team", title: "Scale like the pros",
      kid: "A person can drive about 5 threads. By hand, Lingxi ran 15 agents. With a bot fleet, more than 200. A solo phone builder shipped 148 PRs in 30 days. poteto shipped 2,500 in a month.",
      grownUp: "Nightly audits at 3 a.m. P0 process: a temporary routine that checks the transcript every five minutes. Lingxi: this can burn tokens much faster than you think, so only use it for true urgency. Uber via hochulambo: more than 70% of PRs opened by agents. What is left is CI capacity, experiment slots, and deciding what should be built.",
      recap: ["Copy the merge bar, not the headcount.", "P0 five-minute checks are expensive.", "The bottleneck becomes what to build."],
      cards: [
        { title: "Nightly audits and P0", kid: "Cleanup at 3 a.m. True fires get a 5 minute watcher. That watcher is costly.", grownUp: "More audit ideas: security, CI build time, internationalization, parity, catch-up of PRs merged in the past 24 hours.", sources: ["docs/research-v2.md A1"] },
        { title: "Three real loops", kid: "Lingxi's org. Alton's test-and-fix. poteto's Slack to Linear to cloud agent to timed merge.", grownUp: "Alton: Muse tests, launches a Cursor agent, he reviews and merges, deploy from main, both creators approved minutes later.", sources: ["docs/research-v2.md H2 H3 H4"] }
      ],
      widgets: ["scale-chart", "case-lingxi-org", "case-test-fix-loop", "case-poteto-loop"],
      quizIds: ["q-scale-1", "q-scale-2"]
    },
    {
      id: "simulator", level: "expert", skill: "plan", title: "Run a project",
      kid: "Play one idea from guess to live. Each tap changes days, cost, risk, and signal. Then see which ending you earned.",
      grownUp: "Teaching model, not measured. Costs use the routine calculator's example numbers. Four endings: incident if risk is 5 or more, wrong-thing if signal is 0 or less, over-budget if cost is 100 or more, else shipped-safe.",
      recap: ["Validate before you build.", "Hourly beats every 5 minutes.", "Watch new errors and X."],
      cards: [
        { title: "How to play", kid: "Start. Pick one option. Read the consequence. Continue. Four reference paths sit in the tests.", grownUp: "Expert path: riskiest-test, bot-with-stop, done-means, github-projects, full, staging-prod, hourly, error-bot-x. Days 9, cost 39, risk 0, signal 8, shipped-safe.", sources: ["docs/research-v2.md C1 H1"] }
      ],
      widgets: ["sim"],
      quizIds: ["q-sim-1", "q-sim-2"]
    },
    {
      id: "exam", level: "expert", skill: "plan", title: "Expert exam",
      kid: "Twelve questions. Nine to pass. A certificate if you make it. Try again from question 1 if you want.",
      grownUp: "Questions come from the chapters you just used. Pass mark 9 of 12. The certificate names you, today's date, and the eight skill scores.",
      recap: ["Nine of twelve.", "Failing skills link back to the chapter.", "The certificate is a snapshot, not a license."],
      cards: [
        { title: "Before you start", kid: "If a skill radar bar is flat, review that chapter first.", grownUp: "The exam is closed book in spirit. The page will still let you jump away. Experts do not need to.", sources: ["docs/research-v2.md"] }
      ],
      widgets: ["exam"],
      quizIds: ["q-exam-1", "q-exam-2"]
    },
    {
      id: "templates", level: null, skill: "plan", title: "Template library",
      kid: "Copy a page you can paste into Notion, GitHub, or a bot description. Each one traces to a source.",
      grownUp: "Bodies are research-v2 F1 to F13. AUTHORED teaching templates built on cited facts. environment.json is a starter. Check the schema link before you trust the terminals shape.",
      recap: ["Copy, then fill the brackets.", "Name the model.", "Never merge from a template. You still decide."],
      cards: [
        { title: "How to use them", kid: "Tap Copy. Paste. Fill the blanks. Put safety in the description, not in memory.", grownUp: "F11 format: Name, Job, Never, Reports to, Routines.", sources: ["docs/research-v2.md F"] }
      ],
      widgets: ["templates"],
      quizIds: ["q-tmpl-1", "q-tmpl-2"]
    },
    {
      id: "setup-checklist", level: null, skill: "plan", title: "Setup checklist",
      kid: "Tick these in order. Each line has a why, a how, and a chapter. Your ticks stay in this browser.",
      grownUp: "Order from research.md section 16, grouped by phase. Routines last, after two clean manual runs, with a usage audit. Viraj already has GitHub, Notion, X (built in), and Cursor Origin.",
      recap: ["Front door first.", "Gates before builders run free.", "Timers last."],
      cards: [
        { title: "Why this order", kid: "Rules, then repo locks, then builders, then live watchers, then scale.", grownUp: "Section 17 flagged the gaps this course now teaches: validation, briefs, conflicts, costs, failure modes, DORA, hosting limits.", sources: ["docs/research.md section 16"] }
      ],
      widgets: ["checklist"],
      quizIds: ["q-check-1", "q-check-2"]
    },
    {
      id: "from-x", level: null, skill: "plan", title: "From X",
      kid: "Real posts from both research files. Filter by topic. Open the post if you want the thread.",
      grownUp: "Every post was read with the X connector. Do not add posts, numbers, or handles that are not in the two research files. Quotes on this page skip any long dash.",
      recap: ["Takeaway first.", "Topic chips hide the rest.", "Links open X in a new tab."],
      cards: [
        { title: "How to read them", kid: "Read the takeaway. Tap a topic. Open the source if you want the full words.", grownUp: "Quotes are excerpts without en or em dashes so the page stays readable and the verify check passes.", sources: ["docs/research.md", "docs/research-v2.md"] }
      ],
      widgets: ["from-x"],
      quizIds: ["q-x-1", "q-x-2"]
    },
    {
      id: "glossary", level: null, skill: "plan", title: "Glossary",
      kid: "Hard words, said simply. Type to filter. Each term points at a chapter.",
      grownUp: "v1 terms plus research-v2 section I. Kid wording only. No new product claims.",
      recap: ["Filter as you type.", "Jump to the chapter if you want the long version.", "If a word is missing, it was not in the lesson."],
      cards: [
        { title: "If a word is missing", kid: "It was not in the two research files, so it is not here.", grownUp: "The glossary is a filter over teaching terms, not a third research pass.", sources: ["docs/research-v2.md I"] }
      ],
      widgets: ["glossary"],
      quizIds: ["q-gloss-1", "q-gloss-2"]
    }
  ],
  quiz: [],
  exam: [],
  pipeline: [
    { id: "idea", label: "Idea", kid: "Name the person who is stuck and what hurts.", grownUp: "Fenech step 1: who the user is, what problem they have, how they solve it today, why today is frustrating.", whoDoesIt: "You. The founder starts with the problem." },
    { id: "validate", label: "Validate", kid: "Look for proof. Poke holes in your own idea.", grownUp: "Market research and assumption challenges. Bot gathers evidence. Founder decides which market is worth entering.", whoDoesIt: "Research bot gathers. You decide." },
    { id: "brief", label: "Brief", kid: "Write the one-page handoff: who, why, done-means, what not to build, the model.", grownUp: "Target user, core problem, outcome, must-haves, what NOT to build, edge cases, MVP. Name the model.", whoDoesIt: "You, with the architect bot drafting." },
    { id: "ticket", label: "Board ticket", kid: "Put one job on the wall. Goal plus done-means.", grownUp: "A GitHub Issue on a Project board. Comment @cursor to start a cloud agent.", whoDoesIt: "You or the architect bot." },
    { id: "branch", label: "Branch", kid: "Make a safe copy so main stays clean.", grownUp: "Cloud agents clone the repo and work on a separate branch.", whoDoesIt: "The cloud agent." },
    { id: "agent", label: "Cloud agent", kid: "A builder with its own computer writes the change.", grownUp: "Isolated VM, spend limit, secrets at start. Attach the brief and definition of done.", whoDoesIt: "Cursor cloud agent, started by you or a bot." },
    { id: "pr", label: "PR", kid: "The builder asks to put the copy into main, with proof.", grownUp: "Merge-ready PR plus screenshots, videos, or logs. The agent stays subscribed.", whoDoesIt: "The cloud agent opens it. You still gate merge." },
    { id: "ci", label: "CI + AI review", kid: "Robots run tests. Bugbot hunts bugs. A second helper checks the first.", grownUp: "GitHub Actions plus Cursor Bugbot. Findings default to neutral. The judge is never the writer.", whoDoesIt: "GitHub Actions, Bugbot, and a separate verifier." },
    { id: "approve", label: "Human approve", kid: "A person looks at the proof and says yes.", grownUp: "Nothing ships without approval, or a time box like poteto's 1 hour unless she requests changes.", whoDoesIt: "You." },
    { id: "merge", label: "Merge", kid: "The copy lands on main.", grownUp: "Needs write permission. Squash suits one-ticket agent PRs. Linear history if you require it.", whoDoesIt: "You, or auto-merge after the gates." },
    { id: "deploy", label: "Deploy", kid: "Put the app on the web. Practice copy first if you can.", grownUp: "GitHub Pages for static sites. Vercel plus Supabase when you need logins and data.", whoDoesIt: "CD, Pages, or Vercel. You pick the host." },
    { id: "monitor", label: "Monitor", kid: "Watch new breaks and bad changes.", grownUp: "Sentry bot for only new errors. Rollouts per environment. It does not merge or roll back on its own.", whoDoesIt: "A watcher bot plus Rollouts. You still decide the fix." },
    { id: "feedback", label: "Feedback", kid: "Hear what people use and say. Send it back to the idea.", grownUp: "Watch X for product feedback. Feature requests to the tracker. Bugs to a cloud agent.", whoDoesIt: "Grok Bot watches. You rank what matters." }
  ],
  prLifecycle: [],
  team: [
    { id: "you", role: "You", job: "Pick the market, write the brief, approve merges, and decide what is worth building.", neverDoes: "Hand those calls to a bot.", reportsTo: "No one. You are the founder." },
    { id: "front-door", role: "Front door", job: "Take every ask, route it to the bot named for the job, stay quiet otherwise.", neverDoes: "Do the specialist work itself.", reportsTo: "You" },
    { id: "architect", role: "Eng lead", job: "Turn asks into briefs and tickets. Launch and supervise cloud agents.", neverDoes: "Write the code or ship unverified work.", reportsTo: "Front door, then you" },
    { id: "builder", role: "Builder cloud agents", job: "Write code on their own computers. Open PRs with proof.", neverDoes: "Merge to main.", reportsTo: "Eng lead" },
    { id: "reviewer", role: "Verifier", job: "Open the preview. Attach a screenshot or video. Never grade your own homework.", neverDoes: "Judge a change it wrote.", reportsTo: "You" },
    { id: "research", role: "Research bot", job: "Find and cite sources. Label VERIFIED, INFERRED, or UNKNOWN. Stop when the stop rule says stop.", neverDoes: "Decide which market to enter.", reportsTo: "Front door" },
    { id: "ops", role: "Ops bot", job: "Daily 1:1s, postmortems, playbook updates. Jenny does not write code.", neverDoes: "Write application code.", reportsTo: "You" }
  ],
  boards: [
    { name: "GitHub Projects", bestFor: "A solo builder whose code already lives on GitHub.", freeTier: "Free with your GitHub account. Table, board, and roadmap. Up to 50 fields.", agentFit: "Comment @cursor on an issue or PR to start a cloud agent.", verdict: "Start here. It sits next to the code and the PRs." },
    { name: "Linear", bestFor: "When tickets pile up or a team joins. poteto's loop uses Linear.", freeTier: "Free: unlimited members, 2 teams, 250 issues. Basic $10 per user per month billed yearly.", agentFit: "Cursor supports @cursor in Linear.", verdict: "Later. Free stops at 250 issues or 2 teams." },
    { name: "Azure DevOps", bestFor: "An employer already on Microsoft.", freeTier: "First five Basic users free. Extra users $6 per user per month.", agentFit: "Cloud agents can clone from Azure DevOps Services.", verdict: "Only if work already lives here." },
    { name: "Jira", bestFor: "A big company already on Atlassian.", freeTier: "Free for up to 10 users. Above 10 the chart shows paid. Our sources do not list that price.", agentFit: "Not the default for a solo builder with bots.", verdict: "Skip unless the company already runs on Jira." }
  ],
  checklist: [],
  glossary: [],
  xPosts: [],
  prScenarios: [],
  costDefaults: { interval: 60, tokensIn: 50000, tokensOut: 2000, cacheShare: 0, priceIn: 2, priceCache: 0.5, priceOut: 6 },
  budgetDefaults: { usd: 100, tokensIn: 2000000, cacheShare: 80, tokensOut: 60000, model: "grok-4-7" },
  boardPricing: {
    "github-projects": { label: "GitHub Projects", kind: "zero" },
    "linear-basic": { label: "Linear Basic", kind: "per-user", unit: 10 },
    "azure-devops": { label: "Azure DevOps", kind: "after-free", free: 5, unit: 6 },
    jira: { label: "Jira", kind: "cap-paid", cap: 10 }
  },
  modelPrices: {
    "grok-4-7": { label: "Grok 4.7", in: 2, cache: 0.5, out: 6 },
    "composer-2-5": { label: "Composer 2.5", in: 0.5, cache: 0.2, out: 2.5 },
    "claude-opus-5-5": { label: "Claude Opus 5.5", in: 4, cache: 0.2, out: 20 }
  },
  gates: ["ci", "bugbot-blocking", "verifier", "human-review", "push-protection", "dismiss-stale", "monitoring"],
  gateMeta: [
    { id: "ci", label: "CI required" },
    { id: "bugbot-blocking", label: "Bugbot fail-on-unresolved" },
    { id: "verifier", label: "Verifier not the builder" },
    { id: "human-review", label: "Human review" },
    { id: "push-protection", label: "Push protection" },
    { id: "dismiss-stale", label: "Dismiss stale approvals" },
    { id: "monitoring", label: "Monitoring" }
  ],
  failureModes: [],
  scaleData: [
    { key: "human-threads", label: "Human threads", value: 5, group: "agents", note: "Peter Yang 4-5" },
    { key: "manual-agents", label: "Manual agents", value: 15, group: "agents", note: "Lingxi by hand" },
    { key: "bot-fleet", label: "Bot fleet", value: 200, group: "agents", note: "Lingxi, more than 200" },
    { key: "solo-phone", label: "Solo phone PRs", value: 148, group: "prs", note: "jorgediazapps, 30 days" },
    { key: "poteto", label: "poteto PRs", value: 2500, group: "prs", note: "one month" }
  ],
  sim: { base: { days: 3, cost: 0, risk: 0, signal: 0 }, steps: [], outcomes: [] },
  trees: [],
  cases: [],
  templates: [],
  teamRoles: [
    { id: "front-door", name: "Front door", job: "Route every ask to the bot named for the job. Stay quiet when nothing changed. Draft before anything sends.", never: "Do the specialist work.", reportsTo: "Viraj", routines: "None. This bot waits for you.", defaultOn: true },
    { id: "eng-lead", name: "Eng lead", job: "Turn asks into tickets with done-means. Launch one cloud agent per ticket. Follow up until checks are green. Keep the board current.", never: "Write code yourself. Merge. Touch secrets or prod settings.", reportsTo: "Front door", routines: "Every 30 minutes check open PRs for failing CI, Bugbot findings and conflicts.", defaultOn: true },
    { id: "research-bot", name: "Research bot", job: "Find public sources. Label VERIFIED, INFERRED or UNKNOWN. Stop on the stop rule.", never: "Sign up, buy, contact anyone, or pick the market.", reportsTo: "Front door", routines: "None until two clean hand runs.", defaultOn: false },
    { id: "verifier", name: "Verifier", job: "Open the preview at 390 px. Run done-means. Attach a screenshot or video. Comment a verdict.", never: "Write the change you judge.", reportsTo: "Front door", routines: "On each Ready for Review PR.", defaultOn: false },
    { id: "ops-bot", name: "Ops bot", job: "Daily 1:1s with every bot. Root-cause mistakes. Update the playbook. Onboard new bots.", never: "Write application code.", reportsTo: "Viraj", routines: "Every morning at 5:00. Nightly audit at 3:00.", defaultOn: false },
    { id: "feedback-watcher", name: "Feedback watcher", job: "Watch X and a form for product mentions. File issues.", never: "Close issues or start a cloud agent without asking.", reportsTo: "Front door", routines: "Hourly mention sweep. Quiet when nothing changed.", defaultOn: false },
    { id: "error-watcher", name: "Error watcher", job: "Report only errors first seen in the last 24 hours.", never: "Use yesterday's data if Sentry is down.", reportsTo: "Front door", routines: "Weekdays at 8:00. New errors only.", defaultOn: false },
    { id: "cost-watcher", name: "Cost watcher", job: "List every routine, weekly runs, and which one costs the most.", never: "Buy a plan or raise a spend limit without asking.", reportsTo: "Front door", routines: "Friday usage audit.", defaultOn: false }
  ]
};
