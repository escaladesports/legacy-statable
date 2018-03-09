import React, { Component } from 'react'
import { render } from 'react-dom'

import counter from './counter'
import counter2 from './counter-2'
import Button from './button'

setInterval(() => {
	counter.increment()
}, 1000)
setInterval(() => {
	counter2.increment()
}, 1000)

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

render(
	<Button />,
	containerEl
)