import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const SignUp = () => {
    const { createUser, continueWithGoogle, continueWithGithub } = useContext(AuthContext)


    const handleCreateUser = (event) => {

        event.preventDefault()
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(firstName, lastName, email, password);

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                form.reset()
                if (registeredUser.uid) {
                    alert("User created Successfully Done!")
                }

            })
            .catch(error => {
                console.log(error);
            })
    }

    const signUpByGoogle = () => {
        continueWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);

            })
    }

    return (
        <div>

            <div className='min-h-screen flex justify-center items-center'>
                <div className='shadow-xl px-5 py-8 rounded-md'>
                    <form onSubmit={handleCreateUser}>
                        <div className=''>
                            <input name='firstName' type="text" className="mb-5 input border-2 border-gray-300 w-96" placeholder="Enter First Name" />
                            <br />

                            <input name='lastName' type="text" className="mb-5 input border-2 border-gray-300 w-96" placeholder="Enter Last Name" />
                            <br />

                            <input name='email' type="email" className="mb-5 input border-2 border-gray-300 w-96" placeholder="Email here" />
                            <br />

                            <input name='password' type="password" className="mb-5 input border-2 border-gray-300 w-96" placeholder="Password here" />

                            <div className='flex justify-between'>

                                <Link to="/login" className="link link-hover">Already have an account? login please</Link>
                            </div>

                            <input type='submit' className="w-full btn btn-neutral mt-4" value="Register" />



                            <div className='flex justify-between overflow-hidden'>
                                <button onClick={signUpByGoogle} className=" btn btn-neutral mt-4" value="Register">Continue with Google</button>
                                <button onClick={() => continueWithGithub()} className="btn btn-neutral mt-4" value="Register">Continue with Github</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;