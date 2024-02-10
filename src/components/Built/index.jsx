import React from 'react'
import "./index.scss";
const Built = () => {
  return (
    <>
    <section id='built'>
        <div className='built_container'>
            <div className='built_content'>
                <div className='built_left'>
                    <h3>Built for developers</h3>
                    <ul className='built_checklist'>
                        <li className='built_checklist_element'><img src="" alt=""/>Git-based workflow with automatic deployments</li>
                        <li className='built_checklist_element'><img src="" alt="" />Fast deployments with build cache</li>
                        <li className='built_checklist_element'><img src="" alt="" />Multiple environments with pull request previews</li>
                        <li className='built_checklist_element'><img src="" alt="" />Persistent storage for stateful applications</li>
                        <li className='built_checklist_element'><img src="" alt="" />SSH access with web terminal</li>
                        <li className='built_checklist_element'><img src="" alt="" />API support</li>
                    </ul>
                    <button className='built_btn'>See the Documentation</button>
                </div>
                <div className='built_right'>
                    <img src="https://kinsta.com/wp-content/uploads/2023/11/deployments.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Built