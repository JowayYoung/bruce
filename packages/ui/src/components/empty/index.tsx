import React, { ReactNode } from "react";
import Classnames from "classnames";

import "./index.scss";
import ImgEmpty from "../../assets/img/empty.svg";

interface IProps {
	children: string|ReactNode
	className?: string
	height: number
	icon: ReactNode
}

export default function Empty({ children, className, height, icon }: IProps): JSX.Element {
	const classes = Classnames("empty-component", className);
	return (
		<div className={classes} style={{ minHeight: `${height < 200 ? 200 : height}px` }}>
			{icon ?? <img className="empty-icon icon-empty" src={ImgEmpty} />}
			{!!children && <div className="empty-text">{children}</div>}
		</div>
	);
}

Empty.defaultProps = {
	children: "暂无数据",
	className: "",
	height: 200,
	icon: null
};