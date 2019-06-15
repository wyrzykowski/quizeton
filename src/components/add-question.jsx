import React,{Component} from 'react';
import http from './../services/http';

class AddQuestion extends Component {

    state={
        question:'',
        answer:''
    };



    async addQuestion(newQuestion){
        const result = await http.post('/questions',newQuestion);
        this.props.reRender();
        const newState={
            question:'',
            answer:''
        };
        this.setState(newState);

        return result;
    }



 handleClick=(event)=>{
     event.preventDefault();
     let newQuestion={
         question: this.state.question,
         answer:this.state.answer
     };
     console.log(newQuestion)

     this.addQuestion({newQuestion});

 };

 handleQuestionChange=(value)=>{
     let state = this.state;
     state.question= value.target.value;
     this.setState({state});
 };

 handleAnswerChange=(value)=>{
     let state = this.state;
     state.answer = value.target.value;
     this.setState({state});
 };

    render() {
        return (
            <div style={{backgroundColor:"#565762",padding:"30px"}}>
                <form style={{textAlign:"center"}}>
                    <h3>Question</h3>
                    <input style={{width:"90vw"}} type="text" value={this.state.question} onChange={this.handleQuestionChange}></input>
                    <h3>Answer</h3>
                    <input style={{width:"90vw"}}  type="text" value={this.state.answer} onChange={this.handleAnswerChange}></input>
                <br/>
                    <br/>
                    <button onClick={this.handleClick} style={{width:"90vw"}} className={"btn btn-primary"} >Add</button>
                </form>
                
            </div>
        );
    }
}

export default AddQuestion;