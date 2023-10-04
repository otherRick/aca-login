import { Meta } from '@storybook/react';
import { Text } from './Text';
import { TextProps } from './Text.types';
import { ThemeDecorator } from '../../storybook/decorators/ThemeDecorator';
import { BackgroundLayout } from '../../storybook/decorators/BackgroundLayout';

const meta: Meta<typeof Text> = {
  component: Text,
  decorators: [ThemeDecorator, BackgroundLayout],
  args: {
    children: 'This is a sample text from storybook'
  }
};

export const SizeXL = (args: TextProps) => (
  <Text $size='xl' {...args}>
    {args.children}
  </Text>
);

export const SizeL = (args: TextProps) => (
  <Text $size='l' {...args}>
    {args.children}
  </Text>
);

export const SizeM = (args: TextProps) => (
  <Text $size='m' {...args}>
    {args.children}
  </Text>
);

export const SizeS = (args: TextProps) => (
  <Text $size='s' {...args}>
    {args.children}
  </Text>
);

export default meta;
