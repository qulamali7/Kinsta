import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const PayCards = () => {
    return (
        <>
            <div className='pay_cards'>
                <div className='pay_card scale'>
                    <div className='pay_card_content'>
                        <h3>Scale as you go from $7</h3>
                        <p>USD / month</p>
                        <Link>See Pricing</Link>
                    </div>
                </div>
                <div className='pay_card'>
                    <div className='pay_card_content'>
                        <h3>Run time</h3>
                        <p>Usage-based, depends on your running environments and chosen CPU/RAM</p>
                        <span>From 7 USD / month</span>
                    </div>
                </div>
                <div className='pay_card'>
                    <div className='pay_card_content'>
                        <h3>Build time</h3>
                        <p>Usage-based, depends on the build time of your deployments</p>
                        <span>From 0.02 USD / min</span>
                    </div>
                </div>
                <div className='pay_card bandwidth'>
                    <div className='pay_card_content'>
                        <h3>Bandwidth</h3>
                        <h5>Usage-based, depends on how much traffic you get</h5>
                        <p>Internal: free</p>
                        <span>External: 0.14 USD / GB</span>
                    </div>
                </div>
                <div className='pay_card'>
                    <div className='pay_card_content'>
                        <h3>Storage</h3>
                        <p>In case you need persistent storage, pro-rated monthly price</p>
                        <span>Each 10 GB for 3 USD / month</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayCards