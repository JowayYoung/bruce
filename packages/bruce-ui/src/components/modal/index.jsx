import React, { cloneElement, useState } from "react";
import { createPortal, render, unmountComponentAtNode } from "react-dom";
import Classnames from "classnames";
import PropTypes from "prop-types";
import { AsyncTo, WaitFor } from "@bruce/util";

import "./index.scss";
import Button from "../button/index.jsx";

function Modal({ children, className, handler, onClose, title }) {
	const classes = Classnames("bruce-modal-component", className);
	const btnDom = handler?.length ? handler : null;
	return (
		<div className={classes}>
			<div className="bruce-modal-wrapper" onClick={e => e.stopPropagation()}>
				<h3 className="bruce-modal-title">
					{title}
					<i className="bruce-modal-close-btn" onClick={onClose}></i>
				</h3>
				<div className="bruce-modal-body">
					<div className="bruce-modal-custom">{children}</div>
					<div className="bruce-modal-btns">{btnDom}</div>
				</div>
			</div>
		</div>
	);
}

Modal.propTypes = {
	children: PropTypes.element,
	className: PropTypes.string,
	handler: PropTypes.arrayOf(PropTypes.element),
	onClose: PropTypes.func,
	title: PropTypes.string
};
Modal.defaultProps = {
	children: null,
	className: "",
	handler: [],
	onClose: null,
	title: "模态框"
};

function useAlert() {
	const [visible, setVisible] = useState(false);
	const [active, setActive] = useState(false);
	const show = () => {
		setActive(true);
		setVisible(true);
	};
	const hide = async() => {
		setActive(false);
		await WaitFor(300);
		setVisible(false);
	};
	function render({ children, className, onConfirm, title }) {
		const classes = Classnames(className, { hide: !active, show: active });
		const confirm = () => {
			hide();
			onConfirm && onConfirm();
		};
		const btns = [<Button key="confirm" text="确定" onClick={confirm} />];
		return visible && createPortal(
			<Modal className={classes} title={title} handler={btns} onClose={hide}>{children}</Modal>,
			document.body
		);
	};
	render.propTypes = {
		children: PropTypes.element,
		className: PropTypes.string,
		onConfirm: PropTypes.func,
		title: PropTypes.string
	};
	render.defaultProps = {
		children: null,
		className: "",
		onConfirm: null,
		title: "警告模态框"
	};
	return [render, show, hide];
}

function useDialog() {
	const [visible, setVisible] = useState(false);
	const [active, setActive] = useState(false);
	const show = () => {
		setActive(true);
		setVisible(true);
	};
	const hide = async() => {
		setActive(false);
		await WaitFor(300);
		setVisible(false);
	};
	function render({ children, className, onCancel, onConfirm, title }) {
		const classes = Classnames(className, { hide: !active, show: active });
		const cancel = () => {
			hide();
			onCancel && onCancel();
		};
		const confirm = () => {
			hide();
			onConfirm && onConfirm();
		};
		const btns = [
			<Button key="cancel" className="muted" text="取消" onClick={cancel} />,
			<Button key="confirm" text="确定" onClick={confirm} />
		];
		return visible && createPortal(
			<Modal className={classes} title={title} handler={btns} onClose={hide}>{children}</Modal>,
			document.body
		);
	};
	render.propTypes = {
		children: PropTypes.element,
		className: PropTypes.string,
		onCancel: PropTypes.func,
		onConfirm: PropTypes.func,
		title: PropTypes.string
	};
	render.defaultProps = {
		children: null,
		className: "",
		onCancel: null,
		onConfirm: null,
		title: "对话模态框"
	};
	return [render, show, hide];
}

function useModal() {
	const [visible, setVisible] = useState(false);
	const [active, setActive] = useState(false);
	const show = () => {
		setActive(true);
		setVisible(true);
	};
	const hide = async() => {
		setActive(false);
		await WaitFor(300);
		setVisible(false);
	};
	function render({ children, className, handler, title }) {
		const classes = Classnames(className, { hide: !active, show: active });
		return visible && createPortal(
			<Modal className={classes} title={title} handler={handler} onClose={hide}>{children}</Modal>,
			document.body
		);
	};
	render.propTypes = {
		children: PropTypes.element,
		className: PropTypes.string,
		handler: PropTypes.arrayOf(PropTypes.element),
		title: PropTypes.string
	};
	render.defaultProps = {
		children: null,
		className: "",
		handler: [],
		title: "模态框"
	};
	return [render, show, hide];
}

async function actionAlert({ onConfirm = null, text = "警告", title = "警告模态框" }) {
	const hide = async() => {
		render(cloneElement(modal, { className: "hide" }), div);
		await WaitFor(300);
		unmountComponentAtNode(div);
		div.remove();
	};
	const confirm = () => {
		hide();
		onConfirm && onConfirm();
	};
	const btns = [<Button key="confirm" text="确定" onClick={confirm} />];
	const modal = (
		<Modal className="show" title={title} handler={btns} onClose={hide}>
			<p>{text}</p>
		</Modal>
	);
	const div = document.createElement("div");
	document.body.append(div);
	render(modal, div);
}

async function actionDialog({ onCancel = null, onConfirm = null, text = "对话", title = "对话模态框" }) {
	const hide = async() => {
		render(cloneElement(modal, { className: "hide" }), div);
		await WaitFor(300);
		unmountComponentAtNode(div);
		div.remove();
	};
	const cancel = () => {
		hide();
		onCancel && onCancel();
	};
	const confirm = () => {
		hide();
		onConfirm && onConfirm();
	};
	const btns = [
		<Button key="cancel" className="muted" text="取消" onClick={cancel} />,
		<Button key="confirm" text="确定" onClick={confirm} />
	];
	const modal = (
		<Modal className="show" title={title} handler={btns} onClose={hide}>
			<p>{text}</p>
		</Modal>
	);
	const div = document.createElement("div");
	document.body.append(div);
	render(modal, div);
}

async function actionToast({ text = "" }) {
	const promise = new Promise(async(resolve) => {
		function Toast({ className }) {
			const classes = Classnames("bruce-modal-component", className);
			return (
				<div className={classes}>
					<div className="bruce-modal-toast">{text}</div>
				</div>
			);
		};
		Toast.propTypes = { className: PropTypes.string };
		Toast.defaultProps = { className: "" };
		const div = document.createElement("div");
		document.body.append(div);
		render(<Toast className="show" />, div);
		await WaitFor(2000);
		render(cloneElement(<Toast />, { className: "hide" }), div);
		await WaitFor(300);
		unmountComponentAtNode(div);
		div.remove();
		resolve(true);
	});
	const [err, res] = await AsyncTo(promise);
	return !err && res;
}

export {
	actionAlert,
	actionDialog,
	actionToast,
	useAlert,
	useDialog,
	useModal
};

export default Modal;