import ExpenseDateProps from "../types/ExpenseDateProps";
import Card from "./Card";

import "../styles/ExpenseDate.css";

const ExpenseDate = ({ expenseDate }: ExpenseDateProps) => {
	return (
		<Card className="expense-date">
			<div className="expense-date__month">
				{expenseDate.toLocaleString("en-US", { month: "long" })}
			</div>
			<div className="expense-date__day">
				{expenseDate.toLocaleString("en-US", { day: "2-digit" })}
			</div>
			<div className="expense-date__year">{expenseDate.getFullYear()}</div>
		</Card>
	);
};

export default ExpenseDate;
