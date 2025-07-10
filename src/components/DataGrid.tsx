
import React, { useState } from 'react';
import { JobRequest } from '../types';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';

interface DataGridProps {
  data: JobRequest[];
  onCellEdit: (id: number, field: string, value: string) => void;
}

const DataGrid: React.FC<DataGridProps> = ({ data, onCellEdit }) => {
  const [editingCell, setEditingCell] = useState<{ id: number; field: string } | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleCellClick = (id: number, field: string, currentValue: string) => {
    if (field === 'status' || field === 'priority') return;
    setEditingCell({ id, field });
    setEditValue(currentValue);
  };

  const handleCellSave = () => {
    if (editingCell) {
      onCellEdit(editingCell.id, editingCell.field, editValue);
      setEditingCell(null);
      setEditValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCellSave();
    } else if (e.key === 'Escape') {
      setEditingCell(null);
      setEditValue('');
    }
  };

  const formatValue = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <div className="bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="w-12 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Request</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitter</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Value</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-900">{row.id}</td>
                <td
                  className="px-4 py-3 text-sm text-gray-900 cursor-text hover:bg-blue-50"
                  onClick={() => handleCellClick(row.id, 'jobRequest', row.jobRequest)}
                >
                  {editingCell?.id === row.id && editingCell?.field === 'jobRequest' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleCellSave}
                      onKeyDown={handleKeyDown}
                      className="w-full px-2 py-1 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                    />
                  ) : (
                    row.jobRequest
                  )}
                </td>
                <td
                  className="px-4 py-3 text-sm text-gray-900 cursor-text hover:bg-blue-50"
                  onClick={() => handleCellClick(row.id, 'submitted', row.submitted)}
                >
                  {editingCell?.id === row.id && editingCell?.field === 'submitted' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleCellSave}
                      onKeyDown={handleKeyDown}
                      className="w-full px-2 py-1 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                    />
                  ) : (
                    row.submitted
                  )}
                </td>
                <td className="px-4 py-3 text-sm">
                  <StatusBadge status={row.status} />
                </td>
                <td
                  className="px-4 py-3 text-sm text-gray-900 cursor-text hover:bg-blue-50"
                  onClick={() => handleCellClick(row.id, 'submitter', row.submitter)}
                >
                  {editingCell?.id === row.id && editingCell?.field === 'submitter' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleCellSave}
                      onKeyDown={handleKeyDown}
                      className="w-full px-2 py-1 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                    />
                  ) : (
                    row.submitter
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  <a href={`https://${row.url}`} target="_blank" rel="noopener noreferrer">
                    {row.url}
                  </a>
                </td>
                <td
                  className="px-4 py-3 text-sm text-gray-900 cursor-text hover:bg-blue-50"
                  onClick={() => handleCellClick(row.id, 'assigned', row.assigned)}
                >
                  {editingCell?.id === row.id && editingCell?.field === 'assigned' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleCellSave}
                      onKeyDown={handleKeyDown}
                      className="w-full px-2 py-1 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                    />
                  ) : (
                    row.assigned
                  )}
                </td>
                <td className="px-4 py-3 text-sm">
                  <PriorityBadge priority={row.priority} />
                </td>
                <td
                  className="px-4 py-3 text-sm text-gray-900 cursor-text hover:bg-blue-50"
                  onClick={() => handleCellClick(row.id, 'dueDate', row.dueDate)}
                >
                  {editingCell?.id === row.id && editingCell?.field === 'dueDate' ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={handleCellSave}
                      onKeyDown={handleKeyDown}
                      className="w-full px-2 py-1 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                    />
                  ) : (
                    row.dueDate
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {formatValue(row.estValue)} ₹
                </td>
              </tr>
            ))}

            {Array.from({ length: 15 }, (_, index) => (
              <tr key={`empty-${index}`} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-900">{data.length + index + 1}</td>
                <td className="px-4 py-3 text-sm text-gray-900 cursor-text hover:bg-blue-50"></td>
                <td className="px-4 py-3 text-sm text-gray-900 cursor-text hover:bg-blue-50"></td>
                <td className="px-4 py-3 text-sm"></td>
                <td className="px-4 py-3 text-sm text-gray-900 cursor-text hover:bg-blue-50"></td>
                <td className="px-4 py-3 text-sm"></td>
                <td className="px-4 py-3 text-sm text-gray-900 cursor-text hover:bg-blue-50"></td>
                <td className="px-4 py-3 text-sm"></td>
                <td className="px-4 py-3 text-sm text-gray-900 cursor-text hover:bg-blue-50"></td>
                <td className="px-4 py-3 text-sm text-gray-900"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataGrid;
