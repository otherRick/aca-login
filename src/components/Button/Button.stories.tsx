import { Meta } from '@storybook/react';
import { ThemeDecorator } from '../../storybook/decorators/ThemeDecorator';
import { Button } from './Button';
import { ButtonProps } from './Button.types';
import { BackgroundLayout } from '../../storybook/decorators/BackgroundLayout';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [ThemeDecorator, BackgroundLayout],
  args: {
    children: 'Action',
    $variant: 'primary'
  }
};

export const Primary = (args: ButtonProps) => <Button {...args}>{args.children}</Button>;

export const Secondary = (args: ButtonProps) => <Button {...args}>{args.children}</Button>;

Secondary.args = {
  $variant: 'secondary'
};

export default meta;
