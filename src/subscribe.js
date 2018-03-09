import { Component } from 'react'

class Subscribe extends Component{
	constructor(props){
		super(props)
		this.state = {}
		if(Array.isArray(this.props.to)){
			this.multi = true
		}
		this.onChange = this.onChange.bind(this)
	}
	componentWillMount(){
		if (!this.multi) {
			return this.props.to.subscribe(this.onChange)
		}
		this.props.to.forEach(to => {
			to.subscribe(this.onChange)
		})
	}
	componentWillUnmount() {
		if (!this.multi) {
			return this.props.to.unsubscribe(this.onChange)
		}
		this.props.to.forEach(to => {
			to.unsubscribe(this.onChange)
		})
	}
	onChange(){
		this.setState({ changed: true })
	}
	render() {
		if (!this.multi) {
			return this.props.children(this.props.to.state)
		}
		return this.props.children(...this.props.to.map(to => to.state))
	}
}

export default Subscribe