import React from 'react';
import { Link } from 'react-router-dom';


const RegisterForm = (props) => {
    return (
        <form className='register-form' onSubmit = {(event) => {props.submit(event)}}>
            <label>Name:</label>
                <input 
                    className='input'
                    type='text'
                    // placeholder='name'
                    name='name'
                    onChange = {(e) =>{
                        props.newName(e.target.value);
                    }}
                    value = {props.inputName}
                />
                <br />
            <label>UserName:</label>
                <input 
                    className='input'
                    type='text'
                    // placeholder='UserName'
                    onChange = {(e) => {
                        // console.log(e.target.value);
                        props.newUserName(e.target.value);
                    }}
                    value = {props.inputUserName}
                />
                <br />
            <label>Password:</label>
                <input 
                    className='input'
                    type='text'
                    // placeholder='Password'
                    onChange = {(e) => {
                        props.newPassword(e.target.value);
                    }}
                    value = {props.inputPassword}
                />
                <br />
            <label>Avatar:</label>
                <input 
                    className='input'
                    type='text'
                    // placeholder='Select an Avatar'
                    onChange = {(e) => {
                        props.newAvatar(e.target.value);
                    }}
                    value = {props.inputAvatar}
                />
                <br />
            <input 
                className='input-submit'
                type='submit'
                value='Register'
            />
            <br />
            <Link to = '/'>
                <button 
                    className='btn' 
                    type='submit' 
                    value='submit'
                    
                    >Log In
                </button>
            </Link>    
            <Link to = '/#'>
                <button 
                    className='btn' 
                    type='submit' 
                    value='submit'
                    
                    >Sign in as Guest
                </button>
            </Link>        
        </form>
    )
}

export default RegisterForm;