import React ,{Component} from 'react';
import './Feedback.css';

class Feedback extends Component{
	constructor(props){
		super(props);
		this.state = {
			feedback : 'Guess the number '  
		}
	}


	render(){

		return(
                <div className="Feedback">
                      {this.props.guessfeedback}
                </div>
			);
	}
}

export default Feedback