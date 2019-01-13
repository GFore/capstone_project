import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import Axios from 'axios';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theUser: [],
            isLoggedIn: Boolean,
            name: '',
            username: '',
            password: '',
            avatar: ''
        }
    }

    componentDidMount() {
        fetch('/api/user/isValid')
        .then(r => r.json())
        .then(data =>{
            console.log(`LOGIN-STATUS:`,data.isLoggedIn)
            if(data.isLoggedIn === false){
                this.props.history.push('/');
            }else{
                this.setState({
                    theUser: data.user,
                    isLoggedIn: data.isLoggedIn
                })
                this.props.history.push('/timer');
            }
        })
    }


    render() {
        return (
            <div>
                <h2>Register</h2>
                <RegisterForm 
                    inputName = {this.state.name}
                    newName = {this._name}
                    inputUserName = {this.state.username}
                    newUserName = {this._userName}
                    inputPassword = {this.state.password}
                    newPassword = {this._password}
                    inputAvatar = {this.state.avatar}
                    newAvatar = {this._avatar}
                    submit = {this._onSubmit}
                />
            </div>
        )
    }

    _name = (input) => {
        this.setState ({
            name: input
        });
    }

    _userName = (input) => {
        this.setState ({
            username: input
        }); 
    }

    _password = (input) => {
        this.setState ({
            password: input
        });
    }

    _avatar = (input) => {
        this.setState ({
            avatar: input
        });
    }
    
    _onSubmit = (event) => {
        event.preventDefault();
        // console.log('Registering..')

        Axios
        .post('/api/user/register', this.state)
        .then((response) =>{
            // console.log(response)

            if (response.data === "Username exist") {
                alert('Username already exist. Please choose another username');
                document.getElementById('resetRegisterName').value="";
                document.getElementById('resetRegisterUsername').value="";
                document.getElementById('resetRegisterPassword').value="";
                document.getElementById('resetRegisterAvatar').value="";
            }else{
                this.props.history.push('/timer');
            }
        })
    };





}

export default Register;


