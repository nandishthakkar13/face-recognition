import React from 'react';
import './signout.css';

const SignOut = ({onPageChange, isSignedIn}) =>{

if (isSignedIn) {
    return(
        <nav className='nav'>
        <button className='button' onClick={() => onPageChange('signout')}>SignOut</button>
        </nav>
    );
}else{
    return(
        <nav className='nav'>
        <button className='button' onClick={() => onPageChange('signin')}>SignIn</button>
        <button className='button' onClick={() => onPageChange('register')}>Register</button>
        </nav>
    );

}
    
}

export default SignOut;