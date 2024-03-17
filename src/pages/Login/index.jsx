import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <section id='login' className='py-8  h-screen'>
                <div className='d-flex justify-between px-14'>
                    <div className=''>
                        <Link><img src="https://cdn.kinsta.com/logos/kinsta-logo-white.svg" alt="" /></Link>
                    </div>
                    <div>
                        <div className='bg-[#FFFFFF] p-8'>
                            <h3>Welcome to MyKinsta!</h3>
                            <p>Nice to see you again.</p>
                            <div className='d-flex justify-between'>
                                <div className='d-flex justify-between items-center'>
                                    <i className="fa-brands fa-github"></i>
                                    <p>Github</p>
                                </div>
                                <div className='d-flex justify-between items-center'>
                                    <i className="fa-brands fa-github"></i>
                                    <p>Github</p>
                                </div>
                                <div className='d-flex justify-between items-center'>
                                    <i className="fa-brands fa-github"></i>
                                    <p>Github</p>
                                </div>
                            </div>
                            <div>
                                <span>or</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login