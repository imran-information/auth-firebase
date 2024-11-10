import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                navigate('/')

            }).catch(error => {
                console.log("ERROR!!", error.message);

            })

    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/listed')
            }).catch(error => {
                console.log(error.message);

            })
    }
    return (
        <div className="hero bg-base-200 min-h-[600px]">
            <div className="hero-content w-1/2 flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p onClick={handleSignInWithGoogle} className='text-center mb-5'><button className="btn btn-primary">Login with google</button></p>
                    <p className='text-center mb-5'>Don't have an account yet? <Link className='text-purple-500' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;