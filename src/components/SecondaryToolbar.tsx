
import React from 'react';

const SecondaryToolbar: React.FC = () => {
  return (
    <div className="bg-gray-50 px-6 py-2 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">Q3 Financial Overview</span>
          <div className="flex items-center space-x-6">
            <button className="px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
              ABC
            </button>
            <button className="px-3 py-1 text-sm text-purple-600 bg-purple-100 rounded hover:bg-purple-200 transition-colors">
              Answer a question
            </button>
            <button className="px-3 py-1 text-sm text-orange-600 bg-orange-100 rounded hover:bg-orange-200 transition-colors">
              Extract
            </button>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 text-lg font-bold">+</button>
      </div>
    </div>
  );
};

export default SecondaryToolbar;
