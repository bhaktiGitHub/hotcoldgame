import React ,{Component} from 'react';
import './Gameform.css';
import Guess from './GuessList.js'
import GuessCounter from './GuessCounter.js'
import Feedback from './Feedback.js'
import Header from './Header.js'



class Gameform extends Component{
	constructor(props){
		super(props);
		this.state ={
			counter :0,
			feedback: 'Guess the Number!',
      		randomNumber : Math.round(Math.random()*100)+1
		}
	}

	restartGame() {
    this.setState({
      guesses: [],
      counter :0,
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }
	onClick(e)
	{
		//let GuessedNum = this.
		let counterval = this.state.counter + 1 ;
		this.setState({counter : counterval});
	}

	onSubmit(e){
		e.preventDefault();
		 const guess = this.guessInput.value.trim();
		 let randomguess = this.state.randomNumber;
         console.log(`guessed number is ${guess} and rangdom guess is ${randomguess}`);

         let x = Math.abs(randomguess - guess)
        if(randomguess == guess)
        {
          this.setState({feedback : "Hurray !!! you got it right"});
        }

        else if(x < 5 ) {
          this.setState({feedback : "Hot"});

        }
        else if(x > 5 && x < 10 ) {
          this.setState({feedback : "Warm "});
        }
        else if(x > 10 && x < 20 ) {
          this.setState({feedback : "Cold "});
        }
        else  {
          this.setState({feedback : "Ice Cold "});
        }
       
      this.guessInput.value = '';
    }
		
	    

	render(){

		return(
                
                <div className= "Gameform">
                  <Header
          onRestartGame={() => this.restartGame()}
          
        />
                    <Feedback guessfeedback={this.state.feedback}  ></Feedback>
                    
                	<form className="GameForm"
         			onSubmit={(e) => this.onSubmit(e)}>

	                	<input type="number" 
	                	className="EnterGuessInput"
	                	min="1" max="100"   
	                	placeholder="Enter Your Guess"
          				ref={input => this.guessInput = input} required
	                	/>
	                	<br/><br/>
	                	<button className="EnterGuessBtn"

	                	onClick = {(e)=>this.onClick(e)}> Guess</button>

                	</form>

                	<br/><br/>

                	
                	<GuessCounter guesscounter= {this.state.counter} />


                </div>

			);
	}
}

export default Gameform;