
import React, { useEffect } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import Dashboard from './Dashboard';
import { AIAssistant } from '@/components/layout/AIAssistant';

const Index = () => {
  const [showAIAssistant, setShowAIAssistant] = React.useState(true);

  useEffect(() => {
    // Listen for the custom event to toggle AI Assistant
    const handleToggleAIAssistant = () => {
      setShowAIAssistant(prev => !prev);
    };

    window.addEventListener('toggle-ai-assistant', handleToggleAIAssistant);

    return () => {
      window.removeEventListener('toggle-ai-assistant', handleToggleAIAssistant);
    };
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-auto">
              <Dashboard />
            </div>
            {showAIAssistant && (
              <div className="w-80 lg:w-96 border-l border-white/10">
                <AIAssistant />
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
