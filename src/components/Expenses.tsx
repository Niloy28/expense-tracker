import ExpenseItem from "./ExpenseItem";
import { ExpensesProps } from "../types/ExpensesProps";

import "../styles/Expenses.css";

function Expenses({ expenses }: ExpensesProps) {
	return (
		<div className="expenses-wrapper">
			{expenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					id={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</div>
	);
}

export default Expenses;
