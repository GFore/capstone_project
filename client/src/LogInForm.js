import React from 'react';
import { Link } from 'react-router-dom';


const LogInForm = (props) => {
    return (
        <form 
            className='form' 
            name='login-form'
            method="POST"
            action='/api/user/login/'
            onSubmit = {(event) => {
                props.submit(event)
            }}
        >
            <label>Username:
            <input 
                required
                name='username'
                className='input field'
                type='text'
                // placeholder='UserName'
                onChange = {(e) => {
                    props.newUserName(e.target.value);
                }}
                value = {props.inputUserName}
                id="resetUsername"
            /></label>

            <label>Password:
            <input 
                required
                name='password'
                className='input field'
                type='text'
                // placeholder='Password'
                onChange = {(e) => {
                    props.newPassword(e.target.value);
                }}
                value = {props.inputPassword}
                id="resetPassword"
            /></label>

            <input 
                className='input-submit'
                type='submit'
                value='Login'
            />

            <Link to = '/register'>
                <input 
                    className='btn btn-ghost' 
                    type='submit' 
                    value='Register'
                />
            </Link>
            <Link to = '/#'>   
                <input 
                    className='btn btn-ghost' 
                    type='submit' 
                    value='Sign in as guest'
                />
            </Link> 
        </form>
    )
}

export default LogInForm;