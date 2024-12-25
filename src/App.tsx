import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { DiscordServices } from './components/sections/DiscordServices';
import { SocialMediaServices } from './components/sections/SocialMediaServices';
import { Contact } from './components/Contact';
import { ParticleBackground } from './components/animations/ParticleBackground';
import { FloatingIcons } from './components/animations/FloatingIcons';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <FloatingIcons />
      <Navbar />
      <Hero />
      <Services />
      <DiscordServices />
      <SocialMediaServices />
      <Contact />
    </div>
  );
}

export default App;