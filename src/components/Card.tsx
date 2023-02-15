import CardProps from "../types/CardProps";

import "../styles/Card.css";

const Card: React.FC<CardProps> = (props) => {
	const classes = "card " + props.className;

	return <div className={classes}>{props.children}</div>;
};

export default Card;
