import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as Stories from './Input.stories';

const { TextMode, PasswordMode, ErrorMode } = composeStories(Stories);

describe('<Input />', () => {
  test('should render input component with passwordMode false by default', () => {
    render(<TextMode />);

    const input: HTMLInputElement = screen.getByTestId('input-component');

    expect(input.type).toBe('text');
  });

  test('should change input type correctly when passing prop passwordMode to true or false', () => {
    const { rerender } = render(<PasswordMode />);

    const input: HTMLInputElement = screen.getByTestId('input-component');

    expect(input.type).toBe('password');

    // test case when passwordMode is false
    rerender(<PasswordMode passwordMode={false} />);

    const textModeInput: HTMLInputElement = screen.getByTestId('input-component');

    expect(textModeInput.type).toBe('text');
  });

  test('should only render label element when label prop is passed', () => {
    const testLabel = 'test label';
    render(<TextMode label={testLabel} />);

    const labelElement = screen.getByText(testLabel);

    expect(labelElement).toHaveTextContent(testLabel);
  });

  test('should only render label element when label prop is passed', () => {
    const errorMessage = 'storybook test error message';
    render(<ErrorMode />);

    const errorText = screen.getByText(errorMessage);

    expect(errorText).toHaveTextContent(errorMessage);
  });
});
