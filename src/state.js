class State{
	constructor(state){
		this.state = state
		this.subscriptions = []
	}
	setState(state){
		for(let i in state){
			this.state[i] = state[i]
		}
		this.notify()
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
	notify(){
		for(let i = this.subscriptions.length; i--;){
			this.subscriptions[i](this.state)
		}
	}
}

export default State