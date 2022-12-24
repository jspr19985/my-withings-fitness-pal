import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import { axisStyle } from "../utils/chart-utils/axis-style";


function LineChart({ data, label, tickCount }) {
    return (
        <VictoryChart
            scale={{ x: "time", y: "linear" }}
            height={120}
        >
            <VictoryAxis
                label={label}
                style={axisStyle}
            />
            <VictoryAxis
                tickCount={tickCount}
                dependentAxis
                style={axisStyle}
            />
            <VictoryLine
                style={{
                    data: { stroke: "#4D089A", strokeWidth: "1px" },
                    parent: { border: "1px solid #ccc" }
                }}
                data={data}
            />
        </VictoryChart>
    );
}

export default LineChart;
