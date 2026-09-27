export const posts = [
  {
    id: 'vibe-coding-production',
    section: 'dev',
    category: 'Software Engineering',
    date: 'September 12, 2025',
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
    category: 'AI & Automation',
    date: 'August 20, 2025',
    readTime: '5 min read',
    title: 'Boost Your Business with AI Agents Built for Small Teams',
    excerpt: 'How small and medium businesses can automate real workflows without a data science team.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    bg: '#0D1117',
    content: [
      {
        type: 'paragraph',
        text: "AI agents aren't just for enterprises with data science teams. The same underlying technology that powers large-scale automation can be applied to small, repetitive workflows that eat up hours every week in a small business.",
      },
      { type: 'heading', text: 'What actually makes sense to automate' },
      {
        type: 'paragraph',
        text: "The best candidates are tasks that are rule-based, repetitive, and currently done by a human reading something and then doing something else with that information. Think: reading an incoming message and updating a spreadsheet, or checking a form submission and sending a templated reply.",
      },
      {
        type: 'list',
        items: [
          'Intake forms → CRM updates',
          'Incoming messages → categorised and routed',
          'Weekly reports → auto-generated from existing data',
        ],
      },
      { type: 'heading', text: 'Where to start' },
      {
        type: 'paragraph',
        text: "Start by listing the three things your team does manually that feel the most like copying information from one place to another. Those are your candidates. A simple LLM agent connected to your existing tools can often handle these in a weekend build.",
      },
    ],
  },
];
