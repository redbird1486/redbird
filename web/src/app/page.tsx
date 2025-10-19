// web/src/app/page.tsx
import LandingHeader from './components/LandingHeader';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <LandingHeader />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
