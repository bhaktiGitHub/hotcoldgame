import React ,{Component} from 'react'

class GuessCounter extends Component{
	constructor(props){
		super(props);

	}

	render(){

		return(

			<div>Guess # {this.props.guesscounter}</div>
			);
	}
}

export default GuessCounter;