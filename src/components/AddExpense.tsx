import Card from "./Card";

import "../styles/AddExpense.css";

const AddExpense: React.FC<{ onAddExpense: () => void }> = (props) => {
	return (
		<Card className="add-expense">
			<div>
				<button onClick={props.onAddExpense}>Add Expense</button>
			</div>
		</Card>
	);
};

export default AddExpense;
