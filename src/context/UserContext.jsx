import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


// auth init
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    console.log(user);

    // create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUser = (name)=>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
    }

    // verify user
        const verifyUser =()=>{
           return sendEmailVerification(auth.currentUser)
        }


    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // create user / login in user with google
    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // create user / login user by using github
    const continueWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // logout 
    const logOut = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {
                console.log(error);
            });
    }


    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('Observing User', currentUser);
        setUser(currentUser)
        return  () => {
            unSubscribe()
        }
    },[])


    const authInfo = {
        createUser,
        loginUser,
        user,
        logOut,
        continueWithGoogle,
        continueWithGithub,
        updateUser,
        verifyUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;