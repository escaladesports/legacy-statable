import React, { Component } from 'react'
import { Subscribe } from '../src'

import counter from './state'

export default class Counter extends Component {
	incrementProgress() {
		counter.setState({
			progress: counter.state.progress + 1
		})
	}
	render() {
		return (
			<Subscribe to={counter}>
				{state => (
					<button onClick={this.incrementProgress}>
						Progress: {state.progress}
					</button>
				)}
			</Subscribe>
		)
	}
}