import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '../../storybook/decorators/ThemeDecorator';
import { Button } from './Button';
import { ButtonProps } from './Button.types';
import { BackgroundLayout } from '../../storybook/decorators/BackgroundLayout';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [ThemeDecorator, BackgroundLayout],
  argTypes: {
    onPress: { table: { disable: true } }
  }
};

const Template = (args: ButtonProps) => <Button {...args}>{args.children}</Button>;

export const Primary: StoryFn<typeof Button> = Template.bind({});
Primary.args = {
  children: 'Button with Primary',
  $variant: 'primary'
};

export const Secondary: StoryFn<typeof Button> = Template.bind({});
Secondary.args = {
  children: 'Button with Secondary',
  $variant: 'secondary'
};

export default meta;
