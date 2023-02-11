import ExpenseForm from "./ExpenseForm";
import Expense from "../types/ExpensesProps";

import "../styles/NewExpense.css";

const NewExpense: React.FC<{ onAddExpense: (expense: Expense) => void }> = (
	props
) => {
	return (
		<div className="new-expense">
			<ExpenseForm onFormSubmit={props.onAddExpense} />
		</div>
	);
};

export default NewExpense;
