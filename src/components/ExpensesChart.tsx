import { v4 as uuidv4 } from "uuid";

import Chart from "./Chart";
import Expense from "../types/ExpensesProps";
import ChartBarDataPoint from "../types/ChartBarDataPoint";

const ExpensesChart: React.FC<{ expenses: Expense[] }> = (props) => {
	const dataPoints: ChartBarDataPoint[] = [
		{
			id: uuidv4(),
			label: "Jan",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "Feb",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "Mar",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "Apr",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "May",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "Jun",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "Jul",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "Aug",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "Sep",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "Oct",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "Nov",
			value: 0,
		},
		{
			id: uuidv4(),
			label: "Dec",
			value: 0,
		},
	];

	for (const expense of props.expenses) {
		dataPoints[expense.date.getMonth()].value += expense.amount;
	}

	return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;
