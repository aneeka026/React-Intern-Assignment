
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-600 rounded"></div>
            <span className="text-sm text-gray-600">Workspace</span>
            <span className="text-gray-400">›</span>
            <span className="text-sm text-gray-600">Folder 2</span>
            <span className="text-gray-400">›</span>
            <span className="text-sm font-medium text-gray-900">Spreadsheet 3</span>
            <span className="text-gray-400">⋯</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search within sheet"
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-medium">5</span>
            </div>
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">JD</span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">John Doe</div>
                <div className="text-xs text-gray-500">john.doe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
