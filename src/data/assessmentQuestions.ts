import type { AssessmentQuestion, AssessmentOption } from "@/types/assessment";
const option = (
  id: string,
  label: string,
  description: string,
  scores: AssessmentOption["scores"],
): AssessmentOption => ({ id, label, description, scores });
export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "work",
    question: "Which kind of work pulls you in?",
    hint: "Choose what interests you, even if you have never tried it.",
    options: [
      option(
        "build",
        "Building digital products",
        "Apps, websites, and tools people can use",
        { code: 5, cloud: 2 },
      ),
      option(
        "discover",
        "Finding patterns in information",
        "Turning numbers into meaningful answers",
        { data: 5, business: 2 },
      ),
      option(
        "design",
        "Designing experiences",
        "Making everyday tasks easier for people",
        { design: 5 },
      ),
      option(
        "protect",
        "Protecting systems",
        "Investigating risks and solving security puzzles",
        { security: 5, cloud: 2 },
      ),
    ],
  },
  {
    id: "problems",
    question: "What do you enjoy figuring out?",
    hint: "Think about the problems you naturally spend time on.",
    options: [
      option(
        "logic",
        "Why something is not working",
        "Break a problem down and fix it step by step",
        { code: 5, cloud: 3, security: 2 },
      ),
      option(
        "numbers",
        "What the numbers are telling us",
        "Compare evidence and spot a trend",
        { data: 5, business: 3 },
      ),
      option(
        "people",
        "Why people find something confusing",
        "Listen, understand, and simplify",
        { design: 5, business: 2 },
      ),
      option(
        "growth",
        "How an idea can reach more people",
        "Plan, communicate, and try new approaches",
        { business: 5, design: 2 },
      ),
    ],
  },
  {
    id: "math",
    question: "How do you feel about mathematics?",
    hint: "Your current comfort can change with practice.",
    options: [
      option(
        "love",
        "I enjoy it",
        "Numbers and logical reasoning feel rewarding",
        { data: 5, code: 3, business: 3 },
      ),
      option(
        "okay",
        "Comfortable with the basics",
        "I can work with formulas when I need to",
        { data: 3, code: 3, business: 3 },
      ),
      option(
        "learn",
        "I am willing to improve",
        "I prefer learning through practical examples",
        { code: 3, design: 2, cloud: 2 },
      ),
      option(
        "less",
        "I prefer less mathematical work",
        "Writing, visuals, or people interest me more",
        { design: 5, business: 3 },
      ),
    ],
  },
  {
    id: "programming",
    question: "How interested are you in programming?",
    hint: "Interest matters here, not how many languages you know.",
    options: [
      option(
        "yes",
        "I love making things with code",
        "I want to write and improve software",
        { code: 5, cloud: 3, data: 2 },
      ),
      option(
        "curious",
        "I am curious and want to try",
        "Small projects sound like a good start",
        { code: 4, data: 3, security: 2 },
      ),
      option(
        "useful",
        "As a tool for another goal",
        "I would learn it to analyze or automate",
        { data: 5, cloud: 3, business: 2 },
      ),
      option(
        "no",
        "I prefer other ways to create",
        "Research, visuals, content, or strategy",
        { design: 5, business: 5 },
      ),
    ],
  },
  {
    id: "focus",
    question: "What would you rather spend an afternoon on?",
    hint: "Imagine a task you could get absorbed in.",
    options: [
      option(
        "app",
        "Make a small app work",
        "Build, test, and improve a feature",
        { code: 5 },
      ),
      option(
        "dataset",
        "Explore a dataset",
        "Ask a question and investigate the answer",
        { data: 5, business: 2 },
      ),
      option(
        "interview",
        "Talk to people about their needs",
        "Understand their goals and frustrations",
        { design: 5, business: 3 },
      ),
      option(
        "logs",
        "Investigate a strange system alert",
        "Follow clues and find the cause",
        { security: 5, cloud: 4 },
      ),
    ],
  },
  {
    id: "technology",
    question: "How do you approach unfamiliar technology?",
    hint: "There is no best personality for every career.",
    options: [
      option(
        "experiment",
        "Experiment until I understand it",
        "I enjoy trying things and reading documentation",
        { code: 5, cloud: 5, security: 3 },
      ),
      option(
        "guided",
        "Start with a guided example",
        "I build confidence through a clear learning path",
        { code: 3, data: 3, design: 3, cloud: 3 },
      ),
      option(
        "purpose",
        "Learn when it solves a clear problem",
        "A practical reason keeps me motivated",
        { data: 4, business: 5 },
      ),
      option(
        "observe",
        "Understand the experience first",
        "I focus on how people will use the tool",
        { design: 5, business: 3 },
      ),
    ],
  },
  {
    id: "environment",
    question: "Which working rhythm suits you?",
    hint: "Use your preferred day, rather than an ideal job title.",
    options: [
      option(
        "deep",
        "Quiet focus, then share progress",
        "Long stretches to build and investigate",
        { code: 5, data: 4, security: 3 },
      ),
      option(
        "collaborate",
        "Frequent feedback and collaboration",
        "Explore ideas and refine them together",
        { design: 5, business: 4, code: 2 },
      ),
      option(
        "operations",
        "Monitor, respond, and improve",
        "Keep systems healthy and solve incidents",
        { cloud: 5, security: 5 },
      ),
      option(
        "plan",
        "Plan work and coordinate people",
        "Turn a goal into a clear set of actions",
        { business: 5, design: 2 },
      ),
    ],
  },
  {
    id: "activity",
    question: "Which mini-project would you pick?",
    hint: "You can explore the other paths later.",
    options: [
      option(
        "website",
        "A website for a student club",
        "Help people find events and sign up",
        { code: 5, design: 2 },
      ),
      option(
        "prediction",
        "Predict an outcome from sample data",
        "Compare a simple model against a baseline",
        { data: 5, code: 2 },
      ),
      option(
        "prototype",
        "Redesign a confusing mobile app",
        "Prototype a clearer, more accessible flow",
        { design: 5 },
      ),
      option(
        "campaign",
        "Plan a campaign for a small business",
        "Research an audience and tell a useful story",
        { business: 5, design: 2 },
      ),
    ],
  },
  {
    id: "reward",
    question: "What makes a finished project satisfying?",
    hint: "Think about the part you would be proud to explain.",
    options: [
      option(
        "reliable",
        "It works reliably",
        "The logic is clear and the details are tested",
        { code: 5, cloud: 4 },
      ),
      option(
        "insight",
        "It reveals something useful",
        "Evidence helps someone make a decision",
        { data: 5, business: 3 },
      ),
      option(
        "usable",
        "People find it easy to use",
        "A thoughtful experience removes friction",
        { design: 5 },
      ),
      option(
        "safe",
        "It makes a system safer",
        "A risk is understood and reduced",
        { security: 5, cloud: 2 },
      ),
    ],
  },
  {
    id: "learn",
    question: "What would you most like to learn next?",
    hint: "Follow your curiosity. This is a starting point, not a final decision.",
    options: [
      option(
        "frontend",
        "Programming and web development",
        "Build my own useful product",
        { code: 5 },
      ),
      option(
        "analysis",
        "Data, statistics, and AI",
        "Use information to answer better questions",
        { data: 5 },
      ),
      option(
        "creative",
        "Design, research, and storytelling",
        "Create experiences that connect with people",
        { design: 5, business: 3 },
      ),
      option(
        "systems",
        "Cloud systems and cybersecurity",
        "Understand and protect the technology underneath",
        { cloud: 5, security: 5 },
      ),
    ],
  },
];
