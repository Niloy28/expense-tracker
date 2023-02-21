import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import Expense from "./types/ExpensesProps";

import "./App.css";

const DUMMY_EXPENSES = [
	{
		id: uuidv4(),
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: uuidv4(),
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: uuidv4(),
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: uuidv4(),
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState<Expense[]>(DUMMY_EXPENSES);

	const addExpenseHandler = (newExpense: Expense) => {
		setExpenses((prevExpenses) => {
			return [newExpense, ...prevExpenses];
		});
	};

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
};

export default App;
