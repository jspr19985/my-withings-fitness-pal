import Header from "./header/header.js";
import BarChart from "./bar-chart/bar-chart";
import LineChart from "./line-chart/line-chart";
import { stepsData, weightData, calorieData, barData } from "./data/temp-data/data";

function App() {
  return (
    <div className="App">
      <Header />
      <BarChart data={barData} label={"Body Composition"} />
      <LineChart data={calorieData} label={"Calories"} />
      <BarChart data={barData} label={"Macros"} />
      <LineChart data={stepsData} label={"Steps"} />
      <BarChart data={barData} label={"Exercise"} />
      <LineChart data={weightData} label={"Weight (lb)"} />
    </div>
  );
}

export default App;
