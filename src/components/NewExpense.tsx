import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Expense from "../types/ExpensesProps";

import "../styles/NewExpense.css";
import AddExpense from "./AddExpense";

const NewExpense: React.FC<{ onAddExpense: (expense: Expense) => void }> = (
	props
) => {
	const [isAddingExpense, setIsAddingExpense] = useState(false);

	const addExpenseHandler = () => {
		setIsAddingExpense(true);
	};

	const cancelAddExpenseHandler = () => {
		setIsAddingExpense(false);
	};

	return (
		<div className="new-expense">
			{isAddingExpense && (
				<ExpenseForm
					onFormSubmit={props.onAddExpense}
					onCancelAddExpense={cancelAddExpenseHandler}
				/>
			)}
			{!isAddingExpense && <AddExpense onAddExpense={addExpenseHandler} />}
		</div>
	);
};

export default NewExpense;
