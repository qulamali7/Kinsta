import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer_container'>
          <div className='footer_content'>
            <div className='footer_item'>
              <h3>Products</h3>
              <ul>
                <li>
                  <Link>Managed WordPress</Link>
                </li>
                <li>
                  <Link>Web Application Hosting</Link>
                </li>
                <li>
                  <Link>Managed Database Hosting</Link>
                </li>
                <li>
                  <Link>Static Site Hosting</Link>
                </li>
                <li>
                  <Link>Pricing</Link>
                </li>
              </ul>
            </div>
            <div className='footer_item'>
              <h3>Feature highlights</h3>
              <ul>
                <li>
                  <Link>Cloudflare integration</Link>
                </li>
                <li>
                  <Link>Kinsta API</Link>
                </li>
                <li>
                  <Link>Expert support</Link>
                </li>
                <li>
                  <Link>FreeWorPress migrations</Link>
                </li>
                <li>
                  <Link>APM tool</Link>
                </li>
                <li>
                  <Link>DevKinsta</Link>
                </li>
                <li>
                  <Link>Edge Caching</Link>
                </li>
                <li>
                  <Link>WordPress plan add ons</Link>
                </li>
              </ul>
            </div>
            <div className='footer_item'>
              <h3>Use cases</h3>
              <ul>
                <li>
                  <Link>Enterprise</Link>
                </li>
                <li>
                  <Link>Agency</Link>
                </li>
                <li>
                  <Link>WooCommerce store</Link>
                </li>
                <li>
                  <Link>Small business</Link>
                </li>
                <li>
                  <Link>Non profit organization</Link>
                </li>
                <li>
                  <Link>Single high resource site</Link>
                </li>
                <li>
                  <Link>Case studies</Link>
                </li>
              </ul>
            </div>
            <div className='footer_item'>
              <h3>Resources</h3>
              <ul>
                <li>
                  <Link>Documentation</Link>
                </li>
                <li>
                  <Link>Changelog</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Newsletter</Link>
                </li>
                <li>
                  <Link>Knowledge Base</Link>
                </li>
                <li>
                  <Link>Development tools</Link>
                </li>
                <li>
                  <Link>Kinsta vs competitors</Link>
                </li>
                <li>
                  <Link>Agency directory</Link>
                </li>
                <li>
                  <Link>System Status</Link>
                </li>
                <li>
                  <Link>All resources</Link>
                </li>
              </ul>
            </div>
            <div className='footer_item'>
              <h3>Company</h3>
              <ul>
                <li>
                  <Link>About us</Link>
                </li>
                <li>
                  <Link>Why choose Kinsta</Link>
                </li>
                <li>
                  <Link>Careers</Link>
                </li>
                <li>
                  <Link>Partners</Link>
                </li>
                <li>
                  <Link>Research program</Link>
                </li>
                <li>
                  <Link>Affiliate program</Link>
                </li>
                <li>
                  <Link>Press</Link>
                </li>
                <li>
                  <Link>Security and trust</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer_nav'>
            <div className='footer_nav_content'>
              <Link>Kinsta</Link>
              <div className='footer_icon'>
                <div className='icon'>
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className='icon'>
                  <i className="fa-brands fa-x-twitter"></i>
                </div>
                <div className='icon'>
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className='icon'>
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className='icon'>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
              <select name="" id="">
                <option value=""> <i className="fa-solid fa-earth-americas"></i>English</option>
                <option value="">Dansk</option>
              </select>
            </div>
          </div>
        </div>
        <div className='call'>
        <i className="fa-solid fa-comments"></i>
        </div>
      </footer>
    </>
  )
}

export default Footer