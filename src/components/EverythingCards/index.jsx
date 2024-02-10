import React from 'react'
import "./index.scss";
import EverythingCard from '../EverythingCard';
const EverythingCards = () => {
  return (
    <>
    <div className='everything_cards'>
        <EverythingCard img="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/equality.svg" title="Unlimited Users" text="for your team for free collaboration" />
        <EverythingCard img="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/scaling.svg" title="Unlimited Applications" text="with multiple processes for each" />
        <EverythingCard img="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/security.svg" title="Private Network" text="for best security, speed, and savings on cost" />
        <EverythingCard img="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/stack.svg" title="Unlimited Concurrent Builds" text="to deploy apps at the same time" />
        <EverythingCard img="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/cdn.svg" title="25 Data Centers" text="with horizontal and vertical scaling" />
        <EverythingCard img="https://kinsta.com/wp-content/themes/kinsta/images/duos/normal/dev-tools.svg" title="Add Unlimited Domains" text="with SSL certificates included" />
    </div>
    </>
  )
}

export default EverythingCards