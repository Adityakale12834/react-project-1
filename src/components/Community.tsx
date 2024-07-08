import React from 'react'

function Community(): React.ReactElement {
  return (
    <div
      className="container-fluid"
      style={{ background: "rgba(247, 253, 255, 1)" }}
    >
      <div className="container">
        <div className=''>
          <h1 className='py-3'><em>Your <span style={{color:"rgba(128, 100, 162, 1)"}}>Hobby</span>, Your <span style={{color:"#3FA2F6"}}>Community...</span></em></h1>
          <button type="button" className='btn' style={{background:"rgba(128, 100, 162, 1)", color:"white"}}>Get started</button>
        </div>
        <img className="w-100 pt-5" src="/src/assets/Footer.png" alt="" />
      </div>
    </div>
  );
}

export default Community