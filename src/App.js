// Top-level app: assembles every section and mounts to #root.
const App = () => (
  <div>
    <Nav />
    <Hero />
    <Services />
    <About />
    <Credentials />
    <Contact />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
