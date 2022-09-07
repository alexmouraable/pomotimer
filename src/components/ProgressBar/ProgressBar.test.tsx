import { render, screen } from '@testing-library/react';

import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('Should render progress bar', () => {
    render(<ProgressBar />);

    const progressBar = screen.getByRole('progressbar');

    expect(progressBar).toBeInTheDocument();
  });

  it('Should render full progress bar', () => {
    render(<ProgressBar value={100} />);

    const progressbar = screen.getByRole('progressbar');

    expect(progressbar).toHaveStyle(`
      width: 100%;
    `);
  });
});
