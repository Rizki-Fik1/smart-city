import HeroSection from './components/Hero';
import Navbar from './components/Navbar';
import SmartCityPage from './components/Smartcity-page';
import Timeline from './components/Impact-page';
import Future from './components/Future-page';
import Footer from './components/Footer';
import ChallengesPage from './components/Challenges-page';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <section id="home" className="section">
        <HeroSection />
      </section>
      <section id="smart-city" className="section">
        <SmartCityPage />
      </section>
      <section id="impact" className="section">
        <Timeline />
      </section>
      <section id="challenges" className="section">
        <ChallengesPage />
      </section>
      <section id="future" className="section">
        <Future />
      </section>
      <Footer />
    </div>
  );
}

export default App;