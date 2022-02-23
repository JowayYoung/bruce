import React from "react";

import "./index.scss";

interface IProps {
	done: string
}

export default function Demo({ done }: IProps): JSX.Element {
	return <div className="demo-component">Demo Component {done}</div>;
}

Demo.defaultProps = {
	done: "Done"
};