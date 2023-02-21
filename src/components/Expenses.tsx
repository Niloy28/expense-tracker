import { useState } from "react";

import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import Expense from "../types/ExpensesProps";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";

import "../styles/Expenses.css";

const Expenses: React.FC<{ expenses: Expense[] }> = (props) => {
	const [yearFilter, setYearFilter] = useState("");

	const yearFilterChangeHandler = (yearFilter: string) => {
		setYearFilter(yearFilter);
	};

	const filteredExpenses =
		yearFilter.length === 0
			? props.expenses
			: props.expenses.filter(
					(expense) => expense.date.getFullYear() === parseInt(yearFilter)
			  );

	return (
		<Card className="expenses-wrapper">
			<ExpenseFilter onYearFilterChange={yearFilterChangeHandler} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpenseList filteredExpenses={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
