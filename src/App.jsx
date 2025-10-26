import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-teal-300 selection:text-neutral-900">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-10%,#134E4A_0%,transparent_60%),radial-gradient(800px_400px_at_110%_10%,#0EA5E9_0%,transparent_50%)]" />
      <Navbar />
      <main className="">
        <Hero />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
