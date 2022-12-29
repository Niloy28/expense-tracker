import ExpenseItem from "./ExpenseItem";
import { ExpensesProps } from "../types/ExpensesProps";
import Card from "./Card";

import "../styles/Expenses.css";

const Expenses = ({ expenses }: ExpensesProps) => {
	return (
		<Card className="expenses-wrapper">
			{expenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					id={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	);
};

export default Expenses;
