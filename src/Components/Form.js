import React, { Component } from 'react';
import firebase, { auth } from 'firebase';
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

const LogOutButton = (props) => {
    return(
        <div>
            <h1>LogOut</h1>
            <button onClick={() => {
                auth().signOut().then(() => {
                    window.localStorage.setItem('musicAppSignedIn', false);
                    props.reRender();
                    console.log("SignedOut");
                })
            }} >LogOut</button>
        </div>
    )
}

const RenderText = (props) => {

    const musicAppSignedIn = window.localStorage.getItem('musicAppSignedIn');

    if(musicAppSignedIn === "true") {
        return(
            <div>
                <h1>User Already Signed In</h1>
                <LogOutButton reRender={props.reRender} />
            </div>
        )
    } else {
        return(
            <div>
                <SignUpForm reRender={props.reRender} />
                <SignInForm reRender={props.reRender} />
            </div>
        )
    }
}

class Form extends Component {

    reRender = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <RenderText reRender={this.reRender} />
            </div>
        );
    }
}

export default Form;