import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../styles/ExpenseForm.css";
import Card from "./Card";
import Expense from "../types/ExpensesProps";

const ExpenseForm: React.FC<{ onFormSubmit: (expense: Expense) => void }> = (
	props
) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredTitle(event.currentTarget.value);
	};

	const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredAmount(event.currentTarget.value);
	};

	const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredDate(event.currentTarget.value);
	};

	const resetAllInputs = () => {
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	const formSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const expenseData = {
			id: uuidv4(),
			title: enteredTitle,
			amount: parseFloat(enteredAmount),
			date: new Date(enteredDate),
		} as Expense;

		props.onFormSubmit(expenseData);
		resetAllInputs();
	};

	return (
		<Card className="expense-form">
			<form id="expense-form" onSubmit={formSubmitHandler}>
				<div>
					<label htmlFor="expense-text">Title: </label>
					<input
						type="text"
						id="expense-text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div>
					<label htmlFor="expense-amount">Amount: </label>
					<input
						type="number"
						name=""
						id="expense-amount"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div>
					<label htmlFor="expense-date">Date: </label>
					<input
						type="date"
						id="expense-date"
						min="2022-01-01"
						max="2023-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</form>
			<div className="expense-form__submit">
				<button form="expense-form" type="submit">
					Add Expense
				</button>
			</div>
		</Card>
	);
};

export default ExpenseForm;
