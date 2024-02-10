import React from 'react'
import "./index.scss";
const Solid = () => {
  return (
    <>
    <section id='solid'>
        <div className='solid_container'>
            <div className='solid_content'>
                <div className='solid_left'>
                    <h3 className='solid_title'>Solid, battle-tested infrastructure</h3>
                    <p className='solid_text'>We host 150,000+ sites and web services for 120,000+ users, and we’ve been around running premium cloud services for 10+ years. We know what will make your code thrive.</p>
                    <div className='solid_item'>
                        <img src="https://kinsta.com/wp-content/themes/kinsta/images/components/technology-logos/google-cloud-platform-small.svg" alt="" />
                        <div className='solid_item_text'>
                            <h3 className='solid_item_text_title'>Premium Global Cloud</h3>
                            <p className='solid_item_text_content'>Powered by Google Cloud</p>
                        </div>
                    </div>
                    <div className='solid_item'>
                        <img className='filter_img' src="https://kinsta.com/wp-content/themes/kinsta/images/duos/small/arrows.svg" alt="" />
                        <div className='solid_item_text'>
                            <h3 className='solid_item_text_title'>Containerized and Automated</h3>
                            <p className='solid_item_text_content'>Powered by Google Cloud</p>
                        </div>
                    </div>
                    <div className='solid_item'>
                        <img src="https://kinsta.com/wp-content/themes/kinsta/images/components/technology-logos/cloudflare-small.svg" alt="" />
                        <div className='solid_item_text'>
                            <h3 className='solid_item_text_title'>Enterprise-Grade Security With DDoS Protection</h3>
                            <p className='solid_item_text_content'>Powered by Cloudflare</p>
                        </div>
                    </div>
                    <div className='solid_item'>
                        <img className='filter_img' src="https://kinsta.com/wp-content/themes/kinsta/images/duos/small/percentage.svg" alt="" />
                        <div className='solid_item_text'>
                            <h3 className='solid_item_text_title'>99.9% Uptime SLA</h3>
                        </div>
                    </div>
                    <div className='solid_item'>
                        <img className='filter_img' src="https://kinsta.com/wp-content/themes/kinsta/images/duos/small/shield.svg" alt="" />
                        <div className='solid_item_text'>
                            <h3 className='solid_item_text_title'>SOC 2 Compliance</h3>
                        </div>
                    </div>
                </div>
                <div className='solid_right'>
                    <img src="https://kinsta.com/wp-content/uploads/2023/11/infrastructure.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Solid