import React, { Component } from 'react'
import { render } from 'react-dom'

import { State, Subscribe } from '../src'

const counterState = new State({
	progress: 1
})

class Counter extends Component{
	incrementProgress() {
		counterState.setState({
			progress: counterState.state.progress + 1
		})
	}
	render() {
		return (
			<Subscribe to={counterState}>
				{state => (
					<button onClick={this.incrementProgress}>
						Progress: {state.progress}
					</button>
				)}
			</Subscribe>
		)
	}
}

setInterval(() => {
	counterState.setState({
		progress: counterState.state.progress + 1
	})
}, 1000)

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

render(
	<Counter />,
	containerEl
)