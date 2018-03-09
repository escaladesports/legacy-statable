class State{
	constructor(state){
		this.state = state
		this.subscriptions = []
	}
	setState(state){
		Object.assign(this.state, state)
		for (let i = this.subscriptions.length; i--;) {
			this.subscriptions[i](this.state)
		}
	}
	subscribe(fn){
		this.subscriptions.push(fn)
	}
	unsubscribe(fn){
		let index = this.subscriptions.indexOf(fn)
		if(index > -1){
			this.subscriptions.splice(index, 1)
		}
	}
}

export default State