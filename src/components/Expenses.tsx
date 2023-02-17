import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Expense from "../types/ExpensesProps";

import "../styles/Expenses.css";

const Expenses: React.FC<{ expenses: Expense[] }> = (props) => {
	const [yearFilter, setYearFilter] = useState("");

	const yearFilterChangeHandler = (yearFilter: string) => {
		setYearFilter(yearFilter);
	};

	const generateExpenseItemListHandler = (expenses: Expense[]) => {
		return expenses.map((expense) => (
			<ExpenseItem
				id={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	};

	let displayedExpenses: JSX.Element | JSX.Element[];

	if (yearFilter.length === 0) {
		displayedExpenses = generateExpenseItemListHandler(props.expenses);
	} else {
		const filteredExpenses = props.expenses.filter(
			(expense) => expense.date.getFullYear() === parseInt(yearFilter)
		);

		displayedExpenses =
			filteredExpenses.length === 0 ? (
				<Card>
					<p className="no-expense">No expenses found.</p>
				</Card>
			) : (
				generateExpenseItemListHandler(filteredExpenses)
			);
	}

	return (
		<Card className="expenses-wrapper">
			<ExpenseFilter onYearFilterChange={yearFilterChangeHandler} />
			{displayedExpenses}
		</Card>
	);
};

export default Expenses;
