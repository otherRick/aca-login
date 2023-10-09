import { Meta, StoryFn } from '@storybook/react';
import { Text } from './Text';
import { TextProps } from './Text.types';
import { ThemeDecorator } from '../../storybook/decorators/ThemeDecorator';
import { BackgroundLayoutDecorator } from '../../storybook/decorators/BackgroundLayoutDecorator';

const meta: Meta<typeof Text> = {
  component: Text,
  decorators: [ThemeDecorator, BackgroundLayoutDecorator],
  args: {
    children: 'This is a sample text from storybook'
  }
};

const Template = (args: TextProps) => <Text {...args} />;

export const SizeXL: StoryFn<typeof Text> = Template.bind({});
SizeXL.args = {
  children: 'Text with Size XL',
  $size: 'm'
};

export const SizeL: StoryFn<typeof Text> = Template.bind({});
SizeXL.args = {
  children: 'Text with Size L',
  $size: 'm'
};

export const SizeM: StoryFn<typeof Text> = Template.bind({});
SizeM.args = {
  children: 'Text with Size M',
  $size: 'm'
};

export const SizeS: StoryFn<typeof Text> = Template.bind({});
SizeXL.args = {
  children: 'Text with Size S',
  $size: 'm'
};

export default meta;
