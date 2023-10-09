import { StoryFn } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ConfirmEmailView } from '../../views/publicViews/ConfirmEmailView/ConfirmEmailView';

export const RouterDecorator = (Story: StoryFn) => {
  return (
    <MemoryRouter initialEntries={['/register']}>
      <Routes>
        <Route path='/register' element={<Story />} />
        <Route path='/confirm-email' element={<ConfirmEmailView />} />
      </Routes>
    </MemoryRouter>
  );
};
