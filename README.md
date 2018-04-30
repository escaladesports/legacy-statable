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

## Methods

If you'd rather keep your methods in the state object, you can do that through a second argument in the constructor:

```javascript
const counter = new State({
   progress: 1
}, {
   increment(){
      this.setState({
         progress: this.state.progress + 1
      })
   }
})

setTimeout(() => {
   counter.increment()
}, 1000)
```

## Subscribe to multiple states

Pass in an array of states to subscribe to multiple states at once. The states will be returned as consecutive arguments in the callback.

```jsx
<Subscribe to={[counter, another]}>
   {(counterState, anotherState) => (
      <div>{counterState.progress}</div>
      <div>{anotherState.text}</div>
   )}
</Subscribe>
```

## Subscribe/unsubscribe outside of React

```javascript
const counter = new State({
   progress: 1
})

function onChange(state){
	console.log('Progressed changed to: ' + state.progress)
}

counter.subscribe(onChange)
```

To unsubscribe, just pass the same function to the unsubscribe method:

```javascript
counter.unsubscribe(onChange)
```

## Why?

In short, all the state management libraries we used in the past were great but just had a few things that made them a no go for us. On one end of the spectrum, Redux was too large and we weren't using most of its features. On the other end, Unstated (which inspired Statable) couldn't easily be used outside of React. We sometimes needed to allow third parties to inject our React app, but also control the state in whatever environment they're building in.

Of course, Statable is not meant to be a drop in replacement for any one of those libraries. They are all great in certain use cases. Statable is just meant to be a light weight, no configuration alternative.