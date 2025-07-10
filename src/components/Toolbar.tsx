
import React from 'react';
import { Filter, Import, Download, Share, Plus } from 'lucide-react';

interface ToolbarProps {
  onImport: () => void;
  onExport: () => void;
  onShare: () => void;
  onNewAction: () => void;
  onFilter: () => void;
  onSort: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onImport,
  onExport,
  onShare,
  onNewAction,
  onFilter,
  onSort
}) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">Tool bar</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => console.log('Hide fields clicked')}
            className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
          >
            Hide fields
          </button>
          <button
            onClick={onSort}
            className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
          >
            Sort
          </button>
          <button
            onClick={onFilter}
            className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button
            onClick={() => console.log('Cell view clicked')}
            className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
          >
            Cell view
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={onImport}
          className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
        >
          <Import className="w-4 h-4 mr-2" />
          Import
        </button>
        <button
          onClick={onExport}
          className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          Export
        </button>
        <button
          onClick={onShare}
          className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
        >
          <Share className="w-4 h-4 mr-2" />
          Share
        </button>
        <button
          onClick={onNewAction}
          className="flex items-center px-4 py-1.5 text-sm text-white bg-green-600 hover:bg-green-700 rounded transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
