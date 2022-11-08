import { VictoryBar, VictoryStack, VictoryChart, VictoryAxis } from "victory";
import { axisStyle } from "../utils/chart-utils/axis-style";

const data2012 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];

const data2013 = [
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 }
];

const data2014 = [
    { quarter: 1, earnings: 11500 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 20000 },
    { quarter: 4, earnings: 15500 }
];


function BarChart() {
    return (
        <VictoryChart
            domainPadding={20}
        >
            <VictoryAxis
                tickValues={[1, 2, 3, 4]}
                tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                label="Label"
                style={axisStyle}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`$${x / 1000}k`)}
                style={axisStyle}
            />
            <VictoryStack
                colorScale={["#323EDD", "#DC2ADE", "#E8F044"]}
            >
                <VictoryBar
                    data={data2012}
                    x="quarter"
                    y="earnings"
                />
                <VictoryBar
                    data={data2013}
                    x="quarter"
                    y="earnings"
                />
                <VictoryBar
                    data={data2014}
                    x="quarter"
                    y="earnings"
                />
            </VictoryStack>
        </VictoryChart>
    );
}

export default BarChart;
