import Card from "./Card";
import Expense from "../types/ExpensesProps";
import ExpenseItem from "./ExpenseItem";

import "../styles/ExpenseList.css";

const ExpenseList: React.FC<{ filteredExpenses: Expense[] }> = (props) => {
	if (props.filteredExpenses.length === 0) {
		return (
			<Card>
				<p className="no-expense">No expenses found.</p>
			</Card>
		);
	}

	return (
		<div>
			<ul className="expense-list">
				{props.filteredExpenses.map((filteredExpense) => (
					<li key={filteredExpense.id}>
						<ExpenseItem
							key={filteredExpense.id}
							id={filteredExpense.id}
							title={filteredExpense.title}
							amount={filteredExpense.amount}
							date={filteredExpense.date}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExpenseList;
