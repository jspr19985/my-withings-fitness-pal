import { render } from '@testing-library/react';
import App from './App';
import Header from "./header/header.js";
import BarChart from "./bar-chart/bar-chart";
import LineChart from "./line-chart/line-chart";

jest.mock('./header/header.js', () => jest.fn());
jest.mock('./bar-chart/bar-chart', () => jest.fn());
jest.mock('./line-chart/line-chart', () => jest.fn());

describe("App", () => {
  test('renders Header', () => {
    render(<App />);
    expect(Header).toHaveBeenCalled();
  });
  test('renders BarChart', () => {
    render(<App />);
    expect(BarChart).toHaveBeenCalled();
  });
  test('renders LineChart', () => {
    render(<App />);
    expect(LineChart).toHaveBeenCalled();
  });
});
