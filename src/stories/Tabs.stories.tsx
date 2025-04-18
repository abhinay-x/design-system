
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../components/Navigation/Tabs/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'pill'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
          A tabs component for navigating between content panels.
          - **Anatomy**:
            - Tab List: Container for tab buttons.
            - Tab: Individual navigable tab.
            - Tab Panel: Content displayed for the active tab.
          - **Props**:
            - \`tabs\`: Array of objects with \`label\`, \`content\`, and optional \`disabled\`.
            - \`variant\`: Style variant ('underline', 'pill').
          - **States**: Active, hover, focus, disabled.
          - **Use Cases**: Content switching in dashboards or forms.
          - **Accessibility**: ARIA roles (\`tablist\`, \`tab\`, \`tabpanel\`), keyboard navigation (arrow keys).
          - **Responsiveness**: Stacks on mobile; supports zoom.
          - **Theming**: Light/dark mode via CSS variables.
          - **Do's**: Use for related content sections.
          - **Don'ts**: Avoid for primary navigation.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: 'Content for Tab 1: This is the first tab.' },
      { label: 'Tab 2', content: 'Content for Tab 2: This is the second tab.' },
      { label: 'Tab 3', content: 'Content for Tab 3: This is the third tab.', disabled: true },
    ],
    variant: 'underline',
  },
};

export const PillVariant: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: 'Content for Tab 1: This is the first tab.' },
      { label: 'Tab 2', content: 'Content for Tab 2: This is the second tab.' },
    ],
    variant: 'pill',
  },
};

export const Disabled: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: 'Content for Tab 1', disabled: true },
      { label: 'Tab 2', content: 'Content for Tab 2' },
    ],
    variant: 'underline',
  },
};

export const UseCase: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Tabs in a dashboard:</p>
      <Tabs
        tabs={[
          { label: 'Overview', content: 'Dashboard overview content.' },
          { label: 'Analytics', content: 'Analytics data and charts.' },
          { label: 'Settings', content: 'User settings form.', disabled: true },
        ]}
        variant="pill"
      />
    </div>
  ),
};