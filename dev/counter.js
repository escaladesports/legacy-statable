import { State } from '../src'

export default new State({
	progress: 1
}, {
	increment(){
		this.setState({
			progress: this.state.progress + 1
		})
	}
})