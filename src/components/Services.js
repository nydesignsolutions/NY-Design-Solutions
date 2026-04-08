// "What we do" — six service cards in a responsive grid.
const SERVICES = [
  {
    icon:  'cube',
    title: 'Product Development',
    desc:  'End-to-end management from concept and CAD through prototyping, DFM, and manufacturing handoff.',
  },
  {
    icon:  'shield',
    title: 'Regulatory Compliance',
    desc:  'FDA 510(k) submissions, ISO 13485 quality systems, design controls, and risk management (ISO 14971).',
  },
  {
    icon:  'heart',
    title: 'UX/UI for Healthcare',
    desc:  'Human-centered design tailored for clinicians and patients — usability engineering per IEC 62366.',
  },
  {
    icon:  'beaker',
    title: 'Prototyping & Testing',
    desc:  'Rapid iteration with functional prototypes, verification, and validation testing protocols.',
  },
  {
    icon:  'chart',
    title: 'Cost & DFM Optimization',
    desc:  'Reduce manufacturing costs without compromising quality — proven 20%+ savings on real programs.',
  },
  {
    icon:  'sparkle',
    title: 'Strategy & Innovation',
    desc:  'Market positioning, IP strategy, and roadmap planning for early-stage medical startups.',
  },
];

const ServiceCard = ({ icon, title, desc }) => (
  <div className="group h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-soft transition-all">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-accent-400/20 text-brand-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
      <Icon path={ICONS[icon]} />
    </div>
    <h3 className="text-xl font-bold text-brand-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const Services = () => (
  <Section id="services" className="py-24 bg-white">
    <Container>
      <FadeUp>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-3">
            What we do
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-900 tracking-tight">
            Services built for medical innovation
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            A full-stack design and engineering partner for regulated healthcare products.
          </p>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <FadeUp key={service.title} delay={i * 80}>
            <ServiceCard {...service} />
          </FadeUp>
        ))}
      </div>
    </Container>
  </Section>
);
