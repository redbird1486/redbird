// web/src/app/components/SearchUpload.tsx
import React from 'react';

const SearchUpload = () => {
  return (
    <div className="p-8">
      <label className="text-lg font-bold">Search or Upload</label>
      <div className="flex gap-4 mt-2">
        <input
          type="text"
          id="searchTerm"
          placeholder="Search photos or storage IDs..."
          className="border border-gray-300 rounded-lg p-2 flex-grow"
        />
        <button className="bg-blue-500 text-white rounded-lg p-2 flex items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span className="ml-2">Search</span>
        </button>
        <button className="bg-green-500 text-white rounded-lg p-2 flex items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-4-4V7a4 4 0 014-4h5l2 2h4a2 2 0 012 2v7a2 2 0 01-2 2h-4l-2-2H7z"></path></svg>
          <span className="ml-2">Upload</span>
        </button>
      </div>
    </div>
  );
};

export default SearchUpload;
