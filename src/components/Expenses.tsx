import ExpenseItem from "./ExpenseItem";
import Expense from "../types/ExpensesProps";
import Card from "./Card";

import "../styles/Expenses.css";

const Expenses: React.FC<{ expenses: Expense[] }> = (props) => {
	return (
		<Card className="expenses-wrapper">
			{props.expenses.map((expense) => (
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
