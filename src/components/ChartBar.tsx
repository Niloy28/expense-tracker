import ChartBarProps from "../types/ChartBarProps";

import "../styles/ChartBar.css";

const ChartBar: React.FC<ChartBarProps> = (props) => {
	let barFillHeight = "0%";

	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				{/* TODO: Fix transition animation */}
				<div
					className="chart-bar__fill"
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
};

export default ChartBar;
