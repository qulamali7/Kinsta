import React from 'react'
import "./index.scss";
import StackCard from '../StackCard';
const StackCards = () => {
    return (
        <>
            <div className='stack_cards'>
                <StackCard img="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/k-badge.svg" title="All-in-one platform" text="19 programming languages and 4 database types natively supported"/>
                <StackCard img="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/dev-tools.svg" title="Customer Dockerfiles" text="Use any stack at all with a custom Dockerfile setup" />
                <StackCard img="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/checklist.svg" title="DevOps automated" text="Environment setup and deployments taken care of" />
            </div>
        </>
    )
}

export default StackCards