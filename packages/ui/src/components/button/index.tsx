import React, { MouseEventHandler, ReactNode } from "react";
import Classnames from "classnames";

import "./index.scss";

const ButtonTypes = ["normal", "cancel"];
type ButtonType = typeof ButtonTypes[number];

const ButtonShapes = ["square", "circle", "round"];
type ButtonShape = typeof ButtonShapes[number];

interface IProps {
	children: string|ReactNode
	className?: string
	disabled?: boolean
	href?: string
	icon?: string
	onClick?: MouseEventHandler<HTMLElement>
	shape?: ButtonShape
	type?: ButtonType
}

export default function Button({ children, className, disabled, href, icon, onClick, shape, type }: IProps): JSX.Element {
	const classes = Classnames(
		"button-component", className,
		type ? `button-${type}` : "",
		shape ? `button-${shape}` : ""
	);
	const iconDom = icon ? <i className={`button-icon icon icon-${icon}`}></i> : null;
	return href
		? <a className={classes} href={href} target="_blank" rel="noreferrer" onClick={onClick}>{iconDom}{children}</a>
		: <button className={classes} disabled={disabled} onClick={onClick}>{iconDom}{children}</button>;
}

Button.defaultProps = {
	children: "按钮",
	className: "",
	disabled: false,
	href: "",
	icon: "",
	onClick: null,
	shape: "square",
	type: "normal"
};