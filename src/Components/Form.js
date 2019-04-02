import React, { Component } from 'react';
import { auth } from 'firebase';
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

const RenderText = () => {
    if(!auth().currentUser) {
        return(
            <div>
                <SignUpForm />
                <SignInForm />
            </div>
        )
    } else {
        return(
            <h1>User Already Signed In</h1>
        )
    }
}

class Form extends Component {
    render() {
        return (
            <div>
                <RenderText />
            </div>
        );
    }
}

export default Form;