'use strict';
// from https://medium.com/@Agro/developing-desktop-applications-with-electron-and-react-40d117d97564#.lqp9n9qfy
const React = require("react");
const ReactDOM = require("react-dom");

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<div>Hello Electron!</div>, document.querySelector('.main'));
});

