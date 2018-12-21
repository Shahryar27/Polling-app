import React, { Component } from 'react';
import firebase from 'firebase';
// import { browserHistory } from 'react-router'
import {
    Router,
    Route,
    Link
} from 'react-router-dom';

export class Nav extends Component {
    creat() {
        //  this.props.history.push('/Create');
        <div>
            <Link to='/Create'> Home</Link>
        </div>
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <a className="navbar-brand" href="#">Polling System</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to='/all'>All <span className="sr-only">(current)</span></Link>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {/*<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}

                            <Link className='nav-link' to='/create'><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Create Poll</button></Link>

                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}


class Pooling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: [],
            idd: [],
            objj: []
        }

        firebase.database().ref('/').child("pollVote").on('child_added', (snap) => {
            var obj = snap.val();
            obj.id = snap.key;

            this.state.question.push(obj.ques);
            this.state.idd.push(obj.id);
            this.state.objj.push(obj);
            this.setState({
                question: this.state.question,
                idd: this.state.idd,
                objj: this.state.objj
            });

            console.log(this.state.objj);
        })


    }

    open(ind, ev) {
        console.log('emailsent', this.props);
        this.props.history.push('/')
        console.log(this.state.objj[ind])

        console.log(ind);



        // return this.state.idd[ind]
    }

    render() {

        let le = this.state.idd;


        return (
            <div>
                <Nav />

                <center>
                

                    {this.state.question.map((val, index) => {

                        return <div>
                            <Link className="nav-link" to={'/Vote/:' + index}><button className="alert alert-primary container text-left" onClick={this.open.bind(this, index)} key={index}>{val}</button> </Link>


                        </div>

                    })}
                </center>
            </div>
        )
    }
}

export default Pooling; 
