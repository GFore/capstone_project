import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    // console.log(props)
    const thisUser = (props.user)
    const logout = (props.handleLogout)
    const inSession = (props.inSession)
    // console.log(thisUser)
    return(
        <header className='navbar'>
            <Link to = '/myaccount' 
                className='links hover'
                // style = {{textDecoration: 'none'}}
            >MyAccount</Link> 

            <Link to = {{
                pathname: '/',
                state: {
                    thisUser,
                    logout,
                    inSession
                }
            }}
                className='links hover'
                onClick={(event) =>{logout(event)}}
                // style={{textDecoration: 'none'}}
            >Logout</Link> 

             {/* <Logout 
                 logout = {props.handleLogout}
                //  thisUser = {props.userInfo}
                //  inSession = {props.inSession}
            /> */}
        </header>
    );
}

export default Navbar;