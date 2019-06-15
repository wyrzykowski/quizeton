import React,{Component} from 'react';
import AddQuestion from "./add-question";
import http from "../services/http";
import QuestionBlock from "./question-block";

class Quiz extends Component {

    state={
        questions:[]
    };
componentDidMount() {
    this.getQuestion();
}

    async getQuestion(){
        const {data} = await http.get('/questions');

        this.setState({questions:data.questions});
        console.log(this.state);
    }

    renderQuestion(el,index){
    const min =0;
    const max = this.state.questions.length;
   let answ1 = this.state.questions[Math.floor(Math.random() * (max - min)) + min].answer;
   let answ2 = this.state.questions[Math.floor(Math.random() * (max - min)) + min].answer;
   let answ3 = this.state.questions[Math.floor(Math.random() * (max - min)) + min].answer;
   let answ4 = this.state.questions[Math.floor(Math.random() * (max - min)) + min].answer;

       let correctIndex =  Math.floor(Math.random() * (4 - 1)) + 1;
        switch(correctIndex){
            case 1 : answ1 = el.answer;
            break;
            case 2 : answ2 = el.answer;
                break;
            case 3 : answ3 = el.answer;
                break;
            case 4 : answ4 = el.answer;
                break;
            default : answ1 = el.answer;
        }




        return <QuestionBlock index={index} key={index} question={el.question} answCorrect={el.answer} answ1={answ1} answ2={answ2} answ3={answ3} answ4={answ4} />
    }

    reRender=()=>{
        this.getQuestion();
    };

    render() {

        return (
            <div>
                <h1>Quizeton</h1>
                <AddQuestion reRender={this.reRender}/>
              {
                  this.state.questions &&  this.state.questions.map((el,index)=>{
                        return   this.renderQuestion(el,index);
                    })
                }
            </div>
        );
    }
}

export default Quiz;