import React, { Component } from 'react'
import { Subscribe } from '../src'

import counter from './state'

export default class Counter extends Component {
	render() {
		return (
			<Subscribe to={counter}>
				{state => (
					<button onClick={counter.increment}>
						Progress: {state.progress}
					</button>
				)}
			</Subscribe>
		)
	}
}