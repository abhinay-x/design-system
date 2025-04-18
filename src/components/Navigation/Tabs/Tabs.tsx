
import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  variant?: 'underline' | 'pill';
}

export const Tabs: React.FC<TabsProps> = ({ tabs, variant = 'underline' }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      let nextIndex = (index + 1) % tabs.length;
      while (nextIndex !== index && tabs[nextIndex].disabled) {
        nextIndex = (nextIndex + 1) % tabs.length;
      }
      if (!tabs[nextIndex].disabled) setActiveTab(nextIndex);
    }
    if (e.key === 'ArrowLeft') {
      let prevIndex = (index - 1 + tabs.length) % tabs.length;
      while (prevIndex !== index && tabs[prevIndex].disabled) {
        prevIndex = (prevIndex - 1 + tabs.length) % tabs.length;
      }
      if (!tabs[prevIndex].disabled) setActiveTab(prevIndex);
    }
  };

  return (
    <div>
      <div role="tablist" className="flex border-b border-[var(--neutral-200)] space-x-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            id={`tab-${index}`}
            disabled={tab.disabled}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === index
                ? 'border-b-2 border-[var(--primary-500)] text-[var(--primary-500)]'
                : 'text-[var(--neutral-800)] hover:text-[var(--primary-600)]'
            } ${
              tab.disabled
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-[var(--neutral-50)]'
            } ${variant === 'pill' ? 'rounded-full bg-[var(--neutral-50)] px-6' : ''}`}
            onClick={() => !tab.disabled && setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            role="tabpanel"
            id={`panel-${index}`}
            aria-labelledby={`tab-${index}`}
            hidden={activeTab !== index}
            className="p-4 bg-[var(--surface-primary)] rounded-md animate-fade-in"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};