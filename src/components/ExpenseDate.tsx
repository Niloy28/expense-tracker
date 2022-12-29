import "../styles/ExpenseDate.css";
import Card from "./Card";

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

type ExpenseDateProps = {
	expenseDate: Date;
};

export default ExpenseDate;
