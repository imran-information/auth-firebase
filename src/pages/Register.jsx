import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';



const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                navigate('/profile')
            }).catch(error => {
                console.log('ERROR', error);

            })
    }
    return (
        <div className="hero bg-base-200 min-h-[600px]">
            <div className="hero-content w-1/2 flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    < p className='text-center mb-5'>Have an account already? <Link className='text-purple-600' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;