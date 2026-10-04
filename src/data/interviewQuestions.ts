export interface InterviewQuestion {
  id: string;
  question: string;
  hint: string;
  concepts: string[][];
  sample: string;
  followUp: string;
}
type Spec = [string, string[][], string];
const banks: Record<string, Spec[]> = {
  "software-engineering": [
    [
      "What is the difference between state and props in React?",
      [
        ["state", "local"],
        ["props", "parent"],
        ["update", "setter", "setstate"],
        ["read-only", "readonly", "immutable"],
      ],
      "Props are read-only inputs passed from a parent. State is data managed by a component and updated through a setter. Updating state triggers a render. For example, a counter owns its count as state while its label arrives as a prop.",
    ],
    [
      "How would you debug a page that fails to load data from an API?",
      [
        ["network", "status", "http"],
        ["error", "catch"],
        ["request", "url", "endpoint"],
        ["loading", "response", "json"],
      ],
      "Inspect the network request, URL, HTTP status, and response. Check the console, error handling, and response shape. Reproduce the failure, separate server and client causes, and keep a useful loading or error state visible.",
    ],
    [
      "What makes a web form accessible?",
      [
        ["label"],
        ["keyboard", "focus"],
        ["error", "validation"],
        ["semantic", "aria", "fieldset"],
      ],
      "Use native controls with associated labels, clear instructions, and semantic groups. Keep keyboard focus visible, announce validation errors, and ensure errors identify the field and how to fix it. Test using only a keyboard.",
    ],
    [
      "When would you use TypeScript in a team project?",
      [
        ["type", "interface"],
        ["compile", "static", "check"],
        ["runtime", "validation"],
        ["team", "refactor", "documentation"],
      ],
      "TypeScript provides static checks and documents data contracts, making team changes and refactoring safer. It catches many errors before execution but does not validate external data at runtime, so API inputs still need validation.",
    ],
    [
      "How would you test a task-completion feature that persists after refresh?",
      [
        ["complete", "toggle", "check"],
        ["storage", "persist", "refresh"],
        ["unmark", "undo", "uncheck"],
        ["empty", "error", "keyboard", "reload"],
      ],
      "Complete a task, verify its progress changes, and refresh to confirm persistence. Unmark it and refresh again. Also check an empty roadmap, storage failures, and keyboard operation. A meaningful integration test covers the complete user flow.",
    ],
  ],
  "data-analytics": [
    [
      "How are an INNER JOIN and a LEFT JOIN different?",
      [["inner", "match"], ["left", "all"], ["null"], ["table", "key"]],
      "An INNER JOIN returns matching rows from both tables. A LEFT JOIN keeps every row from the left table and fills unmatched right-side columns with NULL. Use a LEFT JOIN when you must retain customers without orders.",
    ],
    [
      "How would you handle missing values in a dataset?",
      [
        ["missing", "null"],
        ["reason", "pattern", "investigate"],
        ["drop", "impute", "fill"],
        ["document", "bias", "validate"],
      ],
      "Inspect how much is missing and why. Choose whether to exclude, impute, or preserve missing values based on the question and data type. Document the choice, consider bias, and validate the effect on results.",
    ],
    [
      "What would you check before trusting a sales dashboard?",
      [
        ["source", "data"],
        ["duplicate", "missing", "quality"],
        ["definition", "metric"],
        ["date", "filter", "reconcile"],
      ],
      "Verify the source, date range, filters, metric definitions, duplicates, and missing values. Reconcile totals against a trusted source and explain any exclusions or freshness limits.",
    ],
    [
      "How would you explain correlation to a nontechnical stakeholder?",
      [
        ["relationship", "together"],
        ["caus", "cause"],
        ["example"],
        ["confound", "other", "factor"],
      ],
      "Correlation means two measures vary together, but it does not establish that one causes the other. For example, ice cream sales and sunburn both rise in summer; warmer weather is another factor. A causal claim needs additional evidence.",
    ],
    [
      "How do you choose a chart for an analysis?",
      [
        ["question", "audience"],
        ["bar", "line", "scatter"],
        ["label", "scale", "axis"],
        ["limitation", "clear", "context"],
      ],
      "Start with the question and audience. Use bars for comparisons, a line for a time trend, or a scatter plot for a relationship. Label axes and units, choose honest scales, and include the relevant context and limitations.",
    ],
  ],
  "ai-machine-learning": [
    [
      "What is overfitting, and how can you reduce it?",
      [
        ["training", "train"],
        ["test", "general"],
        ["regular", "simpl", "validation"],
        ["data", "cross"],
      ],
      "Overfitting happens when a model learns training-specific noise and generalizes poorly. Check held-out performance and consider simpler models, regularization, more suitable data, and cross-validation.",
    ],
    [
      "Why separate training and test data?",
      [
        ["train", "training"],
        ["unseen", "test"],
        ["leak", "bias"],
        ["evaluate", "general"],
      ],
      "Train on one portion and evaluate on unseen data to estimate generalization. Keep test information out of preprocessing and model selection to avoid leakage and an optimistic score.",
    ],
    [
      "When does precision matter more than recall?",
      [
        ["false positive"],
        ["precision"],
        ["recall", "false negative"],
        ["cost", "example"],
      ],
      "Precision matters when false positives are costly. For example, incorrectly blocking a legitimate transaction can harm a customer. Recall matters when missing a true case is costly. Choose the metric using the actual error costs.",
    ],
    [
      "How would you evaluate a first classification model?",
      [
        ["baseline"],
        ["split", "test", "validation"],
        ["metric", "precision", "recall"],
        ["error", "imbalance"],
      ],
      "Set a simple baseline, split the data appropriately, and select metrics for the class balance and error costs. Compare against the baseline and inspect errors and important subgroups before claiming improvement.",
    ],
    [
      "What belongs in a reproducible experiment report?",
      [
        ["data", "version"],
        ["seed", "parameter", "code"],
        ["metric", "result"],
        ["limit", "assumption"],
      ],
      "Record dataset and code versions, preprocessing, parameters, random seeds, environment, and metrics. Include a baseline, limitations, assumptions, and enough instructions for someone else to reproduce the run.",
    ],
  ],
  cybersecurity: [
    [
      "What does least privilege mean?",
      [
        ["minimum", "least"],
        ["permission", "access"],
        ["role", "task"],
        ["review", "revoke"],
      ],
      "Give a person or service only the permissions required for its task. Use appropriate roles, review access regularly, and revoke permissions that are no longer needed.",
    ],
    [
      "How would you triage a suspicious login alert?",
      [
        ["log", "time"],
        ["user", "source", "ip"],
        ["verify", "context"],
        ["escalate", "contain", "document"],
      ],
      "Review timestamps, source information, and account activity. Verify the context with approved procedures, distinguish false positives from compromise, document evidence, and escalate or contain according to the response plan.",
    ],
    [
      "Why does HTTPS matter?",
      [
        ["encrypt", "tls"],
        ["transit"],
        ["certificate", "identity"],
        ["integrity", "tamper"],
      ],
      "HTTPS uses TLS to encrypt traffic in transit and help verify the server's identity through certificates. It also protects integrity, but does not by itself guarantee an application is trustworthy or free of vulnerabilities.",
    ],
    [
      "How should a security finding be reported?",
      [
        ["impact", "risk"],
        ["evidence", "reproduce"],
        ["fix", "mitigation"],
        ["authorized", "responsible", "scope"],
      ],
      "Within authorized scope, document evidence, reproduction steps, affected assets, and practical impact. Explain a mitigation, communicate responsibly, and avoid exposing sensitive information.",
    ],
    [
      "How can a team reduce phishing risk?",
      [
        ["training", "awareness"],
        ["verify", "report"],
        ["mfa", "authentication"],
        ["filter", "process"],
      ],
      "Combine awareness training, easy reporting, verified payment or credential procedures, MFA, and filtering. Treat suspicious messages as a process issue rather than blaming the person who reports them.",
    ],
  ],
  "cloud-devops": [
    [
      "How do containers differ from virtual machines?",
      [
        ["kernel", "share"],
        ["virtual machine", "guest", "os"],
        ["isolation"],
        ["light", "resource"],
      ],
      "Containers share the host kernel and isolate application processes, while a virtual machine runs a guest operating system. Containers are usually lighter, but isolation and compatibility tradeoffs depend on the workload.",
    ],
    [
      "What should a basic CI pipeline do?",
      [
        ["commit", "change"],
        ["test", "check"],
        ["build"],
        ["artifact", "failure", "feedback"],
      ],
      "On a code change, install dependencies, run relevant checks and tests, then build and produce a versioned artifact. Provide clear failure feedback and avoid deploying a build whose checks failed.",
    ],
    [
      "How would you investigate a service that suddenly stops responding?",
      [
        ["log", "metric"],
        ["network", "port", "dns"],
        ["deploy", "change"],
        ["rollback", "recover", "incident"],
      ],
      "Check health metrics and logs, recent changes, process state, and network connectivity. Follow the incident runbook, mitigate or roll back if appropriate, and record the timeline before deeper root-cause analysis.",
    ],
    [
      "Why keep infrastructure configuration in version control?",
      [
        ["history", "track"],
        ["review"],
        ["reproduce", "consistent"],
        ["secret", "rollback"],
      ],
      "Version control makes changes reviewable and reproducible and provides history for recovery. Keep secrets out of the repository and test configuration changes before applying them.",
    ],
    [
      "What makes a useful deployment rollback plan?",
      [
        ["previous", "version"],
        ["trigger", "health"],
        ["data", "migration"],
        ["test", "document"],
      ],
      "Define health checks and rollback triggers, keep a known-good version, and document steps and ownership. Consider data compatibility and migrations, and practice the plan before relying on it.",
    ],
  ],
  "ui-ux-design": [
    [
      "How would you begin redesigning a confusing registration flow?",
      [
        ["user", "research"],
        ["problem", "goal"],
        ["prototype", "wireframe"],
        ["test", "feedback"],
      ],
      "Understand the users, goals, and current problems first. Gather evidence, map the task, prototype improvements, and test whether users can complete the journey with less confusion.",
    ],
    [
      "What is the difference between a wireframe and a prototype?",
      [
        ["structure", "layout"],
        ["wireframe"],
        ["interaction", "click"],
        ["test", "prototype"],
      ],
      "A wireframe focuses on structure and layout. A prototype models interaction, often with linked screens, so the team can test a journey before committing to implementation.",
    ],
    [
      "How do you check accessibility in a design?",
      [
        ["contrast"],
        ["keyboard", "focus"],
        ["label", "screen reader"],
        ["test", "user"],
      ],
      "Check contrast, readable text, meaningful labels, keyboard focus and order, and interaction states. Use accessibility guidance and test with people and assistive technology when possible.",
    ],
    [
      "What would you observe during a usability test?",
      [
        ["task", "goal"],
        ["observe", "behavior"],
        ["neutral", "leading"],
        ["friction", "error", "findings"],
      ],
      "Give a realistic task and observe behavior without leading the person. Note errors, hesitation, completion, and their comments. Summarize patterns and prioritize the friction that blocks the goal.",
    ],
    [
      "How do you explain a design decision to an engineer?",
      [
        ["problem", "user"],
        ["constraint"],
        ["state", "behavior", "interaction"],
        ["feedback", "tradeoff"],
      ],
      "Explain the user problem, constraints, and intended behavior, including loading, empty, and error states. Discuss tradeoffs and invite implementation feedback rather than handing over only a polished screen.",
    ],
  ],
  "digital-marketing": [
    [
      "How would you plan a campaign for a new local business?",
      [["audience"], ["goal"], ["channel", "content"], ["metric", "measure"]],
      "Define the audience and business goal, choose suitable channels, plan useful content, and specify measurable indicators. Begin with a small experiment and review evidence before expanding.",
    ],
    [
      "What does search intent mean?",
      [
        ["user", "search"],
        ["goal", "need"],
        ["content", "answer"],
        ["example"],
      ],
      "Search intent is the goal behind a query. Content should answer that need: for example, a how-to query needs useful instructions, while a product comparison needs clear differences and evidence.",
    ],
    [
      "How would you judge whether a campaign worked?",
      [
        ["goal"],
        ["baseline"],
        ["metric", "conversion"],
        ["cost", "limit", "attribution"],
      ],
      "Compare relevant metrics with the goal and baseline, including conversion and cost where appropriate. Explain attribution limits and avoid treating reach alone as proof of business impact.",
    ],
    [
      "What makes useful marketing content?",
      [
        ["audience", "need"],
        ["clear", "useful"],
        ["accurate", "honest"],
        ["action", "goal"],
      ],
      "Useful content addresses a real audience need with clear, accurate information. Keep claims honest, use a consistent voice, and make the next action understandable without pressuring the reader.",
    ],
    [
      "How do you improve a campaign with limited budget?",
      [
        ["priorit", "focus"],
        ["test", "experiment"],
        ["measure", "data"],
        ["iterate", "learn"],
      ],
      "Focus on the highest-priority audience and goal, run a small test with a clear hypothesis, measure the result, and iterate. Document what was learned rather than inventing an impact.",
    ],
  ],
  "finance-business-analytics": [
    [
      "How do revenue, profit, and cash flow differ?",
      [
        ["revenue", "sales"],
        ["profit", "cost"],
        ["cash", "timing"],
        ["example"],
      ],
      "Revenue is sales earned, profit subtracts relevant costs, and cash flow tracks cash entering and leaving over time. A profitable business can still face a cash shortage when customer payments arrive late.",
    ],
    [
      "How would you check a financial spreadsheet model?",
      [
        ["formula"],
        ["assumption"],
        ["reconcile", "check"],
        ["scenario", "sensitivity"],
      ],
      "Review formulas, units, and assumptions; reconcile totals with source data; test edge cases and scenarios; and use clear checks to catch inconsistent inputs.",
    ],
    [
      "What makes a good business requirement?",
      [
        ["stakeholder", "user"],
        ["goal", "need"],
        ["specific", "clear"],
        ["acceptance", "test"],
      ],
      "A useful requirement identifies the stakeholder need and goal, states the expected behavior clearly, and includes testable acceptance criteria. Confirm assumptions and priority with the stakeholder.",
    ],
    [
      "How should uncertainty appear in a business forecast?",
      [
        ["assumption"],
        ["scenario", "range"],
        ["risk", "uncertain"],
        ["update", "actual"],
      ],
      "State the assumptions, show a plausible range or scenarios, identify important risks, and compare the forecast with actual results over time. A forecast is a planning tool rather than a guaranteed outcome.",
    ],
    [
      "How would you present an analysis to a busy manager?",
      [
        ["decision", "question"],
        ["finding", "evidence"],
        ["limitation", "assumption"],
        ["recommend", "action"],
      ],
      "Lead with the decision and key finding, show the supporting evidence, explain material limitations, and recommend a practical next step. Keep the detail available for follow-up.",
    ],
  ],
};
const behavioral: Spec[] = [
  [
    "Tell me about a project you are proud of.",
    [
      ["situation", "project", "context"],
      ["task", "goal"],
      ["action", "built", "did"],
      ["result", "learn", "outcome"],
    ],
    "Describe a real project using situation, task, action, and result. Explain your own contribution, one challenge, the evidence for the outcome, and what you learned. Do not invent metrics.",
  ],
  [
    "Describe a time you learned something difficult.",
    [
      ["challenge", "difficult"],
      ["plan", "practice"],
      ["feedback", "help"],
      ["learn", "result"],
    ],
    "Name the challenge, explain how you broke it down and practiced, mention feedback or help, and describe the result and how you would approach a similar challenge now.",
  ],
  [
    "How do you handle feedback you disagree with?",
    [
      ["listen", "understand"],
      ["question", "clarify"],
      ["evidence", "test"],
      ["respect", "improve"],
    ],
    "Listen and clarify the concern, explain your reasoning respectfully, and use evidence or a small test where possible. Agree on the next step and focus on improving the work.",
  ],
  [
    "How do you manage several competing deadlines?",
    [
      ["priorit", "impact"],
      ["plan", "break"],
      ["communicat", "stakeholder"],
      ["review", "adjust"],
    ],
    "Compare urgency and impact, break the work into tasks, communicate tradeoffs early, and agree on priorities. Review progress and adjust the plan when circumstances change.",
  ],
  [
    "Why are you interested in this career path?",
    [
      ["interest", "enjoy"],
      ["skill", "project"],
      ["learn", "grow"],
      ["contribute", "goal"],
    ],
    "Connect your interests to a concrete project or skill, describe what you are learning, and explain the contribution you want to make. Keep the answer specific and honest about your current experience.",
  ],
];
export function getInterviewQuestions(
  slug: string,
  kind: string,
): InterviewQuestion[] {
  const source =
    kind === "Behavioral"
      ? behavioral
      : (banks[slug] ?? banks["software-engineering"]);
  return source.map(([question, concepts, sample], i) => ({
    id: `${slug}-${kind}-${i}`,
    question,
    concepts,
    sample,
    hint: "Explain the idea in your own words and include a concrete example.",
    followUp:
      "Explain one tradeoff or an edge case, and how you would check your reasoning.",
  }));
}
