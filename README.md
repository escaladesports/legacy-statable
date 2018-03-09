# statable

A small but powerful state management library for React and vanilla JavaScript.

## Installation

With npm:

```bash
npm install --save statable
```

Or with Yarn:

```bash
yarn add statable
```

## Usage

```jsx
import React from 'react'
import { State, Subscribe } from 'statable'

const counter = new State({
	progress: 1
})

setTimeout(() => {
	counter.setState({
		progress: counter.state.progress + 1
	})
}, 1000)

export default class extends React.Component{
	render(){
		return(
			<Subscribe to={counter}>
				{state => (
					<div>{state.progress}</div>
				)}
			</Subscribe>
		)
	}
}
```
