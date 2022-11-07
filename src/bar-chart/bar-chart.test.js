import BarChart from "./bar-chart";
import { render } from '@testing-library/react';

describe("App", () => {
    test('renders Header', () => {
        const { container } = render(<BarChart />);
        expect(container).toMatchSnapshot();
    });
});
