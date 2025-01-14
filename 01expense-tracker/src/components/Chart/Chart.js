import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const allValues = props.dataPoints.map((maxVal) => maxVal.value);
  const totalMax = Math.max(...allValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
