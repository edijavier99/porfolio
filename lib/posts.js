export const posts = [
  {
    id: 'nextjs-vs-remix-2025',
    category: 'Software Engineering',
    date: 'August 28, 2025',
    readTime: '6 min read',
    title: 'Next.js vs Remix in 2025: Which One Should You Actually Pick',
    excerpt: 'A practical comparison based on real project experience, not just benchmarks.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80',
    bg: '#1A1A2E',
    content: [
      {
        type: 'paragraph',
        text: "Every few months a new post claims to have finally settled the Next.js vs Remix debate. Most of them compare benchmarks nobody's app will ever hit. After shipping production apps in both, here's what actually matters when you're picking one for a real project.",
      },
      { type: 'heading', text: 'Where Next.js wins' },
      {
        type: 'paragraph',
        text: "If your app leans heavily on static generation, image optimization, or you're deploying to Vercel, Next.js still has the deepest ecosystem. The App Router took a while to stabilize, but server components genuinely reduce client bundle size once you learn where the boundaries should live.",
      },
      {
        type: 'list',
        items: [
          'Best-in-class static generation and ISR',
          'Largest ecosystem of libraries and examples',
          "Tight integration with Vercel's edge network",
        ],
      },
      { type: 'heading', text: 'Where Remix wins' },
      {
        type: 'paragraph',
        text: "Remix's data loading model is simpler to reason about once you stop fighting it. Nested routes with colocated loaders remove a lot of the waterfall problems I've hit in Next.js apps with deeply nested client fetching.",
      },
      {
        type: 'list',
        items: [
          'Simpler mental model for data loading',
          'Better default handling of forms and mutations',
          'Less client-side JavaScript by default',
        ],
      },
      { type: 'heading', text: 'My actual recommendation' },
      {
        type: 'paragraph',
        text: "For content-heavy marketing sites and anything SEO-critical, I still reach for Next.js. For dashboards, internal tools, and anything mutation-heavy, Remix's loader/action model saves real development time. Pick based on your data patterns, not on hype.",
      },
    ],
  },
  {
    id: 'ai-agents-for-smb',
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
