(() => {
  const STORAGE_KEY = "itp-checklist-v1";

  const DATA = {
    chapters: [
      {
        id: "start-here",
        title: "Start here",
        kid: "This is a toy page, not a long essay. You tap. A small bit opens. You try a quiz. That is how you learn the path from an idea to a live app.",
        grownUp: "Andrej Karpathy said on 2 Oct 2026 that you should ask for output in HTML to get an interactive webpage, and that diagrams are easier to parse than long writing. He also pointed at ASD-STE100, a simple-English spec from aerospace docs. This page follows that: short sentences, taps, and one fact file.",
        cards: [
          {
            title: "Why a page",
            kid: "A wall of words is hard. A page you can tap is a small machine. You press a part. It shows the next part.",
            grownUp: "Karpathy: Web pages. Ask for output in HTML to get a beautiful, interactive webpage. He also said you can ask for large, custom, discardable software artifacts (web apps, video explainers) that would never have made sense to create before.",
            sources: ["https://x.com/karpathy/status/2105819303471976479"]
          },
          {
            title: "How to use this page",
            kid: "Read the short bit first. Tap Grown-up version if you want the longer fact. Tap the path. Play the PR toy. Tick the list at the end.",
            grownUp: "Each chapter leads with a like-I-am-6 line, then a grown-up panel with the source fact. Interactive blocks: the pipeline, a board picker, a PR state machine, a bot org chart, quizzes, and a checklist saved in localStorage.",
            sources: ["docs/research.md section 0"]
          },
          {
            title: "Short words on purpose",
            kid: "We talk like a calm teacher. Short lines. No fancy words. If a grown-up word shows up, the glossary at the end says what it means.",
            grownUp: "Karpathy suggested ASD-STE100 as a reason to write readable, controlled simple English. The dossier compiled on 8 Oct 2026 is the only source for facts, quotes, numbers, handles, and post URLs.",
            sources: ["https://x.com/karpathy/status/2105819303471976479"]
          }
        ],
        quiz: {
          q: "Why is this a tap page and not a long note?",
          options: [
            { text: "Because Karpathy said interactive pages are easier to learn from", correct: true, why: "He said ask for HTML so you get a page you can use, not a wall of words." },
            { text: "Because a page can show ads", correct: false, why: "This page has no ads, trackers, or other sites." },
            { text: "Because bots cannot read notes", correct: false, why: "Bots can read notes. The page is for you." }
          ]
        }
      },
      {
        id: "helpers",
        title: "Meet your helpers",
        kid: "A Grok Bot is a named helper with one job. It has rules, memory, how-to cards, timers, logins, a shared box computer, and teammates.",
        grownUp: "Kevin Connors: Grok Bot is a staff, not one butler. Named bots share one cloud computer with a real browser, files, and a terminal. They can keep working while your phone is off. GrokBotRadar: Description = the rules. Skill = the how. Routine = the when.",
        cards: [
          {
            title: "The seven parts",
            kid: "Rules (the description). Memory. Skills (how). Routines (when). Connectors (logins to apps). The box (browser, files, terminal). Teammates (other bots).",
            grownUp: "A bot is a named helper with a job. It has a profile/description, memory, skills, routines, connectors/MCP (GitHub, Notion, X), a shared cloud computer, and teammates it can message.",
            sources: ["docs/research.md section 1", "https://x.com/Kcon2026/status/2103707067789816203"]
          },
          {
            title: "Rules, how, and when",
            kid: "Description is the rules. A skill is the recipe. A routine is the clock or the doorbell.",
            grownUp: "GrokBotRadar: Skills are one shared library. After a job that went well, type: Save the process we just used as a skill called [name].",
            sources: ["https://x.com/GrokBotRadar/status/2106860159595425975"]
          },
          {
            title: "Primary and the front door",
            kid: "Pick one bot to be the boss of routing. The best worker should not be that boss. The front door sends work to the bot named for the job, then stays quiet.",
            grownUp: "GrokBotRadar: You can now pick ONE Bot to be the boss. It is called Primary Bot. Also: Your best Grok Bot should NOT be your primary. It is a front door. Not a worker. Suggested rule: Route my asks to the Bot named for the job. Stay quiet when nothing changed. Draft and wait before anything sends, books or pays. Name every Bot after its job. Riley Brown asked his to redo a page; it handed the job to his dev Bot and the redesign came back live.",
            sources: [
              "https://x.com/GrokBotRadar/status/2107945635299340477",
              "https://x.com/GrokBotRadar/status/2108119717743624676"
            ]
          },
          {
            title: "X is built in",
            kid: "Your bot can search, read, and watch X without extra setup.",
            grownUp: "GrokBotRadar: Grok Bot can now search, read AND monitor X. No connector. No setup. EVERY user. Trevin Chow: X access is a huge differentiator because it gives search, read and monitor of X for free.",
            sources: [
              "https://x.com/GrokBotRadar/status/2107977205313617937",
              "https://x.com/trevin/status/2107979176049619375"
            ]
          },
          {
            title: "Shared house rules",
            kid: "Bots do not share one brain. Give them one folder of rules. Tell every bot: read it first.",
            grownUp: "GrokBotRadar: 1. A house rules folder in /workspace every Bot can open. 2. One line in every Bot's description: read it first.",
            sources: ["https://x.com/GrokBotRadar/status/2106567127947710600"]
          },
          {
            title: "Ask first",
            kid: "A good learner rule: never send, post, buy, or delete unless you said yes.",
            grownUp: "Michael Fenech training mode, rule 7: Never send, post, buy or delete anything without asking me first, and explain why you're asking.",
            sources: ["https://x.com/Michael_Fenech_/status/2104611845298434411"]
          },
          {
            title: "What people use bots for",
            kid: "Watch feedback. Make tickets. Start cloud agents. Watch errors. Build small inside tools. Work from a phone.",
            grownUp: "Top cases from the dossier: poteto's first-mile and last-mile loop (Slack to Linear to cloud agent to fuzz to timed auto-merge); X feedback into the tracker; an engineer bot that fires cloud agents; an eng lead that never codes; Peter Yang's watch-correct-skill-routine ladder; daily metrics routines; job-to-delegate scans; Sentry watchers; internal tools (CRM, dashboard, quote calculator, lead tracker); away mode; jorgediazapps 148 PRs in 30 days; poteto 2,500 PRs in a month and 10 projects in parallel.",
            sources: ["docs/research.md section 2"]
          }
        ],
        quiz: {
          q: "What is a skill?",
          options: [
            { text: "The rules of the bot", correct: false, why: "Those rules are the description." },
            { text: "The how-to recipe", correct: true, why: "Description = the rules. Skill = the how. Routine = the when." },
            { text: "The timer that starts a job", correct: false, why: "That timer is a routine." }
          ]
        }
      },
      {
        id: "idea-good",
        title: "Is the idea good?",
        kid: "Do not start by building. Start with the person who is stuck. Then look for proof. Then poke holes in your own idea.",
        grownUp: "Michael Fenech's sequence starts with the problem, then market research, then challenging assumptions. His split: Grok Bot gathers the evidence. The founder decides which market is worth entering. People skip the problem all the time. Then 3 weeks later they wonder why they can't get users.",
        cards: [
          {
            title: "Start with the problem",
            kid: "Who is the user? What is hard? How do they do it today? Why is today annoying?",
            grownUp: "Fenech step 1: who the user is, what problem they have, how they solve it today, why the current way is frustrating.",
            sources: ["https://x.com/Michael_Fenech_/status/2098648705717153898"]
          },
          {
            title: "Research the market",
            kid: "Look at other products, workarounds, complaints, prices, gaps, and what people already pay for. Want proof, not hype.",
            grownUp: "Fenech step 2: competitors, current workarounds, customer complaints, pricing, obvious gaps, what users are already paying for. You want evidence, not just enthusiasm.",
            sources: ["https://x.com/Michael_Fenech_/status/2098648707881484332"]
          },
          {
            title: "Challenge the idea",
            kid: "Ask: What am I guessing? What would make this fail? Why might people not care? What would have to be true?",
            grownUp: "Fenech step 3. This is the riskiest-assumption test: write the guess that, if wrong, kills the idea. The bot can gather. You decide.",
            sources: ["https://x.com/Michael_Fenech_/status/2098648710070857739"]
          },
          {
            title: "Founder decides. Bot gathers.",
            kid: "The bot brings facts. You pick the market. The bot can draft. You pick what gets built.",
            grownUp: "Michael Fenech: Market research. Grok Bot gathers the evidence. Founder decides which market is worth entering. Product building. Grok Bot writes code and creates prototypes. Founder decides what should actually be built.",
            sources: ["https://x.com/Michael_Fenech_/status/2102115646880481307"]
          }
        ],
        quiz: {
          q: "Who decides which market to enter?",
          options: [
            { text: "The research bot", correct: false, why: "The bot gathers evidence. It does not pick the market." },
            { text: "The founder", correct: true, why: "Bot gathers. Founder decides which market is worth entering." },
            { text: "GitHub", correct: false, why: "GitHub stores code and tickets. It does not pick a market." }
          ]
        }
      },
      {
        id: "brief",
        title: "Write the brief",
        kid: "A brief is the one page you hand the builder. It says who, why, what good looks like, what to build, and what to leave out.",
        grownUp: "Fenech step 4: target user, core problem, desired outcome, must-have features, what NOT to build, edge cases, definition of MVP. That brief becomes the handoff to your coding agent. pstack: a good prompt has the goal, the done check, the proof you want to see, what you already know, and the real constraints. Pitfall: a duration is not a finish condition.",
        cards: [
          {
            title: "What belongs in the brief",
            kid: "Target user. Problem. Outcome. Must-haves. What not to build. How you will know it is done.",
            grownUp: "Also include edge cases and a definition of MVP. When you hand a Cursor cloud agent the job, Fenech lists: the product brief, user flow, Supabase structure, design direction, definition of done.",
            sources: [
              "https://x.com/Michael_Fenech_/status/2098648712084123882",
              "https://x.com/Michael_Fenech_/status/2098648716580446317"
            ]
          },
          {
            title: "A good prompt",
            kid: "Say the goal. Say the done check. Say the proof you want. Say what you already know. Say the real limits.",
            grownUp: "pstack /poteto-mode: use it when the work needs rigor. Do not treat a time box as done. The work is done when the check passes.",
            sources: ["docs/research.md section 7"]
          }
        ],
        quiz: {
          q: "What must a good brief include?",
          options: [
            { text: "Only the colors", correct: false, why: "Looks are one part. The brief is the handoff." },
            { text: "Target user, problem, outcome, must-haves, what not to build, and done-means", correct: true, why: "That list is Fenech's product brief, which becomes the handoff to the coding agent." },
            { text: "A launch date and nothing else", correct: false, why: "A duration is not a finish condition." }
          ]
        }
      },
      {
        id: "board",
        title: "The board",
        kid: "A board is a shared to-do wall. Each card is one piece of work. Columns show where the card sits.",
        grownUp: "Columns people use: Backlog, Todo, In progress, In review, Done. Bots and cloud agents can read and move cards. Cursor cloud agents can be started from GitHub (comment @cursor on a PR or issue), Linear (@cursor), Slack, web, iOS and the API.",
        cards: [
          {
            title: "What a ticket is",
            kid: "A ticket is one job on a card. Write the goal and how you will know it is done.",
            grownUp: "Write each issue as goal + done-means. Use labels like bug, feature, research. Link the project to the repo so issues and PRs show on the board.",
            sources: ["docs/research.md section 4"]
          },
          {
            title: "Set up GitHub Projects",
            kid: "Make a board. Name the columns. Turn on the built-in moves. Link the repo.",
            grownUp: "Create a project from the GitHub profile > Projects > New project > Board template. Columns: Backlog, Ready, In progress, In review, Done. Turn on built-in workflows (item closed > Done, PR merged > Done). GitHub Projects is an adaptable table, board, and roadmap. Views: table, kanban, roadmap. Up to 50 fields. Built-in automations, GraphQL API and GitHub Actions.",
            sources: ["https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects"]
          },
          {
            title: "Why GitHub first for Viraj",
            kid: "It is free. It sits next to the code. Your GitHub connector already works. You can start a cloud agent with @cursor on an issue.",
            grownUp: "Move to Linear when tickets pile up or a team joins. Linear free tier: unlimited members, 2 teams, 250 issues, Agent platform, Linear Agent. Basic $10 per user/month billed yearly. Business $16. MCP listed under AI and agent workflows. poteto's own loop uses Linear. Pick Azure DevOps only if an employer already runs on Microsoft. Pick Jira only for a big company setup.",
            sources: ["docs/research.md section 4"]
          }
        ],
        quiz: {
          q: "Which board should Viraj start with?",
          options: [
            { text: "Jira", correct: false, why: "Jira is for a big company setup." },
            { text: "GitHub Issues plus a GitHub Project", correct: true, why: "Free, next to the code, GitHub connector already on, and @cursor works on issues." },
            { text: "Azure DevOps", correct: false, why: "Use that only if an employer already runs on Microsoft." }
          ]
        },
        widget: "board"
      },
      {
        id: "code-home",
        title: "Where code lives",
        kid: "A repo is the folder for a project's code, with its whole history, stored online. A branch is a safe copy. Main stays clean. A commit is a saved snapshot.",
        grownUp: "Repos live on GitHub or Cursor Origin. Origin is Cursor's git forge for storing and sharing code, early beta. You can create Origin repositories (including from Cursor agents), mirror a GitHub repository into Origin, open, review, and merge pull requests, and connect automations and cloud agents. Origin is not on free plans. Cloud agents clone your repo from GitHub, GitLab, Azure DevOps Services, or Bitbucket Cloud, work on a separate branch, then push for handoff.",
        cards: [
          {
            title: "Repo, branch, commit, main",
            kid: "Repo = the house. Branch = a copy room. Commit = a photo of the room. Main = the clean hall everyone uses.",
            grownUp: "A branch is a safe copy of the code to try a change. Main stays clean. You put a change into main with a pull request after checks.",
            sources: ["docs/research.md section 5"]
          },
          {
            title: "GitHub and Cursor Origin",
            kid: "GitHub is the common house. Origin is Cursor's own house for code. You already have both connectors. Origin is not on free plans.",
            grownUp: "Use GitHub for public demos and Pages. Use Origin when you want Cursor-hosted repos, mirrors, and agent-native pull requests.",
            sources: ["https://cursor.com/docs/origin"]
          }
        ],
        quiz: {
          q: "What does a branch do?",
          options: [
            { text: "It deletes main", correct: false, why: "Main stays clean. The branch is the copy." },
            { text: "It makes a safe copy so you can try a change", correct: true, why: "A branch is a safe copy of the code. Main stays clean." },
            { text: "It pays for hosting", correct: false, why: "Hosting is a later step." }
          ]
        }
      },
      {
        id: "builders",
        title: "The builders",
        kid: "A local agent works on your laptop while you watch. A cloud agent has its own computer. It can keep going when your laptop is shut. You can run many at once.",
        grownUp: "Cloud agents run in isolated VMs in the cloud with full development environments. They do not require your local machine to be online. Billing is API pricing for the selected model. You set a spend limit when you first start. Secrets go in cursor.com/dashboard/cloud-agents. Formerly called Background Agents. Chris Simpson recap of poteto: Grok Bot is powerful for orchestrating bots. Cursor's harness is really good for coding. Next action: spawn a cloud agent for this repo and come back with a screenshot.",
        cards: [
          {
            title: "Rules and AGENTS.md",
            kid: "Write a short house file so the agent knows how you work. Start small. Add a rule only when the same mistake happens again.",
            grownUp: "Project rules live in .cursor/rules as .mdc files. There are also Team rules, User rules, or a plain AGENTS.md.",
            sources: ["https://cursor.com/docs/rules"]
          },
          {
            title: "pstack and poteto-mode",
            kid: "When the work must be careful, use poteto-mode. Say the goal, the done check, the proof, what you know, and the limits.",
            grownUp: "pstack: use /poteto-mode whenever you're doing anything that requires rigor. /correct finds the pattern if you keep fixing the same mistakes and locks it with architecture, types, and checks. Public tree: github.com/cursor/plugins/tree/main/pstack.",
            sources: ["docs/research.md section 7", "https://x.com/poteto/status/2106542593656111276"]
          }
        ],
        quiz: {
          q: "Where does a cloud agent run?",
          options: [
            { text: "Only on your phone", correct: false, why: "The phone can start the job. The computer is in the cloud." },
            { text: "On its own computer in the cloud, even if your laptop is off", correct: true, why: "Isolated VMs. Many at once. Your machine does not need to stay online." },
            { text: "Inside a tweet", correct: false, why: "X can send the task. It is not where the code is written." }
          ]
        }
      },
      {
        id: "the-pr",
        title: "The PR",
        kid: "A pull request is a polite ask: please put my branch into main. Other robots check it. A person says yes. Then it lands.",
        grownUp: "To merge pull requests you must have write permissions. Cloud agents produce merge-ready PRs with artifacts to demo their changes: screenshots, videos and logs. They subscribe to PRs they create and drive CI and bot comments until the PR is done. Bourke Floyd: Skill encodes the proof. Cloud agent opens the PR. You still gate the merge. Diffs are cheap. Proof is the product.",
        cards: [
          {
            title: "Merge, squash, rebase",
            kid: "Merge keeps every saved snapshot. Squash smushes the work into one snapshot. Rebase lines the snapshots up with no extra join snapshot.",
            grownUp: "GitHub docs: Merge commit preserves every commit. Squash and merge combines all commits in the pull request into a single commit on the base branch. Choose when a pull request represents one logical change. Rebase and merge adds each commit onto the base branch without a merge commit, for a linear history.",
            sources: ["https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges"]
          },
          {
            title: "Proof on the PR",
            kid: "Do not just say it works. Attach a picture, a video, or a log.",
            grownUp: "poteto via Chris Simpson: Grok Bot cloud agents can produce videos (and narrate if you tell them to) and attach them in the pull request description so you review with proof.",
            sources: ["https://x.com/ChrisSimpson/status/2099973597947428927"]
          }
        ],
        quiz: {
          q: "What does squash and merge do?",
          options: [
            { text: "Keeps every commit as-is", correct: false, why: "That is a merge commit." },
            { text: "Combines the PR commits into one commit on the base branch", correct: true, why: "Use it when the PR is one logical change." },
            { text: "Adds each commit with no merge commit", correct: false, why: "That is rebase and merge." }
          ]
        },
        widget: "pr"
      },
      {
        id: "checks",
        title: "The checks",
        kid: "Before main changes, robots test the work. A bug hunter reads the change. A second helper checks the first helper. You still say yes.",
        grownUp: "Gate stack from the dossier: 1) agent tests its own work and attaches proof; 2) CI (GitHub Actions) runs tests; 3) Bugbot reviews; 4) a separate verifier agent checks; 5) branch protection requires checks green and conversations resolved; 6) human approves, or a time-boxed auto-merge like poteto's after 1 hour unless I request changes; 7) merge; 8) deploy; 9) watch. pstack: Green is not safe. Nothing gets armed before an independent per-PR verdict. The agent that judges a change is never the one that wrote it. Babysit stops at merge-ready. It never merges.",
        cards: [
          {
            title: "CI",
            kid: "CI is a robot that runs your tests on every PR.",
            grownUp: "Branch protection can require pull request reviews, status checks, conversation resolution, a merge queue, and successful deployments before merging. Required status checks must have a successful, skipped, or neutral status. You can configure a pull request to merge automatically when all merge requirements are met.",
            sources: ["https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches"]
          },
          {
            title: "Bugbot and the neutral gotcha",
            kid: "Bugbot reads the PR for bugs. If you only require its check, a finding may still let the PR merge. Findings start as neutral, and neutral counts as OK.",
            grownUp: "Bugbot reviews pull requests and identifies bugs, security issues, and code quality problems. It runs on every PR update or when you comment cursor review or bugbot run. Check name: Cursor Bugbot. Requiring the status alone does not block merges on findings because findings default to neutral. Rules live in .cursor/BUGBOT.md. Teach it with @cursor remember [fact]. Autofix spawns a Cloud Agent to fix bugs found during PR reviews, max 3 attempts per PR on the existing branch. Bugbot config is read from the base branch, so a PR cannot change how Bugbot reviews itself. pstack: skeptical posture. They catch real bugs and also file non-issues and nitpicks.",
            sources: ["https://cursor.com/docs/bugbot"]
          },
          {
            title: "Human yes",
            kid: "Even when the lights are green, a person still gates the merge.",
            grownUp: "OpsDaddyAI: one shared task list and nothing shipping without my approval. poteto's loop can rebase and auto-merge after 1 hour unless she requests changes.",
            sources: ["https://x.com/OpsDaddyAI/status/2107785970821333104", "https://x.com/poteto/status/2107510472601985336"]
          }
        ],
        quiz: {
          q: "Why can a PR still merge after Bugbot finds a bug?",
          options: [
            { text: "Bugbot findings default to neutral, and required checks treat neutral as OK", correct: true, why: "Requiring the status alone does not block merges on findings." },
            { text: "Bugbot never finds bugs", correct: false, why: "It does find bugs. The gotcha is the check state." },
            { text: "GitHub ignores all checks", correct: false, why: "Checks work. Neutral is the hole." }
          ]
        }
      },
      {
        id: "going-live",
        title: "Going live",
        kid: "Dev is your sandbox. Staging is a practice copy users do not see. Prod is the real thing. Staging healthy does not mean prod is healthy.",
        grownUp: "CI is robot checks on every PR. CD is the robot that deploys after merge. Branch protection can require deployments to succeed before merging, for example a staging deploy first. Hosting: GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript straight from a repository. Project sites live at https://<owner>.github.io/<repositoryname>. Custom domains supported. For apps with logins and data, Fenech's simple stack is Supabase (database, auth, storage), Vercel (frontend), Stripe (payments if needed). Don't over-engineer version one.",
        cards: [
          {
            title: "Database and auth",
            kid: "A database is where the app remembers things. Auth is how it knows who you are. Supabase can do both.",
            grownUp: "Fenech: keep the stack simple for version one. Hand the cloud agent the Supabase structure with the brief.",
            sources: ["https://x.com/Michael_Fenech_/status/2098648714315452812"]
          },
          {
            title: "Secrets and API keys",
            kid: "An API key is a password for an app. Do not paste it in chat. Do not save it in the repo.",
            grownUp: "Cursor cloud agent secrets go in the dashboard Secrets tab and are injected when an agent starts. 0xCodila: create API key (keep it off chat paste), then store TYPESAFE_API_KEY in the secure field.",
            sources: ["https://cursor.com/docs/cloud-agent", "https://x.com/0xCodila/status/2101433560796467348"]
          }
        ],
        quiz: {
          q: "What is prod?",
          options: [
            { text: "Your private sandbox", correct: false, why: "That is dev." },
            { text: "A practice copy users do not see", correct: false, why: "That is staging." },
            { text: "The real live product", correct: true, why: "Staging healthy is not the same as prod healthy." }
          ]
        }
      },
      {
        id: "watching",
        title: "Watching it",
        kid: "After it is live, watch what breaks, what people use, and what they say. Send that back to the board.",
        grownUp: "Andrew Ng: build observability mechanisms to understand the system's performance on real usage. Track performance, detect drift, and respond quickly to model failures and security incidents. Fenech step 7: watch what they understand, what confuses them, what they use, what they ignore, whether they come back. Then Problem, Research, Brief, Build, Deploy, Users, Feedback, Improve.",
        cards: [
          {
            title: "Error tracking",
            kid: "A bot can watch new breaks so you do not live in the error app.",
            grownUp: "Pinuts_: I made a Grok Bot that watches production errors. Hunts new breaks so you don't live in Sentry. Only NEW errors, not old noise. mikebmorris73: Daily check on Production errors so I hear about real problems without having to open Sentry. Morning Digest with GitHub, Vercel and Stripe to check on failed or stuck deploys.",
            sources: [
              "https://x.com/Pinuts_/status/2100600163974721975",
              "https://x.com/mikebmorris73/status/2106440610744021445"
            ]
          },
          {
            title: "Cursor Rollouts",
            kid: "Rollouts watches if a change made the product worse. It finds the PR and opens an issue. One tap can start a fixer. It does not merge or roll back on its own.",
            grownUp: "Via @cursor_ai, retweeted by poteto. Summaries say it is for Teams and Enterprise, and reports verified healthy, regression detected, or inconclusive per environment.",
            sources: [
              "https://x.com/poteto/status/2106080106313888079",
              "https://x.com/AverageAiBro/status/2103102663856623683"
            ]
          },
          {
            title: "Videos as proof",
            kid: "Ask the bot to film the screen while it works. That is a fast way to see if the job is done.",
            grownUp: "Chris Simpson: you can always ask your bot to take a video of the surface while it's doing its work, which has become the fastest way to verify if something is done.",
            sources: ["https://x.com/ChrisSimpson/status/2100008272367624581"]
          },
          {
            title: "Feedback from X",
            kid: "Ask a bot to watch X for notes about your product. Feature ideas go to the board. Bugs go to a cloud agent.",
            grownUp: "poteto: ask your Grok Bot to monitor X for user feedback on your products. Send feature requests to your issue tracker, bug reports to a cursor cloud agent or project to triage and fix. The loop is complete.",
            sources: ["https://x.com/poteto/status/2107963437154435182"]
          }
        ],
        quiz: {
          q: "What does Cursor Rollouts do when it sees a bad change?",
          options: [
            { text: "Merges a fix by itself", correct: false, why: "It does not merge or roll back on its own." },
            { text: "Finds the PR, opens an issue, and one click can start a cloud agent", correct: true, why: "That is the loop poteto shared from Cursor." },
            { text: "Deletes the repo", correct: false, why: "It opens an issue. It does not delete code." }
          ]
        }
      },
      {
        id: "bot-team",
        title: "Your bot team",
        kid: "You are the boss. A front door bot hears every ask. An architect turns asks into tickets and starts builders. Builders write code. A reviewer checks. A research bot finds sources. Support bots help.",
        grownUp: "poteto's chain (Peter Yang interview): you, chief of staff, eng lead that never codes and only delegates, engineer bots, cloud agents. She set engineer bots up with Dr. Eggbot. Morlex: one eng lead bot breaks down the project, delegates to other eng bots, those bots spin up coding agents, results come back for review. 0xRafy: Orchestrator, Research, Builder, Critic, Verifier. Michael Fenech: Give each Grok Bot one clear job. Don't start with Be my general business assistant. Peter Yang: most people are not capable of driving more than 4-5 threads at once without getting overwhelmed.",
        cards: [
          {
            title: "How to set one up",
            kid: "Name the bot after the job. Write the rules. Point it at the house rules. Turn on ask-first for send, post, buy, delete.",
            grownUp: "Suggested team for Viraj, as examples he can rename: Front door / Primary (Big Bot); Architect (eng lead); Builder cloud agents; Reviewer (Bugbot plus a separate verifier); Research bot; Teacher/mentor (Mentor) and bot-maker (dr eggbot); Midas for costs if that is its job.",
            sources: ["docs/research.md section 8"]
          },
          {
            title: "Getting a research bot",
            kid: "Do not say research this deeply. That has no finish line. Give one measurable outcome, best sources first, a label on every claim, a stop rule, and a clean handoff.",
            grownUp: "ludoonchart: use one measurable outcome, primary sources first, evidence beside every important claim, clear approval boundaries, bounded retries, an explicit stop condition, a clean handoff. Labels: VERIFIED / INFERRED / UNKNOWN. Run it manually, get two clean runs, save the stable method as a skill, only then attach a routine. Research uses X for free inside Grok Bot.",
            sources: ["https://x.com/ludoonchart/status/2107191775433543884"]
          }
        ],
        quiz: {
          q: "What should the architect (eng lead) never do?",
          options: [
            { text: "Launch cloud agents", correct: false, why: "That is the job: launch and supervise." },
            { text: "Write the code itself or ship unverified work", correct: true, why: "An eng lead bot never writes code and never ships unverified work." },
            { text: "Make tickets", correct: false, why: "Turning asks into briefs and tickets is the job." }
          ]
        },
        widget: "team"
      },
      {
        id: "safe-budget",
        title: "Staying safe and on budget",
        kid: "Ask first before anything leaves the box. Keep secrets out of chat. Set a spend limit. Do not let a timer run hundreds of empty jobs.",
        grownUp: "Auto Review: Ask first and Allow automatically. Both match? Ask first wins. Andrew Ng on sandboxes: a sandbox gives an agent limited permissions. Secret API keys, browser login credentials, and arbitrary websites are inaccessible by default. These restrictions are implemented in deterministic code rather than by prompting an LLM. Cloud agents support restricting outbound domains and secrets. whaleyxbt on poteto's workflow: an ask first line it never crosses: no slack posts, no prod data. It stops before anything leaves staging and shows the evidence.",
        cards: [
          {
            title: "Costs",
            kid: "Cloud agents bill at model prices. You set a spend limit. Bugbot is usage-based. Autofix uses cloud agent credits.",
            grownUp: "Routine cost trap from GrokBotRadar: a routine firing 672 times a week. Every run rereads the Bot's whole chat. Even the runs that find nothing. Fix: hourly. 168 runs. Same signal. Includes a usage-audit prompt. A user complaint to watch: a bot burned through 30% of my weekly usage for 1 PR. ronyspark: Grok Bot for coordination. Cursor cloud agents plus Grok Build for anything that can be specified as a task. News (unconfirmed in the dossier): Grok, Cursor and X may share ONE shared usage pool (GrokBotRadar, 8 Oct 2026).",
            sources: [
              "https://x.com/GrokBotRadar/status/2106501043160854740",
              "https://x.com/overlordayn/status/2107475997360611469",
              "https://x.com/ronyspark/status/2102970317828501963",
              "https://x.com/GrokBotRadar/status/2108248025537908833"
            ]
          }
        ],
        quiz: {
          q: "If Auto Review has both Ask first and Allow automatically, who wins?",
          options: [
            { text: "Allow automatically", correct: false, why: "Ask first wins when both match." },
            { text: "Ask first", correct: true, why: "GrokBotRadar: Both match? Ask first wins." },
            { text: "The newest bot", correct: false, why: "The setting order is the rule, not the bot age." }
          ]
        }
      },
      {
        id: "trust",
        title: "Trust and automation",
        kid: "First you watch. Then you correct. Then you save the recipe. Then you let a timer run it. Do not jump from one prompt to a routine.",
        grownUp: "Peter Yang quoting poteto: Everything I touch with my keyboard and mouse, I try to delegate to my bots. It ultimately comes back to trust. First, watch your bot work and correct it. Turn what worked into a skill. Once it nails the task in one shot, make it a routine. Michael Fenech: The mistake is going Prompt to Routine. I'd go Task, Fix, Skill, Test, Routine. pstack overnight rule: make a loop autonomous only after you've done the task once by hand, and every stage proves its work and can stop the line.",
        cards: [
          {
            title: "Webhooks",
            kid: "A webhook is a doorbell from another app. It can wake a routine.",
            grownUp: "Michael Fenech posted that webhooks wake routines from other apps.",
            sources: ["https://x.com/Michael_Fenech_/status/2108216597181841503"]
          },
          {
            title: "Routine drift",
            kid: "A routine that still runs is not always a good routine. Check it.",
            grownUp: "Michael Fenech: A reliable routine is not necessarily a good routine.",
            sources: ["https://x.com/Michael_Fenech_/status/2103386523001299306"]
          }
        ],
        quiz: {
          q: "What is the trust ladder?",
          options: [
            { text: "Watch and correct, then save a skill, then make a routine", correct: true, why: "Watch, correct, skill, then routine once it nails the task in one shot." },
            { text: "Routine first, then watch", correct: false, why: "Prompt to routine is the mistake Fenech named." },
            { text: "Merge first, then test", correct: false, why: "Proof comes before merge." }
          ]
        }
      },
      {
        id: "memory",
        title: "Memory and docs",
        kid: "Bots forget across heads. Put the lasting rules in Notion and in a house folder. Meet once a week. Turn fixes into rules.",
        grownUp: "Viraj has a Notion connector. Notion holds briefs, decisions and the playbook. Bots read it through the connector. House rules folder in /workspace that every bot reads first. Weekly 15-minute huddle with your chief of staff, 7 questions, ending with update anything that should become part of how you work with me going forward. Plus a correction audit prompt so fixes become permanent rules.",
        cards: [
          {
            title: "Weekly huddle",
            kid: "Fifteen minutes. You and the chief of staff. End by saving what should become how you work.",
            grownUp: "Michael Fenech's huddle is the source. The company-demos Weekly Drift Huddle is a separate demo of that loop. This page only uses the dossier fact: 15 minutes, 7 questions, update working rules at the end.",
            sources: ["https://x.com/Michael_Fenech_/status/2104974233184948695"]
          },
          {
            title: "Correction audit",
            kid: "If you keep saying the same fix, write it down so the next run already knows.",
            grownUp: "Fenech shared a correction audit prompt so fixes become permanent rules. pstack /correct is the same idea on the coding side.",
            sources: ["https://x.com/Michael_Fenech_/status/2104662176661180776"]
          }
        ],
        quiz: {
          q: "What is the house rules folder for?",
          options: [
            { text: "A shared file every bot reads first, because bots do not share a brain", correct: true, why: "GrokBotRadar: they don't share a brain, so give them one folder and one line: read it first." },
            { text: "A place to hide API keys", correct: false, why: "Secrets stay in the dashboard, not in chat or a shared note." },
            { text: "A Linear board", correct: false, why: "A board holds tickets. House rules hold how you work." }
          ]
        }
      },
      {
        id: "setup-checklist",
        title: "Your setup checklist",
        kid: "Do these in order. Each line has a why. Tick a box. It stays ticked if you come back.",
        grownUp: "Order comes from dossier section 16. Routines are last, after two clean manual runs, with a usage audit. Viraj already has GitHub, Notion, X (built in), and Cursor Origin.",
        cards: [
          {
            title: "Why this order",
            kid: "First the front door and the rules. Then the repo and the board. Then builders, checks, hosting, and watchers. Timers last.",
            grownUp: "Section 17 also flags gaps this page teaches: idea validation, briefs with done-means, repo basics, local vs cloud, proof, CI/CD, environments, secrets, hosting, data, monitoring, costs, sandboxes, the trust ladder, routines, docs, and the weekly huddle.",
            sources: ["docs/research.md section 16"]
          }
        ],
        quiz: {
          q: "When do you add a routine?",
          options: [
            { text: "First thing on day one", correct: false, why: "Routines are last." },
            { text: "After two clean manual runs, with a usage audit", correct: true, why: "Run it by hand, get two clean runs, save a skill, then attach a routine." },
            { text: "Instead of a brief", correct: false, why: "The brief comes near the start. The routine comes last." }
          ]
        },
        widget: "checklist"
      },
      {
        id: "from-x",
        title: "From X",
        kid: "These are real posts from the research file. Each one has a short takeaway. The link opens X in a new tab.",
        grownUp: "Every post below was fetched with the X connector in the research session. Do not add posts, numbers, or handles that are not in docs/research.md.",
        cards: [
          {
            title: "How to read them",
            kid: "Read the takeaway first. Open the post if you want the full thread.",
            grownUp: "Quotes are verbatim from the dossier. Typos kept. Links are plain anchors only. No embeds and no images from other hosts.",
            sources: ["docs/research.md"]
          }
        ],
        quiz: {
          q: "Who said they shipped 2,500 PRs in a month?",
          options: [
            { text: "poteto", correct: true, why: "poteto: here's how i shipped 2,500 PRs last month to production." },
            { text: "Karpathy", correct: false, why: "Karpathy wrote about interactive pages." },
            { text: "Linear", correct: false, why: "Linear is a board, not the author of that post." }
          ]
        },
        widget: "x"
      },
      {
        id: "glossary",
        title: "Glossary",
        kid: "Hard words, said simply. Type to filter.",
        grownUp: "Terms below are the ones this lesson uses. Kid wording only. No new product claims.",
        cards: [
          {
            title: "If a word is missing",
            kid: "It was not in the lesson, so it is not here.",
            grownUp: "The glossary is a filter over the teaching terms, not a second research pass.",
            sources: ["docs/research.md"]
          }
        ],
        quiz: {
          q: "What is a pull request (PR)?",
          options: [
            { text: "A live website", correct: false, why: "The live site is what you deploy after merge." },
            { text: "A request to put your branch into main after checks", correct: true, why: "A PR is the polite ask, plus robots and a human gate." },
            { text: "A spend limit", correct: false, why: "A spend limit caps cloud agent cost." }
          ]
        },
        widget: "glossary"
      }
    ],

    pipeline: [
      { id: "idea", label: "Idea", kid: "Name the person who is stuck and what hurts.", grownUp: "Fenech step 1: who the user is, what problem they have, how they solve it today, why today is frustrating.", whoDoesIt: "You. The founder starts with the problem." },
      { id: "validate", label: "Validate", kid: "Look for proof. Poke holes in your own idea.", grownUp: "Market research and assumption challenges. Bot gathers evidence. Founder decides which market is worth entering.", whoDoesIt: "Research bot gathers. You decide." },
      { id: "brief", label: "Brief", kid: "Write the one-page handoff: who, why, done-means, what not to build.", grownUp: "Target user, core problem, outcome, must-haves, what NOT to build, edge cases, MVP. pstack adds goal, done check, proof, what you know, constraints.", whoDoesIt: "You, with the architect bot drafting." },
      { id: "ticket", label: "Board ticket", kid: "Put one job on the wall. Goal plus done-means.", grownUp: "A GitHub Issue on a Project board. Labels. Built-in automations. @cursor can start a cloud agent from the issue.", whoDoesIt: "You or the architect bot." },
      { id: "branch", label: "Branch", kid: "Make a safe copy so main stays clean.", grownUp: "Cloud agents clone the repo and work on a separate branch, then push for handoff.", whoDoesIt: "The cloud agent." },
      { id: "agent", label: "Cloud agent", kid: "A builder with its own computer writes the change while your laptop can be off.", grownUp: "Isolated VM, full environment, spend limit, dashboard secrets. Attach the brief, user flow, and definition of done.", whoDoesIt: "Cursor cloud agent, started by you or a bot." },
      { id: "pr", label: "PR", kid: "The builder asks to put the copy into main, with proof.", grownUp: "Merge-ready PR with screenshots, videos, and logs. The agent stays subscribed and drives comments.", whoDoesIt: "The cloud agent opens it. You still gate merge." },
      { id: "ci", label: "CI + AI review", kid: "Robots run tests. Bugbot hunts bugs. A second helper checks the first.", grownUp: "GitHub Actions plus Cursor Bugbot. Remember the neutral-check gotcha. The judge is never the writer. pstack: green is not safe.", whoDoesIt: "GitHub Actions, Bugbot, and a separate verifier." },
      { id: "approve", label: "Human approve", kid: "A person looks at the proof and says yes.", grownUp: "Nothing ships without approval, or a time box like poteto's 1 hour unless she requests changes.", whoDoesIt: "You." },
      { id: "merge", label: "Merge", kid: "The copy lands on main. Pick merge, squash, or rebase.", grownUp: "Needs write permission. Merge keeps every commit. Squash is one logical commit. Rebase is a linear history.", whoDoesIt: "You, or auto-merge after the gates." },
      { id: "deploy", label: "Deploy", kid: "Put the app on the web. Practice copy first if you can.", grownUp: "GitHub Pages for static sites. Vercel plus Supabase when you need logins and data. Staging is not prod.", whoDoesIt: "CD, Pages, or Vercel. You pick the host." },
      { id: "monitor", label: "Monitor", kid: "Watch new breaks and bad changes.", grownUp: "Sentry bot for only new errors. Cursor Rollouts finds the offending PR and opens an issue. It does not merge or roll back on its own.", whoDoesIt: "A watcher bot plus Rollouts. You still decide the fix." },
      { id: "feedback", label: "Feedback", kid: "Hear what people use and say. Send it back to the idea.", grownUp: "Watch X for product feedback. Feature requests to the tracker. Bugs to a cloud agent. Fenech loop: Problem, Research, Brief, Build, Deploy, Users, Feedback, Improve.", whoDoesIt: "Grok Bot watches. You rank what matters." }
    ],

    prLifecycle: [
      { state: "branch made", kid: "A safe copy of the repo now exists.", grownUp: "The cloud agent cloned the repo and opened a separate branch.", actor: "Cloud agent" },
      { state: "code written", kid: "The change is on that copy.", grownUp: "The agent works in an isolated VM with the brief and the definition of done.", actor: "Cloud agent" },
      { state: "PR opened", kid: "The builder asks to put the copy into main, with proof.", grownUp: "Merge-ready PR plus screenshots, videos, or logs.", actor: "Cloud agent" },
      { state: "CI running", kid: "A robot is running the tests.", grownUp: "GitHub Actions on every PR.", actor: "CI" },
      { state: "Bugbot comments", kid: "The bug hunter leaves notes.", grownUp: "Cursor Bugbot on every update, or when you comment cursor review or bugbot run. Stay skeptical of nits.", actor: "Bugbot" },
      { state: "agent fixes", kid: "The builder tries again on the same branch.", grownUp: "Autofix can spawn a cloud agent, max 3 attempts per PR on the existing branch. The original agent also drives comments.", actor: "Cloud agent" },
      { state: "checks green", kid: "The lights look good. That is not the same as safe.", grownUp: "Required checks may be successful, skipped, or neutral. Bugbot findings default to neutral. Green is not safe until a separate verdict.", actor: "CI + reviewer" },
      { state: "human approves", kid: "You look at the proof and say yes.", grownUp: "Or a time-boxed auto-merge after 1 hour unless you request changes.", actor: "You" },
      { state: "merged", kid: "The copy is now part of main.", grownUp: "Merge commit, squash, or rebase. Write permission required.", actor: "You" },
      { state: "deployed", kid: "The live app (or the practice copy) updated.", grownUp: "CD after merge. Pages for static. Vercel when you need an app host.", actor: "Host" },
      { state: "monitored", kid: "Watchers look for new breaks and user notes.", grownUp: "Sentry for new errors. Rollouts for regressions. X for feedback back to the board.", actor: "Watcher bot + you" }
    ],

    team: [
      { id: "you", role: "You", job: "Pick the market, write the brief, approve merges, and decide what is worth building.", neverDoes: "Hand those calls to a bot.", reportsTo: "No one. You are the founder." },
      { id: "front-door", role: "Front door / Primary", job: "Take every ask, route it to the bot named for the job, stay quiet otherwise, and draft before anything sends, books, or pays.", neverDoes: "Do the specialist work itself. Your best worker should not be the primary.", reportsTo: "You" },
      { id: "architect", role: "Architect (eng lead)", job: "Turn asks into briefs and tickets. Launch and supervise cloud agents.", neverDoes: "Write the code or ship unverified work. poteto: the eng lead never writes code and always delegates.", reportsTo: "Front door, then you" },
      { id: "builder", role: "Builder cloud agents", job: "Write code on their own computers. Open PRs with proof.", neverDoes: "Merge to main. Merging is a different decision.", reportsTo: "Architect" },
      { id: "reviewer", role: "Reviewer", job: "Bugbot plus a separate verifier. Attack weak logic. Check every claim.", neverDoes: "Judge a change it wrote. The agent that judges is never the one that wrote it.", reportsTo: "You" },
      { id: "research", role: "Research bot", job: "Find and cite sources. Label VERIFIED, INFERRED, or UNKNOWN. Stop when the stop rule says stop.", neverDoes: "Decide which market to enter. That is the founder.", reportsTo: "Front door" },
      { id: "support", role: "Support bots", job: "Examples: Mentor teaches, dr eggbot makes other bots, Midas can track spend if that is the job.", neverDoes: "Replace you. These are examples. You name the jobs.", reportsTo: "You" }
    ],

    boards: [
      {
        name: "GitHub Projects",
        bestFor: "A solo builder whose code already lives on GitHub.",
        freeTier: "Free with your GitHub account. Table, board, and roadmap. Up to 50 fields. Built-in automations.",
        agentFit: "Viraj already has the GitHub connector. Comment @cursor on an issue or PR to start a cloud agent.",
        verdict: "Start here. It sits next to the code and the PRs."
      },
      {
        name: "Linear",
        bestFor: "When tickets pile up or a team joins. poteto's loop uses Linear.",
        freeTier: "Free $0: unlimited members, 2 teams, 250 issues, Agent platform, Linear Agent. Basic $10 per user/month billed yearly. Business $16.",
        agentFit: "Cursor supports @cursor in Linear. MCP access is listed under AI and agent workflows.",
        verdict: "Later. The free tier caps at 250 issues."
      },
      {
        name: "Azure DevOps",
        bestFor: "An employer already on Microsoft.",
        freeTier: "First five users get a Basic license free. Extra users $6 per user/month. Free tier includes 1 hosted CI/CD job with 1,800 minutes/month.",
        agentFit: "Cloud agents can clone from Azure DevOps Services.",
        verdict: "Only if work already lives here."
      },
      {
        name: "Jira",
        bestFor: "A big company setup.",
        freeTier: "Free for up to 10 users, no time limit. Scrum and Kanban boards. 2 GB storage.",
        agentFit: "Not Viraj's default. Extra product, extra login.",
        verdict: "Skip unless a company already runs on Jira."
      }
    ],

    checklist: [
      { key: "front-door", order: 1, label: "Primary / front-door bot with Auto Review on", why: "Ask first for send, post, buy, delete." },
      { key: "connectors", order: 2, label: "Connectors: GitHub, Notion, X. Origin if you want Cursor-hosted repos", why: "Viraj already has these. X is built in." },
      { key: "house-rules", order: 3, label: "House rules note that every bot reads first", why: "Bots do not share a brain." },
      { key: "repo-protect", order: 4, label: "One GitHub repo per product with main protected", why: "Require a PR, require checks, resolve conversations." },
      { key: "project-board", order: 5, label: "GitHub Project board linked to the repo", why: "A shared wall next to the code." },
      { key: "cursor-setup", order: 6, label: "Cursor paid plan, GitHub, spend limit, secrets, AGENTS.md", why: "Cloud agents need a limit, secrets, and rules." },
      { key: "pstack", order: 7, label: "Install pstack and use poteto-mode for real builds", why: "Rigor: goal, done check, proof, knowledge, constraints." },
      { key: "bugbot", order: 8, label: "Turn on Bugbot. Require the Cursor Bugbot check", why: "Consider fail-on-unresolved. Neutral findings will not block on their own." },
      { key: "ci", order: 9, label: "CI with GitHub Actions on every PR", why: "Robot tests before a human yes." },
      { key: "hosting", order: 10, label: "Hosting: Pages for static. Vercel + Supabase for logins and data", why: "Keep staging and prod separate." },
      { key: "sentry", order: 11, label: "Error tracking and a bot that reports only new errors", why: "So you do not live in Sentry." },
      { key: "research-bot", order: 12, label: "Research bot with stop conditions and evidence labels", why: "VERIFIED / INFERRED / UNKNOWN." },
      { key: "routines-last", order: 13, label: "Routines last, after two clean manual runs", why: "Then run a usage audit so a timer cannot fire 672 empty jobs." }
    ],

    glossary: [
      { term: "Repo", kid: "The folder for a project's code and its history, stored online." },
      { term: "Branch", kid: "A safe copy of the code so main stays clean." },
      { term: "Commit", kid: "A saved snapshot of the code." },
      { term: "Main", kid: "The clean line everyone ships from." },
      { term: "Pull request", kid: "A request to put a branch into main after checks." },
      { term: "Merge commit", kid: "Keeps every commit from the PR." },
      { term: "Squash", kid: "Smushes the PR into one commit on main." },
      { term: "Rebase", kid: "Lines PR commits onto main with no extra join commit." },
      { term: "Board", kid: "A shared to-do wall with columns." },
      { term: "Ticket", kid: "One job on a card. Goal plus done-means." },
      { term: "Description", kid: "The rules of a bot." },
      { term: "Skill", kid: "The how-to recipe." },
      { term: "Routine", kid: "The when: a clock or a doorbell." },
      { term: "Primary bot", kid: "The front door that routes work. Not the best worker." },
      { term: "Cloud agent", kid: "A builder with its own computer in the cloud." },
      { term: "Local agent", kid: "A helper that runs on your laptop while you watch." },
      { term: "CI", kid: "Robot tests on every PR." },
      { term: "CD", kid: "A robot that deploys after merge." },
      { term: "Bugbot", kid: "Cursor's PR reviewer. Findings start as neutral." },
      { term: "Verifier", kid: "A second helper that did not write the change." },
      { term: "Branch protection", kid: "Rules that block a sloppy merge." },
      { term: "Dev", kid: "Your sandbox." },
      { term: "Staging", kid: "A practice copy users do not see." },
      { term: "Prod", kid: "The real live product." },
      { term: "Secret", kid: "An API key. Keep it out of chat and git." },
      { term: "Spend limit", kid: "The cap you set before cloud agents run." },
      { term: "Sandbox", kid: "A box with tight permissions, enforced by code, not by a prompt." },
      { term: "Auto Review", kid: "Ask first wins over allow automatically." },
      { term: "Webhook", kid: "A doorbell from another app that can wake a routine." },
      { term: "House rules", kid: "A shared file every bot reads first." },
      { term: "Origin", kid: "Cursor's git forge. Early beta. Not on free plans." },
      { term: "GitHub Pages", kid: "A host for HTML, CSS, and JS straight from a repo." },
      { term: "Supabase", kid: "Database, auth, and storage for version one." },
      { term: "Rollouts", kid: "Watches for a bad change, opens an issue, does not merge by itself." }
    ],

    xPosts: [
      { handle: "karpathy", url: "https://x.com/karpathy/status/2105819303471976479", quote: "Web pages. Ask for output \"in HTML\" to get a beautiful, interactive webpage. LLMs are getting really good at frontend and can create beautiful experiences, animations, etc.", takeaway: "Ask for a page, not a wall of words." },
      { handle: "Kcon2026", url: "https://x.com/Kcon2026/status/2103707067789816203", quote: "Grok Bot is a staff, not one butler. You create named bots (\"Shopping Bot,\" \"Research Bot,\" etc.). They share one cloud computer with a real browser, files, and a terminal. They can keep working while your phone is off.", takeaway: "Name bots. Share one box. They work while you sleep." },
      { handle: "GrokBotRadar", url: "https://x.com/GrokBotRadar/status/2106860159595425975", quote: "Description = the rules. Skill = the how. Routine = the when.", takeaway: "Rules, recipe, clock. Do not mix them up." },
      { handle: "GrokBotRadar", url: "https://x.com/GrokBotRadar/status/2108119717743624676", quote: "Your best Grok Bot should NOT be your primary. ... It's a front door. Not a worker.", takeaway: "The boss of routing is not your best maker." },
      { handle: "poteto", url: "https://x.com/poteto/status/2107510472601985336", quote: "the first mile is figuring out what work you should even be doing at all ... the last mile involves actually following through and closing the loop. ... this is where Bot can hand off tasks to Cursor - our engineering focused agents that can write code in the cloud, on their own computers.", takeaway: "Bot picks the work. Cursor agents write it on their own computers." },
      { handle: "poteto", url: "https://x.com/poteto/status/2107963437154435182", quote: "ask your Grok @Bot to monitor X for user feedback on your products! send feature requests to your issue tracker, bug reports to a cursor cloud agent or project to triage and fix. the loop is complete", takeaway: "X to board to fixer. That is the loop." },
      { handle: "poteto", url: "https://x.com/poteto/status/2102050467505430555", quote: "here's how i shipped 2,500 PRs last month to production", takeaway: "Scale is real when the loop is tight." },
      { handle: "jorgediazapps", url: "https://x.com/jorgediazapps/status/2103499532478918816", quote: "Flow: send a task (even from my iPhone) → agent opens its own branch → Bugbot reviews → merge → deploy. 148 PRs in 30 days.", takeaway: "Phone to branch to review to live. 148 PRs in 30 days." },
      { handle: "petergyang", url: "https://x.com/petergyang/status/2104213287353356531", quote: "I think it ultimately comes back to trust. First, watch your bot work and correct it. Turn what worked into a skill. Once it nails the task in one shot, make it a routine.", takeaway: "Watch, correct, skill, then routine." },
      { handle: "Michael_Fenech_", url: "https://x.com/Michael_Fenech_/status/2106352565528977469", quote: "The mistake is going: Prompt → Routine. I'd go: Task → Fix → Skill → Test → Routine", takeaway: "Do not jump from one prompt to a timer." },
      { handle: "GrokBotRadar", url: "https://x.com/GrokBotRadar/status/2106501043160854740", quote: "a routine firing 672 times a week. Every run rereads the Bot's whole chat. Even the runs that find nothing.", takeaway: "Hourly (168) can keep the same signal for less." },
      { handle: "GrokBotRadar", url: "https://x.com/GrokBotRadar/status/2107590731569443193", quote: "Your Grok Bot should NEVER send an email you didn't see first. It also shouldn't ask permission for every boring step. One setting fixes both. Auto Review. ... Ask first and Allow automatically. Both match? Ask first wins.", takeaway: "Ask first wins." },
      { handle: "AndrewYNg", url: "https://x.com/AndrewYNg/status/2104660347730969087", quote: "A sandbox gives an agent limited permissions. ... Secret API keys, your web browser login credentials, the ability to access arbitrary websites, are inaccessible to the agent by default. These restrictions are implemented in deterministic code rather than by prompting an LLM, which can make mistakes or be susceptible to prompt injections.", takeaway: "Lock the box with code, not with a wish." },
      { handle: "ludoonchart", url: "https://x.com/ludoonchart/status/2107191775433543884", quote: "\"research this deeply\" sounds good, but it gives the agent no finish line, no source hierarchy and no reason to stop browsing", takeaway: "Give a stop rule and VERIFIED / INFERRED / UNKNOWN labels." },
      { handle: "ethereaglehq", url: "https://x.com/ethereaglehq/status/2106500543090966537", quote: "Cursor cloud agents subscribe to PRs they create. they drive CI and bot comments until the PR is done.", takeaway: "The builder stays on the PR until the loop closes." },
      { handle: "BourkeFloyd", url: "https://x.com/BourkeFloyd/status/2099963986632671234", quote: "Skill encodes the proof. Cloud agent opens the PR. You still gate the merge. Diffs are cheap. Proof is the product", takeaway: "You still say yes. Proof is the product." }
    ]
  };

  const seen = new Set();
  const answered = new Set();
  let uid = 0;
  const nextId = (prefix) => `${prefix}-${++uid}`;

  const esc = (value) => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  function setProgress() {
    const total = DATA.chapters.length * 2;
    const score = seen.size + answered.size;
    const pct = total ? Math.round((score / total) * 100) : 0;
    const bar = document.querySelector("[data-testid=progress]");
    const fill = document.getElementById("progress-fill");
    const text = document.getElementById("progress-text");
    if (!bar) return;
    bar.setAttribute("data-progress", String(pct));
    bar.setAttribute("aria-valuenow", String(pct));
    if (fill) fill.style.width = `${pct}%`;
    if (text) text.textContent = `${pct} percent`;
  }

  function markSeen(id) {
    if (!id || seen.has(id)) return;
    seen.add(id);
    setProgress();
  }

  function markAnswered(id) {
    if (!id || answered.has(id)) return;
    answered.add(id);
    setProgress();
  }

  function renderToggle(grownUp, sources) {
    const bodyId = nextId("card-body");
    const src = (sources || []).map((s) => esc(s)).join(" ");
    return `
      <button type="button" data-testid="card-toggle" aria-expanded="false" aria-controls="${bodyId}">Grown-up version</button>
      <div data-testid="card-body" id="${bodyId}" hidden>
        <p class="grown">${esc(grownUp)}</p>
        ${src ? `<p class="sources">Sources: ${src}</p>` : ""}
      </div>
    `;
  }

  function renderCard(card) {
    return `
      <article class="card">
        <h3>${esc(card.title)}</h3>
        <p class="badge">Like I'm 6</p>
        <p class="kid">${esc(card.kid)}</p>
        ${renderToggle(card.grownUp, card.sources)}
      </article>
    `;
  }

  function renderQuiz(chapter) {
    const quiz = chapter.quiz;
    const options = quiz.options.map((opt) => `
      <button type="button" data-testid="quiz-option" data-correct="${opt.correct ? "true" : "false"}" data-why="${esc(opt.why)}">${esc(opt.text)}</button>
    `).join("");
    return `
      <div class="quiz" data-testid="quiz" data-chapter="${esc(chapter.id)}">
        <h3>Check</h3>
        <p>${esc(quiz.q)}</p>
        <div class="stack">${options}</div>
        <p data-testid="quiz-feedback" class="quiz-feedback" hidden></p>
      </div>
    `;
  }

  function renderPipeline() {
    const buttons = DATA.pipeline.map((step, i) => `
      <button type="button" class="pipeline-step" data-testid="pipeline-step" data-id="${esc(step.id)}" aria-pressed="${i === 0 ? "true" : "false"}">
        <span class="step-index">Step ${i + 1} of ${DATA.pipeline.length}</span>
        ${esc(step.label)}
      </button>
    `).join("");
    const first = DATA.pipeline[0];
    return `
      <section class="widget" data-testid="pipeline">
        <h2>The path</h2>
        <p class="kid">Tap a step. See who does it. The last step sends you back to the idea.</p>
        <div class="stack">${buttons}</div>
        <div class="detail" data-testid="pipeline-detail">${pipelineCopy(first)}</div>
      </section>
    `;
  }

  function pipelineCopy(step) {
    return `<p class="badge">${esc(step.label)}</p><p>${esc(step.kid)}</p><p>${esc(step.grownUp)}</p><p class="who"><strong>Who does it.</strong> ${esc(step.whoDoesIt)}</p>`;
  }

  function renderBoardPicker() {
    const buttons = DATA.boards.map((board, i) => `
      <button type="button" class="board-option" data-testid="board-option" data-name="${esc(board.name)}" aria-pressed="${i === 0 ? "true" : "false"}">${esc(board.name)}</button>
    `).join("");
    return `
      <section class="widget" data-testid="board-picker">
        <h2>Pick a board</h2>
        <p class="kid">Tap a name. See if it fits a solo builder with bots.</p>
        <div class="stack">${buttons}</div>
        <div class="detail" data-testid="board-result">${boardCopy(DATA.boards[0])}</div>
      </section>
    `;
  }

  function boardCopy(board) {
    return `
      <p class="badge">${esc(board.name)}</p>
      <p><strong>Best for.</strong> ${esc(board.bestFor)}</p>
      <p><strong>Free tier.</strong> ${esc(board.freeTier)}</p>
      <p><strong>Agent fit.</strong> ${esc(board.agentFit)}</p>
      <p><strong>Verdict.</strong> ${esc(board.verdict)}</p>
    `;
  }

  function renderPrSim() {
    const first = DATA.prLifecycle[0];
    return `
      <section class="widget" data-testid="pr-sim">
        <h2>PR toy</h2>
        <p class="kid">Walk the life of one change. Next, back, or start over.</p>
        <p data-testid="pr-sim-step" class="pr-state" data-step="0">${esc(first.state)}</p>
        <div id="pr-sim-copy" class="detail">${prCopy(first)}</div>
        <div class="row">
          <button type="button" data-testid="pr-sim-back">Back</button>
          <button type="button" data-testid="pr-sim-next">Next</button>
          <button type="button" data-testid="pr-sim-reset">Reset</button>
        </div>
      </section>
    `;
  }

  function prCopy(step) {
    return `<p>${esc(step.kid)}</p><p>${esc(step.grownUp)}</p><p class="who"><strong>Who.</strong> ${esc(step.actor)}</p>`;
  }

  function renderTeam() {
    const buttons = DATA.team.map((node, i) => `
      <button type="button" class="bot-node" data-testid="bot-node" data-id="${esc(node.id)}" aria-pressed="${i === 0 ? "true" : "false"}">${esc(node.role)}</button>
    `).join("");
    return `
      <section class="widget" data-testid="bot-team">
        <h2>The team</h2>
        <p class="kid">Tap a role. See the job, what it must never do, and who it reports to.</p>
        <div class="org">${buttons}</div>
        <div class="detail" data-testid="bot-detail">${teamCopy(DATA.team[0])}</div>
      </section>
    `;
  }

  function teamCopy(node) {
    return `
      <p class="badge">${esc(node.role)}</p>
      <p><strong>Job.</strong> ${esc(node.job)}</p>
      <p><strong>Never does.</strong> ${esc(node.neverDoes)}</p>
      <p><strong>Reports to.</strong> ${esc(node.reportsTo)}</p>
    `;
  }

  function renderChecklist() {
    const items = DATA.checklist
      .slice()
      .sort((a, b) => a.order - b.order)
      .map((item) => `
        <label class="check-row">
          <input type="checkbox" data-testid="checklist-item" data-key="${esc(item.key)}" />
          <span>
            <strong>${item.order}. ${esc(item.label)}</strong>
            <span class="check-why">${esc(item.why)}</span>
          </span>
        </label>
      `).join("");
    return `
      <section class="widget" data-testid="checklist">
        <h2>Tick these in order</h2>
        <p class="kid">Your ticks stay in this browser.</p>
        ${items}
      </section>
    `;
  }

  function renderFromX() {
    const posts = DATA.xPosts.map((post) => `
      <article class="x-post">
        <p class="kicker">@${esc(post.handle)}</p>
        <blockquote>${esc(post.quote)}</blockquote>
        <p>${esc(post.takeaway)}</p>
        <a href="${esc(post.url)}" target="_blank" rel="noopener">Open on X</a>
      </article>
    `).join("");
    return `
      <section class="widget" data-testid="from-x">
        <h2>Posts from the dossier</h2>
        ${posts}
      </section>
    `;
  }

  function renderGlossary() {
    const items = DATA.glossary.map((g) => `
      <article class="glossary-item" data-term="${esc(g.term.toLowerCase())}">
        <h3>${esc(g.term)}</h3>
        <p>${esc(g.kid)}</p>
      </article>
    `).join("");
    return `
      <section class="widget" data-testid="glossary">
        <h2>Words</h2>
        <label class="muted" for="glossary-filter">Filter</label>
        <input id="glossary-filter" class="glossary-filter" type="search" placeholder="Type a word" />
        <div id="glossary-list">${items}</div>
      </section>
    `;
  }

  function renderWidget(name) {
    if (name === "board") return renderBoardPicker();
    if (name === "pr") return renderPrSim();
    if (name === "team") return renderTeam();
    if (name === "checklist") return renderChecklist();
    if (name === "x") return renderFromX();
    if (name === "glossary") return renderGlossary();
    return "";
  }

  function renderChapter(chapter, index) {
    const extra = chapter.id === "start-here" ? renderPipeline() : "";
    return `
      <section class="chapter" data-chapter="${esc(chapter.id)}" id="${esc(chapter.id)}">
        <div class="chapter-head">
          <p class="kicker">Chapter ${index}</p>
          <h2>${esc(chapter.title)}</h2>
          <p class="badge">Like I'm 6</p>
          <p class="kid">${esc(chapter.kid)}</p>
          ${renderToggle(chapter.grownUp, [])}
        </div>
        ${chapter.cards.map(renderCard).join("")}
        ${chapter.widget ? renderWidget(chapter.widget) : ""}
        ${extra}
        ${renderQuiz(chapter)}
      </section>
    `;
  }

  function bindToggles(root) {
    root.querySelectorAll("[data-testid=card-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        const next = !open;
        btn.setAttribute("aria-expanded", String(next));
        const body = document.getElementById(btn.getAttribute("aria-controls"));
        if (body) body.hidden = !next;
      });
    });
  }

  function bindPipeline(root) {
    const box = root.querySelector("[data-testid=pipeline]");
    if (!box) return;
    const detail = box.querySelector("[data-testid=pipeline-detail]");
    box.querySelectorAll("[data-testid=pipeline-step]").forEach((btn) => {
      btn.addEventListener("click", () => {
        box.querySelectorAll("[data-testid=pipeline-step]").forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        const step = DATA.pipeline.find((s) => s.id === btn.getAttribute("data-id"));
        if (step) detail.innerHTML = pipelineCopy(step);
      });
    });
  }

  function bindBoards(root) {
    const box = root.querySelector("[data-testid=board-picker]");
    if (!box) return;
    const result = box.querySelector("[data-testid=board-result]");
    box.querySelectorAll("[data-testid=board-option]").forEach((btn) => {
      btn.addEventListener("click", () => {
        box.querySelectorAll("[data-testid=board-option]").forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        const board = DATA.boards.find((b) => b.name === btn.getAttribute("data-name"));
        if (board) result.innerHTML = boardCopy(board);
      });
    });
  }

  function bindPr(root) {
    const box = root.querySelector("[data-testid=pr-sim]");
    if (!box) return;
    const label = box.querySelector("[data-testid=pr-sim-step]");
    const copy = box.querySelector("#pr-sim-copy");
    let index = 0;
    const paint = () => {
      const step = DATA.prLifecycle[index];
      label.setAttribute("data-step", String(index));
      label.textContent = step.state;
      copy.innerHTML = prCopy(step);
    };
    box.querySelector("[data-testid=pr-sim-next]").addEventListener("click", () => {
      index = Math.min(DATA.prLifecycle.length - 1, index + 1);
      paint();
    });
    box.querySelector("[data-testid=pr-sim-back]").addEventListener("click", () => {
      index = Math.max(0, index - 1);
      paint();
    });
    box.querySelector("[data-testid=pr-sim-reset]").addEventListener("click", () => {
      index = 0;
      paint();
    });
  }

  function bindTeam(root) {
    const box = root.querySelector("[data-testid=bot-team]");
    if (!box) return;
    const detail = box.querySelector("[data-testid=bot-detail]");
    box.querySelectorAll("[data-testid=bot-node]").forEach((btn) => {
      btn.addEventListener("click", () => {
        box.querySelectorAll("[data-testid=bot-node]").forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        const node = DATA.team.find((n) => n.id === btn.getAttribute("data-id"));
        if (node) detail.innerHTML = teamCopy(node);
      });
    });
  }

  function loadChecks() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
    } catch {
      return {};
    }
  }

  function saveChecks(map) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  }

  function bindChecklist(root) {
    const box = root.querySelector("[data-testid=checklist]");
    if (!box) return;
    const stored = loadChecks();
    box.querySelectorAll("[data-testid=checklist-item]").forEach((input) => {
      const key = input.getAttribute("data-key");
      input.checked = !!stored[key];
      input.addEventListener("change", () => {
        const next = loadChecks();
        if (input.checked) next[key] = true;
        else delete next[key];
        saveChecks(next);
      });
    });
  }

  function bindQuizzes(root) {
    root.querySelectorAll("[data-testid=quiz]").forEach((quiz) => {
      const feedback = quiz.querySelector("[data-testid=quiz-feedback]");
      quiz.querySelectorAll("[data-testid=quiz-option]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const ok = btn.getAttribute("data-correct") === "true";
          feedback.hidden = false;
          feedback.setAttribute("data-state", ok ? "correct" : "wrong");
          feedback.textContent = btn.getAttribute("data-why") || (ok ? "Yes." : "Not that one.");
          markAnswered(quiz.getAttribute("data-chapter"));
        });
      });
    });
  }

  function bindGlossary(root) {
    const input = root.querySelector("#glossary-filter");
    const list = root.querySelector("#glossary-list");
    if (!input || !list) return;
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      list.querySelectorAll(".glossary-item").forEach((item) => {
        const term = item.getAttribute("data-term") || "";
        const text = item.textContent.toLowerCase();
        item.hidden = Boolean(q) && !term.includes(q) && !text.includes(q);
      });
    });
  }

  function bindObserver(root) {
    if (!("IntersectionObserver" in window)) {
      DATA.chapters.forEach((c) => markSeen(c.id));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) markSeen(entry.target.getAttribute("data-chapter"));
      });
    }, { threshold: 0.35 });
    root.querySelectorAll("section[data-chapter]").forEach((sec) => io.observe(sec));
  }

  function init() {
    const app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = DATA.chapters.map(renderChapter).join("") +
      `<p class="footnote">Facts, quotes, numbers, handles, and post URLs come from docs/research.md, compiled 8 Oct 2026. Nothing else was added.</p>`;

    bindToggles(app);
    bindPipeline(app);
    bindBoards(app);
    bindPr(app);
    bindTeam(app);
    bindChecklist(app);
    bindQuizzes(app);
    bindGlossary(app);
    bindObserver(app);
    setProgress();

    const start = document.getElementById("start-btn");
    if (start) {
      start.addEventListener("click", () => {
        const first = document.getElementById("start-here");
        if (!first) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        first.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
