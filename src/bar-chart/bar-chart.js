import { VictoryStack, VictoryChart, VictoryAxis } from "victory";
import { axisStyle } from "../utils/chart-utils/axis-style";

function BarChart({ label, children }) {
    return (
        <VictoryChart
            domainPadding={20}
            scale={{ x: "time", y: "linear" }}
        >
            <VictoryAxis
                label={label}
                style={axisStyle}
            />
            <VictoryAxis
                dependentAxis
                style={axisStyle}
            />
            <VictoryStack
                colorScale={["#323EDD", "#DC2ADE", "#E8F044"]}
            >
                {children}
            </VictoryStack>
        </VictoryChart>
    );
}

export default BarChart;
