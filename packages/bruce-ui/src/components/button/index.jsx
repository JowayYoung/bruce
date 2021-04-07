import React from "react";
import Classnames from "classnames";
import PropTypes from "prop-types";

import "./index.scss";

function Button({ className, disabled, href, onClick, size, text }) {
	const classes = Classnames("bruce-button-component", className, size);
	return href
		? <a className={classes} href={href}>{text}</a>
		: <button className={classes} disabled={disabled} onClick={onClick}>{text}</button>;
}

Button.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	href: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOf(["small", "middle", "large"]),
	text: PropTypes.string
};
Button.defaultProps = {
	className: "",
	disabled: false,
	href: "",
	onClick: null,
	size: "middle",
	text: "按钮"
};

export default Button;