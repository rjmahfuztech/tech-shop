import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import LoginForm from './LoginForm';

// firebase initialize
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState(
        {
            name: '',
            email: '',
            password: '',
            error: '',
            success: false
        }
    );
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const userInfo = {
                    name: displayName,
                    email
                };
                setLoggedInUser(userInfo);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleBlur = e => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            isFieldValid = isEmailValid;
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6 && /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = e => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    const userInfo = userCredential.user;
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log(userInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            handleLogin();
        }
        e.preventDefault();
    }

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(data => {
                const userInfo = data.user;
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log(userInfo);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('Name updated successfully');
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="mt-5">
            <p>{loggedInUser.email}</p>
            <LoginForm user={user}
                handleGoogleSignIn={handleGoogleSignIn}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                newUser={newUser}
                setNewUser={setNewUser}
            />
        </div>
    );
};

export default Login;