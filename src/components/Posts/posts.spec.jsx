import { render, screen } from '@testing-library/react';
import Posts from '.';

const props = {
  content: [
    {
      title: 'title 1',
      body: 'body 1',
      cover: 'url/url.png',
    },
    {
      title: 'title 2',
      body: 'body 2',
      cover: 'url/url.png',
    },
    {
      title: 'title 3',
      body: 'body 3',
      cover: 'url/url.png',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title/i })).toHaveAttribute('src', 'url/url.png');
  });
});
