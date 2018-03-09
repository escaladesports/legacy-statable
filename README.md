# Statable

A small and lightning fast state management library for React and vanilla JavaScript.

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

## Why?

In short, all the state management libraries we used in the past were great but just had a few things that made them a no go for us. On one end of the spectrum, Redux was too large and we weren't using most of its features. On the other end, Unstated (which inspired Statable) couldn't easily be used outside of React. We sometimes needed to allow third parties to inject our React app, but also control the state in whatever environment they're building in.

Of course, Statable is not meant to be a drop in replacement for any one of those libraries. They are all great in certain use cases. Statable is just meant to be a light weight, no configuration alternative.