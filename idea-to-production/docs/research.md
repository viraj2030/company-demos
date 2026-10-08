# Research dossier: idea to production with Grok Bots and Cursor

Compiled 8 Oct 2026 for Viraj (GitHub `viraj2030`). Every X post below was fetched with the `x` connector in this session. Every doc was fetched with WebFetch. Quotes are verbatim (typos kept). Do not add posts, numbers or handles that are not in this file.

Viraj's connectors today: X, Notion, GitHub, Cursor Origin. No insurance or Aon content anywhere.

---

## 0. Why the page is interactive (the format)

- Andrej Karpathy, 2 Oct 2026. https://x.com/karpathy/status/2105819303471976479 (bookmarked by Viraj)
  - "Web pages. Ask for output \"in HTML\" to get a beautiful, interactive webpage. LLMs are getting really good at frontend and can create beautiful experiences, animations, etc."
  - "Diagrams / images. Instead of writing, ask your LLM to create a diagram. These can be a lot easier to process, parse, and understand."
  - "you can ask for large, custom, discardable software artifacts (e.g. web apps, video explainers) that would have never made sense to create before."
  - He also suggests ASD-STE100 (a controlled simple-English spec from aerospace docs) for readable writing. Use it as the reason for short, plain sentences.

---

## 1. What Grok Bot is, in parts

Plain facts gathered from the posts below and from how Viraj's bots work:

- A bot is a named helper with a job. It has a profile/description (its rules), memory, skills (how-to recipes), routines (scheduled or event-triggered jobs), connectors/MCP (logins to apps like GitHub, Notion, X), a shared cloud computer (the "box") with a browser, files and a terminal, and teammates (other bots it can message).
- Kevin Connors: "Grok Bot is a staff, not one butler. You create named bots (\"Shopping Bot,\" \"Research Bot,\" etc.). They share one cloud computer with a real browser, files, and a terminal. They can keep working while your phone is off." https://x.com/Kcon2026/status/2103707067789816203
- GrokBotRadar: "Description = the rules. Skill = the how. Routine = the when." and "Skills are one shared library. So at the end of any job that went well, type: \"Save the process we just used as a skill called [name].\"" https://x.com/GrokBotRadar/status/2106860159595425975
- GrokBotRadar on primary bot: "You can now pick ONE Bot to be the boss. ... It's called Primary Bot." @rileybrown "asked his to redo a page in his app. It handed the job to his dev Bot, and the redesign came back live." "Name every Bot after its job." https://x.com/GrokBotRadar/status/2107945635299340477
- GrokBotRadar on the front door: "Your best Grok Bot should NOT be your primary. ... It's a front door. Not a worker." Suggested description: "Route my asks to the Bot named for the job. Stay quiet when nothing changed. Draft and wait before anything sends, books or pays." https://x.com/GrokBotRadar/status/2108119717743624676
- GrokBotRadar: Grok Bot can now "search, read AND monitor X ... No connector. No setup. EVERY user." https://x.com/GrokBotRadar/status/2107977205313617937
- Trevin Chow: X access is a "Huge differentiator for Grok @bot here because it'll give you access to search, read and monitor @X for free." https://x.com/trevin/status/2107979176049619375
- GrokBotRadar shared memory trick: "Grok Bots don't share a brain. So I gave them one: 1. A house rules folder in /workspace every Bot can open 2. One line in every Bot's description: read it first" https://x.com/GrokBotRadar/status/2106567127947710600
- Michael Fenech, training mode prompt (good for a learner like Viraj). Rule 7: "Never send, post, buy or delete anything without asking me first, and explain why you're asking." https://x.com/Michael_Fenech_/status/2104611845298434411

## 2. Top Grok Bot use cases (from practitioners)

1. First mile and last mile of work (poteto, Grok Bot eng lead). "the first mile is figuring out what work you should even be doing at all ... the last mile involves actually following through and closing the loop. ... this is where Bot can hand off tasks to Cursor - our engineering focused agents that can write code in the cloud, on their own computers." Her daily loop: "1. watch this slack channel for feedback about our app 2. create a ticket for this in Linear 3. create a Cursor cloud agent to triage and reproduce the issue on its own computer, using pstack 4. if the issue clearly reproduces, put up a fix and fuzz the pull request with a small swarm of agents 5. if the fuzz has no issues, ping me on Slack, and rebase and auto-merge the PR after 1 hour unless i request changes" https://x.com/poteto/status/2107510472601985336
2. Feedback loop from X. "ask your Grok @Bot to monitor X for user feedback on your products! send feature requests to your issue tracker, bug reports to a cursor cloud agent or project to triage and fix. the loop is complete" https://x.com/poteto/status/2107963437154435182
3. Engineer bot that fires cloud agents. "1. create a new team engineer bot and add it to slack 2. @ your bot whenever you want it to do some coding work 3. you can even tell it to create new Projects ... since they each have their own computer, it frees up your bot to be more of a manager rather than write the code itself!" https://x.com/poteto/status/2105377066942349794
4. Eng lead bot managing eng bots (Peter Yang interview with poteto). "I actually mostly talk to my chief of staff, and then my chief of staff talks to the eng lead. I set these engineer bots up with Dr. Eggbot [a bot to create other bots]. ... it tells it to never do work on its own and always delegate to those four eng bots." https://x.com/petergyang/status/2104288769457394082
5. Peter Yang's 6 lessons from poteto and pengzheng_: design system + one keyframe then let a design bot scale it via Figma MCP; an eng lead bot that "never writes code"; "Give your bots a way to check their own work"; put PM, design and eng bots in one group chat to debate requirements; "Complete a task with a bot manually, build a skill to capture best practices, then make it a routine". https://x.com/petergyang/status/2104575614263144794
6. Peter Yang episode quote list: "Everything I touch with my keyboard and mouse, I try to delegate to my bots." and "I think it ultimately comes back to trust. First, watch your bot work and correct it. Turn what worked into a skill. Once it nails the task in one shot, make it a routine." https://x.com/petergyang/status/2104213287353356531
7. Peter Yang's 11 bots: "3 bots to orchestrate tasks, plan long-term, and maintain my other bots ... 3 work bots to monitor YouTube, X, and business metrics". https://x.com/petergyang/status/2099502180378296394
8. Daily metrics routine. "@mattyp's Grok Bot updates his sheet at 8am. Every weekday. X, LinkedIn AND YouTube. Then every Friday at 8am, it sends him the weekly digest. ... TWO routines. One collects. One reports." https://x.com/GrokBotRadar/status/2106793973515714714
9. Find jobs to delegate: "Look at my calendar and email for the next 7 days. List the 3 jobs you could take off my plate." https://x.com/GrokBotRadar/status/2106736595567050790
10. Production error watcher. "I made a Grok Bot that watches production errors. Hunts new breaks so you don't live in Sentry. - Only NEW errors, not old noise" https://x.com/Pinuts_/status/2100600163974721975 . Also: "Daily check on Production errors so I hear about real problems without having to open @sentry (connected). ... Morning Digest with @github @vercel and @stripe to check on failed or stuck deploys" https://x.com/mikebmorris73/status/2106440610744021445
11. Build internal tools instead of buying SaaS: "Simple CRM. Internal dashboard. Quote calculator. Lead tracker." https://x.com/Michael_Fenech_/status/2098648723987333580
12. Away mode (Ling Shi, via Chris Simpson recap): "Grok Bot monitors Slack and auto-unblocks. Approve from your phone when needed. ... write review criteria (screenshot, real tests not fake ones), then kick a skill / cloud agent for the code scan." https://x.com/ChrisSimpson/status/2099958339954241688
13. Software factory from a phone (jorgediazapps): "Flow: send a task (even from my iPhone) → agent opens its own branch → Bugbot reviews → merge → deploy. 148 PRs in 30 days." https://x.com/jorgediazapps/status/2103499532478918816
14. Scale proof. poteto: "here's how i shipped 2,500 PRs last month to production" https://x.com/poteto/status/2102050467505430555 . "i now routinely have at least 10 projects running in parallel" https://x.com/poteto/status/2103252563999232092 . Projects: "your coordinator managing and orchestrating hundreds and even thousands of agents for you" https://x.com/poteto/status/2098165460714057863

## 3. The full lineage (idea to production)

Michael Fenech's 8-step thread (the cleanest idea-to-product sequence found). Root: https://x.com/Michael_Fenech_/status/2098648702583767271
1. Start with the problem: "who the user is - what problem they have - how they solve it today - why the current way is frustrating" https://x.com/Michael_Fenech_/status/2098648705717153898
2. Research the market: "competitors - current workarounds - customer complaints - pricing - obvious gaps - what users are already paying for. You want evidence, not just enthusiasm." https://x.com/Michael_Fenech_/status/2098648707881484332
3. Challenge the idea: "\"What assumptions am I making?\" \"What would make this fail?\" \"Why might people not care?\" \"What would have to be true for this to work?\"" https://x.com/Michael_Fenech_/status/2098648710070857739
4. Product brief: "target user - core problem - desired outcome - must-have features - what NOT to build - edge cases - definition of MVP. That brief becomes the handoff to your coding agent." https://x.com/Michael_Fenech_/status/2098648712084123882
5. Keep the stack simple: "Supabase → database, auth, storage. Vercel → frontend deployment. Stripe → payments if needed. Don't over-engineer version one." https://x.com/Michael_Fenech_/status/2098648714315452812
6. Hand the build to a Cursor Cloud Agent with "the product brief - user flow - Supabase structure - design direction - definition of done" https://x.com/Michael_Fenech_/status/2098648716580446317
7. Ship the smallest useful version and watch "what they understand - what confuses them - what they use - what they ignore - whether they come back" https://x.com/Michael_Fenech_/status/2098648719050875061
8. Feed learning back: "Problem → Research → Brief → Build → Deploy → Users → Feedback → Improve" https://x.com/Michael_Fenech_/status/2098648721428996379
- His reply on what people skip: "They skip the problem - all the time ... Then 3 weeks later they wonder why they can't get users." https://x.com/Michael_Fenech_/status/2098652064700313912

Founder vs bot split (Michael Fenech): "Market research. Grok Bot gathers the evidence. Founder decides which market is worth entering. ... Product building. Grok Bot writes code and creates prototypes. Founder decides what should actually be built." https://x.com/Michael_Fenech_/status/2102115646880481307

Spec-first loop from a practitioner: "Write a Linear issue > ping our Mattermost agent > cloud agent implements > PR opens > preview env > QA agent validates > I check & test > I merge. I rarely touch implementation, most of my time is spent on the spec and testing" https://x.com/titouangalopin/status/2097697534902747288

The pipeline the page should draw (tappable): idea > validate > brief > board ticket > branch > cloud agent > PR > CI + AI review > human approve > merge > deploy > monitor > feedback (back to idea).

## 4. Boards (what, how, which)

A board is a shared to-do wall. Each card (ticket/issue) is one piece of work. Columns show where it is: Backlog, Todo, In progress, In review, Done. Bots and cloud agents can read and move cards.

Facts:
- GitHub Projects: "an adaptable table, board, and roadmap that integrates with your issues and pull requests on GitHub". Views: table, kanban board, roadmap. Up to 50 fields. Built-in automations, GraphQL API and GitHub Actions. https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects
- Linear pricing: Free $0 with "Unlimited members, 2 teams, 250 issues, Agent platform, Linear Agent". Basic $10 per user/month (billed yearly), Business $16. MCP access listed under AI and agent workflows. https://linear.app/pricing
- Azure DevOps (Azure Boards): first five users get a Basic license free; extra users $6/user/month. Free tier includes 1 Microsoft-hosted CI/CD job with 1,800 minutes/month. https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/
- Jira: Free plan "for up to 10 users at no cost, with no time limit", Scrum and Kanban boards, 2 GB storage. https://www.atlassian.com/software/jira/guides/more/jira-editions
- Cursor cloud agents can be started from GitHub (comment `@cursor` on a PR or issue), Linear (`@cursor`), Slack, web, iOS and the API. https://cursor.com/docs/cloud-agent
- poteto's loop uses Linear for tickets (see section 2, item 1).

Recommendation for Viraj (solo builder with bots): start with GitHub Issues + a GitHub Project board. Reasons: free, it sits next to the code and the PRs, Viraj already has the GitHub connector so his bots can read and write issues, and a cloud agent can be kicked off with `@cursor` on an issue. Move to Linear when tickets pile up or a team joins (its free tier caps at 250 issues; Cursor also supports `@cursor` in Linear). Pick Azure DevOps only if an employer already runs on Microsoft. Pick Jira only for a big company setup.

Setup steps for a GitHub Project board: create a project from the GitHub profile > Projects > New project > Board template; columns Backlog, Ready, In progress, In review, Done; turn on built-in workflows (item closed > Done, PR merged > Done); link the repo; use labels like `bug`, `feature`, `research`; write each issue as goal + done-means.

## 5. Repo, branches, commits, PRs, merging

- Repo: the folder for a project's code, with full history, stored online (GitHub or Cursor Origin).
- Origin is "Cursor's git forge for storing and sharing code", early beta. You can "Create Origin repositories, including from Cursor agents", "Mirror a GitHub repository into Origin", "Open, review, and merge pull requests", "Connect automations and cloud agents to Origin repos". Not on free plans. https://cursor.com/docs/origin
- Branch: a safe copy of the code to try a change. Main stays clean.
- PR merge methods (GitHub docs): "Merge commit: Preserves every commit"; "Squash and merge: Combines all commits in the pull request into a single commit on the base branch. Choose when a pull request represents one logical change"; "Rebase and merge: Adds each commit onto the base branch without a merge commit, for a linear history." "To merge pull requests, you must have write permissions in the repository." https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
- Cloud agents "clone your repo from GitHub, GitLab, Azure DevOps Services, or Bitbucket Cloud and work on a separate branch, then push changes to your repo for handoff." https://cursor.com/docs/cloud-agent

## 6. How bots check and merge a PR

- Branch protection settings include: "Require pull request reviews before merging", "Require status checks before merging", "Require conversation resolution before merging", "Require merge queue", "Require deployments to succeed before merging". "Required status checks must have a successful, skipped, or neutral status". "You can configure a pull request to merge automatically when all merge requirements are met." https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
- Bugbot "reviews pull requests and identifies bugs, security issues, and code quality problems". Runs on every PR update or when you comment `cursor review` or `bugbot run`. Check name on GitHub: `Cursor Bugbot`. Important gotcha: "Requiring the status alone does not block merges on findings because findings default to neutral." Rules live in `.cursor/BUGBOT.md`. Teach it with `@cursor remember [fact]`. Autofix "automatically spawns a Cloud Agent to fix bugs found during PR reviews" (max 3 attempts per PR on existing branch). https://cursor.com/docs/bugbot
- Cloud agents "produce merge-ready PRs with artifacts to demo their changes": screenshots, videos and logs. https://cursor.com/docs/cloud-agent
- Cloud agents keep driving their own PRs: "Cursor cloud agents subscribe to PRs they create. they drive CI and bot comments until the PR is done." https://x.com/ethereaglehq/status/2106500543090966537
- poteto via Chris Simpson: "Grok Bot cloud agents can produce videos (and narrate if you tell them to) and attach them in the pull request description so you review with proof" https://x.com/ChrisSimpson/status/2099973597947428927
- Bourke Floyd: "Skill encodes the proof. Cloud agent opens the PR. You still gate the merge. Diffs are cheap. Proof is the product" https://x.com/BourkeFloyd/status/2099963986632671234
- pstack Shipping rule: "Green is not safe. Nothing gets armed before an independent per-PR verdict" and "the agent that judges a change is never the one that wrote it". Babysit "stops at merge-ready. It never merges, even with everything green, because merging is a different decision." Local: pstack/skills/poteto-mode/SKILL.md and docs/guide/06-verify-and-ship.md. Public: https://github.com/cursor/plugins/tree/main/pstack
- pstack on Bugbot comments: "skeptical posture. They catch real bugs and also file non-issues and nitpicks, so assess each on its merits and dismiss noise with a concrete reason".
- Human gate in practice: "one shared task list and nothing shipping without my approval" https://x.com/OpsDaddyAI/status/2107785970821333104

The gate stack for the page: 1) agent tests its own work and attaches proof; 2) CI (GitHub Actions) runs tests; 3) Bugbot reviews; 4) a separate verifier agent checks; 5) branch protection requires checks green and conversations resolved; 6) human approves (or a time-boxed auto-merge like poteto's "after 1 hour unless i request changes"); 7) merge; 8) deploy; 9) watch.

## 7. Builders: local vs cloud agents, rules, pstack

- Cloud agents "run in isolated VMs in the cloud with full development environments". "You can run as many agents as you want in parallel, and they do not require your local machine to be connected to the internet." Billing: "charged at API pricing for the selected model ... You'll be asked to set a spend limit when you first start using them." Secrets are added in cursor.com/dashboard/cloud-agents. Formerly called Background Agents. https://cursor.com/docs/cloud-agent
- Local agent = runs in Cursor on your own laptop; good for quick edits you watch. Cloud agent = own computer, runs while your laptop is shut, many at once.
- Chris Simpson recap of poteto: "Grok Bot is powerful for orchestrating bots. Cursor's harness is really good for coding." Next action: "spawn a cloud agent for this repo and come back with a screenshot." https://x.com/ChrisSimpson/status/2099932833603326164
- Rules: Project rules in `.cursor/rules` (`.mdc`), Team rules, User rules, or a plain `AGENTS.md`. "Start simple. Add rules only when you notice Agent making the same mistake repeatedly." https://cursor.com/docs/rules
- pstack: "use /poteto-mode whenever you're doing anything that requires rigor." A good prompt has "The goal. The done check. The proof you want to see. What you already know. The real constraints." "Pitfall: a duration is not a finish condition." Local docs/guide/02 and 07.
- pstack /correct (poteto): "if you keep correcting agents for the same mistakes, it finds the pattern and fixes it with architecture, types, and checks." https://x.com/poteto/status/2106542593656111276

## 8. Your bot engineering team (who is in charge of what)

- 0xRafy team shape: "Orchestrator breaks down the work → Research finds and cites sources → Builder creates the deliverable → Critic attacks weak logic → Verifier checks every claim" https://x.com/0xRafy/status/2106890013392908720 and "objective -> lead agent -> research -> build -> verify -> report -> final output" https://x.com/0xRafy/status/2100351589470937134
- poteto's chain: you > chief of staff > eng lead (never codes, only delegates) > engineer bots > cloud agents (see section 2 items 4 and 5). Morlex summary: "one eng lead bot breaks down the project → delegates work to other eng bots → those bots spin up coding agents in the cloud → results come back for review." https://x.com/0xMorlex/status/2104557047651975484
- Michael Fenech: "Give each Grok Bot one clear job. Don't start with: \"Be my general business assistant.\"" https://x.com/Michael_Fenech_/status/2097923900973961411
- Echo: "research bot with baselines, coordination bot that tracks plan vs reality, engineering bot that only accepts proof, and a shared playbook that compounds every fix." https://x.com/itsarocket/status/2100555541428744607
- Peter Yang caution: "I don't think most people are capable of driving more than 4-5 threads at once without getting overwhelmed" https://x.com/petergyang/status/2106788233401237924

Suggested team for Viraj (maps to his real bots):
- Front door / Primary bot (Big Bot): takes every ask, routes it, stays quiet otherwise.
- Architect (eng lead): turns asks into briefs and tickets, launches and supervises cloud agents, never ships unverified work.
- Builder cloud agents (Cursor): write code on their own computers, open PRs with proof.
- Reviewer: Bugbot plus a separate verifier agent (never the builder).
- Research bot: finds and cites sources, labels claims, knows when to stop.
- Teacher/mentor bot (Mentor) and bot-maker (dr eggbot) as support. Midas can own costs/money tracking if that is its job. (Present these as examples; Viraj decides the jobs.)

## 9. Getting a research bot

- ludoonchart: "\"research this deeply\" sounds good, but it gives the agent no finish line, no source hierarchy and no reason to stop browsing". Use "one measurable outcome, primary sources first, evidence beside every important claim, clear approval boundaries, bounded retries, an explicit stop condition, a clean handoff". Labels "VERIFIED / INFERRED / UNKNOWN". "run it manually, get two clean runs, save the stable method as a skill, only then attach a routine" https://x.com/ludoonchart/status/2107191775433543884
- Starter team example: "Research bot — finds public records and lists sources. Writer bot — drafts ... Admin bot — keeps a job list" https://x.com/BronD71/status/2098595660480332054
- Research uses X for free inside Grok Bot (section 1).

## 10. Testing, CI/CD, environments, hosting, data, secrets

- CI = robot checks that run on every PR (for example GitHub Actions). CD = robot that deploys after merge.
- Branch protection can "Require deployments to succeed before merging", for example a staging deploy first (GitHub docs above).
- Environments: dev (your sandbox), staging (a practice copy users don't see), prod (the real thing). "Staging healthy ≠ prod healthy" https://x.com/hhhh39333043536/status/2102928161642352968
- Practitioner QA: "QA agent that literally acts like a person with its own login details. Can also access a \"preview\" server ... Mostly new relic, and sentry" https://x.com/LukeDiebold/status/2098314869644898494
- Hosting: GitHub Pages "is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub". Project sites live at `https://<owner>.github.io/<repositoryname>`. Custom domains supported. https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages . For apps with logins and data, Michael Fenech's simple stack (Supabase, Vercel, Stripe).
- Database = where the app remembers things. Auth = how it knows who you are. Supabase does both (Michael Fenech).
- Secrets: API keys are passwords for apps. Never paste in chat or commit to git. Cursor cloud agent secrets go in the dashboard Secrets tab and are injected when an agent starts (Cursor docs). 0xCodila's Grok Bot setup step: "create API key (keep it off chat paste)" then "store TYPESAFE_API_KEY in the secure field" https://x.com/0xCodila/status/2101433560796467348

## 11. Monitoring, analytics, feedback

- Cursor Rollouts (via @cursor_ai retweeted by poteto): "When Rollouts catches a regression, it finds the offending PR and opens an issue. One click starts a cloud agent to fix it." https://x.com/poteto/status/2106080106313888079 . Summaries say it is for Teams and Enterprise, reports "verified healthy, regression detected, or inconclusive" per environment and "does not merge or roll back on its own" https://x.com/AverageAiBro/status/2103102663856623683
- Error tracking (Sentry) watched by a bot: Pinuts_ and mikebmorris73 (section 2 item 10).
- Bot walks the product and films it: "you can always ask your bot to take a video of the surface while it's doing its work, which has become the fastest way to verify if something is done" https://x.com/ChrisSimpson/status/2100008272367624581
- Analytics and feedback: watch what users understand, use and ignore (Michael Fenech step 7); monitor X for feedback (poteto).
- Andrew Ng on operating AI in production: "build observability mechanisms to understand the system's performance on real usage. You'll track performance, detect drift, and respond quickly to model failures and security incidents" https://x.com/AndrewYNg/status/2090840747738374568

## 12. Costs and token budgets

- Cloud agents bill at API model prices with a spend limit (Cursor docs). Bugbot is usage-based; Autofix uses Cloud Agent credits (Bugbot docs).
- Routine cost trap: "a routine firing 672 times a week. Every run rereads the Bot's whole chat. Even the runs that find nothing." Fix: "hourly. 168 runs. Same signal." Includes a usage-audit prompt. https://x.com/GrokBotRadar/status/2106501043160854740
- A user complaint to watch for: a bot "burned through 30% of my weekly usage for 1 PR" https://x.com/overlordayn/status/2107475997360611469
- Split work by meter: "I'm using Grok Bot for coordination and orchestration. And Cursor cloud agents plus Grok Build for anything that can be specified as a task." https://x.com/ronyspark/status/2102970317828501963
- News: Grok, Cursor and X may share "ONE shared usage pool" (GrokBotRadar, 8 Oct 2026, unconfirmed by us) https://x.com/GrokBotRadar/status/2108248025537908833

## 13. Security, permissions, approval gates

- Auto Review: "Your Grok Bot should NEVER send an email you didn't see first. It also shouldn't ask permission for every boring step. One setting fixes both. Auto Review. ... Ask first and Allow automatically. Both match? Ask first wins." https://x.com/GrokBotRadar/status/2107590731569443193
- Andrew Ng on sandboxes: "A sandbox gives an agent limited permissions. ... Secret API keys, your web browser login credentials, the ability to access arbitrary websites, are inaccessible to the agent by default. These restrictions are implemented in deterministic code rather than by prompting an LLM, which can make mistakes or be susceptible to prompt injections." https://x.com/AndrewYNg/status/2104660347730969087
- whaleyxbt on poteto's workflow: "an \"ask first\" line it never crosses: no slack posts, no prod data > it stops before anything leaves staging and shows the evidence" https://x.com/whaleyxbt/status/2106840102798582237
- Bugbot config is read from the base branch, so "a PR cannot change how Bugbot reviews itself" (Bugbot docs).
- Cloud agents support restricting outbound domains and secrets (Cursor docs).

## 14. Trust ladder, routines, automation

- The ladder (poteto): watch and correct > save as skill > routine once it nails it in one shot (section 2 item 6).
- Michael Fenech: "The mistake is going: Prompt → Routine. I'd go: Task → Fix → Skill → Test → Routine" https://x.com/Michael_Fenech_/status/2106352565528977469
- pstack overnight rule: make a loop autonomous only after "You've done the task once by hand ... Every stage proves its work and can stop the line" (docs/guide/07-overnight.md).
- Webhooks wake routines from other apps: https://x.com/Michael_Fenech_/status/2108216597181841503
- Routine drift audit: "A reliable routine is not necessarily a good routine." https://x.com/Michael_Fenech_/status/2103386523001299306

## 15. Docs and knowledge

- Notion (Viraj has it) holds briefs, decisions and the playbook. Bots read it through the Notion connector.
- House rules folder in /workspace that every bot reads first (GrokBotRadar, section 1).
- Weekly 15-minute huddle with your chief of staff, 7 questions, ending with "update anything that should become part of how you work with me going forward." https://x.com/Michael_Fenech_/status/2104974233184948695
- Correction audit prompt so fixes become permanent rules https://x.com/Michael_Fenech_/status/2104662176661180776

## 16. What to set up, and in what order

1. Primary/front-door bot with Auto Review on (ask first for send, post, buy, delete).
2. Connect GitHub (done), Notion (done), X (built in). Add Cursor Origin only if you want Cursor-hosted repos (done).
3. A house rules note (Notion page or /workspace file) every bot reads.
4. One GitHub repo per product with `main` protected: require PR, require checks, resolve conversations.
5. GitHub Project board linked to the repo.
6. Cursor: paid plan, connect GitHub, set a cloud agent spend limit, add secrets in the dashboard, add `AGENTS.md` to each repo.
7. Install pstack and use poteto-mode for real build work.
8. Turn on Bugbot for the repo; require the `Cursor Bugbot` check; consider fail-on-unresolved.
9. CI with GitHub Actions running tests on every PR.
10. Hosting: GitHub Pages for static sites; Vercel + Supabase when you need logins and data. Separate staging and prod.
11. Error tracking (Sentry) and a bot that reports only new errors.
12. Research bot with stop conditions and evidence labels.
13. Routines last, after two clean manual runs, with a usage audit.

## 17. Things Viraj did not list but needs (added)

Idea validation and riskiest-assumption tests; writing a brief with done-means; repo and branch basics; local vs cloud agents; tests and proof (screenshots, video); CI/CD; dev/staging/prod; secrets and API keys; hosting and domains; databases and auth; monitoring and error tracking; analytics and user feedback loops; costs and token budgets; security, sandboxes and approval gates; the trust ladder; routines and webhooks; docs and shared house rules; a weekly bot huddle.

## Sources list (docs)

- https://cursor.com/docs/cloud-agent
- https://cursor.com/docs/bugbot
- https://cursor.com/docs/rules
- https://cursor.com/docs/origin
- https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
- https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
- https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://linear.app/pricing
- https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/
- https://www.atlassian.com/software/jira/guides/more/jira-editions
- https://github.com/cursor/plugins/tree/main/pstack (returned HTTP 200)
