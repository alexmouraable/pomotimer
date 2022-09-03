import { render, screen, within } from '@testing-library/react';
import { mdiTrashCan } from '@mdi/js';

import { Button } from './Button';

describe('Button', () => {
  it('Should render button with label', () => {
    render(<Button label="Submit" />);

    screen.getByRole('button', { name: /submit/i });
  });

  it('Should render button with icon', () => {
    render(<Button icon={mdiTrashCan} />);

    const button = screen.getByRole('button');
    const icon = within(button).getByRole('presentation');

    expect(button).toContainElement(icon);
  });

  it('Should render primary button', () => {
    render(<Button label="Submit" />);

    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toHaveStyle(`
      background-color: #d90d42;
      border-color: #d90d42;
      color: #ffffff;
    `);
  });

  it('Should render secondary button', () => {
    render(<Button label="Submit" variant="secondary" />);

    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toHaveStyle(`
      background-color: #f9f9f9;
      border-color: #f9f9f9;
      color: #333333;
    `);
  });
});
