import ExpenseDate from "./ExpenseDate";

import "../styles/ExpenseItem.css";
import Expense from "../types/ExpensesProps";
import Card from "./Card";

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
