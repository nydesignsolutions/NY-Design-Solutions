// "Meet the founders" — bios for Noha and Yasser.
const FOUNDERS = [
  {
    name:     'Noha',
    initial:  'N',
    role:     'Co-Founder · Design & Human Factors Lead',
    bio:      'Noha leads UX/UI and human factors engineering, bringing a clinician-first approach to every device. She specializes in usability engineering (IEC 62366), patient safety, and interface design for clinical environments.',
    tags:     ['UX/UI', 'Human Factors', 'IEC 62366', 'Clinical Research'],
    gradient: 'from-pink-400 via-fuchsia-500 to-brand-600',
  },
  {
    name:     'Yasser',
    initial:  'Y',
    role:     'Co-Founder · Product Development & Regulatory Lead',
    bio:      'Yasser drives product development and regulatory strategy. With 10+ years in the industry, he has led 3 Class II device programs, holds a patent on an Intelligent Fluid Delivery System, and is a Certified Quality Auditor.',
    tags:     ['FDA 510(k)', 'ISO 13485', 'DFM', 'Patent Holder'],
    gradient: 'from-brand-600 via-cyan-500 to-accent-500',
  },
];

const FounderCard = ({ name, initial, role, bio, tags, gradient }) => (
  <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 h-full">
    <div
      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-4xl font-extrabold mb-6 shadow-lg`}
    >
      {initial}
    </div>
    <h3 className="text-2xl font-bold text-brand-900">{name}</h3>
    <div className="text-sm font-semibold text-accent-600 mt-1">{role}</div>
    <p className="mt-4 text-slate-600 leading-relaxed">{bio}</p>
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map(tag => (
        <span
          key={tag}
          className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const About = () => (
  <Section id="about" className="py-24 bg-slate-50">
    <Container>
      <FadeUp>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-3">
            Who we are
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-900 tracking-tight">
            Meet the founders
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Two engineers, one mission: better healthcare through better design.
          </p>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-8">
        {FOUNDERS.map((founder, i) => (
          <FadeUp key={founder.name} delay={i * 120}>
            <FounderCard {...founder} />
          </FadeUp>
        ))}
      </div>
    </Container>
  </Section>
);
