import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";
import { Link } from 'react-router-dom';
const Faq = () => {
    return (
        <>
            <section id='faq'>
                <div className='faq_container'>
                    <div className='faq_content'>
                        <div className='faq_left'>
                            <h2>FAQ</h2>
                            <p>Can’t find what you’re looking for?</p>
                            <Link>Contact us</Link>
                        </div>
                        <div className='faq_right'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How are resources calculated in Application Hosting?</Accordion.Header>
                                    <Accordion.Body>
                                        Each application pod has a redefined amount of CPU cycles, RAM, and build time. You’re billed for the use of these resources.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How does the free trial work?</Accordion.Header>
                                    <Accordion.Body>
                                        Sign up for any of Kinsta’s Application Hosting tiers and you’ll automatically join our free trial. The free trial is limited to $20 in server resources and is applicable only to your first month of hosting.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Do you have an API?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, Kinsta has a REST API allowing you to access and interact with your Applications, Databases, or WordPress sites without using the MyKinsta dashboard.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Do you offer persistent storage for hosting stateful applications?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, on the MyKinsta control panel you can create an application and attach a disk to it for storing persistent data in a file system. Please note:
                                        Any application without an attached disk is stateless, meaning all data will be erased when you redeploy, restart, or shut down the application. No user data is retained.
                                        You can see persistent storage pricing options here.
                                        Persistent storage is also sometimes called: non-volatile storage, persistent disk storage, persistent data, or persistent volume.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>How does billing work?</Accordion.Header>
                                    <Accordion.Body>
                                    With Application Hosting or Database Hosting, pay only for the server resources you used at the end of each monthly billing cycle. These services are prorated to the second and postpaid.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Can you host static sites?</Accordion.Header>
                                    <Accordion.Body>
                                    Yes. We offer fast and secure static site hosting for free! Connect your preferred Git provider and deploy your static sites to the Cloudflare Edge Network with more than 260+ locations. Learn more and get started.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq