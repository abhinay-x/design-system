
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { theme } from '../styles/theme';

const ColorSystem: React.FC = () => (
  <div className="space-y-8">
    {Object.entries(theme.colors).map(([category, shades]) => (
      <div key={category}>
        <h2 className="text-xl font-semibold capitalize">{category}</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {Object.entries(shades).map(([key, value]) => (
            <div
              key={key}
              className="p-4 rounded-md shadow"
              style={{ backgroundColor: value as string }}
            >
              <p className="text-sm font-medium">
                {key}: {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const meta: Meta<typeof ColorSystem> = {
  title: 'Design System/Color System',
  component: ColorSystem,
  parameters: {
    docs: {
      description: {
        component: `
          A token-based color system supporting light and dark modes.
          - **Accessibility**: Meets WCAG 2.1 AA contrast ratios (verified with WebAIM).
          - **Usage**: Use CSS variables (e.g., \`var(--primary-500)\`).
          - **Do's**: Use semantic colors for feedback states.
          - **Don'ts**: Avoid low-contrast combinations.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorSystem>;

export const Default: Story = {};