import { Meta } from '@storybook/react';
import { ThemeDecorator } from '../../storybook/decorators/ThemeDecorator';
import { RegisterView } from './RegisterView';
import { RegisterViewProps } from './RegisterView.types';
import { RouterDecorator } from '../../storybook/decorators/RouterDecorator';
import { RegisterViewContextProvider } from './RegisterViewContext/RegisterViewContext';

const meta: Meta<typeof RegisterView> = {
  component: RegisterView,
  decorators: [ThemeDecorator, RouterDecorator]
};

export const View = (args: RegisterViewProps) => (
  <RegisterViewContextProvider>
    <RegisterView {...args} />
  </RegisterViewContextProvider>
);

export default meta;
