export const NAV_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'founder', label: 'Founder' },
  { id: 'how', label: 'How It Works' },
  { id: 'faq', label: 'Reviews & FAQ' },
];

export const HERO = {
  title: 'Elevate your academic research into',
  highlight: 'clear, publishable scholarship.',
  text: 'Academic coaching, editing and research support for college, MBA and PhD students. You write it — we help you make it sharper, more rigorous and ready to submit.',
  badges: ['100% Student-Authored', 'One-on-One Mentorship', 'Ethical Coaching'],
};

export const REVIEW_DASHBOARD = {
  document: 'Thesis_Chapter_3.docx',
  status: 'In Progress',
  suggestions: [
    {
      type: 'Methodology refinement',
      text: 'Strengthen literature citations in paragraph 2 to justify your sampling approach.',
      tutor: 'AG',
    },
    {
      type: 'Formatting',
      text: 'Switch heading styles to APA 7th edition (Level 1: centered, bold, title case).',
      tutor: 'AG',
    },
  ],
  metrics: 'Readability: 94% · Clarity score: High',
};

export const SERVICES = [
  {
    icon: 'cap',
    title: 'Academic Coaching',
    text: 'One-on-one sessions that help you plan, structure and write your own assignments with confidence.',
    bullets: ['Outline and argument planning', 'Chapter-by-chapter guidance', 'Deadline and milestone mapping'],
    pill: 'Common topics: Synopses, Theses, MBA projects',
    featured: true,
  },
  {
    icon: 'pen',
    title: 'Editing & Proofreading',
    text: 'Grammar, academic register and citation compliance on drafts you wrote.',
  },
  {
    icon: 'search',
    title: 'Research Paper Support',
    text: 'Methodology review, literature mapping and journal targeting.',
  },
  {
    icon: 'slides',
    title: 'Presentation & Defense Decks',
    text: 'Slide narrative, visual hierarchy and speaking outlines for vivas and defenses.',
  },
  {
    icon: 'layout',
    title: 'Custom Templates',
    text: 'Institutional structural skeletons — headings and layout only, never content.',
  },
  {
    icon: 'users',
    title: 'Workshops & Group Clinics',
    text: 'Referencing, avoiding plagiarism and finding your academic tone.',
  },
];

export const GALLERY_FORMATS = {
  Dissertation: {
    objective: 'Present an original, extended investigation with a defensible methodology.',
    sectionCount: '7–9 chapters',
    styles: ['APA', 'Harvard', 'Chicago'],
    abstract: 'A 250–350 word overview stating the research problem, approach, key findings and contribution.',
    sections: [
      { name: 'Title page', detail: 'Title, candidate details, degree, supervisor and submission date.' },
      { name: 'Abstract', detail: 'Problem, method, findings and implications in one tight paragraph.' },
      { name: 'Literature review', detail: 'Thematic synthesis of prior work that surfaces the research gap.', callout: 'Conceptual Framework Diagram' },
      { name: 'Methodology', detail: 'Design, sampling, instruments, analysis plan and ethics.', callout: 'Methodology Diagram Placeholder' },
      { name: 'Results', detail: 'Findings reported objectively, organised by research question.', callout: 'Data Table Blueprint' },
      { name: 'Conclusion', detail: 'Answers, contributions, limitations and future research.' },
      { name: 'References', detail: 'Complete, consistently formatted list matching in-text citations.' },
    ],
  },
  'Research Paper': {
    objective: 'Communicate a focused contribution in a journal-ready IMRaD structure.',
    sectionCount: '6 sections',
    styles: ['APA', 'IEEE', 'Vancouver'],
    abstract: 'A structured 150–250 word summary with background, methods, results and conclusion.',
    sections: [
      { name: 'Abstract', detail: 'Structured summary aligned to the target journal’s word limit.' },
      { name: 'Introduction', detail: 'Context, gap and a clear statement of aims or hypotheses.' },
      { name: 'Methods', detail: 'Enough detail for replication: data, procedure and analysis.', callout: 'Methodology Diagram Placeholder' },
      { name: 'Results', detail: 'Key outcomes with figures and tables referenced in text.', callout: 'Data Table Blueprint' },
      { name: 'Discussion', detail: 'Interpretation, comparison to literature and limitations.' },
      { name: 'References', detail: 'Journal-specific style, DOIs included where available.' },
    ],
  },
  Synopsis: {
    objective: 'Secure approval for a proposed study with a concise, feasible plan.',
    sectionCount: '5 sections',
    styles: ['APA', 'Harvard'],
    abstract: 'A one-page overview of the proposed topic, its relevance and expected outcomes.',
    sections: [
      { name: 'Introduction', detail: 'Topic background and why it matters now.' },
      { name: 'Objectives', detail: 'Three to five specific, measurable research objectives.' },
      { name: 'Scope', detail: 'Boundaries of the study: population, period and setting.' },
      { name: 'Methodology', detail: 'Proposed design, data sources and analysis techniques.', callout: 'Research Design Flowchart' },
      { name: 'Timeline', detail: 'Phase-wise schedule from data collection to submission.', callout: 'Gantt Chart Blueprint' },
    ],
  },
  'Lab File': {
    objective: 'Document experiments clearly so results are traceable and reproducible.',
    sectionCount: '5 sections / experiment',
    styles: ['IEEE', 'APA'],
    abstract: 'An index page listing each experiment, its date and page reference.',
    sections: [
      { name: 'Aim', detail: 'One-line statement of what the experiment sets out to verify.' },
      { name: 'Apparatus', detail: 'Equipment, materials and reagents with specifications.' },
      { name: 'Procedure', detail: 'Numbered, past-tense steps in the order performed.', callout: 'Circuit / Setup Diagram' },
      { name: 'Observations', detail: 'Raw readings recorded in labelled tables with units.', callout: 'Observation Table Blueprint' },
      { name: 'Result', detail: 'Final value or conclusion with sources of error.' },
    ],
  },
  'MBA Project': {
    objective: 'Turn business analysis into evidence-backed, actionable recommendations.',
    sectionCount: '5–7 sections',
    styles: ['APA', 'Harvard'],
    abstract: 'An executive summary a busy reader can act on in under two minutes.',
    sections: [
      { name: 'Executive summary', detail: 'Problem, approach, key findings and recommendations on one page.' },
      { name: 'Company overview', detail: 'Business model, market position and relevant context.' },
      { name: 'Analysis', detail: 'Frameworks such as SWOT, PESTLE or Porter applied to data.', callout: 'Framework Matrix Placeholder' },
      { name: 'Findings', detail: 'Insights drawn from the analysis, supported by evidence.', callout: 'Data Table Blueprint' },
      { name: 'Recommendations', detail: 'Prioritised, feasible actions with expected impact.' },
    ],
  },
};

export const FOUNDER = {
  name: 'Aruchi Gupta',
  title: 'Founder & Chief Academic Mentor',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
  experience: { value: '8+', label: 'Years Academic Mentoring' },
  bio: 'Assignmently was founded to demystify academic research and help scholars craft rigorous, confident arguments without compromising academic integrity.',
  focus: ['Research Methodology', 'Journal Submissions', 'Thesis Architecture', 'Dissertation Defense'],
  quote: 'Great research is built on critical thinking, not shortcuts.',
};

export const STEPS = [
  { title: 'Discovery Consultation', text: 'Clarify timeline, guidelines and core obstacles.' },
  { title: 'Draft Diagnostic', text: 'In-depth review of structure, logic and citations.' },
  { title: 'Interactive Mentorship', text: '1-on-1 feedback notes and live revision coaching.' },
  { title: 'Final Polish & Submission', text: 'You finalise the work independently, with total clarity.' },
];

export const TESTIMONIALS = [
  {
    initials: 'RK',
    name: 'Riya K.',
    course: 'MBA Candidate',
    rating: 5,
    quote: 'My literature review finally made sense once the structure was fixed. I understood why, not just what to change.',
  },
  {
    initials: 'AS',
    name: 'Arjun S.',
    course: 'MSc Biotechnology',
    rating: 5,
    quote: 'The formatting feedback saved me hours before my thesis submission. Every comment was specific and actionable.',
  },
  {
    initials: 'NM',
    name: 'Neha M.',
    course: 'PhD Scholar, Economics',
    rating: 5,
    quote: 'The methodology sessions helped me defend my research design with real confidence in my viva.',
  },
];

export const FAQS = [
  {
    q: 'Do you write assignments on behalf of students?',
    a: 'No. We coach, edit and give feedback on work you write yourself. Everything you submit stays authored by you.',
  },
  {
    q: 'Can you review drafts for specific university guidelines?',
    a: 'Yes. Share your institution’s handbook or template and we’ll check structure, formatting and citation style against it.',
  },
  {
    q: 'What is the turnaround time for coaching feedback?',
    a: 'Most draft reviews are returned within 48–72 hours. Urgent reviews can be arranged depending on length and availability.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free 15-minute diagnostic call or message us on WhatsApp. We’ll understand your goals and suggest the right support.',
  },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

export const CONTACT = {
  title: 'Ready to make your draft submission-ready?',
  text: 'Choose a time for a free 15-minute diagnostic call or reach out directly on WhatsApp.',
  whatsapp: 'https://wa.me/910000000000',
  response: 'Average response: within 4 hours',
};

export const INTEGRITY_NOTE =
  'We support students’ own work only. Please follow your institution’s academic integrity policy.';
