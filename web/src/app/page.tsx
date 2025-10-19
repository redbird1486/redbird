// web/src/app/page.tsx
import Header from './components/Header';
import SearchUpload from './components/SearchUpload';
import RoleSelection from './components/RoleSelection';
import ChatPrompt from './components/ChatPrompt';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <SearchUpload />
        <RoleSelection />
        <div className="mt-8">
          <ChatPrompt />
        </div>
      </main>
    </div>
  );
}
