import React from 'react'
import Register from './Register'
import { useMediaQuery } from 'react-responsive'
function Home(): React.ReactElement {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  if(isMobile){
    return (
      <div className='container-fluid overflow-hidden' style={{background:"#F7F5F9"}}>
          <div className='d-flex flex-wrap'>
              <div className='w-100'>
                  <h3 className='my-2 mx-2'><em>Explore your <span style={{color:"#3FA2F6"}}>hobby</span> or <span style={{color:"purple"}}>passion</span></em></h3>
                  <p className='text-sm mx-2'><small>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.</small></p>
                  {/* <p><small>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</small></p> */}
                  <Register/>
                  <img className='w-100 my-2' src="Header.png" alt="" />
              </div>
          </div>
      </div>
    );
  }
  else{
    return (
      <div className='container-fluid pt-4 ' style={{background:"#F7F5F9"}}>
          <div className='container d-flex'>
              <div className='container' style={{width:"700px"}}>
                  <h1 className='my-5'><em>Explore your <span style={{color:"#3FA2F6"}}>hobby</span> or <span style={{color:"purple"}}>passion</span></em></h1>
                  <p className='text-sm w-100'><small>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities… </small></p>
                  <p><small>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</small></p>
                  <img className='w-100' style={{marginTop:"95px"}} src="Header.png" alt="header" />
              </div>
              <div className='py-5 ' style={{width:"500px"}}>
                  <Register />
              </div>
          </div>
      </div>
    )
  }
}

export default Home