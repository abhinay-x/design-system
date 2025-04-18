import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/TooltipComponent',
  component: Tooltip,
  argTypes: {
    content: { control: 'text' },
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    disabled: { control: 'boolean' },
    variant: { control: 'select', options: ['primary', 'neutral'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'A customizable tooltip component with accessibility and theming support.',
      },
    },
    a11y: {
      config: { rules: [{ id: 'aria-allowed-attr', enabled: true }] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button className="px-4 py-2 bg-primary-500 text-white rounded">Hover me</button>,
    position: 'top',
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const DarkTheme: Story = {
  args: {
    ...Default.args,
    variant: 'neutral',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};