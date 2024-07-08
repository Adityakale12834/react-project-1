import React from 'react'

function AddOwn() : React.ReactElement {
  return (
    <div className='container-fluid '  style={{background:"rgba(247, 253, 255, 1)"}}>
            <div className="container my-5 py-5">
                <div className="card w-100  h-50 mb-3 p-3">
                <div className="card-body">
                  <h5 className="card-title">Add your own</h5>
                  <p className="card-text">
                  Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
                  </p>
                  <a href="#" className="btn btn-outline-purple">
                    Add new
                  </a>
                </div>
              </div>
            </div>
    </div>
  )
}

export default AddOwn