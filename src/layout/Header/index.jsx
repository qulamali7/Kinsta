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
                                        <div id="megamenu-item-0__child" className="megamenu__dropdown">
                                            <div className="megamenu__dropdown__inner">
                                                <div className="megamenu__dropdown__container">
                                                    <div className="megamenu__dropdown__columns">
                                                        <div className="megamenu__dropdown__column">
                                                            <h6 className="megamenu__dropdown__column__title">Products</h6>
                                                            <ul className="megamenu__dropdown__column__list">
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item">
                                                                        <img className="megamenu__dropdown__item__icon" width="32" height="32" aria-hidden="true" src="https://kinsta.com/wp-content/themes/kinsta/images/components/megamenu/icon-wp.png" />
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            Managed WordPress Hosting            </span>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item ">
                                                                        <img className="megamenu__dropdown__item__icon" width="32" height="32" aria-hidden="true" src="https://kinsta.com/wp-content/themes/kinsta/images/components/megamenu/icon-app.png" />
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            Web Application Hosting            </span>
                                                                    </Link>
                                                              </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item ">
                                                                        <img className="megamenu__dropdown__item__icon" width="32" height="32" aria-hidden="true" src="https://kinsta.com/wp-content/themes/kinsta/images/components/megamenu/icon-db.png" />
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            Managed Database Hosting            </span>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item">
                                                                        <img className="megamenu__dropdown__item__icon" width="32" height="32" aria-hidden="true" src="https://kinsta.com/wp-content/themes/kinsta/images/components/megamenu/icon-static.png" />
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            Static Site Hosting            </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="megamenu__dropdown__column">
                                                            <h6 className="megamenu__dropdown__column__title">Platform highlights</h6>
                                                            <ul className="megamenu__dropdown__column__list">
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item ">
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            Cloudflare integration            </span>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item ">
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            API            </span>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item ">
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            Expert support            </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="megamenu__dropdown__column">
                                                            <h6 className="megamenu__dropdown__column__title">WordPress highlights</h6>
                                                            <ul className="megamenu__dropdown__column__list">
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item">
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            APM tool            </span>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item ">
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            DevKinsta            </span>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <a href="https://kinsta.com/wordpress-hosting/migration/" className="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div className="megamenu__dropdown__item__text">
                                                                            <span className="megamenu__dropdown__item__title">
                                                                                Free site migrations            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item ">
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            Edge caching            </span>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item ">
                                                                        <span className="megamenu__dropdown__item__title">
                                                                            Add-ons            </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link>Solutions</Link>
                                        <div id="megamenu-item-1__child" className="megamenu__dropdown">
                                            <div className="megamenu__dropdown__inner">
                                                <div className="megamenu__dropdown__container">
                                                    <div className="megamenu__dropdown__columns">
                                                        <div className="megamenu__dropdown__column">
                                                            <h6 className="megamenu__dropdown__column__title">We power your</h6>
                                                            <ul className="megamenu__dropdown__column__list">
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div className="megamenu__dropdown__item__text">
                                                                            <span className="megamenu__dropdown__item__title">
                                                                                Enterprise            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div className="megamenu__dropdown__item__text">
                                                                            <span className="megamenu__dropdown__item__title">
                                                                                Agency            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div className="megamenu__dropdown__item__text">
                                                                            <span className="megamenu__dropdown__item__title">
                                                                                WooCommerce store            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div className="megamenu__dropdown__item__text">
                                                                            <span className="megamenu__dropdown__item__title">
                                                                                Small business            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div className="megamenu__dropdown__item__text">
                                                                            <span className="megamenu__dropdown__item__title">
                                                                                Non-profit organization            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className="megamenu__dropdown__li">
                                                                    <Link className="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div className="megamenu__dropdown__item__text">
                                                                            <span className="megamenu__dropdown__item__title">
                                                                                Single high-resource site            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="megamenu__dropdown__column megamenu__dropdown__column--wide">
                                                            <h6 className="megamenu__dropdown__column__title">Case studies</h6>
                                                            <ul className="megamenu__dropdown__column__list">
                                                                <li className="megamenu__dropdown__li">
                                                                    <div className="posts-grid posts-grid--2-cols megamenu__dropdown__item-query">
                                                                        <div className="post-preview post-174898 case_studies type-case_studies status-publish has-post-thumbnail hentry segment-agency">
                                                                            <Link className="post-preview__thumbnail" aria-hidden="true" tabindex="-1" >
                                                                                <img width="360" height="180" src="https://kinsta.com/wp-content/uploads/2024/02/case-study-wp-snowmaddigital-360x180.png" className="attachment-kinsta-thumbnail size-kinsta-thumbnail wp-post-image" alt="" decoding="async" loading="lazy" aria-hidden="true" tabindex="-1" />            </Link>

                                                                            <div className="post-preview__content">

                                                                                <div className="post-preview__title-excerpt">
                                                                                    <h2 className="post-preview__title">
                                                                                        <a href="https://kinsta.com/clients/snowmad-digital/" className="post-preview__link">
                                                                                            Snowmad Digital grows customer base by 450% with Kinsta&#8217;s Managed WordPress Hosting        </a>
                                                                                    </h2>

                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="post-preview post-124190 case_studies type-case_studies status-publish has-post-thumbnail hentry segment-nonprofits">
                                                                            <Link className="post-preview__thumbnail" aria-hidden="true" tabindex="-1" >
                                                                                <img width="360" height="180" src="https://kinsta.com/wp-content/uploads/2023/03/case-study-wp-unicef-360x180.png" class="attachment-kinsta-thumbnail size-kinsta-thumbnail wp-post-image" alt="" decoding="async" loading="lazy" aria-hidden="true" tabindex="-1" />            </Link>

                                                                            <div class="post-preview__content">

                                                                                <div class="post-preview__title-excerpt">
                                                                                    <h2 class="post-preview__title">
                                                                                        <a href="https://kinsta.com/clients/unicef-denmark/" class="post-preview__link">
                                                                                            UNICEF Denmark Saves 88% in Hosting Costs by Moving to Kinsta        </a>
                                                                                    </h2>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div></li>
                                                                <li class="megamenu__dropdown__li">
                                                                    <Link class="megamenu__dropdown__item button button--tertiary button--small megamenu__dropdown__item--more">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                More case studies            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link>Docs</Link>
                                    </li>
                                    <li>
                                        <Link>Help</Link>
                                        <div id="megamenu-item-4__child" class="megamenu__dropdown">
                                            <div class="megamenu__dropdown__inner">
                                                <div class="megamenu__dropdown__container">
                                                    <div class="megamenu__dropdown__columns">
                                                        <div class="megamenu__dropdown__column megamenu__dropdown__column--dual">
                                                            <h6 class="megamenu__dropdown__column__title">Resources</h6>
                                                            <ul class="megamenu__dropdown__column__list">
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="https://kinsta.com/blog/" class="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                Blog            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="https://kinsta.com/changelog/" class="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                Changelog            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="https://status.kinsta.com/" class="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                System status            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="https://kinsta.com/knowledgebase/" class="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                Knowledge Base            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="https://kinsta.com/kinsta-alternatives/" class="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                Compare Kinsta to competitors            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="https://kinsta.com/tools/" class="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                Development tools            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="https://kinsta.com/resources/" class="megamenu__dropdown__item button button--tertiary button--small megamenu__dropdown__item--more">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                All resources            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="megamenu__dropdown__column">
                                                            <h6 class="megamenu__dropdown__column__title">Contact us</h6>
                                                            <ul class="megamenu__dropdown__column__list">
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="https://kinsta.com/contact-us/" class="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                Send us a question            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="tel:+18886102915" class="megamenu__dropdown__item button button--tertiary button--small kinsta-tel">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                Call sales            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="https://kinsta.com/schedule-demo/" class="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                Request a live demo            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li class="megamenu__dropdown__li">
                                                                    <a href="https://community.kinsta.com/" class="megamenu__dropdown__item button button--tertiary button--small">
                                                                        <div class="megamenu__dropdown__item__text">
                                                                            <span class="megamenu__dropdown__item__title">
                                                                                Ask the community            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </nav>
                            <div className='header_login'>
                                <div className='header_search'>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <Link to={"/login"} className='login_link'>Login</Link>
                                <Link className='login_sign'>Sign Up</Link>
                            </div>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        {/* <div id="megamenu-item-0__child" className="megamenu__dropdown">
                            <div className="megamenu__dropdown__inner">
                                <div className="megamenu__dropdown__container">
                                    <div className="megamenu__dropdown__columns">
                                        <div className="megamenu__dropdown__column">
                                            <h6 className="megamenu__dropdown__column__title">Products</h6>
                                            <ul className="megamenu__dropdown__column__list">
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item">
                                                        <img className="megamenu__dropdown__item__icon" width="32" height="32" aria-hidden="true" src="https://kinsta.com/wp-content/themes/kinsta/images/components/megamenu/icon-wp.png" />
                                                        <span className="megamenu__dropdown__item__title">
                                                            Managed WordPress Hosting            </span>
                                                    </Link>
                                                </li>
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item ">
                                                        <img className="megamenu__dropdown__item__icon" width="32" height="32" aria-hidden="true" src="https://kinsta.com/wp-content/themes/kinsta/images/components/megamenu/icon-app.png" />
                                                        <span className="megamenu__dropdown__item__title">
                                                            Web Application Hosting            </span>
                                                    </Link>
                                                </li>
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item ">
                                                        <img className="megamenu__dropdown__item__icon" width="32" height="32" aria-hidden="true" src="https://kinsta.com/wp-content/themes/kinsta/images/components/megamenu/icon-db.png" />
                                                        <span className="megamenu__dropdown__item__title">
                                                            Managed Database Hosting            </span>
                                                    </Link>
                                                </li>
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item">
                                                        <img className="megamenu__dropdown__item__icon" width="32" height="32" aria-hidden="true" src="https://kinsta.com/wp-content/themes/kinsta/images/components/megamenu/icon-static.png" />
                                                        <span className="megamenu__dropdown__item__title">
                                                            Static Site Hosting            </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="megamenu__dropdown__column">
                                            <h6 className="megamenu__dropdown__column__title">Platform highlights</h6>
                                            <ul className="megamenu__dropdown__column__list">
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item ">
                                                        <span className="megamenu__dropdown__item__title">
                                                            Cloudflare integration            </span>
                                                    </Link>
                                                </li>
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item ">
                                                        <span className="megamenu__dropdown__item__title">
                                                            API            </span>
                                                    </Link>
                                                </li>
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item ">
                                                        <span className="megamenu__dropdown__item__title">
                                                            Expert support            </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="megamenu__dropdown__column">
                                            <h6 className="megamenu__dropdown__column__title">WordPress highlights</h6>
                                            <ul className="megamenu__dropdown__column__list">
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item">
                                                        <span className="megamenu__dropdown__item__title">
                                                            APM tool            </span>
                                                    </Link>
                                                </li>
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item ">
                                                        <span className="megamenu__dropdown__item__title">
                                                            DevKinsta            </span>
                                                    </Link>
                                                </li>
                                                <li className="megamenu__dropdown__li">
                                                    <a href="https://kinsta.com/wordpress-hosting/migration/" className="megamenu__dropdown__item button button--tertiary button--small">
                                                        <div className="megamenu__dropdown__item__text">
                                                            <span className="megamenu__dropdown__item__title">
                                                                Free site migrations            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item ">
                                                        <span className="megamenu__dropdown__item__title">
                                                            Edge caching            </span>
                                                    </Link>
                                                </li>
                                                <li className="megamenu__dropdown__li">
                                                    <Link className="megamenu__dropdown__item ">
                                                        <span className="megamenu__dropdown__item__title">
                                                            Add-ons            </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header