import React from "react";
import { render } from "react-dom";

function App(): JSX.Element {
	const name = "JowayYoung";
	return <div id="app">Hello, {name}</div>;
}

render(<App />, document.body);