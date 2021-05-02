import React from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
    const { user, handleGoogleSignIn, handleSubmit, handleBlur, newUser, setNewUser } = props;

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    {
                        newUser && <div>
                            <label className="form-label">Your name</label>
                            <input type="text" name="name" onBlur={handleBlur} placeholder="Your name" className="form-control" required />
                        </div>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" name="email" onBlur={handleBlur} placeholder="Your email" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" onBlur={handleBlur} placeholder="Your password" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-info form-control">
                    {
                        newUser ? 'Sign Up' : 'Login'
                    }
                </button>
            </form>
            <div className="text-center">
                <p>{user.error}</p>
                {
                    user.success && <p>You successfully {newUser ? 'Sign Up' : 'Logged In'}</p>
                }
                <div className="text-right">
                    {
                        newUser ?
                            <p>Already have an account ? <span className="login" onClick={() => setNewUser(!newUser)}>Login</span></p>
                            :
                            <p>Don't have an account ? <span className="sign-up" onClick={() => setNewUser(!newUser)}>Sign Up</span></p>
                    }
                </div>
            </div>
            <div className="text-center">
                <p>-------------or--------------</p>
            </div>
            <div className="text-center mt-5">
                <button className="btn btn-info" onClick={handleGoogleSignIn}>Continue with google</button>
            </div>
        </div>
    );
};

export default LoginForm;