import { VictoryBar, VictoryStack } from "victory";


function BarChart() {
    return (
        <VictoryStack
            colorScale={["tomato", "orange", "gold"]}
        >
            <VictoryBar
                data={[{ x: "a", y: 2 }, { x: "b", y: 3 }, { x: "c", y: 5 }]}
            />
            <VictoryBar
                data={[{ x: "a", y: 1 }, { x: "b", y: 4 }, { x: "c", y: 5 }]}
            />
            <VictoryBar
                data={[{ x: "a", y: 3 }, { x: "b", y: 2 }, { x: "c", y: 6 }]}
            />
        </VictoryStack>
    );
}

export default BarChart;
