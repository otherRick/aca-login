import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as Stories from './Button.stories';

const { Primary } = composeStories(Stories);

describe('<Text />', () => {
  test('should renders the component', () => {
    render(<Primary />);
    const children = screen.getByText('Button with Primary');

    expect(children).toBeInTheDocument();
  });
});
