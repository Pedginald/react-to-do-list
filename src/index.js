import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
	<div>
		<h1>Hello World!</h1>
		<p>This is a paragraph</p>
		<ul>
			<li>Apples</li>
			<li>Pears</li>
			<li>Bananas</li>
		</ul>
	</div>,
	document.getElementById("root")
)