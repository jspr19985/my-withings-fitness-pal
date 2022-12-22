import LineChart from "./line-chart";
import { render } from '@testing-library/react';

describe("App", () => {
    test('renders LineChart', () => {
        const { container } = render(<LineChart />);
        expect(container).toMatchSnapshot();
    });
});
