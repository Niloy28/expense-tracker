import CardProps from "../types/CardProps";

import "../styles/Card.css";

const Card = ({ children, className }: CardProps) => {
	const classes = "card " + className;

	return <div className={classes}>{children}</div>;
};

export default Card;
