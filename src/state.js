class State{
	constructor(state, methods){
		this.state = state
		if(methods) {
			for(let i in methods){
				this[i] = methods[i].bind(this)
			}
		}
		this.subscriptions = []
	}
	setState(state){
		Object.assign(this.state, state)
		this.subscriptions.forEach(subscription => {
			subscription(this.state)
		})
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