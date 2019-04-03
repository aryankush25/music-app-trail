import React, { useState } from 'react';
import { auth } from 'firebase';

const SignUpForm = (props) => {

    var [formData, updateFormData] = useState({
        email: '',
        password: ''
    });

    const onFormSubmit = event => {
        event.preventDefault();
        //console.log(formData);

        auth().createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
            window.localStorage.setItem('musicAppSignedIn', true);
            props.reRender();
            console.log("SignedUp");
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });
    };
    
    const handleChangeEmail = event => {
        const { value } = event.target;
        updateFormData({
            ...formData,
            email: value
        });
    };

    const handleChangePassword = event => {
        const { value } = event.target;
        updateFormData({
            ...formData,
            password: value
        });
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Enter Your Email" onChange={handleChangeEmail} />
                <input type="password" placeholder="Enter Your Password" onChange={handleChangePassword}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default SignUpForm;