// web/src/app/page.tsx
import Header from './components/Header';
import SearchUpload from './components/SearchUpload';
import RoleSelection from './components/RoleSelection';
import ChatPrompt from './components/ChatPrompt';
import CreateSpace from './components/CreateSpace';

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
      </main>
    </div>
  );
}
