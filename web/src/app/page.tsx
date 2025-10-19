// web/src/app/page.tsx
import Header from './components/Header';
import SearchUpload from './components/SearchUpload';
import RoleSelection from './components/RoleSelection';
import ChatPrompt from './components/ChatPrompt';
import CreateSpace from './components/CreateSpace';
import LandingHeader from './components/LandingHeader';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <SearchUpload />
        <RoleSelection />
        <div className="mt-8">
          <ChatPrompt />
          <CreateSpace />
        </div>
      <LandingHeader />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
