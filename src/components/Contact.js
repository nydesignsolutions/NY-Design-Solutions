// Closing CTA section with email/phone cards.
const CONTACT_METHODS = [
  {
    icon:  'mail',
    label: 'Email',
    value: 'hello@nydesignsolutions.com',
    href:  'mailto:hello@nydesignsolutions.com',
  },
  {
    icon:  'phone',
    label: 'Phone',
    value: '(555) 123-4567',
    href:  'tel:+15551234567',
  },
];

const ContactCard = ({ icon, label, value, href }) => (
  <a
    href={href}
    className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur hover:bg-white/15 transition"
  >
    <div className="w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center">
      <Icon path={ICONS[icon]} />
    </div>
    <div>
      <div className="text-xs text-brand-100 uppercase tracking-wider font-semibold">
        {label}
      </div>
      <div className="font-semibold">{value}</div>
    </div>
  </a>
);

const Contact = () => (
  <Section
    id="contact"
    className="py-24 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 text-white relative overflow-hidden"
  >
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          'radial-gradient(circle at 30% 30%, #14b8a6, transparent 50%), radial-gradient(circle at 70% 70%, #0a84ff, transparent 50%)',
      }}
    />

    <Container className="relative">
      <FadeUp>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's build the future of health.
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            Have a medical device idea or program that needs expert hands? We'd love to hear about it.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={150}>
        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {CONTACT_METHODS.map(method => (
            <ContactCard key={method.label} {...method} />
          ))}
        </div>
      </FadeUp>
    </Container>
  </Section>
);
