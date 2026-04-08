// Track record — accomplishments and education.
const CREDENTIAL_GROUPS = [
  {
    title: 'Key Accomplishments',
    icon:  'sparkle',
    items: [
      'Led development for 3 Class II medical devices',
      'Reduced manufacturing costs by 20% for AlphaMed Inc.',
      'Patent holder — "Intelligent Fluid Delivery System"',
      'Successful FDA 510(k) submissions',
    ],
  },
  {
    title: 'Education & Certification',
    icon:  'shield',
    items: [
      'M.S. in Biomedical Engineering',
      'Certified Quality Auditor (CQA)',
      'ISO 13485 Lead Auditor training',
      '10+ years of industry experience',
    ],
  },
];

const CredentialCard = ({ title, icon, items }) => (
  <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 h-full">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-11 h-11 rounded-xl bg-brand-700 text-white flex items-center justify-center">
        <Icon path={ICONS[icon]} />
      </div>
      <h3 className="text-xl font-bold text-brand-900">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map(item => (
        <li key={item} className="flex items-start gap-3 text-slate-700">
          <div className="mt-1 w-5 h-5 rounded-full bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0">
            <Icon path={ICONS.check} className="w-3.5 h-3.5" />
          </div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Credentials = () => (
  <Section id="credentials" className="py-24 bg-white">
    <Container>
      <FadeUp>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-3">
            Track record
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-900 tracking-tight">
            Credentials & accomplishments
          </h2>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-6">
        {CREDENTIAL_GROUPS.map((group, i) => (
          <FadeUp key={group.title} delay={i * 120}>
            <CredentialCard {...group} />
          </FadeUp>
        ))}
      </div>
    </Container>
  </Section>
);
