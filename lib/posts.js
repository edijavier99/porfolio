export const posts = [
  {
    id: 'vibe-coding-production',
    section: 'dev',
    category: 'Software Engineering',
    date: 'September 12, 2026',
    readTime: '5 min read',
    title: 'AI-Assisted Development: How I Actually Use AI to Ship Better Code',
    excerpt: 'AI tools have changed how I build — not by replacing engineering, but by removing the parts that were never really the job.',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=900&q=80',
    bg: '#0D1117',
    content: [
      {
        type: 'paragraph',
        text: "There's a lot of noise about AI replacing developers. Most of it misses the point. After using AI tools daily on real production projects, here's what actually changed — and what didn't.",
      },
      { type: 'heading', text: 'What AI is actually good at' },
      {
        type: 'paragraph',
        text: "The honest answer: the parts of the job that were never really the job. Boilerplate, repetitive CRUD, writing tests for logic you already understand, translating a design into markup. These tasks weren't where the value was. They were just in the way.",
      },
      {
        type: 'list',
        items: [
          'Scaffolding components and API routes in seconds',
          'Writing tests once the logic is already clear',
          'Refactoring without the tedium',
          'Unblocking yourself on unfamiliar APIs or libraries',
        ],
      },
      { type: 'heading', text: 'What still needs you' },
      {
        type: 'paragraph',
        text: "Architecture decisions, system design, understanding what the product actually needs — none of that gets easier with AI. If anything, it gets more important. When you can execute faster, the quality of your thinking becomes the bottleneck. The engineers who are struggling aren't being replaced by AI. They're being exposed by it.",
      },
      { type: 'heading', text: 'How I use it day to day' },
      {
        type: 'paragraph',
        text: "I treat AI like a powerful tool that needs a skilled hand behind it. I wouldn't point it at a vague problem and hope for the best. I give clear context, review what comes back, and own the result. The output is only as good as your ability to evaluate it — which means you still need to know what good looks like.",
      },
      {
        type: 'list',
        items: [
          'Write a rough implementation first, then use AI to clean it up',
          'Use it to explore options quickly, not to make decisions',
          'Always read the output — AI-generated bugs are still your bugs',
        ],
      },
      { type: 'heading', text: 'The real shift' },
      {
        type: 'paragraph',
        text: "The developers who are thriving are the ones who've always been good at thinking clearly about problems. AI just amplified the gap. If you were great at understanding systems and communicating intent, you're now significantly faster. If you were mostly good at memorising syntax, you're in a harder spot. That's the real story.",
      },
    ],
  },
  {
    id: 'ai-agents-for-smb',
    section: 'founders',
    category: 'Business & AI',
    date: 'August 20, 2026',
    readTime: '5 min read',
    title: 'The AI Mistake Most Founders Make (And What Actually Works)',
    excerpt: "Automating everything sounds like the move. But the founders I've seen get real results did the opposite — they started small, specific, and boring.",
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    bg: '#0D1117',
    content: [
      {
        type: 'paragraph',
        text: "Almost every founder or business owner I talk to right now wants to \"go AI first.\" Rebuild the whole operation around automation, agents, and LLMs. It sounds like the smart move — and I get why. But I've watched it go wrong enough times that I think it's worth saying clearly: that approach usually makes things worse before it makes them better.",
      },
      { type: 'heading', text: 'The trap' },
      {
        type: 'paragraph',
        text: "The thinking goes: AI is powerful, we have inefficiencies, therefore we should automate as much as possible. The problem is that when you try to automate a messy process, you don't get an efficient process — you get a fast, messy one. Automation doesn't fix problems, it amplifies whatever is already there.",
      },
      {
        type: 'paragraph',
        text: "I've seen small teams spend months rebuilding workflows around AI tools, only to end up with something harder to maintain, harder to explain to new people, and no more reliable than what they had before. The dream of a fully automated operation became a fragile system nobody fully understood.",
      },
      { type: 'heading', text: 'What actually works' },
      {
        type: 'paragraph',
        text: "The founders who get real value from AI almost always start with one specific, small, repetitive problem. Not \"how do we automate our business\" — but \"this one thing happens twenty times a week, takes ten minutes each time, and the steps never change.\" That's your first candidate.",
      },
      {
        type: 'list',
        items: [
          'A form that gets filled in and then manually copied somewhere else',
          'A message type you always respond to the same way',
          'A weekly report that someone has to build from the same data every time',
        ],
      },
      { type: 'heading', text: 'Start with the problem, not the technology' },
      {
        type: 'paragraph',
        text: "The right question isn't \"where can we use AI?\" — it's \"what's costing us real time right now that follows a clear, consistent pattern?\" If you can't describe the task in two sentences with no exceptions, it's probably not ready to automate.",
      },
      {
        type: 'paragraph',
        text: "Pick one thing. Automate just that. See if it holds up in practice. Then, once it's working quietly in the background, pick the next one. That compounding effect — small, reliable wins — is how the businesses I've worked with actually got value from AI. Not a big bang transformation, just boring problems quietly disappearing.",
      },
    ],
  },
];
