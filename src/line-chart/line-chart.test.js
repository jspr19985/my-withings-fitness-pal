import LineChart from "./line-chart";
import { render } from '@testing-library/react';

describe("App", () => {
    test('renders Header', () => {
        const { container } = render(<LineChart />);
        expect(container).toMatchSnapshot();
    });
});
