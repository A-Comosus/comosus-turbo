import { render, screen } from '@testing-library/react';

import { Button } from './button.component';

describe('Button component', () => {
  it("should it's content", async () => {
    render(<Button>Boop</Button>);

    expect(screen.getByText(/boop/i)).toBeInTheDocument();
  });
});
