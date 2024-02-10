import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header>
                <div className='header_container'>
                    <div className='header_area'>
                        <div className='header_content'>
                            <Link className='header_title'>Kinsta</Link>
                            <nav>
                                <ul>
                                    <li>
                                        <Link>Hosting Services</Link>
                                    </li>
                                    <li>
                                        <Link>Solutions</Link>
                                    </li>
                                    <li>
                                        <Link>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link>Docs</Link>
                                    </li>
                                    <li>
                                        <Link>Help</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className='header_login'>
                                <div className='header_search'>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <Link className='login_link'>Login</Link>
                                <Link className='login_sign'>Sign Up</Link>
                            </div>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header