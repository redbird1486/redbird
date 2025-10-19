// web/src/app/components/RoleSelection.tsx
import React from 'react';

const RoleSelection = () => {
  const roles = [
    {
      title: "I’m the New Owner",
      description: "Upload unit photos, tag items, or list non-sentimental belongings.",
      actions: ["Upload a Unit Photo", "Tag Items", "List Non-Sentimental Items"],
    },
    {
      title: "I’m the Previous Owner",
      description: "Find your sentimental belongings or reconnect with found items.",
      actions: ["Search for My Items", "Request an Item", "Message the New Owner"],
    },
    {
      title: "I’m the Storage Facility",
      description: "Manage and verify uploaded storage units and their contents.",
      actions: ["Upload Unit Photo", "Verify Listing"],
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Choose Your Role</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">{role.title}</h3>
            <p className="mb-4">{role.description}</p>
            <div className="flex flex-col gap-2">
              {role.actions.map((action, actionIndex) => (
                <button key={actionIndex} className="text-blue-500 hover:underline text-left">
                  {action}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleSelection;
