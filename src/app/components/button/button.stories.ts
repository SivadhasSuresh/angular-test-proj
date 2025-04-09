import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary'] },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    buttonClick: { action: 'clicked' }
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Primary variant
export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    fullWidth: true,
    disabled: false,
    type: 'button'
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
    fullWidth: true,
    disabled: false,
    type: 'button'
  },
};

// Disabled state for primary
export const PrimaryDisabled: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    fullWidth: true,
    disabled: true,
    type: 'button'
  },
};

// Disabled state for secondary
export const SecondaryDisabled: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
    fullWidth: true,
    disabled: true,
    type: 'button'
  },
}; 