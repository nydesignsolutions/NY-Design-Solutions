// Sticky top navigation. Becomes opaque on scroll and collapses on mobile.
const NAV_LINKS = [
  ['Services',    '#services'],
  ['About',       '#about'],
  ['Credentials', '#credentials'],
  ['Contact',     '#contact'],
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = `fixed top-0 inset-x-0 z-50 transition-all ${
    scrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-transparent'
  }`;

  return (
    <nav className={navClass}>
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-700 to-accent-500 flex items-center justify-center text-white font-bold">
            NY
          </div>
          <span className="font-bold text-brand-900 tracking-tight">
            NY Design Solutions
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-700 hover:text-brand-700 transition"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-brand-700 text-white text-sm font-semibold hover:bg-brand-800 transition shadow-soft"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-brand-900"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <Icon path={open ? ICONS.close : ICONS.menu} />
        </button>
      </Container>

      {/* Mobile menu drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <Container className="py-4 flex flex-col gap-3">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-slate-700 font-medium"
              >
                {label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </nav>
  );
};
