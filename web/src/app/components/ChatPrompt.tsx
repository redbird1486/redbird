// web/src/app/components/ChatPrompt.tsx
import React from 'react';

const ChatPrompt = () => {
  const choices = ["New Owner", "Previous Owner", "Storage Facility"];

  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <p className="text-lg mb-4">Hi there 👋 Which role best describes you today?</p>
      <div className="flex gap-4">
        {choices.map((choice, index) => (
          <button key={index} className="bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200">
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatPrompt;
