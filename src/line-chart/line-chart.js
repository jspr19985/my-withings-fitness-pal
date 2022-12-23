import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import { axisStyle } from "../utils/chart-utils/axis-style";


function LineChart({ data, label }) {
    return (
        <VictoryChart
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
            <VictoryLine
                style={{
                    data: { stroke: "#4D089A" },
                    parent: { border: "1px solid #ccc" }
                }}
                data={data}
            />
        </VictoryChart>
    );
}

export default LineChart;
