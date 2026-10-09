(() => {
  const D = window.ITP_DATA;
  const Q = (id, chapterId, skill, scenario, q, options) => ({ id, chapterId, skill, scenario, q, options });
  const O = (text, correct, why) => ({ text, correct, why });

  D.quiz = [
    Q("q-start-1", "start-here", "plan", "You open this page on your phone and start scrolling to the bottom.", "What actually raises mastery?", [
      O("Finishing chapters and answering quizzes", true, "Progress is the mean of eight skill scores from done chapters and earned quizzes."),
      O("Scrolling past every heading", false, "v1 scored scrolling. v2 does not. You have to finish work."),
      O("Opening Grown-up version on every card", false, "That is optional depth, not a score.")
    ]),
    Q("q-start-2", "start-here", "plan", "A friend asks why this is a tap page.", "What is Karpathy's reason?", [
      O("Interactive HTML is easier to learn from than a long note", true, "He said ask for output in HTML to get an interactive webpage, and that diagrams are easier to parse."),
      O("A page can show ads", false, "This page has no ads or other sites."),
      O("Bots cannot read notes", false, "Bots can read notes. The page is for you.")
    ]),
    Q("q-map-1", "whole-map", "plan", "Your quote-app idea is still a sentence in Notion.", "What is the next mile after the idea?", [
      O("Validate the riskiest assumption", true, "The pipeline goes idea, validate, brief. Do not skip the problem."),
      O("Open a PR", false, "A PR comes after a ticket and a branch."),
      O("Buy Jira", false, "A solo builder starts on GitHub Projects.")
    ]),
    Q("q-map-2", "whole-map", "plan", "The last step of the quote-app case is Improve.", "What does Improve do?", [
      O("Picks the top ticket and starts the next PR", true, "The last step contains Next PR. The loop is the product."),
      O("Deletes the repo", false, "You keep the repo and ship again."),
      O("Stops all routines", false, "Watchers stay on so the next ticket has signal.")
    ]),
    Q("q-help-1", "helpers", "team", "You write a safety rule in memory because the bot keeps forgetting.", "What should you do instead?", [
      O("Put the rule in the description", true, "Memory is not a substitute for an authoritative source. Safety belongs in the description."),
      O("Tell it louder in chat", false, "Chat is for one task. Rules that should remain true go in the description."),
      O("Add the key to the shared computer", false, "The shared computer is not a security boundary.")
    ]),
    Q("q-help-2", "helpers", "team", "You want four bots to debate a brief.", "How many bots may share a group chat?", [
      O("Two to six", true, "Docs: select two to six Bots. Ask for a single owner at each stage."),
      O("As many as you like", false, "The docs cap the group at six."),
      O("Only one", false, "Group chats exist. Two is the floor.")
    ]),
    Q("q-help-3", "helpers", "team", "Lingxi describes his setup.", "Who writes the code?", [
      O("Cloud agents. Bots drive them.", true, "Lingxi: my bots never write code on their machines. Cloud agents do all the lifting."),
      O("The ops bot Jenny", false, "Jenny is the only bot who does not write code, and she still does not lift the repo."),
      O("Bugbot", false, "Bugbot reviews the PR. It does not write the feature.")
    ]),
    Q("q-idea-1", "idea-good", "plan", "You want a research bot to check if UK plumbers pay for quote apps.", "What makes it stop?", [
      O("A measurable outcome and an explicit stop condition", true, "ludoonchart: research this deeply has no finish line. F12 stops at 5 sources, 45 minutes, or 30 pages."),
      O("Asking it to research deeply", false, "That phrase is the anti-pattern."),
      O("A bigger model", false, "A bigger model without a stop rule still browses.")
    ]),
    Q("q-idea-2", "idea-good", "plan", "Five plumbers see a clickable mock. Four say they would quote on a phone.", "What do you do?", [
      O("Keep. Write the brief.", true, "Founder decides. The cheap test held. The case study keeps the idea."),
      O("Kill it. One no is enough.", false, "Four of five said yes. That is a keep."),
      O("Start coding tonight with no brief", false, "Brief comes next so the builder knows done-means.")
    ]),
    Q("q-brief-1", "brief", "plan", "You write Make me a quote app in one line.", "What goes wrong?", [
      O("The agent guesses. You redo work.", true, "The simulator one-liner path adds two days and risk. A good brief names done-means and the model."),
      O("GitHub deletes the repo", false, "The repo is fine. The work is vague."),
      O("Bugbot blocks you", false, "There is no PR yet.")
    ]),
    Q("q-brief-2", "brief", "plan", "Nandan let a cloud agent pick its own model for a CSS tweak.", "What do you put in the brief?", [
      O("The model name", true, "agents.md now says pass the model in the prompt. The F1 template has a Model field."),
      O("A spend prayer", false, "A named model is the control."),
      O("Nothing. The agent knows", false, "That is how the session burned.")
    ]),
    Q("q-board-1", "board", "board", "You are one person. The code is on GitHub. You have 40 issues.", "Which board?", [
      O("GitHub Issues plus a GitHub Project", true, "The board tree leaf for solo on GitHub is github-projects. It sits next to the code."),
      O("Jira", false, "Jira is for a big Atlassian shop."),
      O("Azure Boards", false, "Azure is for Azure Repos or a Microsoft employer.")
    ]),
    Q("q-board-2", "board", "board", "A team of 8 asks about monthly board cost.", "What does Linear Basic cost?", [
      O("$80", true, "Basic is $10 times users. Team of 8 is $80. GitHub is $0. Azure is $18. Jira is $0."),
      O("$0", false, "That is GitHub Projects or Jira at this size."),
      O("$18", false, "That is Azure: (8 minus 5) times 6.")
    ]),
    Q("q-code-1", "code-home", "code", "Two agents edited quote.ts. The PR shows conflicts.", "Best fix?", [
      O("Rebase on main, resolve, re-run checks. Give each bot its own area next time.", true, "Lingxi: one domain per bot. HermesShield: do not share remotes."),
      O("Force push over main", false, "That is how one agent wiped another."),
      O("Close both PRs and walk away", false, "Resolve the one you want. Keep the work.")
    ]),
    Q("q-code-2", "code-home", "code", "You want a linear history for agent PRs.", "Which merge method fits one ticket?", [
      O("Squash and merge", true, "GitHub: squash when a pull request represents one logical change. Rulesets can require linear history."),
      O("A merge commit every time", false, "That keeps every join and is not linear."),
      O("Email the patch", false, "The PR is the unit.")
    ]),
    Q("q-build-1", "builders", "code", "You add a secret after a cloud agent has already started.", "What happens?", [
      O("The running agent will not see it. Start a new agent.", true, "Secrets are injected when an agent starts."),
      O("It hot-reloads in 10 seconds", false, "Docs say already running agents will not pick up new secrets."),
      O("Paste it in chat instead", false, "Secrets stay out of chat.")
    ]),
    Q("q-build-2", "builders", "code", "You skip environment setup because the laptop works.", "What is the cloud agent doing?", [
      O("Exposing that the project is not reproducible", true, "Zain Akram: if your code only runs on your machine, the cloud agent is just exposing that."),
      O("Shipping faster", false, "It will fail setup."),
      O("Using Pages as a computer", false, "Pages is hosting, not the agent VM.")
    ]),
    Q("q-pr-1", "the-pr", "gates", "CI is red on test quote-draft.", "What does an expert do first?", [
      O("Read the failing log line and reproduce it.", true, "Never re-run until green. Fix the cause, then push."),
      O("Re-run until green", false, "That is the wrong PR-lab fix."),
      O("Delete the failing test", false, "BUGBOT.md should block that.")
    ]),
    Q("q-pr-2", "the-pr", "gates", "The builder agent says tests pass.", "Who should verify the PR?", [
      O("A different agent or person that did not write it", true, "Karayev: coding agents should not grade their own homework. pstack: the judge is never the writer."),
      O("The same agent. It knows the code", false, "That is grading your own homework."),
      O("Nobody if CI is green", false, "Green is not safe.")
    ]),
    Q("q-gate-1", "gates", "gates", "You required the Cursor Bugbot check. A PR with a finding merged.", "Why?", [
      O("Findings default to neutral, so the check does not fail. Turn on fail-on-unresolved.", true, "Requiring the status alone does not block merges on findings."),
      O("Bugbot was down", false, "A comment can exist and still be neutral."),
      O("Squash merge skips checks", false, "Squash still needs required checks.")
    ]),
    Q("q-gate-2", "gates", "gates", "All required checks are green. Blast radius is low. Proof is attached. A verifier approved.", "Can this auto-merge?", [
      O("Yes, after a wait window", true, "The merge tree leaf is auto-merge-window. poteto waits 1 hour."),
      O("No. A human must always mash merge", false, "Low blast plus proof can wait, then merge."),
      O("Yes, even if checks are red", false, "Red checks stop the line.")
    ]),
    Q("q-gate-3", "gates", "gates", "You toggle only CI on the risk chart.", "How many failure types stay uncaught?", [
      O("7", true, "Eight failures. CI catches red-build. Seven remain."),
      O("0", false, "That is all gates on."),
      O("8", false, "That is all gates off.")
    ]),
    Q("q-ship-1", "going-live", "ship", "A paid SaaS with logins.", "Where should it live?", [
      O("Vercel Pro and Supabase Pro, with staging and prod", true, "Hobby is non-commercial. Pages is not for SaaS or payments."),
      O("GitHub Pages", false, "Pages is not allowed as a free host for an online business."),
      O("Vercel Hobby", false, "Hobby is for personal, non-commercial use.")
    ]),
    Q("q-ship-2", "going-live", "ship", "An API key was pasted into a commit. Push protection blocked it.", "First step?", [
      O("Rotate the key, then remove it and use the Secrets tab", true, "A key that was almost pushed is not safe. Rotate first."),
      O("Delete the commit and move on", false, "The key may already be burned."),
      O("Make the repo private", false, "Privacy does not un-leak a key.")
    ]),
    Q("q-watch-1", "watching", "watch", "You want one DORA delivery metric to put on a wall.", "Which is one of DORA's?", [
      O("Change fail rate", true, "Instability: change fail rate and deployment rework rate."),
      O("Lines of code per day", false, "That is not a DORA metric."),
      O("Number of bots", false, "Headcount is not a delivery metric.")
    ]),
    Q("q-watch-2", "watching", "watch", "Sentry is full of last month's noise.", "What should the error bot report?", [
      O("Only errors first seen in the last 24 hours", true, "Pinuts_: Only NEW errors, not old noise. F4 is quiet when there are none."),
      O("Every open issue in Sentry", false, "That is living in Sentry."),
      O("A weekly poem", false, "The digest is a list of new breaks.")
    ]),
    Q("q-team-1", "bot-team", "team", "You run 7 bots and talk to all of them.", "What breaks first?", [
      O("You do. Most people cannot drive more than 4 to 5 threads. Route through a front door and an eng lead.", true, "Peter Yang's limit. The team builder warns past 5 direct reports."),
      O("GitHub rate limits", false, "The first limit is your attention."),
      O("Nothing", false, "Gabin said everything gets sluggish after 15 bots, and you will drown sooner.")
    ]),
    Q("q-team-2", "bot-team", "team", "You copy Lingxi's five area bots and skip the merge bar.", "What did Vikram say to copy?", [
      O("The merge bar. Define blast radius and who may merge.", true, "If you copy this, copy the merge bar, not the headcount."),
      O("The headcount only", false, "Headcount without a merge bar is spend."),
      O("Jenny's name", false, "The job is ops, not the name.")
    ]),
    Q("q-rout-1", "routines-trust", "team", "A bot has done a job by hand once. It was messy.", "Should you automate it?", [
      O("Not yet. Do it by hand twice, cleanly, then save a skill.", true, "The automate tree leaf is not-yet until two clean runs."),
      O("Yes. Make a 5 minute routine today", false, "Prompt to routine is the mistake Fenech named."),
      O("Yes, and allow everything in the browser", false, "The docs say avoid that allow rule.")
    ]),
    Q("q-rout-2", "routines-trust", "team", "A routine test run looks cheap because it is a test.", "What does a test run do?", [
      O("Real work", true, "A test run performs real work."),
      O("Nothing. It is a dry run", false, "The docs are explicit: real work."),
      O("Only writes to memory", false, "It can send, post, or change things if you let it.")
    ]),
    Q("q-cost-1", "cost", "cost-safety", "Your routine runs every 15 minutes and you are out of usage by Wednesday.", "How many runs is that a week?", [
      O("672", true, "10080 / 15 = 672. GrokBotRadar's trap."),
      O("96", false, "That would be every 105 minutes."),
      O("168", false, "That is hourly.")
    ]),
    Q("q-cost-2", "cost", "cost-safety", "You move that 15 minute routine to hourly.", "What changes?", [
      O("168 runs, a 75 percent cut, same signal if nothing changes faster than hourly.", true, "GrokBotRadar: hourly. 168 runs. Same signal."),
      O("Nothing, cost is per day", false, "Cost follows runs."),
      O("It stops the routine", false, "Hourly still runs. It is just slower.")
    ]),
    Q("q-cost-3", "cost", "cost-safety", "You have $100 and the default Grok 4.7 PR shape.", "How many PRs is that?", [
      O("51", true, "Default per PR is $1.96. Floor of 100 / 1.96 is 51."),
      O("148", false, "148 is the 30-day live anchor at about $300."),
      O("153", false, "153 is $300 at $1.96.")
    ]),
    Q("q-safe-1", "safety", "cost-safety", "Ask first and Allow automatically both match a send.", "Who wins?", [
      O("Ask first", true, "If both kinds of rule match, Ask first wins."),
      O("Allow automatically", false, "Allow never beats Ask first."),
      O("The newest bot", false, "The setting order is the rule.")
    ]),
    Q("q-safe-2", "safety", "cost-safety", "You write Allow everything in the browser.", "Why is that a bad rule?", [
      O("Auto Review should complement least privilege, not replace it", true, "The docs say avoid that allow. It does not review every side effect."),
      O("Browsers cannot be automated", false, "They can. That is the risk."),
      O("GitHub forbids it", false, "This is a Bot rule, not a GitHub rule.")
    ]),
    Q("q-break-1", "when-it-breaks", "gates", "Checks pass. The feature is broken in the browser.", "What failed?", [
      O("The builder graded its own homework", true, "Karayev's QA agent opened the app and found it broken. Add a verifier."),
      O("GitHub Pages went down", false, "The feature is wrong, not the host."),
      O("Linear hit 250 issues", false, "That is a board cap, not this bug.")
    ]),
    Q("q-break-2", "when-it-breaks", "gates", "A PR deleted the test suite and still looks green.", "What do you review first?", [
      O("Removed lines, and a BUGBOT.md rule that blocks deleting tests", true, "Hash: deletions are where agents lie to you."),
      O("Only the new lines", false, "The lie is in what vanished."),
      O("The spend limit", false, "Spend did not delete the tests.")
    ]),
    Q("q-scale-1", "scale", "team", "A true P0 is on fire.", "What is the cost warning on a 5 minute transcript check?", [
      O("It can burn tokens much faster than you think. Use it only for true urgency.", true, "Lingxi's P0 note."),
      O("It is free on Hobby", false, "Hobby is a Cursor plan, not a free P0 watcher."),
      O("It only runs in memory", false, "It is a real routine.")
    ]),
    Q("q-scale-2", "scale", "team", "You want the scale chart's bot fleet bar.", "What number does Lingxi give?", [
      O("More than 200 at once", true, "Before, 15 by hand. Now the fleet manages more than 200."),
      O("4 to 5", false, "That is Peter Yang's human thread limit."),
      O("148", false, "That is jorgediazapps PRs in 30 days.")
    ]),
    Q("q-sim-1", "simulator", "plan", "You skip validation and skip monitoring.", "Which ending is likely?", [
      O("wrong-thing", true, "Signal stays at or under 0. The model calls that wrong-thing."),
      O("shipped-safe", false, "You built on a guess and hear breaks from users."),
      O("over-budget", false, "That ending is cost 100 or more.")
    ]),
    Q("q-sim-2", "simulator", "plan", "You pick a 5 minute routine on an otherwise careful path.", "What ending?", [
      O("over-budget", true, "every-5-min adds $226. Expert plus that is $246."),
      O("incident", false, "Risk can still be low. Cost is the killer."),
      O("wrong-thing", false, "Signal can still be high.")
    ]),
    Q("q-exam-1", "exam", "plan", "You scored 8 of 12.", "Do you get the certificate?", [
      O("No. Pass is 9 of 12.", true, "The page shows skills to review and no certificate."),
      O("Yes. Eight is enough", false, "Nine is the mark."),
      O("Yes if you type Viraj", false, "The name field does not lower the mark.")
    ]),
    Q("q-exam-2", "exam", "plan", "You passed and want a cleaner run.", "What does Try again do?", [
      O("Restarts from question 1", true, "exam-start after a finished attempt is Try again and starts over."),
      O("Deletes the research files", false, "The exam does not touch docs."),
      O("Merges main", false, "This page never merges your repo.")
    ]),
    Q("q-tmpl-1", "templates", "plan", "You copy the CI workflow.", "What becomes the required check name?", [
      O("test, the job name", true, "The job name test becomes the required check name."),
      O("main", false, "main is the branch."),
      O("Hobby", false, "Hobby is a Cursor plan.")
    ]),
    Q("q-tmpl-2", "templates", "plan", "You paste environment.json.", "What must install be?", [
      O("Idempotent", true, "Safe to run twice. Ends the same. Label the file starter and check the schema."),
      O("A long-running dev server", false, "Long-running work goes in start or terminals."),
      O("A secret", false, "Secrets are in the Secrets tab.")
    ]),
    Q("q-check-1", "setup-checklist", "plan", "You want a timer on day one.", "When do routines go on the list?", [
      O("Last, after two clean manual runs", true, "Section 16 puts routines last, with a usage audit."),
      O("First, before the front door", false, "Front door and rules come first."),
      O("Instead of CI", false, "CI is a gate. A timer is not a gate.")
    ]),
    Q("q-check-2", "setup-checklist", "plan", "You tick Require the Cursor Bugbot check.", "What else do you consider?", [
      O("Fail-on-unresolved, because findings start as neutral", true, "Requiring the check alone does not block."),
      O("Deleting AGENTS.md", false, "You add AGENTS.md, you do not delete it."),
      O("Turning off push protection", false, "Push protection stays on.")
    ]),
    Q("q-x-1", "from-x", "plan", "You want the Grok Bot for Engineering article.", "Whose post?", [
      O("lingxi", true, "31 Aug 2026, 1.04M views when read. Five area bots plus Jenny."),
      O("karpathy", false, "Karpathy wrote about interactive pages."),
      O("linear", false, "Linear is a board.")
    ]),
    Q("q-x-2", "from-x", "plan", "You filter to cost.", "Which takeaway belongs there?", [
      O("Hourly. 168 runs. Same signal.", true, "GrokBotRadar's usage audit fix."),
      O("Ask for HTML", false, "That is the format post."),
      O("Pages is a repo host", false, "That is hosting, not the cost chip.")
    ]),
    Q("q-gloss-1", "glossary", "plan", "You search for blast.", "What is blast radius?", [
      O("How much breaks if this change is wrong", true, "Section I. Low blast can auto-merge. Auth and payments cannot."),
      O("A Sentry plan", false, "Sentry is error watching."),
      O("A Linear field", false, "Not a board field in this lesson.")
    ]),
    Q("q-gloss-2", "glossary", "plan", "A check is neither pass nor fail.", "What word is that?", [
      O("Neutral", true, "Bugbot uses it for findings by default."),
      O("Merged", false, "Merged is a PR state."),
      O("Hobby", false, "Hobby is a plan.")
    ])
  ];

  D.exam = [
    { id: "exam-1", skill: "gates", q: "You required the Cursor Bugbot check, but a PR with a Bugbot finding merged. Why?", options: [
      O("Findings default to neutral, so the check does not fail; turn on fail-on-unresolved.", true, "Requiring the status alone does not block."),
      O("Bugbot was down", false, "A finding can exist and still be neutral."),
      O("Squash merge skips checks", false, "Squash still needs required checks.")
    ]},
    { id: "exam-2", skill: "cost-safety", q: "A routine runs every 15 minutes. How many runs a week?", options: [
      O("96", false, "672 is 7 x 24 x 4."),
      O("672", true, "10080 / 15 = 672."),
      O("168", false, "168 is hourly.")
    ]},
    { id: "exam-3", skill: "cost-safety", q: "What does moving it to hourly do?", options: [
      O("Nothing, cost is per day", false, "Cost follows runs."),
      O("It stops the routine", false, "Hourly still runs."),
      O("168 runs, a 75 percent cut, same signal if nothing changes faster than hourly.", true, "GrokBotRadar's fix.")
    ]},
    { id: "exam-4", skill: "code", q: "Two agents edited the same file and the PR shows conflicts. Best fix?", options: [
      O("Rebase on main, resolve, re-run checks; give each bot its own area next time.", true, "One area per bot."),
      O("Force push", false, "That wipes the other agent."),
      O("Close both PRs", false, "Resolve the work you want to keep.")
    ]},
    { id: "exam-5", skill: "gates", q: "CI is red on a test. What does an expert do first?", options: [
      O("Re-run until green", false, "That hides the cause."),
      O("Read the failing log line and reproduce it.", true, "Then fix the cause and push."),
      O("Skip the test", false, "BUGBOT.md should block that.")
    ]},
    { id: "exam-6", skill: "team", q: "Who should verify a builder agent's PR?", options: [
      O("The same agent, it knows the code", false, "Do not grade your own homework."),
      O("Nobody if CI is green", false, "Green is not safe."),
      O("A different agent or person that did not write it.", true, "Verifier is never the builder.")
    ]},
    { id: "exam-7", skill: "ship", q: "A paid SaaS with logins: where should it live?", options: [
      O("GitHub Pages", false, "Not for commercial SaaS."),
      O("Vercel Pro and Supabase Pro, with staging and prod.", true, "Hobby is non-commercial."),
      O("Vercel Hobby", false, "Hobby is personal use.")
    ]},
    { id: "exam-8", skill: "cost-safety", q: "An API key was pasted into a commit. First step?", options: [
      O("Rotate the key, then remove it and use the Secrets tab.", true, "Assume the key is burned."),
      O("Delete the commit and move on", false, "Rotation comes first."),
      O("Make the repo private", false, "Privacy does not un-leak a key.")
    ]},
    { id: "exam-9", skill: "team", q: "You run 7 bots and talk to all of them. What breaks first?", options: [
      O("GitHub rate limits", false, "Your attention fails first."),
      O("You do. Most people cannot drive more than 4 to 5 threads; route through a front door and an eng lead.", true, "Peter Yang."),
      O("Nothing", false, "Seven direct threads is already over the line.")
    ]},
    { id: "exam-10", skill: "plan", q: "What makes a research bot stop?", options: [
      O("A measurable outcome and an explicit stop condition.", true, "ludoonchart's finish line."),
      O("Asking it to research deeply", false, "That has no finish line."),
      O("A bigger model", false, "A bigger model still needs a stop.")
    ]},
    { id: "exam-11", skill: "watch", q: "Which is one of DORA's delivery metrics?", options: [
      O("Lines of code per day", false, "Not DORA."),
      O("Number of bots", false, "Not DORA."),
      O("Change fail rate.", true, "One of the five.")
    ]},
    { id: "exam-12", skill: "board", q: "When does Linear's free plan stop fitting?", options: [
      O("Past 250 issues or 2 teams.", true, "Free: unlimited members, 2 teams, 250 issues."),
      O("After 10 users", false, "That is Jira's free cap."),
      O("Never", false, "250 issues or 2 teams is the stop.")
    ]}
  ];

  D.templates = [
    { id: "brief", title: "Product brief", why: "Handoff the builder cannot invent.", source: "research-v2 F1", body: "Brief: <name>\nTarget user: <one real person type, e.g. \"a plumber who quotes jobs from his van\">\nProblem today: <how they do it now and why it hurts>\nEvidence: <3 links or quotes from research, each labelled VERIFIED / INFERRED>\nRiskiest assumption: <the one thing that kills it if false>\nCheapest test: <how we check it in 2 days or less>\nOutcome: <what changes for the user, with a number if possible>\nMust-haves (v1): <3 to 5 bullets>\nNot building (v1): <list>\nEdge cases: <list>\nDone means: <a check anyone can run, e.g. \"a quote PDF downloads on an iPhone at the live link\">\nProof wanted: <phone screenshots, a 30 second video, test output>\nConstraints: <stack, budget, deadline, what not to touch>\nModel: <name the model; do not let the agent choose>" },
    { id: "ticket", title: "Ticket", why: "One job with done-means and @cursor.", source: "research-v2 F2", body: "Title: Quote form saves draft when signal drops\nGoal: A plumber can lose signal mid-quote and not lose the quote.\nDone means:\n- [ ] Turn off network on the quote page, fill 3 fields, turn network on: fields still there\n- [ ] Test in tests/quote-draft.test.ts covers it\n- [ ] Phone screenshot before and after in the PR\nOut of scope: syncing drafts across devices\nArea: quote-form   Labels: feature, area:quote-form\nStart: comment \"@cursor take this, use poteto-mode, open a PR, do not merge\"" },
    { id: "pr-description", title: "PR description", why: "Proof over claims.", source: "research-v2 F3", body: "What: Save quote drafts to local storage on every field change.\nWhy: Ticket #42. Plumbers lose quotes when signal drops.\nHow: useDraft hook writes to localStorage, restored on load. No server change.\nProof:\n- tests/quote-draft.test.ts: 4 passed (command and output pasted below)\n- Before/after phone screenshots attached\n- 20 second video of airplane-mode test\nRisk: Low. Touches one page. No auth, payments, data or CI files.\nRollback: Revert this PR. No data migration.\nNot done: Cross-device sync (separate ticket)." },
    { id: "routine-prompt", title: "Routine prompt", why: "New errors only. Quiet when nothing changed.", source: "research-v2 F4", body: "Every weekday at 8:00 Europe/London, run the \"New errors digest\" skill on the\nSentry project quote-app. Report only errors first seen in the last 24 hours.\nIf there are none, post nothing. If Sentry is unreachable, say so and do not\nuse yesterday's data. For each new error, open a GitHub issue labelled bug\nwith the stack trace link, then stop. Never close issues, never post outside\nthis chat, never start a cloud agent without asking me." },
    { id: "branch-protection", title: "Branch protection", why: "The locks on main.", source: "research-v2 F5", body: "[x] Require a pull request before merging\n[x] Required approvals: 1\n[x] Dismiss stale pull request approvals when new commits are pushed\n[x] Require approval of the most recent reviewable push\n[x] Require conversation resolution before merging\n[x] Require status checks to pass: test, Cursor Bugbot\n[x] Require branches to be up to date before merging\n[x] Require linear history (squash merges only)\n[x] Block force pushes\n[x] Restrict deletions\n[ ] Require deployments to succeed: staging (turn on once staging exists)\n[x] Allow auto-merge in repo settings (used only for low blast radius PRs)\nPlus: Bugbot set to fail on unresolved issues; push protection on." },
    { id: "ci-workflow", title: "CI workflow", why: "The job name test is the required check.", source: "research-v2 F6", body: "name: ci\non:\n  pull_request:\n  push:\n    branches: [main]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: npm\n      - run: npm ci\n      - run: npm test" },
    { id: "bugbot-yaml", title: "bugbot.yaml", why: "Read from the base branch so a PR cannot rewrite its judge.", source: "research-v2 F7", body: "version: 1\ntriggers:\n  drafts: false\n  frequency: everyPush\nreview:\n  effort: default\nprSummary:\n  mode: description\n  riskScore: true\nautofix:\n  mode: newBranch" },
    { id: "bugbot-md", title: "BUGBOT.md", why: "Block deleted tests and secrets.", source: "research-v2 F8", body: "- If a PR deletes or skips a test, add a blocking Bug \"Test removed\".\n- If a PR changes server/** with no change in tests/**, add a blocking Bug \"Missing tests\".\n- Any API key, token or password in code is a blocking Bug \"Secret in code\"." },
    { id: "agents-md", title: "AGENTS.md", why: "Cloud section plus the model rule.", source: "research-v2 F9", body: "# How to work in this repo\n- Run `npm test` before every push. Paste the command and output in the PR.\n- Small PRs. One ticket per PR.\n- Never delete or skip a test to make CI pass.\n- Never merge. Open the PR and stop.\n- Use the model named in the brief.\n\n## Cursor Cloud specific instructions\n- Install: `npm ci`. Dev server: `npm run dev` on port 3000.\n- Login for tests uses TEST_EMAIL and TEST_PASSWORD from secrets.\n- Attach phone-width (390 px) screenshots of every changed page." },
    { id: "environment-json", title: "environment.json", why: "Starter, check the schema link. install must be idempotent.", source: "research-v2 F10", body: "{\n  \"install\": \"npm ci\",\n  \"start\": \"\",\n  \"terminals\": [{ \"name\": \"dev\", \"command\": \"npm run dev\" }]\n}" },
    { id: "bot-job", title: "Bot job description", why: "Name, Job, Never, Reports to, Routines.", source: "research-v2 F11", body: "Name: Quote Eng Lead\nJob: Own the quote-app repo. Turn my asks into tickets with done-means, launch\none Cursor cloud agent per ticket with poteto-mode, require phone screenshots\nand test output, follow up until checks are green, keep the board current.\nEvery 30 minutes check open PRs for failing CI, Bugbot findings and conflicts.\nNever write code yourself. Never merge. Never touch secrets or prod settings.\nAsk first before anything leaves the box.\nReports to: Viraj (through the front door bot)." },
    { id: "research-prompt", title: "Research bot prompt", why: "Outcome, sources first, labels, stop, never.", source: "research-v2 F12", body: "Outcome: a one-page answer to \"do UK plumbers pay for quote apps?\" with 5+ sources.\nSources first: pricing pages, app store reviews, forum posts by plumbers.\nLabel every claim VERIFIED, INFERRED or UNKNOWN with the link beside it.\nStop when: 5 sources agree, or 45 minutes, or 30 pages read.\nRetries: 2 per source, then mark UNKNOWN.\nNever: sign up, buy, or contact anyone.\nHand off: a Notion page plus a 5-line summary to Architect." },
    { id: "auto-review-rules", title: "Auto Review rules", why: "Ask first wins. Allow the boring safe commands.", source: "research-v2 F13", body: "Ask first before sending any external email or chat message.\nAsk first before merging any pull request.\nAsk first before pushing to main.\nAsk first before changing a routine or event trigger.\nAsk first before starting more than 3 cloud agents at once.\nAllow automatically when running git status or npm test in /workspace." }
  ];

  D.failureModes = [
    { id: "red-build", title: "Red CI", see: "test check fails", cause: "Code or test broke, or the agent env differs from CI", fix: "Read the failing log line, reproduce in the agent VM, fix the cause, push. Never re-run until green.", gate: "CI required", caughtBy: ["ci"] },
    { id: "logic-bug", title: "Logic bug", see: "Feature is wrong even if a test is green", cause: "Agent missed a branch", fix: "Verifier opens the app. Bugbot on unresolved findings.", gate: "Bugbot blocking plus verifier", caughtBy: ["bugbot-blocking", "verifier"] },
    { id: "green-but-broken", title: "Green but broken", see: "Checks pass, the feature does not work in the browser", cause: "Agent graded its own homework (Karayev)", fix: "Separate verifier. Ask for the command and the output (Yanis).", gate: "Verifier, human review", caughtBy: ["verifier", "human-review"] },
    { id: "secret-in-commit", title: "Secret in a commit", see: "Push blocked, or key visible in history", cause: "Key pasted into code or chat", fix: "Rotate the key now, remove it, use the Secrets tab.", gate: "Push protection", caughtBy: ["push-protection"] },
    { id: "staging-ok-prod-broken", title: "Staging fine, prod broken", see: "Users report errors after deploy", cause: "Env differences", fix: "Error bot on new errors only, Rollouts per env, instant rollback.", gate: "Monitoring", caughtBy: ["monitoring"] },
    { id: "wrong-thing-built", title: "Wrong thing built", see: "A polished thing nobody asked for", cause: "Weak brief or research turned into building (Faizan)", fix: "Say research only, no code, no PR. Founder decides.", gate: "Human review", caughtBy: ["human-review"] },
    { id: "stale-approval", title: "Stale approval", see: "Approved PR got new commits", cause: "Approval was for an older diff", fix: "Dismiss stale approvals or require approval of the most recent push.", gate: "Dismiss stale", caughtBy: ["dismiss-stale"] },
    { id: "deleted-test", title: "Silent deletion", see: "Tests pass, an error branch or test file vanished", cause: "Agent removed code it found inconvenient (Hash)", fix: "Review removed lines first. BUGBOT.md blocks deleting tests.", gate: "Bugbot blocking, human review", caughtBy: ["bugbot-blocking", "human-review"] }
  ];

  D.sim.steps = [
    { id: "validate", q: "Is the idea good?", kid: "Name the guess that kills it. Test that guess.", options: [
      { id: "skip", label: "Skip. Build the quote app tonight.", days: 0, cost: 0, risk: 0, signal: -2, consequence: "You build on a guess." },
      { id: "riskiest-test", label: "Ask 5 plumbers. Show a clickable mock.", days: 2, cost: 0, risk: 0, signal: 3, consequence: "Five plumbers tell you what matters." }
    ]},
    { id: "research", q: "Who gathers facts?", kid: "A research bot needs a stop rule.", options: [
      { id: "none", label: "No research. You already know.", days: 0, cost: 0, risk: 0, signal: 0, consequence: "No outside facts." },
      { id: "bot-with-stop", label: "Research bot with a 45 minute stop.", days: 1, cost: 5, risk: 0, signal: 2, consequence: "A sourced page in under an hour." },
      { id: "deeply-no-stop", label: "Tell it to research deeply. No stop.", days: 3, cost: 25, risk: 0, signal: 1, consequence: "It browses for days and costs more." }
    ]},
    { id: "brief", q: "What do you hand the builder?", kid: "Done-means beats a one-liner.", options: [
      { id: "one-liner", label: "One line: make a quote app.", days: 2, cost: 0, risk: 2, signal: 0, consequence: "The agent guesses; you redo work." },
      { id: "done-means", label: "F1 brief with done-means and a model name.", days: 1, cost: 0, risk: 0, signal: 0, consequence: "Everyone knows what finished looks like." }
    ]},
    { id: "board", q: "Where do tickets live?", kid: "Next to the code if you can.", options: [
      { id: "none", label: "Keep jobs in chat.", days: 0, cost: 0, risk: 1, signal: 0, consequence: "Work gets lost in chat." },
      { id: "github-projects", label: "GitHub Issues plus a Project.", days: 0, cost: 0, risk: 0, signal: 0, consequence: "Tickets sit next to the code." },
      { id: "linear", label: "Linear Free.", days: 0, cost: 0, risk: 0, signal: 0, consequence: "Fine, free up to 250 issues." },
      { id: "jira", label: "Jira for one person.", days: 1, cost: 0, risk: 0, signal: 0, consequence: "Setup takes a day for one person." }
    ]},
    { id: "gates", q: "What locks main?", kid: "CI, Bugbot, a verifier, and you.", options: [
      { id: "none", label: "No locks. Merge from your phone.", days: 0, cost: 0, risk: 4, signal: 0, consequence: "Anything can merge." },
      { id: "ci-only", label: "CI only.", days: 0, cost: 0, risk: 2, signal: 0, consequence: "Tests run, bugs in logic slip by." },
      { id: "ci-bugbot-human", label: "CI, Bugbot, and you.", days: 1, cost: 0, risk: 1, signal: 0, consequence: "Good. Bugbot findings still need you to read them." },
      { id: "full", label: "CI, blocking Bugbot, a verifier, and you.", days: 1, cost: 10, risk: 0, signal: 0, consequence: "CI, blocking Bugbot, a verifier and you." }
    ]},
    { id: "envs", q: "Where does it run first?", kid: "Users should not be the first testers.", options: [
      { id: "prod-only", label: "Straight to prod.", days: 0, cost: 0, risk: 2, signal: 0, consequence: "Users find your bugs." },
      { id: "preview-prod", label: "Preview per PR, then prod.", days: 0, cost: 0, risk: 1, signal: 0, consequence: "You see each PR before it ships." },
      { id: "staging-prod", label: "Preview, staging, then prod.", days: 1, cost: 0, risk: 0, signal: 0, consequence: "A practice copy catches deploy problems." }
    ]},
    { id: "routine", q: "How often does a watcher run?", kid: "Hourly can keep the same signal for less.", options: [
      { id: "every-5-min", label: "Every 5 minutes.", days: 0, cost: 226, risk: 0, signal: 0, consequence: "2016 runs a week. Budget gone." },
      { id: "hourly", label: "Hourly.", days: 0, cost: 19, risk: 0, signal: 0, consequence: "168 runs a week. Same signal." },
      { id: "daily", label: "Once a day.", days: 0, cost: 1, risk: 0, signal: 0, consequence: "7 runs a week. Slow but cheap." }
    ]},
    { id: "monitoring", q: "How do you hear about breaks?", kid: "New errors plus what people say on X.", options: [
      { id: "none", label: "Wait for angry users.", days: 0, cost: 0, risk: 2, signal: 0, consequence: "You hear about breaks from users." },
      { id: "error-bot", label: "Error bot. New errors only.", days: 0, cost: 0, risk: -1, signal: 2, consequence: "New errors reach you each morning." },
      { id: "error-bot-x", label: "Error bot plus an X watcher.", days: 0, cost: 5, risk: -1, signal: 3, consequence: "Errors plus what people say on X." }
    ]}
  ];
  D.sim.outcomes = [
    { id: "incident", title: "Incident", kid: "Risk hit 5 or more. Something ugly can merge or hit users.", chapter: "gates" },
    { id: "wrong-thing", title: "Wrong thing", kid: "Signal stayed at 0 or less. You built on a guess.", chapter: "idea-good" },
    { id: "over-budget", title: "Over budget", kid: "Cost hit 100 or more. The timer ate the week.", chapter: "cost" },
    { id: "shipped-safe", title: "Shipped safe", kid: "You validated, locked main, watched, and stayed cheap enough.", chapter: "whole-map" }
  ];

  const leaf = (answer, why, sources) => ({ answer, why, sources });
  D.trees = [
    {
      id: "board", title: "Which board?",
      root: "solo",
      nodes: {
        solo: { q: "Is it just you, or under 3 people?", options: [{ id: "solo-yes", label: "Yes, just us", next: "code-where" }, { id: "solo-no", label: "No, a bigger team", next: "ms" }] },
        "code-where": { q: "Where is the code?", options: [{ id: "code-github", label: "GitHub", next: "github-projects" }, { id: "code-azure", label: "Azure Repos", next: "azure-boards" }] },
        ms: { q: "Does your employer run Microsoft DevOps?", options: [{ id: "ms-yes", label: "Yes", next: "azure-boards" }, { id: "ms-no", label: "No", next: "atlassian" }] },
        atlassian: { q: "Big company already on Atlassian?", options: [{ id: "atlassian-yes", label: "Yes", next: "jira" }, { id: "atlassian-no", label: "No", next: "volume" }] },
        volume: { q: "More than 250 issues or need cycles?", options: [{ id: "volume-high", label: "Yes", next: "linear-basic" }, { id: "volume-low", label: "No", next: "linear-free" }] }
      },
      leaves: {
        "github-projects": leaf("GitHub Issues plus a GitHub Project", "It sits next to the code and PRs. @cursor starts an agent from an issue.", ["docs/research-v2.md D1"]),
        "azure-boards": leaf("Azure Boards", "Use it if the code is on Azure Repos or work already lives on Microsoft.", ["docs/research-v2.md D1"]),
        jira: leaf("Jira", "For a company already on Atlassian, over 10 people.", ["docs/research-v2.md D1"]),
        "linear-basic": leaf("Linear Basic", "Free stops at 250 issues or 2 teams. Basic is $10 per user per month billed yearly.", ["docs/research-v2.md D1 C3"]),
        "linear-free": leaf("Linear Free or GitHub Projects", "Still under 250 issues. GitHub Projects is $0. Linear Free is fine until volume grows.", ["docs/research-v2.md D1"])
      }
    },
    {
      id: "hosting", title: "Which host?",
      root: "static",
      nodes: {
        static: { q: "Is it a static page with no logins or payments?", options: [{ id: "static-yes", label: "Yes", next: "github-pages" }, { id: "static-no", label: "No, it needs logins or data", next: "commercial" }] },
        commercial: { q: "Is it commercial?", options: [{ id: "commercial-no", label: "Personal or non-commercial", next: "vercel-hobby-supabase-free" }, { id: "commercial-yes", label: "Yes, it is a business", next: "payments" }] },
        payments: { q: "Does it take payments?", options: [{ id: "payments-no", label: "No payments", next: "vercel-pro-supabase-pro" }, { id: "payments-yes", label: "Yes, it takes payments", next: "vercel-pro-supabase-pro-stripe" }] }
      },
      leaves: {
        "github-pages": leaf("GitHub Pages", "Free. 1 GB site. Not for commercial SaaS or sensitive transactions.", ["docs/research-v2.md D2 B6"]),
        "vercel-hobby-supabase-free": leaf("Vercel Hobby plus Supabase Free", "Hobby is personal, non-commercial. Supabase Free pauses after 1 week idle.", ["docs/research-v2.md D2 B7"]),
        "vercel-pro-supabase-pro": leaf("Vercel Pro plus Supabase Pro", "Pro $20 and Pro from $25. Two Supabase projects for staging and prod.", ["docs/research-v2.md D2 B7"]),
        "vercel-pro-supabase-pro-stripe": leaf("Vercel Pro, Supabase Pro, and Stripe", "Never take payments on GitHub Pages.", ["docs/research-v2.md D2"])
      }
    },
    {
      id: "automate", title: "Should I automate this yet?",
      root: "hand",
      nodes: {
        hand: { q: "Has a bot done it by hand twice, cleanly?", options: [{ id: "by-hand-twice-no", label: "No", next: "not-yet" }, { id: "by-hand-twice-yes", label: "Yes", next: "skill" }] },
        skill: { q: "Is it saved as a skill?", options: [{ id: "skill-no", label: "Not yet", next: "save-skill" }, { id: "skill-yes", label: "Yes, the recipe exists", next: "risky" }] },
        risky: { q: "Does it send, post, pay, delete or touch prod?", options: [{ id: "risky-yes", label: "Yes, it leaves the box", next: "draft-plus-ask-first" }, { id: "risky-no", label: "No, it only prepares", next: "freq" }] },
        freq: { q: "How often does the input change?", options: [{ id: "freq-minutes", label: "Minutes", next: "event-trigger" }, { id: "freq-hours", label: "Hours", next: "hourly" }, { id: "freq-days", label: "Days", next: "daily" }] }
      },
      leaves: {
        "not-yet": leaf("Not yet", "Keep doing it by hand with the bot and correct it.", ["docs/research-v2.md D3"]),
        "save-skill": leaf("Save the skill first", "A routine without a skill is a prompt on a timer.", ["docs/research-v2.md D3"]),
        "draft-plus-ask-first": leaf("Draft plus Ask first", "Routine that drafts, with an Ask first rule on the final step.", ["docs/research-v2.md D3"]),
        "event-trigger": leaf("Event trigger", "Narrow match, not a 5 minute timer. Avoid every new message.", ["docs/research-v2.md D3 B1"]),
        hourly: leaf("Hourly", "168 runs a week. Same signal if nothing changes faster.", ["docs/research-v2.md D3 C1"]),
        daily: leaf("Daily at a set time", "7 runs a week. Slow but cheap.", ["docs/research-v2.md D3"])
      }
    },
    {
      id: "merge", title: "Can this PR auto-merge?",
      root: "checks",
      nodes: {
        checks: { q: "Are all required checks green?", options: [{ id: "checks-no", label: "No", next: "fix-first" }, { id: "checks-yes", label: "Yes", next: "blast" }] },
        blast: { q: "Is the blast radius low?", options: [{ id: "blast-high", label: "No. Auth, pay, data, secrets, infra, or CI", next: "human-merge" }, { id: "blast-low", label: "Yes. Docs, copy, tests, an isolated page", next: "proof" }] },
        proof: { q: "Is proof attached and checked by a verifier?", options: [{ id: "proof-no", label: "No proof yet", next: "ask-proof" }, { id: "proof-yes", label: "Yes, verifier signed the proof", next: "auto-merge-window" }] }
      },
      leaves: {
        "fix-first": leaf("Fix first", "Red or missing checks stop the line.", ["docs/research-v2.md D4"]),
        "human-merge": leaf("Human merges", "High blast stays in your hands.", ["docs/research-v2.md D4"]),
        "ask-proof": leaf("Ask for proof", "Command plus output, or a phone screenshot. Then a verifier.", ["docs/research-v2.md D4"]),
        "auto-merge-window": leaf("Auto-merge after a wait window", "poteto: rebase and auto-merge after 1 hour unless she requests changes.", ["docs/research-v2.md D4 A4"])
      }
    }
  ];

  D.cases = [
    {
      id: "quote-app", title: "Quote app, idea to live", source: "research-v2 H1",
      steps: [
        { title: "Idea", who: "Viraj", what: "Writes one line: plumbers lose quotes when signal drops and re-type them at night.", artifact: "Note in Notion", time: "10 min", label: "AUTHORED" },
        { title: "Research", who: "Research bot", what: "Runs the F12 prompt. Finds pricing pages and reviews. Labels claims.", artifact: "Notion page, 5 sources", time: "45 min", label: "AUTHORED" },
        { title: "Riskiest assumption", who: "Viraj + Architect", what: "Plumbers will quote on a phone, not paper. Cheapest test: ask 5 plumbers, show a clickable mock.", artifact: "Test plan", time: "1 day", label: "INFERRED" },
        { title: "Decide", who: "Viraj", what: "4 of 5 say yes. Keep. Founder decides. Bot gathers.", artifact: "Decision line in Notion", time: "5 min", label: "AUTHORED" },
        { title: "Brief", who: "Architect drafts, Viraj approves", what: "F1 template with done-means and proof.", artifact: "brief.md", time: "30 min", label: "AUTHORED" },
        { title: "Repo and rules", who: "Architect via cloud agent", what: "New repo, main ruleset, CI, AGENTS.md, Bugbot, push protection.", artifact: "First PR", time: "1 hour", label: "AUTHORED" },
        { title: "Board", who: "Architect", what: "GitHub Project with Backlog, Ready, In progress, In review, Done. Tickets from the brief.", artifact: "6 issues", time: "20 min", label: "AUTHORED" },
        { title: "Environment", who: "Cloud agent", what: "Agent-led setup. Secrets added in the Secrets tab.", artifact: "Active Build", time: "10 min", label: "VERIFIED" },
        { title: "Build", who: "Cloud agent", what: "@cursor on ticket 1. Branch, code, tests, screenshots.", artifact: "PR #1", time: "1 to 3 hours", label: "INFERRED" },
        { title: "Checks", who: "CI, Bugbot", what: "CI fails once. Agent reads the log, fixes, pushes. Bugbot flags an unhandled error. Agent fixes it.", artifact: "Green checks", time: "30 min", label: "AUTHORED" },
        { title: "Verify", who: "Verifier agent", what: "Opens the preview on a 390 px phone, runs done-means, attaches video.", artifact: "Verdict comment", time: "20 min", label: "AUTHORED" },
        { title: "Approve and merge", who: "Viraj", what: "Reads the proof, approves, squash merges.", artifact: "Merge", time: "5 min", label: "AUTHORED" },
        { title: "Deploy", who: "Vercel", what: "Deploys from main automatically. Preview per PR earlier. Live URL is up.", artifact: "Live URL", time: "2 min", label: "AUTHORED" },
        { title: "Watch", who: "Error bot routine", what: "F4 routine, daily 8:00, new errors only, quiet when nothing.", artifact: "Daily digest", time: "daily", label: "AUTHORED" },
        { title: "Feedback", who: "Feedback bot", what: "Watches X and a form for quote mentions, files issues.", artifact: "New tickets", time: "hourly", label: "AUTHORED" },
        { title: "Improve", who: "Architect", what: "Picks the top ticket each morning. Back to build. Next PR.", artifact: "Next PR", time: "loop", label: "AUTHORED" }
      ]
    },
    {
      id: "lingxi-org", title: "Lingxi's engineering org", source: "research-v2 H2",
      steps: [
        { title: "Task arrives", who: "Lingxi or Slack", what: "Work shows up.", artifact: "Ask", time: "minutes", label: "VERIFIED" },
        { title: "Area bot launches", who: "One of five area bots", what: "Launches a cloud agent with his skills and a proof bar.", artifact: "Cloud agent", time: "minutes", label: "VERIFIED" },
        { title: "Watch the transcript", who: "Area bot", what: "Reads transcripts and screenshots. Pushes back if visuals do not match.", artifact: "Follow-up", time: "during the run", label: "VERIFIED" },
        { title: "Board sweep", who: "Area bot", what: "Every 30 minutes sweep Notion for Bugbot findings, failing CI, and conflicts.", artifact: "Board update", time: "every 30 min", label: "VERIFIED" },
        { title: "Working", who: "Area bot", what: "Problems go back to Working with a follow-up to the agent.", artifact: "Working", time: "as needed", label: "VERIFIED" },
        { title: "Ready for Review", who: "Area bot", what: "Clean PRs go to Ready for Review plus an automatic code review.", artifact: "Review", time: "as needed", label: "VERIFIED" },
        { title: "Auto-merge", who: "Bot + rules", what: "High confidence and low blast radius merge automatically.", artifact: "Merge", time: "when safe", label: "VERIFIED" },
        { title: "Morning review", who: "Lingxi", what: "Everything else waits for Lingxi in the morning.", artifact: "Human review", time: "morning", label: "VERIFIED" },
        { title: "Postmortem", who: "Jenny", what: "Mistakes go to Jenny for root-cause and a playbook update.", artifact: "Playbook", time: "after a miss", label: "VERIFIED" },
        { title: "5 a.m. 1:1s", who: "Jenny", what: "Meets every bot to keep them on the playbook.", artifact: "1:1 notes", time: "daily 5 a.m.", label: "VERIFIED" },
        { title: "Nightly audits", who: "Fleet", what: "3 a.m. cleanup PRs. Result: from 15 agents by hand to 200+.", artifact: "Cleanup PRs", time: "3 a.m.", label: "VERIFIED" }
      ]
    },
    {
      id: "test-fix-loop", title: "Alton's test-and-fix loop", source: "research-v2 H3",
      steps: [
        { title: "Walk the flow", who: "Testing agent", what: "Signs up as a new brand and walks the real flow.", artifact: "Session", time: "minutes", label: "VERIFIED" },
        { title: "Two bugs", who: "Product", what: "Paid approvals throw a false payment error. Gifted approvals fail silently.", artifact: "Broken flow", time: "during the walk", label: "VERIFIED" },
        { title: "Bug report", who: "Testing agent", what: "Writes repro steps, API responses, and auth state.", artifact: "Bug report", time: "minutes", label: "VERIFIED" },
        { title: "Launch fixer", who: "Testing agent", what: "Launches a Cursor cloud agent. Open a PR without merging.", artifact: "Cloud agent", time: "minutes", label: "VERIFIED" },
        { title: "PR", who: "Cloud agent", what: "Finds the bug and opens a PR.", artifact: "PR", time: "minutes", label: "VERIFIED" },
        { title: "Review", who: "Alton", what: "Reviews and merges. Merging stays his call.", artifact: "Merge", time: "minutes", label: "VERIFIED" },
        { title: "Deploy", who: "main", what: "Deploy runs from main.", artifact: "Live fix", time: "minutes", label: "VERIFIED" },
        { title: "Users unblocked", who: "Creators", what: "Both creators approved minutes later. Testing continues.", artifact: "Approvals", time: "minutes later", label: "VERIFIED" }
      ]
    },
    {
      id: "poteto-loop", title: "poteto's feedback loop", source: "research-v2 H4",
      steps: [
        { title: "Watch Slack", who: "Grok Bot", what: "Watch this Slack channel for feedback about the app.", artifact: "Signal", time: "ongoing", label: "VERIFIED" },
        { title: "Ticket", who: "Grok Bot", what: "Create a ticket in Linear.", artifact: "Linear issue", time: "minutes", label: "VERIFIED" },
        { title: "Reproduce", who: "Cloud agent", what: "Triage and reproduce on its own computer, using pstack.", artifact: "Repro", time: "minutes to hours", label: "VERIFIED" },
        { title: "Fix plus fuzz", who: "Cloud agent swarm", what: "If it reproduces, put up a fix and fuzz the PR with a small swarm.", artifact: "PR", time: "hours", label: "VERIFIED" },
        { title: "Ping", who: "Bot", what: "If the fuzz has no issues, ping on Slack.", artifact: "Slack ping", time: "after fuzz", label: "VERIFIED" },
        { title: "Wait window", who: "GitHub", what: "Rebase and auto-merge after 1 hour unless changes are requested.", artifact: "Merge", time: "1 hour", label: "VERIFIED" }
      ]
    }
  ];

  const S = (label, status, kid, grownUp, actor, fixes) => ({ id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), label, status, kid, grownUp, actor, fixes });
  D.prScenarios = [
    {
      id: "happy-path", title: "Happy path",
      states: [
        { id: "branch-made", label: "branch made", status: "pending", kid: "A safe copy of the repo now exists.", grownUp: "The cloud agent cloned the repo and opened a separate branch.", actor: "Cloud agent" },
        { id: "code-written", label: "code written", status: "pending", kid: "The change is on that copy.", grownUp: "The agent works in an isolated VM with the brief.", actor: "Cloud agent" },
        { id: "pr-opened", label: "PR opened", status: "pending", kid: "The builder asks to put the copy into main, with proof.", grownUp: "Merge-ready PR plus screenshots or logs.", actor: "Cloud agent" },
        { id: "ci-running", label: "CI running", status: "pending", kid: "A robot is running the tests.", grownUp: "GitHub Actions on every PR.", actor: "CI" },
        { id: "bugbot-reviewing", label: "Bugbot reviewing", status: "pending", kid: "The bug hunter is reading the diff.", grownUp: "Cursor Bugbot on every update.", actor: "Bugbot" },
        { id: "checks-green", label: "checks green", status: "success", kid: "The lights look good. That is not the same as safe.", grownUp: "Required checks may be successful, skipped, or neutral.", actor: "CI + Bugbot" },
        { id: "verifier-approves", label: "verifier approves", status: "success", kid: "A second helper opens the preview.", grownUp: "The judge is never the writer.", actor: "Verifier" },
        { id: "human-approves", label: "human approves", status: "success", kid: "You look at the proof and say yes.", grownUp: "Or a 1 hour wait unless you request changes.", actor: "You" },
        { id: "merged", label: "merged", status: "merged", kid: "The copy is now part of main.", grownUp: "Squash suits one-ticket agent PRs.", actor: "You" },
        { id: "deployed", label: "deployed", status: "merged", kid: "The live app updated.", grownUp: "CD after merge.", actor: "Host" },
        { id: "monitored", label: "monitored", status: "merged", kid: "Watchers look for new breaks.", grownUp: "New errors only. Rollouts per env.", actor: "Watcher bot + you" }
      ]
    },
    {
      id: "failing-ci", title: "Failing CI",
      states: [
        { id: "branch-made", label: "branch made", status: "pending", kid: "A safe copy exists.", grownUp: "Separate branch from main.", actor: "Cloud agent" },
        { id: "code-written", label: "code written", status: "pending", kid: "Quote draft code is on the branch.", grownUp: "The ticket asked for tests/quote-draft.test.ts.", actor: "Cloud agent" },
        { id: "pr-opened", label: "PR opened", status: "pending", kid: "The PR is open.", grownUp: "Proof is still thin.", actor: "Cloud agent" },
        { id: "ci-running", label: "CI running", status: "pending", kid: "The test job started.", grownUp: "Job name test is the required check.", actor: "CI" },
        { id: "ci-failed", label: "CI failed: test quote-draft", status: "failure", kid: "A test is red. Next is locked until you pick a fix.", grownUp: "Read the failing log line. Reproduce in the agent VM. Fix the cause. Push.", actor: "CI",
          fixes: [
            { text: "Re-run CI until it goes green", correct: false, why: "A flaky retry hides the cause and burns minutes." },
            { text: "Delete the failing test", correct: false, why: "BUGBOT.md should add a blocking Bug titled Test removed." },
            { text: "Merge anyway, fix later", correct: false, why: "Required checks must pass." },
            { text: "Read the failing log line, reproduce in the agent's VM, fix the cause, push", correct: true, why: "That is the expert fix in table E." }
          ]
        },
        { id: "agent-pushes-fix", label: "Agent pushes fix", status: "pending", kid: "A new commit is on the branch.", grownUp: "The agent stays subscribed and drives the PR.", actor: "Cloud agent" },
        { id: "ci-running-2", label: "CI running", status: "pending", kid: "Tests run again.", grownUp: "Re-runs count against Actions minutes on private repos.", actor: "CI" },
        { id: "checks-green", label: "checks green", status: "success", kid: "The test job is green.", grownUp: "Still wait for a verifier.", actor: "CI" },
        { id: "verifier-approves", label: "verifier approves", status: "success", kid: "A second helper signs the proof.", grownUp: "Not the builder.", actor: "Verifier" },
        { id: "human-approves", label: "human approves", status: "success", kid: "You say yes.", grownUp: "You still read the new diff.", actor: "You" },
        { id: "merged", label: "merged", status: "merged", kid: "Main has the fix.", grownUp: "Squash merge.", actor: "You" }
      ]
    },
    {
      id: "bugbot-neutral", title: "Bugbot neutral",
      states: [
        { id: "branch-made", label: "branch made", status: "pending", kid: "Branch exists.", grownUp: "Own area, own branch.", actor: "Cloud agent" },
        { id: "pr-opened", label: "PR opened", status: "pending", kid: "PR is up.", grownUp: "Bugbot will comment.", actor: "Cloud agent" },
        { id: "bugbot-finding", label: "Bugbot finds an unhandled error", status: "neutral", kid: "There is a finding. The check is not red.", grownUp: "Neutral is the default conclusion when Bugbot reports findings.", actor: "Bugbot" },
        { id: "merge-gate", label: "Merge gate", status: "neutral", kid: "The merge button can still look open.", grownUp: "Requiring the Cursor Bugbot check alone does not block. Turn on fail-on-unresolved.", actor: "GitHub", mergeGate: true },
        { id: "human-reads", label: "You read the finding", status: "pending", kid: "You or a bot triage every finding.", grownUp: "pstack: skeptical posture. Dismiss noise with a reason.", actor: "You" },
        { id: "merged", label: "merged", status: "merged", kid: "Only after the finding is fixed or dismissed on purpose.", grownUp: "Fail-on-unresolved makes the check red until then.", actor: "You" }
      ]
    },
    {
      id: "merge-conflict", title: "Merge conflict",
      states: [
        { id: "two-agents", label: "two agents edited quote.ts", status: "pending", kid: "Both thought they owned the file.", grownUp: "Lingxi: one domain per bot.", actor: "Two cloud agents" },
        { id: "conflict", label: "This branch has conflicts", status: "blocked", kid: "GitHub will not merge.", grownUp: "Rebase on main, resolve, re-run checks.", actor: "GitHub",
          fixes: [
            { text: "Force push over main", correct: false, why: "That is how one agent wipes another." },
            { text: "Close the other agent's PR", correct: false, why: "You may need both changes. Rebase instead." },
            { text: "Rebase on main, resolve the conflict, re-run checks", correct: true, why: "Then give each bot its own area." }
          ]
        },
        { id: "resolved", label: "conflict resolved", status: "pending", kid: "The file has one story again.", grownUp: "Checks must run on the new tree.", actor: "You or the agent" },
        { id: "merged", label: "merged", status: "merged", kid: "Main is linear again.", grownUp: "Strict up-to-date checks would have forced this rebase.", actor: "You" }
      ]
    },
    {
      id: "secret-leak", title: "Secret leak",
      states: [
        { id: "paste", label: "key pasted into code", status: "pending", kid: "Someone put a password in a file.", grownUp: "Never paste keys in chat or git.", actor: "Cloud agent" },
        { id: "blocked", label: "push blocked by push protection", status: "blocked", kid: "GitHub stopped the push.", grownUp: "Push protection blocks secrets before they reach the repository.", actor: "GitHub",
          fixes: [
            { text: "Bypass: I'll fix it later", correct: false, why: "The key may already be burned." },
            { text: "Make the repo private", correct: false, why: "Privacy does not rotate a key." },
            { text: "Rotate the key, remove it, put it in the Secrets tab", correct: true, why: "Rotate first. Then remove. Then inject at start." }
          ]
        },
        { id: "rotated", label: "key rotated", status: "success", kid: "The old key is dead.", grownUp: "Start a new agent so it sees the new secret.", actor: "You" },
        { id: "merged", label: "merged", status: "merged", kid: "The file is clean.", grownUp: "Push protection stays on.", actor: "You" }
      ]
    },
    {
      id: "stale-approval", title: "Stale approval",
      states: [
        { id: "approved", label: "approved", status: "success", kid: "A person said yes.", grownUp: "That yes was for an older diff.", actor: "You" },
        { id: "new-commits", label: "new commits pushed", status: "pending", kid: "The branch moved.", grownUp: "Dismiss stale pull request approvals when new commits are pushed.", actor: "Cloud agent" },
        { id: "reset", label: "approval reset", status: "neutral", kid: "The old yes is gone.", grownUp: "Ask for a fresh review of the new diff.", actor: "GitHub",
          fixes: [
            { text: "Merge on the old approval", correct: false, why: "The new diff was never reviewed." },
            { text: "Ask for a fresh review of the new diff", correct: true, why: "That is the point of dismiss stale approvals." },
            { text: "Disable the ruleset", correct: false, why: "Do not turn off the lock because it worked." }
          ]
        },
        { id: "fresh", label: "fresh review", status: "success", kid: "Someone read the new diff.", grownUp: "Require approval of the most recent reviewable push.", actor: "You" },
        { id: "merged", label: "merged", status: "merged", kid: "Main has the new commits on purpose.", grownUp: "The ruleset did its job.", actor: "You" }
      ]
    }
  ];

  D.checklist = [
    { key: "front-door", order: 1, phase: "Front door and rules", label: "Primary / front-door bot with Auto Review on", why: "Ask first for send, post, buy, delete.", how: "Create the bot. Paste F13. Put safety in the description.", chapter: "helpers" },
    { key: "connectors", order: 2, phase: "Front door and rules", label: "Connectors: GitHub, Notion, X. Origin if you want Cursor-hosted repos", why: "Viraj already has these. X is built in.", how: "Confirm each connector. Do not paste keys in chat.", chapter: "helpers" },
    { key: "house-rules", order: 3, phase: "Front door and rules", label: "House rules note that every bot reads first", why: "Bots do not share a brain. Memory is not the source of truth.", how: "Notion page or /workspace file. One line in every description: read it first.", chapter: "helpers" },
    { key: "repo-protect", order: 4, phase: "Repo and gates", label: "One GitHub repo per product with main protected", why: "Require a PR, require checks, resolve conversations.", how: "Paste the F5 list into a ruleset on main.", chapter: "gates" },
    { key: "project-board", order: 5, phase: "Repo and gates", label: "GitHub Project board linked to the repo", why: "A shared wall next to the code.", how: "Board template. Columns Backlog, Ready, In progress, In review, Done.", chapter: "board" },
    { key: "bugbot", order: 6, phase: "Repo and gates", label: "Turn on Bugbot. Require the Cursor Bugbot check", why: "Findings start as neutral. Consider fail-on-unresolved.", how: "Add F7 and F8. Pin the check to the Cursor app.", chapter: "gates" },
    { key: "ci", order: 7, phase: "Repo and gates", label: "CI with GitHub Actions on every PR", why: "Robot tests before a human yes.", how: "Add F6. Require the test check.", chapter: "gates" },
    { key: "cursor-setup", order: 8, phase: "Builders", label: "Cursor paid plan, GitHub, spend limit, secrets, AGENTS.md", why: "Cloud agents need a limit, secrets, and rules.", how: "Add F9 and F10. Secrets tab, not chat.", chapter: "builders" },
    { key: "pstack", order: 9, phase: "Builders", label: "Install pstack and use poteto-mode for real builds", why: "Goal, done check, proof, knowledge, constraints.", how: "Use /poteto-mode. A duration is not a finish condition.", chapter: "builders" },
    { key: "hosting", order: 10, phase: "Live and watching", label: "Hosting: Pages for static. Vercel + Supabase for logins and data", why: "Pages is not a shop. Hobby is not commercial.", how: "Use the hosting tree. Separate staging and prod.", chapter: "going-live" },
    { key: "sentry", order: 11, phase: "Live and watching", label: "Error tracking and a bot that reports only new errors", why: "So you do not live in Sentry.", how: "Paste F4. Quiet when nothing changed.", chapter: "watching" },
    { key: "research-bot", order: 12, phase: "Scale", label: "Research bot with stop conditions and evidence labels", why: "VERIFIED / INFERRED / UNKNOWN.", how: "Paste F12. Two clean hand runs before a routine.", chapter: "idea-good" },
    { key: "routines-last", order: 13, phase: "Scale", label: "Routines last, after two clean manual runs", why: "Then run a usage audit so a timer cannot fire 672 empty jobs.", how: "Use the automate tree and the cost calculator.", chapter: "routines-trust" },
    { key: "team-span", order: 14, phase: "Scale", label: "Front door plus eng lead so you stay at 4 to 5 threads", why: "Peter Yang: most people cannot drive more than 4-5 threads.", how: "Use the team builder. Copy the spec.", chapter: "bot-team" }
  ];

  D.glossary = [
    { term: "Repo", kid: "The folder for a project's code and its history, stored online.", chapter: "code-home" },
    { term: "Branch", kid: "A safe copy of the code so main stays clean.", chapter: "code-home" },
    { term: "Commit", kid: "A saved snapshot of the code.", chapter: "code-home" },
    { term: "Main", kid: "The clean line everyone ships from.", chapter: "code-home" },
    { term: "Pull request", kid: "A request to put a branch into main after checks.", chapter: "the-pr" },
    { term: "Merge commit", kid: "Keeps every commit from the PR.", chapter: "code-home" },
    { term: "Squash", kid: "Smushes the PR into one commit on main.", chapter: "code-home" },
    { term: "Rebase", kid: "Lines PR commits onto main with no extra join commit.", chapter: "code-home" },
    { term: "Board", kid: "A shared to-do wall with columns.", chapter: "board" },
    { term: "Ticket", kid: "One job on a card. Goal plus done-means.", chapter: "board" },
    { term: "Description", kid: "The rules of a bot.", chapter: "helpers" },
    { term: "Skill", kid: "The how-to recipe.", chapter: "helpers" },
    { term: "Routine", kid: "The when: a clock or a doorbell.", chapter: "routines-trust" },
    { term: "Primary bot", kid: "The front door that routes work. Not the best worker.", chapter: "helpers" },
    { term: "Cloud agent", kid: "A builder with its own computer in the cloud.", chapter: "builders" },
    { term: "Local agent", kid: "A helper that runs on your laptop while you watch.", chapter: "builders" },
    { term: "CI", kid: "Robot tests on every PR.", chapter: "gates" },
    { term: "CD", kid: "A robot that deploys after merge.", chapter: "going-live" },
    { term: "Bugbot", kid: "Cursor's PR reviewer. Findings start as neutral.", chapter: "gates" },
    { term: "Verifier", kid: "A checker that did not write the change.", chapter: "the-pr" },
    { term: "Branch protection", kid: "Rules that block a sloppy merge.", chapter: "gates" },
    { term: "Dev", kid: "Your sandbox.", chapter: "going-live" },
    { term: "Staging", kid: "A practice copy users do not see.", chapter: "going-live" },
    { term: "Prod", kid: "The real live product.", chapter: "going-live" },
    { term: "Secret", kid: "An API key. Keep it out of chat and git.", chapter: "safety" },
    { term: "Spend limit", kid: "The cap you set before cloud agents run.", chapter: "cost" },
    { term: "Sandbox", kid: "A box with tight permissions, enforced by code, not by a prompt.", chapter: "safety" },
    { term: "Auto Review", kid: "Ask first wins over allow automatically.", chapter: "safety" },
    { term: "Webhook", kid: "A doorbell from another app that can wake a routine.", chapter: "routines-trust" },
    { term: "House rules", kid: "A shared file every bot reads first.", chapter: "helpers" },
    { term: "Origin", kid: "Cursor's git forge. Early beta. Not on free plans.", chapter: "code-home" },
    { term: "GitHub Pages", kid: "A host for HTML, CSS, and JS straight from a repo. Not a shop.", chapter: "going-live" },
    { term: "Supabase", kid: "Database, auth, and storage for version one.", chapter: "going-live" },
    { term: "Rollouts", kid: "Watches for a bad change, opens an issue, does not merge by itself.", chapter: "watching" },
    { term: "Ruleset", kid: "The list of rules GitHub enforces on a branch.", chapter: "gates" },
    { term: "Required check", kid: "A test that must pass before merge.", chapter: "gates" },
    { term: "Neutral", kid: "A check result that neither passes nor fails. Bugbot uses it for findings by default.", chapter: "gates" },
    { term: "Auto-merge", kid: "GitHub merges by itself once every rule passes.", chapter: "gates" },
    { term: "Preview deployment", kid: "A private copy of the site for one PR.", chapter: "going-live" },
    { term: "Rollback", kid: "Going back to the last good version.", chapter: "going-live" },
    { term: "environment.json", kid: "The file that tells a cloud agent how to set up its computer.", chapter: "builders" },
    { term: "Idempotent", kid: "Safe to run twice, ends the same.", chapter: "builders" },
    { term: "Blast radius", kid: "How much breaks if this change is wrong.", chapter: "gates" },
    { term: "Change fail rate", kid: "Share of deploys that need a fix right away.", chapter: "watching" },
    { term: "Lead time", kid: "Time from commit to live.", chapter: "watching" },
    { term: "Push protection", kid: "GitHub blocking a push that contains a secret.", chapter: "going-live" },
    { term: "CODEOWNERS", kid: "A file naming who must approve changes to some files.", chapter: "gates" },
    { term: "Flaky test", kid: "A test that passes and fails with no code change.", chapter: "when-it-breaks" },
    { term: "Worktree", kid: "A separate working folder for one branch.", chapter: "code-home" }
  ];

  D.xPosts = [
    { handle: "karpathy", url: "https://x.com/karpathy/status/2105819303471976479", quote: "Web pages. Ask for output \"in HTML\" to get a beautiful, interactive webpage.", takeaway: "Ask for a page, not a wall of words.", topic: "setup", chapter: "start-here" },
    { handle: "Kcon2026", url: "https://x.com/Kcon2026/status/2103707067789816203", quote: "Grok Bot is a staff, not one butler. You create named bots. They share one cloud computer.", takeaway: "Name bots. Share one box.", topic: "team setup", chapter: "helpers" },
    { handle: "GrokBotRadar", url: "https://x.com/GrokBotRadar/status/2106860159595425975", quote: "Description = the rules. Skill = the how. Routine = the when.", takeaway: "Do not mix rules, recipe, and clock.", topic: "team setup", chapter: "helpers" },
    { handle: "GrokBotRadar", url: "https://x.com/GrokBotRadar/status/2108119717743624676", quote: "Your best Grok Bot should NOT be your primary. It's a front door. Not a worker.", takeaway: "The boss of routing is not your best maker.", topic: "team", chapter: "bot-team" },
    { handle: "poteto", url: "https://x.com/poteto/status/2107510472601985336", quote: "the first mile is figuring out what work you should even be doing at all. the last mile involves actually following through and closing the loop.", takeaway: "Bot picks the work. Cursor agents write it.", topic: "loops team", chapter: "whole-map" },
    { handle: "poteto", url: "https://x.com/poteto/status/2107963437154435182", quote: "ask your Grok @Bot to monitor X for user feedback on your products! the loop is complete", takeaway: "X to board to fixer.", topic: "loops", chapter: "watching" },
    { handle: "poteto", url: "https://x.com/poteto/status/2102050467505430555", quote: "here's how i shipped 2,500 PRs last month to production", takeaway: "Scale is real when the loop is tight.", topic: "loops team", chapter: "scale" },
    { handle: "jorgediazapps", url: "https://x.com/jorgediazapps/status/2103499532478918816", quote: "Flow: send a task (even from my iPhone). 148 PRs in 30 days. List price ~$300/mo", takeaway: "Phone to branch to review to live.", topic: "cost loops", chapter: "cost" },
    { handle: "petergyang", url: "https://x.com/petergyang/status/2104213287353356531", quote: "First, watch your bot work and correct it. Turn what worked into a skill. Once it nails the task in one shot, make it a routine.", takeaway: "Watch, correct, skill, then routine.", topic: "team setup", chapter: "routines-trust" },
    { handle: "petergyang", url: "https://x.com/petergyang/status/2106788233401237924", quote: "I don't think most people are capable of driving more than 4-5 threads at once without getting overwhelmed", takeaway: "Route through a front door.", topic: "team", chapter: "bot-team" },
    { handle: "Michael_Fenech_", url: "https://x.com/Michael_Fenech_/status/2106352565528977469", quote: "The mistake is going: Prompt then Routine. I'd go: Task then Fix then Skill then Test then Routine", takeaway: "Do not jump from one prompt to a timer.", topic: "setup", chapter: "routines-trust" },
    { handle: "GrokBotRadar", url: "https://x.com/GrokBotRadar/status/2106501043160854740", quote: "a routine firing 672 times a week. Every run rereads the Bot's whole chat. Even the runs that find nothing.", takeaway: "Hourly. 168 runs. Same signal.", topic: "cost", chapter: "cost" },
    { handle: "GrokBotRadar", url: "https://x.com/GrokBotRadar/status/2107590731569443193", quote: "Your Grok Bot should NEVER send an email you didn't see first. Ask first and Allow automatically. Both match? Ask first wins.", takeaway: "Ask first wins.", topic: "gates", chapter: "safety" },
    { handle: "AndrewYNg", url: "https://x.com/AndrewYNg/status/2104660347730969087", quote: "A sandbox gives an agent limited permissions. These restrictions are implemented in deterministic code rather than by prompting an LLM.", takeaway: "Lock the box with code, not with a wish.", topic: "gates", chapter: "safety" },
    { handle: "ludoonchart", url: "https://x.com/ludoonchart/status/2107191775433543884", quote: "research this deeply sounds good, but it gives the agent no finish line, no source hierarchy and no reason to stop browsing", takeaway: "Give a stop rule and labels.", topic: "setup", chapter: "idea-good" },
    { handle: "ethereaglehq", url: "https://x.com/ethereaglehq/status/2106500543090966537", quote: "Cursor cloud agents subscribe to PRs they create. they drive CI and bot comments until the PR is done.", takeaway: "The builder stays on the PR.", topic: "loops gates", chapter: "the-pr" },
    { handle: "BourkeFloyd", url: "https://x.com/BourkeFloyd/status/2099963986632671234", quote: "Skill encodes the proof. Cloud agent opens the PR. You still gate the merge. Diffs are cheap. Proof is the product", takeaway: "You still say yes.", topic: "gates", chapter: "the-pr" },
    { handle: "lingxi", url: "https://x.com/lingxi/status/2094493172516966781", quote: "Think of Grok Bot as a highly capable engineering intern, with its own computers, that can manage coding agents and learn from how you work.", takeaway: "Five area bots plus Jenny. Fleet over 200.", topic: "team loops", chapter: "bot-team" },
    { handle: "lingxi", url: "https://x.com/lingxi/status/2094694492083503564", quote: "my bots never write code on their machines. cloud agents do all the lifting. bots drive them.", takeaway: "Bots drive. Agents lift.", topic: "team", chapter: "helpers" },
    { handle: "BigVikDada", url: "https://x.com/BigVikDada/status/2094654032216477952", quote: "If you copy this, copy the merge bar, not the headcount. Define blast radius. Define who may merge.", takeaway: "Copy the merge bar.", topic: "gates team", chapter: "scale" },
    { handle: "baltaaazr", url: "https://x.com/baltaaazr/status/2087251248315875726", quote: "i found that 3-4 agents each specializing in specific areas plus one manager agent to delegate works really well.", takeaway: "A few specialists plus one manager.", topic: "team", chapter: "bot-team" },
    { handle: "altonpeques", url: "https://x.com/altonpeques/status/2106909033215217724", quote: "Muse tests my app in the browser, and when it hits a bug, it launches a Cursor agent that writes the fix and opens the PR. I review, merge, deploy.", takeaway: "Test, fix, review, merge, deploy.", topic: "loops failures", chapter: "scale" },
    { handle: "sergeykarayev", url: "https://x.com/sergeykarayev/status/2085425779903807862", quote: "Coding agents should not grade their own homework. Our coding agent said it was done, with tests passing. Then our QA agent opened the app and found the feature was broken.", takeaway: "Verifier is never the builder.", topic: "failures gates", chapter: "when-it-breaks" },
    { handle: "yanis__42", url: "https://x.com/yanis__42/status/2087875278835945884", quote: "The failures that scare me are the green ones. never accept a status, ask for the evidence.", takeaway: "Ask for the command and the output.", topic: "failures gates", chapter: "the-pr" },
    { handle: "0xhashlol", url: "https://x.com/0xhashlol/status/2093358892738650560", quote: "agent edits a file, tests pass, but it silently dropped an error branch. deletions are where agents lie to you.", takeaway: "Review removed lines first.", topic: "failures", chapter: "when-it-breaks" },
    { handle: "HermesShield", url: "https://x.com/HermesShield/status/2088624382885203998", quote: "We ran three agents on the same repo once. One force-pushed over another's branch, a third opened a PR that deleted the test suite.", takeaway: "One area, one worktree.", topic: "failures", chapter: "code-home" },
    { handle: "Mintscope1", url: "https://x.com/Mintscope1/status/2106411033682481522", quote: "named finish line for the fix + hard revoke mid-run, or a flaky PR becomes unbounded spend.", takeaway: "Cap the loop.", topic: "cost failures", chapter: "cost" },
    { handle: "nandanpri", url: "https://x.com/nandanpri/status/2094677450907087311", quote: "I let a cloud agent pick its own model once. It grabbed the thinking one for a CSS tweak and burned the session.", takeaway: "Name the model in the brief.", topic: "cost setup", chapter: "brief" },
    { handle: "webjuice_ie", url: "https://x.com/webjuice_ie/status/2105968656261795949", quote: "One loose instruction and an agent pushes or merges while I'm on a client call. What keeps it in check is Auto-review rules.", takeaway: "Ask first for push and merge.", topic: "gates", chapter: "safety" },
    { handle: "Pinuts_", url: "https://x.com/Pinuts_/status/2100600163974721975", quote: "I made a Grok Bot that watches production errors. Only NEW errors, not old noise", takeaway: "New errors only.", topic: "loops", chapter: "watching" }
  ];
})();

