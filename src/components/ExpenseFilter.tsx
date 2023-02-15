import "../styles/ExpenseFilter.css";

const ExpenseFilter: React.FC = () => {
	return (
		<div className="expense-filter">
			<div>Filter By Year</div>
			<div>
				<select className="filter-select" name="years" id="year-select">
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
					<option value="2024">2024</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
