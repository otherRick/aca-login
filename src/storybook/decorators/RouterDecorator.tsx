import { StoryFn } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ConfirmEmail } from '../../views/ConfirmEmail/ConfirmEmail';

export const RouterDecorator = (Story: StoryFn) => {
  return (
    <MemoryRouter initialEntries={['/register']}>
      <Routes>
        <Route path='/register' element={<Story />} />
        <Route path='/confirm-email' element={<ConfirmEmail />} />
      </Routes>
    </MemoryRouter>
  );
};
