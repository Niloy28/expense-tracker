import Card from "./Card";
import ExpenseDateProps from "../types/ExpenseDateProps";

import "../styles/ExpenseDate.css";

const ExpenseDate: React.FC<ExpenseDateProps> = (props) => {
	return (
		<Card className="expense-date">
			<div className="expense-date__month">
				{props.expenseDate.toLocaleString("en-US", { month: "long" })}
			</div>
			<div className="expense-date__day">
				{props.expenseDate.toLocaleString("en-US", { day: "2-digit" })}
			</div>
			<div className="expense-date__year">
				{props.expenseDate.getFullYear()}
			</div>
		</Card>
	);
};

export default ExpenseDate;
