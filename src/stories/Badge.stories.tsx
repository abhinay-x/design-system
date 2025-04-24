import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/DataDisplay/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'success', 'error'] },
    size: { control: 'select', options: ['sm', 'md', 'large'] },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
          A badge component for status or categorization.
          - **Anatomy**: Single element displaying text.
          - **Props**:
            - \`label\`: Text content.
            - \`variant\`: Color variant ('primary', 'success', 'error').
            - \`size\`: Size variant ('sm', 'md', 'large').
            - \`disabled\`: Disables badge interaction.
          - **States**: Default, disabled.
          - **Use Cases**: Status indicators, tags in forms.
          - **Accessibility**: Uses \`role="status"\`, \`aria-disabled\`, keyboard focus states, and meets WCAG 2.1 AA contrast ratios.
          - **Responsiveness**: Scales with text size using rem units; supports zoom levels and dynamic canvas resizing with Tailwind's breakpoint system.
          - **Theming**: Supports light/dark modes via CSS variables (e.g., \`--primary-500\`), customizable with design tokens.
          - **Cross-Browser**: Tested on Chrome, Safari, and Edge.
          - **Do's**: Use for short labels; ensure high contrast for readability.
          - **Don'ts**: Avoid long text or low-contrast combinations.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { label: 'New', variant: 'primary', size: 'md', disabled: false },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge label="Primary" variant="primary" />
      <Badge label="Success" variant="success" />
      <Badge label="Error" variant="error" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge label="Small" size="sm" />
      <Badge label="Medium" size="md" />
      <Badge label="Large" size="large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { label: 'Disabled', variant: 'primary', size: 'md', disabled: true },
};

export const UseCase: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Badge in a task list:</p>
      <div className="flex items-center gap-2">
        <span>Task 1</span>
        <Badge label="Pending" variant="primary" size="sm" /> {/* Changed 'warning' to 'primary' */}
      </div>
    </div>
  ),
};