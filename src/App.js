import { VictoryBar } from "victory";
import Header from "./header/header.js";
import SubHeader from "./subHeader/subHeader";
import BarChart from "./bar-chart/bar-chart";
import LineChart from "./line-chart/line-chart";
import { stepsData, weightData, calorieData, bodyCompositionData, exerciseData, macrosData } from "./data/temp-data/data";

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader header="Body Composition" />
      <BarChart label={"Body Composition (%)"}>
        {bodyCompositionData.map(data => <VictoryBar
          data={data}
          x="date"
          y="comp"
          key={`body-comp-${data}`}
        />)}
      </BarChart>
      <SubHeader header="Calories" />
      <LineChart data={calorieData} label={"Calories (kcal)"} tickCount={3} />
      <SubHeader header="Macros" />
      <BarChart label={"Macros (g)"}>
        {macrosData.map(data => <VictoryBar
          data={data}
          x="date"
          y="macro"
          key={`macro-${data}`}
        />)}
      </BarChart>
      <SubHeader header="Steps" />
      <LineChart data={stepsData} label={"Steps"} tickCount={4} />
      <SubHeader header="Exercise" />
      <BarChart label={"Exercise"}>
        {exerciseData.map(data => <VictoryBar
          data={data}
          x="date"
          y="exercise"
          key={`exercise-${data}`}
        />)}
      </BarChart>
      <SubHeader header="Weight" />
      <LineChart data={weightData} label={"Weight (lb)"} tickCount={2} />
    </div>
  );
}

export default App;
