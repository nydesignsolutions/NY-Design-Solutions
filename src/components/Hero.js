// Landing hero with headline, subheadline, CTAs, and stat row.
const HERO_STATS = [
  ['10+',  'Years experience'],
  ['3',    'Class II devices'],
  ['20%',  'Avg. cost reduction'],
  ['ISO',  '13485 ready'],
];

const Hero = () => (
  <Section
    id="top"
    className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 grid-bg overflow-hidden"
  >
    <Container className="relative">
      <FadeUp>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
          Now accepting new medical device projects
        </div>
      </FadeUp>

      <FadeUp delay={100}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-900 leading-[1.05] max-w-4xl">
          Engineering the next generation of{' '}
          <span className="gradient-text">medical devices</span>.
        </h1>
      </FadeUp>

      <FadeUp delay={200}>
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl">
          NY Design Solutions partners with healthcare innovators to design,
          develop, and bring compliant medical devices to market — from first
          sketch to FDA submission.
        </p>
      </FadeUp>

      <FadeUp delay={300}>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-brand-700 text-white font-semibold hover:bg-brand-800 transition shadow-soft"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold hover:border-brand-300 transition"
          >
            Explore services
          </a>
        </div>
      </FadeUp>

      <FadeUp delay={400}>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
          {HERO_STATS.map(([number, label]) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-extrabold text-brand-700">
                {number}
              </div>
              <div className="text-sm text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </FadeUp>
    </Container>
  </Section>
);
