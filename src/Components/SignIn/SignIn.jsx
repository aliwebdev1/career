
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const SignIn = () => {
    const [userEmail, setUserEmail] = useState('')
    const { loginUser, continueWithGoogle, continueWithGithub, forgetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handleSignInUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                form.reset()
                if (loggedInUser.uid) {
                    alert("User Login Successfully Done!")
                }

                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }




    const handleForgetPassword = () => {
        forgetPassword(userEmail)
            .then(() => {
                alert('check your email and reset new password!!!')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const onEmailBlur = (event) => {
        const forgetPasswordEmail = event.target.value;
        setUserEmail(forgetPasswordEmail)

    }


    return (
        <div>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='shadow-xl px-5 py-8 rounded-md'>
                    <form onSubmit={handleSignInUser}>
                        <div className=''>
                            <input onBlur={onEmailBlur} name='email' type="email" className="mb-5 input border-2 border-gray-300 w-96" placeholder="Email here" />
                            <br />
                            <input name='password' type="password" className="mb-5 input border-2 border-gray-300 w-96" placeholder="Password here" />
                            <div className='flex justify-between'>

                                <Link to="/register" className="link link-hover">New to website? create account</Link>
                                <p onClick={handleForgetPassword} className="link link-hover">Forget Password</p>

                            </div>
                            <input type='submit' className="w-full btn btn-neutral mt-4" value="Login Now" />
                            <div className='flex justify-between overflow-hidden'>
                                <button onClick={() => continueWithGoogle()} className=" btn btn-neutral mt-4" value="Register">Continue with Google</button>
                                <button onClick={() => continueWithGithub()} className="btn btn-neutral mt-4" value="Register">Continue with Github</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;