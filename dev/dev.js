import React, { Component } from 'react'
import { render } from 'react-dom'

import counter from './state'
import Button from './button'

setInterval(() => {
	counter.setState({
		progress: counter.state.progress + 1
	})
}, 1000)

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

render(
	<Button />,
	containerEl
)