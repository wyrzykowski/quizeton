import React,{Component} from 'react';

class QuestionBlock extends Component {
state={
    color1:{},
    color2:{},
    color3:{},
    color4:{}
};

    handleAnswer(answer,index) {

        const correctStyle = {backgroundColor: "green"};
        const wrongStyle = {backgroundColor: "red"};

        let oldState = this.state;
        if (answer === this.props.answCorrect) {
            switch (index) {
                case 1 :
                    oldState.color1 = correctStyle;
                    break;
                case 2 :
                    oldState.color2 = correctStyle;
                    break;
                case 3 :
                    oldState.color3 = correctStyle;
                    break;
                case 4 :
                    oldState.color4 = correctStyle;
                    break;
                default :
                    oldState.color1 = correctStyle;
            }


            this.setState({oldState})
        } else {
            //wrong answer:
            switch (index) {
                case 1 :
                    oldState.color1 = wrongStyle;
                    break;
                case 2 :
                    oldState.color2 = wrongStyle;
                    break;
                case 3 :
                    oldState.color3 = wrongStyle;
                    break;
                case 4 :
                    oldState.color4 = wrongStyle;
                    break;
                default :
                    oldState.color1 = wrongStyle;
            }
            this.setState({oldState})
        }
    }
    render() {
        return (
            <div className="question-block">
                <h2>{this.props.index+1}. {this.props.question}</h2>
                <div style={this.state.color1} className="answer" onClick={()=>{this.handleAnswer(this.props.answ1,1)}}>{this.props.answ1}  </div>
                <div style={this.state.color2}className="answer" onClick={()=>{this.handleAnswer(this.props.answ2,2)}}>{this.props.answ2}</div>
                <div style={this.state.color3} className="answer" onClick={()=>{this.handleAnswer(this.props.answ3,3)}}>{this.props.answ3}</div>
                <div style={this.state.color4}className="answer" onClick={()=>{this.handleAnswer(this.props.answ4,4)}}>{this.props.answ4}</div>
            </div>
        );
    }
}

export default QuestionBlock;