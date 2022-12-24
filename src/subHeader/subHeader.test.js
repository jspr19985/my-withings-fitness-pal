import { render, screen } from '@testing-library/react';
import SubHeader from './subHeader';
const mockHeader = "mock-header";

describe("App", () => {
  test('renders heading', () => {
    render(<SubHeader header={mockHeader} />);
    const header = screen.getByText(mockHeader);
    expect(header).toBeInTheDocument();
  });
});
