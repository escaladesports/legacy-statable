import { State } from '../src'

export default new State({
	progress: 3
}, {
	increment(){
		this.setState({
			progress: this.state.progress + 3
		})
	}
})