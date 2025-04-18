// src/App.tsx
import React from 'react';
import { ThemeProvider, ThemeContext } from './components/Theme/ThemeProvider';
import { ToggleDarkMode } from './components/Theme/ToggleDarkMode';
import { Tooltip } from './components/Tooltip';
import { Tabs } from './components/Navigation/Tabs/Tabs';
import { Badge } from './components/DataDisplay/Badge/Badge';

// Create a separate component for the app content
const AppContent: React.FC = () => {

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Design System Demo</h1>
          <ToggleDarkMode className="mt-4 sm:mt-0" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Tooltip Component</h2>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Primary" position="top" variant="primary">
              <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md hover:bg-[var(--primary-600)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-300)]">
                Primary
              </button>
            </Tooltip>
            <Tooltip content="Error Tooltip" position="bottom" disabled>
              <button className="px-4 py-2 bg-[var(--error)] text-[var(--neutral-50)] rounded-md opacity-50 cursor-not-allowed">
                Disabled Error
              </button>
            </Tooltip>
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Tabs Component</h2>
          <Tabs
            tabs={[
              { label: 'Tab 1', content: 'Content for Tab 1: This is the first tab.' },
              { label: 'Tab 2', content: 'Content for Tab 2: This is the second tab.' },
              {
                label: 'Tab 3',
                content: 'Content for Tab 3: This is disabled.',
                disabled: true,
              },
            ]}
            variant="underline"
          />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Badge Component</h2>
          <div className="flex flex-wrap gap-4">
            <Badge label="New" variant="primary" size="md" />
            <Badge label="Completed" variant="success" size="md" />
            <Badge label="Failed" variant="error" size="md" disabled />
          </div>
          <p className="mt-4 text-sm text-[var(--neutral-600)]">Try hovering and focusing on the non-disabled badges</p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;