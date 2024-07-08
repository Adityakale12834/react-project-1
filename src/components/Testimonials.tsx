import React from 'react'

function Testimonials(): React.ReactElement {
  return (
    <div className="container-fluid my-5">
      <div className="container my-5">
        <div className="card w-100 h-50 mb-3 p-3" style={{background:"rgba(247, 245, 249, 1)"}}>
          <div className="card-body my-3 ">
            <h2 className="card-title ">Testimonials</h2>
            <p className="card-text my-3"><small>
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.</small>
            </p>
            <div className='d-flex mt-5 align-items-center'>
              <img src="audio.png" alt="" className='overflow-hidden' style={{width:"700px"}} />
              <div className='d-flex ju px-5'>
                <img src="dancer.png" alt="" className=''  style={{width:"85px"}} />
                <div className='px-3'>
                  <h5 className='mt-3' style={{color:"rgba(128, 100, 162, 1)"}}>Shubha Nagrajan</h5>
                  <p className='text-muted' style={{color:"rgba(0, 150, 200, 1)"}}>Classical Dancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials