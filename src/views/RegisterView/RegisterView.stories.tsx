import { Meta } from '@storybook/react';
import { ThemeDecorator } from '../../storybook/decorators/ThemeDecorator';
import { RegisterView } from './RegisterView';
import { RegisterViewProps } from './RegisterView.types';

const meta: Meta<typeof RegisterView> = {
  component: RegisterView,
  decorators: [ThemeDecorator]
};

export const View = (args: RegisterViewProps) => <RegisterView {...args} />;

export default meta;
