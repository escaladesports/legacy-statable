import { Component } from 'react'

class Subscribe extends Component{
	constructor(props){
		super(props)
		this.state = {}
		this.onChange = this.onChange.bind(this)
	}
	componentWillMount(){
		this.props.to.subscribe(this.onChange)
	}
	componentWillUnmount(){
		this.props.to.unsubscribe(this.onChange)
	}
	onChange(){
		this.setState({ changed: true })
	}
	render(){
		return this.props.children(this.props.to.state)
	}
}

export default Subscribe