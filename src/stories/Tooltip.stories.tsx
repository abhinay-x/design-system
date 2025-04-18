// stories/Tooltip.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../components/DataDisplay/Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'error'],
    },
    content: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
          A tooltip component that displays contextual information on hover or focus.
          - **Anatomy**:
            - Trigger: The element that activates the tooltip (e.g., button, input).
            - Content: The tooltip content displayed on hover/focus.
          - **Props**:
            - \`content\`: String content to display.
            - \`children\`: Trigger element.
            - \`position\`: Placement ('top', 'bottom', 'left', 'right').
            - \`variant\`: Color variant ('primary', 'secondary', 'error').
            - \`disabled\`: Disables tooltip interaction.
          - **States**: Visible (hover/focus), hidden, disabled.
          - **Use Cases**: Form field hints, button explanations.
          - **Accessibility**: ARIA roles (\`role="tooltip"\`, \`aria-describedby\`), keyboard navigation (Tab key).
          - **Responsiveness**: Adjusts positioning on mobile; uses rem units for zoom support.
          - **Theming**: Supports light/dark modes via CSS variables.
          - **Do's**: Use for brief, contextual help.
          - **Don'ts**: Avoid lengthy content or critical information.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: (
      <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">
        Hover or Focus
      </button>
    ),
    position: 'top',
    variant: 'primary',
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip content="Primary Tooltip" variant="primary">
        <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">
          Primary
        </button>
      </Tooltip>
      <Tooltip content="Secondary Tooltip" variant="secondary">
        <button className="px-4 py-2 bg-[var(--secondary-500)] text-[var(--neutral-50)] rounded-md">
          Secondary
        </button>
      </Tooltip>
      <Tooltip content="Error Tooltip" variant="error">
        <button className="px-4 py-2 bg-[var(--error)] text-[var(--neutral-50)] rounded-md">
          Error
        </button>
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip content="Top Tooltip" position="top">
        <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">
          Top
        </button>
      </Tooltip>
      <Tooltip content="Bottom Tooltip" position="bottom">
        <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">
          Bottom
        </button>
      </Tooltip>
      <Tooltip content="Left Tooltip" position="left">
        <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">
          Left
        </button>
      </Tooltip>
      <Tooltip content="Right Tooltip" position="right">
        <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">
          Right
        </button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    content: 'Disabled Tooltip',
    children: (
      <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">
        Disabled
      </button>
    ),
    disabled: true,
  },
};

export const UseCase: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Tooltip in a form:</p>
      <Tooltip content="Enter a valid email address">
        <input
          type="email"
          placeholder="Email"
          className="px-3 py-2 border rounded-md bg-[var(--surface-primary)] text-[var(--text)]"
        />
      </Tooltip>
    </div>
  ),
};