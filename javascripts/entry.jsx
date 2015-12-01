'use strict';
// from https://medium.com/@Agro/developing-desktop-applications-with-electron-and-react-40d117d97564#.lqp9n9qfy
const React = require('react');
const ReactDOM = require('react-dom');

const LogLine = React.createClass({
	render() {
		return <li>{ this.props.text }</li>;
	}
});

const LogFile = React.createClass({
	getInitialState() {
		return { lines: [] };
	},
	render() {
		const logLines = this.state.lines.map((line, idx) => <LogLine text={ line } key={ idx } />);
		return <ul>{ logLines }</ul>;
	},
	append(line) {
		this.state.lines.push(line);
		this.setState(this.state);
	}
})

document.addEventListener('DOMContentLoaded', () => {
	const logFile = ReactDOM.render(<LogFile />, document.querySelector('.main'));
	logFile.append('Hello');
	logFile.append('Clog');
});

