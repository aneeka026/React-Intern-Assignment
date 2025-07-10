
import React from 'react';
import { TabType } from '../types';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs: TabType[] = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="flex items-center px-6 bg-white border-b border-gray-200">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? 'text-blue-600 border-blue-600'
                : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
        <button
          onClick={() => console.log('Add new tab')}
          className="py-3 px-1 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
