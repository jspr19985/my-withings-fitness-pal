import { render, screen } from '@testing-library/react';
import Header from './header';
import { noOfMonths } from "../utils/constants";

describe("App", () => {
  test('renders heading', () => {
    render(<Header />);
    const text = `Weight Loss: Last ${noOfMonths} months...`;
    const header = screen.getByText(text);
    expect(header).toBeInTheDocument();
  });
});
