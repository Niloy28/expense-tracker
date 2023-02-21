import ChartBar from "./ChartBar";
import ChartBarDataPoint from "../types/ChartBarDataPoint";

import "../styles/Chart.css";

const Chart: React.FC<{ dataPoints: ChartBarDataPoint[] }> = (props) => {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const maxValue = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.id}
					id={dataPoint.id}
					label={dataPoint.label}
					value={dataPoint.value}
					maxValue={maxValue}
				/>
			))}
		</div>
	);
};

export default Chart;
