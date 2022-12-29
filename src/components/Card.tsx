import React from "react";

import "../styles/Card.css";

const Card = ({ children, className }: CardProps) => {
	const classes = "card " + className;

	return <div className={classes}>{children}</div>;
};

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export default Card;
