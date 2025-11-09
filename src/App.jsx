import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tracker from './components/Tracker';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Tracker />
      </main>
      <Footer />
    </div>
  );
}

export default App;
