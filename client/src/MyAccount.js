import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ResultHistoryTable from './ResultHistoryTable';

class MyAccount extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            theUser: [],
            isLoggedIn: Boolean,
            userHistory: [],
            subjects: [],
            decks: []

        }
    }

    componentDidMount() {
        fetch('/api/user/isValid')
        .then(r => r.json())
        .then(data => {
            //console.log(data.user)
            if (data.isLoggedIn === false) {
                this.props.history.push('/');
            } else {
                fetch(`/api/resultset/history/${data.user.id}`)
                .then(r => r.json())
                .then(results => {
                    fetch(`/api/question/subjects/${data.user.id}`)
                    .then(r => r.json())
                    .then(subs => {


                    this.setState({
                        theUser: data.user,
                        isLoggedIn: data.isLoggedIn,
                        userHistory: results,
                        subjects: subs
                    })
                    })
                })
            }
        })
    }
    

    render() {
        const theUser = (this.state.theUser)
        const thisUser = theUser.username

        return (
            <div>
                <h2>MyAccount</h2>
                <Link to = {{pathname: '/settings', state: {thisUser: theUser}}} className='links'>
                   Settings
                </Link>

                <h3>{`${thisUser}'s Flash Card Decks`}</h3>
                <ResultHistoryTable results={this.state.userHistory}/>

                <h3>{`${thisUser}'s Results `}</h3>
                <ResultHistoryTable results={this.state.userHistory}/>
                   
            </div>
        )
    }
}

export default MyAccount;