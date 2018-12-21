import React, { Component } from 'react';
import firebase from 'firebase';
import {Nav} from './Pooling';

class Create extends Component {
    constructor(props){
        super(props);
        this.state={
     question:[{
      id:"",
      ques:"",
      op1:"",
      op2:"",
      op3:""}]
    }
this.submit=this.submit.bind(this);
firebase.database().ref('/').child("pollVote").on('child_added', (snap) => {
  var obj = snap.val();
  obj.id = snap.key;
  this.state.question.push(obj)
  this.setState({ id: this.state.question.id });
})
}

 submit(getval){
    this.setState({
      [getval.target.name]:getval.target.value  
    });
}


 getVal(getval){

    let wo={ ques:this.state.ques,
             op1:this.state.op1,
            op2:this.state.op2,
        op3:this.state.op3}
    firebase.database().ref('/').child("pollVote").push(wo)
    console.log(this.state.question)
    console.log(wo);
    // this.refs.name.value="";
    // this.refs.work.value="";
    // this.refs.data.value="";
  
  }






    
    render(){

        return(
            <div>
                <Nav/>
                <div className="container">
                    <textarea type="text" name="ques" placeholder='Enter question' className="form-control mb-2" onChange={this.submit}/>
                    <div className='container form-inline'>
                        <input type="text" name="op1" placeholder='Enter option 1' className="form-control mb-1 col-5" onChange={this.submit}/>
                        <input className="col-sm-5 col-6" type="text" name="op2" placeholder='Enter option 2' className="form-control mb-1 col-8" onChange={this.submit}/>
                        <input type="text" name="op3" placeholder='Enter option 3' className="form-control mb-1 col-8" onChange={this.submit}/>
                        <button onClick={this.getVal.bind(this)}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Create;