export const posts = [
  {
    id: 'mvp-cost-honest',
    section: 'founders',
    category: 'Founders & MVPs',
    date: 'September 28, 2026',
    readTime: '8 min read',
    title: 'What Does Custom Software Really Cost a UK Small Business?',
    excerpt: "You ask three people for a quote on the same thing. One says £900. One says £4,000. One says £12,000. Nobody's lying — they're just quoting different things. Here's what actually moves the price.",
    image: 'https://images.pexels.com/photos/6963888/pexels-photo-6963888.jpeg?w=900&q=80',
    bg: '#0F172A',
    content: [
      {
        type: 'paragraph',
        text: "You ask three people for a quote on the same thing. One says £900. One says £4,000. One says £12,000. Nobody's lying, and nobody's necessarily ripping you off. They're just quoting different things, and nobody stops to explain the difference.",
      },
      {
        type: 'paragraph',
        text: "So let's do it properly. Below you'll find what UK small businesses typically pay for the most common projects, why the prices are so far apart, and how to decide if a project is worth it for your business. I'm a freelance software engineer based in London, so I'll also be upfront about where a freelancer fits and where one doesn't.",
      },
      {
        type: 'paragraph',
        text: "A quick note on the numbers: they come from UK pricing guides published in 2026. Many are written by people selling these services — me included, in a way — and they don't always agree with each other. Treat them as a map of the market, not a price list.",
      },
      { type: 'heading', text: '1. A professional website' },
      {
        type: 'paragraph',
        text: "This is the most familiar starting point. Most small businesses should budget between £1,000 and £3,000 for a professional, lead-generating website. A freelance developer or designer building on WordPress, Webflow or Shopify will typically deliver a solid small business site for £800 to £3,500, while a UK agency usually charges £2,500 to £10,000 for a standard small business site.",
      },
      {
        type: 'paragraph',
        text: "The gap is mostly about what comes with it: strategy, copywriting, branding, account managers. A freelancer gives you one person's judgement and direct communication, with no account management layer in between. Think of: a therapist, a salon, a local trades business that needs to look credible and be found online.",
      },
      { type: 'heading', text: '2. A website with bookings or a client system' },
      {
        type: 'paragraph',
        text: "This is where prices start to spread. A freelancer building a site with custom functionality like booking systems typically charges £1,000 to £3,000. For something built around how your business actually works rather than an off-the-shelf plugin, expect £5,000 to £12,000.",
      },
      {
        type: 'paragraph',
        text: "I worked with a wellbeing business that was doing everything in person, with no website and no system. They didn't know what they needed or where to start. We ended up with one place to manage clients and appointments, and a site people could actually find.",
      },
      { type: 'heading', text: '3. Automation and AI' },
      {
        type: 'paragraph',
        text: "This one has the widest range, so read it slowly. Simple workflows start from around £500. Multi-step builds typically cost £3,000 to £10,000. An AI agent — for lead qualification, support triage or document processing — runs £2,400 to £5,000 with a freelance developer, versus £5,000 to £12,000 with an agency. Bespoke AI systems start around £10,000, and a custom single-workflow automation can reach £8,000 to £25,000.",
      },
      {
        type: 'paragraph',
        text: "The reason for the spread is simple: the price scales with the number of systems you're connecting and how messy your data is, not with the size of your company.",
      },
      {
        type: 'paragraph',
        text: "A real example: a cleaning company with 800+ workers was receiving reports, absences and shift hours through WhatsApp, and processing everything by hand. Workers keep using WhatsApp — an AI reads each message, and the records update automatically. The team cut around 40% of its manual operational tasks. A project like that lives at the bigger end of this range. A simple lead-reply automation lives at the small end. Same word, \"automation\", very different work.",
      },
      { type: 'heading', text: '4. A custom web app or internal tool' },
      {
        type: 'paragraph',
        text: "When no off-the-shelf tool fits, you're in custom territory. Custom web apps start at around £10,000. A feature-rich app typically costs £15,000 to £50,000. Bespoke web platforms can go from £15,000 to £75,000+. This is a real investment — and often not the right first step.",
      },
      { type: 'heading', text: '5. Got an idea for a product? Don\'t start at the top' },
      {
        type: 'paragraph',
        text: "If you're an early-stage founder, spending £30,000 to test an idea is rarely the smart move. A no-code MVP costs around £2,000 to £10,000, and a validation prototype runs £5,000 to £15,000. Production-ready MVPs come later — £15,000 to £35,000 — once you know people want it. The goal isn't to build the biggest thing. It's to find out cheaply whether the idea works.",
      },
      { type: 'heading', text: 'Why the same job can cost £500 or £25,000' },
      {
        type: 'paragraph',
        text: "Three things move the price more than anything else:",
      },
      {
        type: 'list',
        items: [
          'How many systems need to talk to each other. A form that emails you is cheap. A system that talks to your CRM, your accounting tool and WhatsApp is not.',
          'How messy your data is. Clean records are fast to work with. Ten years of spreadsheets with hidden formulas take longer.',
          'What "done" means. A quick prototype and a production-ready tool are different products with the same name.',
        ],
      },
      { type: 'heading', text: 'Price vs payback: the number that matters more' },
      {
        type: 'paragraph',
        text: "For a small business, the question isn't \"is this cheap?\" but \"does it pay for itself?\"",
      },
      {
        type: 'paragraph',
        text: "The admin tool. An employee on £28,000 costs roughly £18 to £22 an hour once employer NI, pension and overheads are counted. If a workflow eats 7 hours a week, that's about £6,720 a year, every year. A £5,000 build costing £100 a month to run pays for itself in about ten months.",
      },
      {
        type: 'paragraph',
        text: "The lead-reply automation. For a UK small business, a £1,500 build with about £40 a month running costs was estimated to save around £600 a month at £30 an hour of opportunity cost.",
      },
      {
        type: 'paragraph',
        text: "These examples come from vendors, so your numbers will differ. But the method works: hours saved × cost per hour, minus monthly running cost. Try it with your own numbers before you ask anyone for a quote.",
      },
      { type: 'heading', text: 'The costs after launch' },
      {
        type: 'paragraph',
        text: "Almost nobody mentions these upfront, so ask:",
      },
      {
        type: 'list',
        items: [
          'Monthly support: typically £200 to £800, retainers £300 to £1,500 a month for specialist help.',
          'Tool subscriptions (Zapier, Make and similar): £20 to £480 a month, depending on volume.',
          'Hosting for a custom automation on its own infrastructure: often £50 to £100 a month.',
          'A basic website: an extra £100 to £300 a year on top of the build.',
        ],
      },
      { type: 'heading', text: 'Freelancer or agency? An honest take' },
      {
        type: 'paragraph',
        text: "Freelance developers typically bill £250 to £500 a day. That gets you direct communication with no account management overhead. The honest downside: single-person dependency and no integrated QA, design or project management. It's a real trade-off — which is why how the engagement is structured matters (see below).",
      },
      { type: 'heading', text: 'Five questions to ask before you say yes' },
      {
        type: 'list',
        items: [
          'What exactly is included? Ask for a list, not just a total.',
          'What isn\'t? Design, testing, hosting, revisions, training.',
          'What could delay it? A good developer names the risks.',
          'Who owns the code, the accounts and the domain at the end?',
          'What happens after launch, and what does it cost per month?',
        ],
      },
      {
        type: 'paragraph',
        text: "If two quotes answer all five, you're comparing like with like. If one can't answer, you've found your answer.",
      },
      { type: 'heading', text: 'How I work' },
      {
        type: 'paragraph',
        text: "I don't start with code. I start with your business.",
      },
      {
        type: 'paragraph',
        text: "1. I get to know how you actually work. Before I propose anything, I take the time to dig into the problem, your company and what a normal day looks like. The goal is to find the real pain points, not just the ones that are easy to describe.",
      },
      {
        type: 'paragraph',
        text: "2. I work out what's worth fixing. Not every problem needs software. I look at which ones can be automated or improved, weigh how much impact each would have, and prioritise. That way the effort goes where it matters most.",
      },
      {
        type: 'paragraph',
        text: "3. We shape the plan together, before any code. Based on that, I put a plan together and go back and forth with you to refine it. It speeds things up, and stays open to iteration — if something changes along the way, the plan can change with it.",
      },
      {
        type: 'paragraph',
        text: "4. You're never locked in to me. Everything I build is documented, and the code, hosting and accounts are set up in your name from day one. If I'm ever unavailable, another developer can pick it up without starting from scratch.",
      },
      { type: 'heading', text: 'Not sure where your project fits?' },
      {
        type: 'paragraph',
        text: "Send me a short description of what's slowing your business down, or the idea you have. I'll tell you honestly which of these buckets it falls into, roughly what it would cost, and whether it's even worth building. No pitch, no pressure.",
      },
    ],
  },
  {
    id: 'spreadsheet-or-software',
    section: 'founders',
    category: 'Business & Automation',
    date: 'October 2, 2026',
    readTime: '6 min read',
    title: "Your Spreadsheet Isn't the Problem. Until It Is.",
    excerpt: "Most small businesses run on spreadsheets longer than they should — and some never need to move on. Here's a simple test to know which situation you're in.",
    image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?w=900&q=80',
    bg: '#0A1628',
    content: [
      {
        type: 'paragraph',
        text: "The spreadsheet gets a bad reputation. Business consultants love to tell you it's holding you back. Software vendors are even more enthusiastic about this opinion. But the honest truth is that a well-built spreadsheet is often exactly the right tool — flexible, cheap, and understood by everyone on the team.",
      },
      {
        type: 'paragraph',
        text: "The problem isn't using a spreadsheet. The problem is using one past the point where it makes sense. And that point is different for every business.",
      },
      { type: 'heading', text: 'When a spreadsheet is the right answer' },
      {
        type: 'paragraph',
        text: "If you're a small team, your data doesn't change that often, and only one or two people need to access it — a spreadsheet is probably fine. It's fast to set up, easy to change, and requires no technical knowledge to maintain. A lot of businesses are more productive with a good spreadsheet than they would be with a complicated system nobody really knows how to use.",
      },
      {
        type: 'list',
        items: [
          'You\'re tracking something simple: clients, orders, inventory',
          'One person owns it and keeps it updated',
          'The data doesn\'t need to connect to anything else',
          'You\'re not at a stage where mistakes are expensive',
        ],
      },
      { type: 'heading', text: 'The signs it\'s starting to break down' },
      {
        type: 'paragraph',
        text: "The spreadsheet doesn't fail suddenly. It degrades slowly, until one day something goes wrong and you realise it's been fragile for a while.",
      },
      {
        type: 'list',
        items: [
          'More than one person is editing it — and you\'ve had a version conflict',
          'You\'re copying and pasting data between two or more spreadsheets regularly',
          'Someone has to "prepare" the spreadsheet before a meeting so it looks right',
          'You\'re scared to change the formulas because you\'re not sure what will break',
          'New people joining the team take weeks to understand it',
          'You\'ve caught a mistake that went unnoticed for months',
        ],
      },
      {
        type: 'paragraph',
        text: "Any one of these is a signal. More than two or three at once, and you're already past the point where the spreadsheet is helping you.",
      },
      { type: 'heading', text: 'The decision: spreadsheet, SaaS, or custom software?' },
      {
        type: 'paragraph',
        text: "When a spreadsheet starts failing, most businesses have two options before building anything custom.",
      },
      {
        type: 'paragraph',
        text: "The first is a SaaS tool — off-the-shelf software built for your type of problem. Booking systems, CRMs, project management, invoicing. These tools are faster to set up than custom software and cheaper to maintain. If your problem is common enough that someone has already built a product for it, start there.",
      },
      {
        type: 'paragraph',
        text: "The second is custom software — something built specifically for how your business works. This makes sense when your process is genuinely unusual, when you need multiple systems to talk to each other in ways no SaaS tool supports, or when you're at a scale where the cost of a custom tool is less than the cost of working around a generic one.",
      },
      { type: 'heading', text: 'A simple decision test' },
      {
        type: 'paragraph',
        text: "Before you spend anything, answer these five questions:",
      },
      {
        type: 'list',
        items: [
          'How many people are using this data, and how often? (1–2 people, occasionally → spreadsheet is fine. Many people, daily → you need something better)',
          'Does this data need to connect to other systems? (No → spreadsheet or simple SaaS. Yes → SaaS with integrations or custom)',
          'Is there an off-the-shelf tool that does 80% of what you need? (Yes → start there. No → consider custom)',
          'What\'s the cost of a mistake in this data? (Low → spreadsheet risk is acceptable. High → you need something with proper controls)',
          'How much time does your team spend managing this data every week? (Under 2 hours → not urgent. Over 5 hours → worth fixing properly)',
        ],
      },
      { type: 'heading', text: 'The hidden cost people miss' },
      {
        type: 'paragraph',
        text: "When business owners think about switching from a spreadsheet, they think about the cost of building or buying something new. What they don't usually count is the cost of staying.",
      },
      {
        type: 'paragraph',
        text: "An employee on £28,000 costs roughly £18 to £22 an hour in real terms once employer NI, pension and overheads are included. If managing a spreadsheet takes them 5 hours a week, that's around £5,000 a year in staff time — every year, without fail. A £4,000 system that takes 30 minutes a week pays for itself in under a year and keeps saving after that.",
      },
      {
        type: 'paragraph',
        text: "The spreadsheet feels free because there's no invoice. But time has a cost too.",
      },
      { type: 'heading', text: 'What I\'d actually recommend' },
      {
        type: 'paragraph',
        text: "Start by fixing the spreadsheet. Before you spend anything, spend a day cleaning it up: remove the dead columns, document the formulas, put a clear owner on it. You might find the problem was always just the mess, not the tool itself.",
      },
      {
        type: 'paragraph',
        text: "If the problem persists after that, look at SaaS tools for one month before commissioning anything custom. Most of the time, something off the shelf solves it. Custom software is the right answer when it's the only answer — not the first one.",
      },
      {
        type: 'paragraph',
        text: "If you've been through both of those steps and you're still stuck, that's usually when it makes sense to talk to a developer. Not about building something big — about building something small that solves the specific thing causing the most pain.",
      },
    ],
  },
  {
    id: 'vibe-coding-production',
    section: 'dev',
    category: 'Software Engineering',
    date: 'September 27, 2026',
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
    date: 'September 27, 2026',
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
