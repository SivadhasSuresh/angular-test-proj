import { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: { control: 'select', options: ['text', 'password', 'email', 'number'] },
    disabled: { control: 'boolean' },
    valueChange: { action: 'changed' }
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

// Default input
export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    value: '',
    type: 'text',
    disabled: false
  },
};

// Filled input
export const Filled: Story = {
  args: {
    placeholder: 'Enter text',
    value: 'Input value',
    type: 'text',
    disabled: false
  },
};

// Disabled input
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    value: '',
    type: 'text',
    disabled: true
  },
};

// Password input
export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    value: '',
    type: 'password',
    disabled: false
  },
}; 