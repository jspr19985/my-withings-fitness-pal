import { VictoryBar } from "victory";
import Header from "./header/header.js";
import BarChart from "./bar-chart/bar-chart";
import LineChart from "./line-chart/line-chart";
import { stepsData, weightData, calorieData, bodyCompositionData, exerciseData, macrosData } from "./data/temp-data/data";

function App() {
  return (
    <div className="App">
      <Header />
      <BarChart label={"Body Composition (%)"}>
        {bodyCompositionData.map(data => <VictoryBar
          data={data}
          x="date"
          y="comp"
          key={`body-comp-${data}`}
        />)}
      </BarChart>
      <LineChart data={calorieData} label={"Calories (kcal)"} />
      <BarChart label={"Macros (g)"}>
        {macrosData.map(data => <VictoryBar
          data={data}
          x="date"
          y="macro"
          key={`macro-${data}`}
        />)}
      </BarChart>
      <LineChart data={stepsData} label={"Steps"} />
      <BarChart label={"Exercise"}>
        {exerciseData.map(data => <VictoryBar
          data={data}
          x="date"
          y="exercise"
          key={`exercise-${data}`}
        />)}
      </BarChart>
      <LineChart data={weightData} label={"Weight (lb)"} />
    </div>
  );
}

export default App;
