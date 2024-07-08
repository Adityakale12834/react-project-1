import React from 'react'
import { useMediaQuery } from 'react-responsive';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
function Signin(): React.ReactElement {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  if(isMobile) {
    return (
      <div className='container'>
          <div className='d-flex flex-column gap-2'>
              <input type="text" placeholder='email' className='form-control' />
              <input type="password" placeholder='password' className='form-control' />
              <p className='mb-0'><small>By continuing, you agree to our Terms of Service and Privacy Policy.</small></p>
              <button className='btn btn-purple'>Agree and Continue</button>
          </div>
          <hr />
          <div className='d-flex flex-column gap-2'>
              <button className='btn btn-outline-primary' ><GoogleIcon className='mx-2'/>Continue with Google</button>
              <button className='btn btn-outline-danger'><FacebookRoundedIcon className='mx-2'/>Continue with Facebook</button>
          </div>
      </div>
    )
  }
  else{
    return (
      <div className='container'>
          <div className='d-flex flex-column gap-3 '>
              <button className='btn btn-outline-primary' ><GoogleIcon className='mx-2'/>Continue with Google</button>
              <button className='btn btn-outline-danger'><FacebookRoundedIcon className='mx-2'/>Continue with Facebook</button>
          </div>
          <hr className='my-4'/>
          <div className='d-flex flex-column gap-3'>
              <input type="text" placeholder='email' className='form-control' />
              <input type="password" placeholder='password' className='form-control' />
              <p className='my-0'><small>By continuing, you agree to our Terms of Service and Privacy Policy.</small></p>
              <button className='btn btn-purple'>Agree and Continue</button>
          </div>
      </div>
    )
  }
}

export default Signin