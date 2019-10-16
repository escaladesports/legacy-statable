class State{
	constructor(state, methods, options = {}){
		if(methods) {
			for(let i in methods){
				this[i] = methods[i].bind(this)
			}
		}
		this.subscriptions = []
		this.options = options
		if(options.localStorage && global.localStorage){
			let data = localStorage.getItem(options.localStorage)
			try{
				let parsedData = JSON.parse(data)
				this.state = Object.assign({}, state, parsedData)
			}
			catch(err){
				console.error(err)
			}
		}
		else{
			this.state = state
		}
	}
	setState(state){
		Object.assign(this.state, state)
		this.subscriptions.forEach(subscription => {
			subscription(this.state)
		})
		if(this.options.localStorage && global.localStorage){
			localStorage.setItem(this.options.localStorage, JSON.stringify(this.state))
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