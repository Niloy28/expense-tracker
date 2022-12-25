export interface ExpensesProps {
	expenses: Expense[];
}

export interface Expense {
	id: string;
	title: string;
	amount: number;
	date: Date;
}
