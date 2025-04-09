import { Meta, StoryObj } from '@storybook/angular';
import { PopupComponent } from './popup.component';

const meta: Meta<PopupComponent> = {
  title: 'Components/Popup',
  component: PopupComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    buttonLayout: { control: 'radio', options: ['vertical', 'horizontal'] },
    contentType: { 
      control: 'select', 
      options: ['text-buttons', 'text-input-buttons', 'message-only', 'title-only', 'title-message']
    },
    primaryButtonText: { control: 'text' },
    secondaryButtonText: { control: 'text' },
    inputPlaceholder: { control: 'text' },
    inputValue: { control: 'text' },
    showSecondaryButton: { control: 'boolean' },
    primaryButtonClick: { action: 'primary clicked' },
    secondaryButtonClick: { action: 'secondary clicked' },
    inputChange: { action: 'input changed' }
  },
};

export default meta;
type Story = StoryObj<PopupComponent>;

// Text with buttons variant - Vertical layout
export const TextButtonsVertical: Story = {
  args: {
    title: 'Popup Title',
    message: 'This is a message for the user with buttons below in vertical layout.',
    buttonLayout: 'vertical',
    contentType: 'text-buttons',
    primaryButtonText: 'Confirm',
    secondaryButtonText: 'Cancel',
    showSecondaryButton: true
  },
};

// Text with buttons variant - Horizontal layout
export const TextButtonsHorizontal: Story = {
  args: {
    title: 'Popup Title',
    message: 'This is a message for the user with buttons below in horizontal layout.',
    buttonLayout: 'horizontal',
    contentType: 'text-buttons',
    primaryButtonText: 'Confirm',
    secondaryButtonText: 'Cancel',
    showSecondaryButton: true
  },
};

// Text with input and buttons
export const TextInputButtons: Story = {
  args: {
    title: 'Input Required',
    message: 'Please provide the required information below.',
    buttonLayout: 'vertical',
    contentType: 'text-input-buttons',
    primaryButtonText: 'Submit',
    secondaryButtonText: 'Cancel',
    inputPlaceholder: 'Enter your response',
    inputValue: '',
    showSecondaryButton: true
  },
};

// Message only
export const MessageOnly: Story = {
  args: {
    message: 'This is a message-only popup without title or buttons.',
    contentType: 'message-only'
  },
};

// Title only
export const TitleOnly: Story = {
  args: {
    title: 'This is a title-only popup',
    contentType: 'title-only'
  },
};

// Title with message
export const TitleMessage: Story = {
  args: {
    title: 'Important Information',
    message: 'This is a popup with title and message only, no buttons or input.',
    contentType: 'title-message'
  },
}; 