import { fireEvent, render, screen } from '@testing-library/react';
import * as Stories from './RegisterView.stories';
import { composeStories } from '@storybook/react';

const { View } = composeStories(Stories);

describe('<RegisterView />', () => {
  test('should render component with all children', () => {
    // set screen for mobile size
    const mobileScreenSize = 414;
    window.innerWidth = mobileScreenSize;

    render(<View />);

    const acaLogo = screen.getByTestId('aca-logo-icon');
    const registerFormComponent = screen.getByTestId('register-form-component');
    const backToLoginButton = screen.getByText('Voltar ao login');

    expect(acaLogo).toBeInTheDocument();
    expect(registerFormComponent).toBeInTheDocument();
    expect(backToLoginButton).toBeInTheDocument();
  });

  test('should submit form correctly', async () => {
    render(<View />);

    const registerFormComponent = screen.getByTestId('register-form-component');

    fireEvent.submit(registerFormComponent);

    // !DEBT: do msw test
    const confirmEmailView = await screen.findByTestId('confirm-email-view');

    expect(confirmEmailView).toBeInTheDocument();
  });
});
