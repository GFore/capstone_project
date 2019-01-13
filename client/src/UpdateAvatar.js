import React from 'react';

const UpdateAvatar = (props) => {
    return (
        <form
            className='update-form'
            method='POST'
            action='/api/user/userId'
            onSubmit = {(event) => {
                props.submit(event)
            }}
        >
            <label>Avatar:
            <input 
                name='avatar'
                className='input'
                type='text'
                onChange = {(event) => {
                    props.inputAvatar(event.target.value)
                }}
                value = {props.newAvatar}
            /></label>
            <br />
            <input 
                className='input-submit'
                type='submit'
                value='Change avatar'
            />
        </form>
    )
}

export default UpdateAvatar;