import React from 'react'
import "./index.scss";
import ProcessCard from '../ProcessCard';
const ProcessCards = () => {
  return (
    <>
    <div className='process_cards'>
        <ProcessCard img="https://kinsta.com/wp-content/uploads/2023/11/process-level-control.svg" title="Process level control" text="Set up your application on a process level and configure each separately" />
        <ProcessCard img="https://kinsta.com/wp-content/uploads/2023/11/memory-usage.svg" title="Monitor performance" text="Keep an eye on resource utilization and request times to optimize your project"/>
        <ProcessCard img="https://kinsta.com/wp-content/uploads/2023/12/app-runtime-log-troubleshoot-min.png" title="Troubleshoot issues" text="Use the runtime logs or check request analytics to find what holds your application back"/>
    </div>
    </>
  )
}

export default ProcessCards