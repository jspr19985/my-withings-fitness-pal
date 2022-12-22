import { VictoryBar, VictoryStack, VictoryChart, VictoryAxis } from "victory";
import { axisStyle } from "../utils/chart-utils/axis-style";

function BarChart({ data, label }) {
    const {
        data2012,
        data2013,
        data2014
    } = data;
    return (
        <VictoryChart
            domainPadding={20}
        >
            <VictoryAxis
                tickValues={[1, 2, 3, 4]}
                tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                label={label}
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
