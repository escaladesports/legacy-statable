import { State } from '../src'

export default new State({
	progress: 1
}, {
	increment: function(){
		this.setState({
			progress: this.state.progress + 1
		})
	}
})