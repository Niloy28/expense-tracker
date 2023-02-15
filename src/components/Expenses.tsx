import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Expense from "../types/ExpensesProps";

import "../styles/Expenses.css";

const Expenses: React.FC<{ expenses: Expense[] }> = (props) => {
	return (
		<Card className="expenses-wrapper">
			<ExpenseFilter />
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
