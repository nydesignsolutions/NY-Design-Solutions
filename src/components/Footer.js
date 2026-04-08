// Site footer with logo and copyright line.
const Footer = () => (
  <footer className="bg-brand-900 text-brand-100 py-10">
    <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
          NY
        </div>
        <span className="font-semibold text-white">NY Design Solutions</span>
      </div>
      <div className="text-sm text-brand-200">
        © {new Date().getFullYear()} NY Design Solutions — Noha & Yasser. All rights reserved.
      </div>
    </Container>
  </footer>
);
