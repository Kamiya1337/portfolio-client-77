import { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import Summary from './components/Summary';
import ProfileTab from './components/ProfileTab';
import LearningMap from './components/LearningMap';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <HomeTab setActiveTab={setActiveTab} />;
      case 'profile': return <ProfileTab setActiveTab={setActiveTab} />;
      case 'learning': return <LearningMap setActiveTab={setActiveTab} />;
      case 'assignments': return <ProjectsTab />;
      case 'evidence': return <EvidenceTable />;
      case 'reflection': return <Summary />;
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#f3edf0] print:bg-white print:text-black">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <main id="main-content" className="site-shell print:p-0">
        {renderContent()}
      </main>
    </div>
  );
}
