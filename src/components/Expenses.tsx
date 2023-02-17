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

	return (
		<Card className="expenses-wrapper">
			<ExpenseFilter onYearFilterChange={yearFilterChangeHandler} />
			{yearFilter.length === 0
				? props.expenses.map((expense) => (
						<ExpenseItem
							id={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
				  ))
				: props.expenses
						.filter(
							(expense) => expense.date.getFullYear() === parseInt(yearFilter)
						)
						.map((expense) => (
							<ExpenseItem
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
