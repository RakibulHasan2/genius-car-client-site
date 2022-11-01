import React from 'react';
import './Login.css'
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin  } from 'react-icons/ai';
import {  FcGoogle } from 'react-icons/fc';
const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
    }
    return (
        <div className="hero w-full my-10">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn button" type="submit" value="Sign In" />
                    </div>
                </form>
                <p className='text-center mb-5'>Or Sign In With</p>
                <div className='flex justify-center mb-4 text-2xl'>
                <FaFacebook className='mr-3 text-blue-900'></FaFacebook>
                <AiFillLinkedin className='mr-3  text-blue-900'></AiFillLinkedin>
                <FcGoogle></FcGoogle>
                </div>
                <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Login;