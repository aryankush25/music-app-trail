import React, { useState } from 'react';
import { auth } from 'firebase';

const SignInForm = () => {

    var [formData, updateFormData] = useState({
        email: '',
        password: ''
    });

    const onFormSubmit = event => {
        event.preventDefault();
        console.log(formData);

        auth().signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
            console.log("Signed In");
        })
        .catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;
    
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            if(error) {
                console.log(error);
            } else {
                console.log("You Can Sign In");
            }
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
            <h1>Sign In</h1>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Enter Your Email" onChange={handleChangeEmail} />
                <input type="password" placeholder="Enter Your Password" onChange={handleChangePassword}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default SignInForm;