import React, { Component } from 'react';
import firebase from 'firebase';
import {Nav} from './Pooling';

class Vote extends Component {

    constructor(props){
        super(props);


      console.log(this.props);

    }

    render(){
        return(
            <div>
                <Nav/>
                <div className="container">
                    <div className="btn container col-sm-12 alert-success mb-2 text-left">
                        Question
                    </div>
                    <button className="btn btn-outline-success col-sm-6 mb-2 mr-3" >a</button><span className=" btn alert-danger">10%</span>
                    <button  className="btn btn-outline-success col-sm-6 mb-2 mr-3" >b</button><span className=" btn alert-danger">10%</span>
                    <button  className="btn btn-outline-success col-sm-6 mb-2 mr-3" >c</button><span className=" btn alert-danger">10%</span>
                    
                    
                    </div>
                </div>
        )
    }
}

export default Vote;

