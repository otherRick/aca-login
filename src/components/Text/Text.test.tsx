import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as Stories from './Text.stories';

const { SizeM } = composeStories(Stories);

describe('<Text />', () => {
  test('should render the component', () => {
    render(<SizeM />);
    const children = screen.getByTestId('text-component');

    expect(children).toBeInTheDocument();
  });

  test('should render with right font size according to the prop size value', () => {
    render(<SizeM $size='xl' />);

    const Text = screen.getByTestId('text-component');

    // styled components transforms px into em
    expect(Text).toHaveStyle('font-size: 2em');
  });
});
