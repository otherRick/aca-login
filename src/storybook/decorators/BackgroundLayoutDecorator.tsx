import { StoryFn } from '@storybook/react';
import { colors } from '../../themes/appTheme';

export const BackgroundLayoutDecorator = (Story: StoryFn) => {
  return (
    <div
      style={{
        background: colors.navy400,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <style>
        {`
          /* Remove padding from Storybook inner body */
          body.sb-show-main {
            padding: 0 !important;
          }
        `}
      </style>
      <Story />
    </div>
  );
};
