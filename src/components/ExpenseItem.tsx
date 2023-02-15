import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import Expense from "../types/ExpensesProps";

import "../styles/ExpenseItem.css";

const ExpenseItem: React.FC<Expense> = (props) => {
	return (
		<Card className="expense-item">
			<ExpenseDate expenseDate={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div>{}</div>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
