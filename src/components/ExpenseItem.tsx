import ExpenseDate from "./ExpenseDate";

import "../styles/ExpenseItem.css";
import { Expense } from "../types/ExpensesProps";

function ExpenseItem({ title, amount, date }: Expense) {
	return (
		<div className="expense-item">
			<ExpenseDate expenseDate={date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
