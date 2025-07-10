
import React, { useState } from 'react';
import { TabType, JobRequest } from '../types';
import { mockData } from '../data/mockData';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import SecondaryToolbar from '../components/SecondaryToolbar';
import TabNavigation from '../components/TabNavigation';
import DataGrid from '../components/DataGrid';

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('All Orders');
  const [data, setData] = useState<JobRequest[]>(mockData);

  const handleCellEdit = (id: number, field: string, value: string) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
    console.log(`Edited cell: ID ${id}, Field ${field}, New value: ${value}`);
  };

  const handleImport = () => {
    console.log('Import clicked');
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  const handleShare = () => {
    console.log('Share clicked');
  };

  const handleNewAction = () => {
    console.log('New Action clicked');
  };

  const handleFilter = () => {
    console.log('Filter clicked');
  };

  const handleSort = () => {
    console.log('Sort clicked');
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    console.log(`Tab changed to: ${tab}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Toolbar
        onImport={handleImport}
        onExport={handleExport}
        onShare={handleShare}
        onNewAction={handleNewAction}
        onFilter={handleFilter}
        onSort={handleSort}
      />
      <SecondaryToolbar />
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      <DataGrid data={data} onCellEdit={handleCellEdit} />
    </div>
  );
};

export default Index;
