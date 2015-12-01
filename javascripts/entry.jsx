'use strict';
// from https://medium.com/@Agro/developing-desktop-applications-with-electron-and-react-40d117d97564#.lqp9n9qfy
const React = require("react");
const ReactDOM = require("react-dom");

const LogLine = React.createClass({
	render() {
		return <div>{ this.props.text }</div>;
	}
});

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<LogLine text='Hello clog' />, document.querySelector('.main'));
});

