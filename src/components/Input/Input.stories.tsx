import { Meta } from '@storybook/react';

import { ThemeDecorator } from '../../storybook/decorators/ThemeDecorator';
import { Input } from './Input';
import { BackgroundLayout } from '../../storybook/decorators/BackgroundLayout';
import { InputProps } from './Input.types';

const meta: Meta<typeof Input> = {
  component: Input,
  decorators: [ThemeDecorator, BackgroundLayout],
  argTypes: {
    label: { control: 'text' },
    passwordMode: { control: 'boolean' },
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' }
  },
  args: {
    placeholder: 'I am a placeholder.'
  }
};

export const TextMode = (args: InputProps) => {
  return <Input {...args} />;
};

export const PasswordMode = (args: InputProps) => {
  return <Input {...args} />;
};
PasswordMode.args = {
  passwordMode: true
};

export const ErrorMode = (args: InputProps) => {
  return <Input {...args} />;
};
ErrorMode.args = {
  errorMessage: 'storybook test error message'
};

export default meta;
