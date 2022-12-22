import BarChart from "./bar-chart";
import { render } from '@testing-library/react';
import { barData } from "../data/temp-data/data";

describe("App", () => {
    test('renders BarChart', () => {
        const { container } = render(<BarChart data={barData} />);
        expect(container).toMatchSnapshot();
    });
});
