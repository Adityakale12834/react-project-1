import React from 'react'
import "./style.css"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { useMediaQuery } from 'react-responsive'
function Login() : React.ReactElement {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  if(isMobile){
    return (
        <div className='container-fluid w-100'>
            <div className='d-flex flex-column gap-2'>
                <input type="text" placeholder='email' className='form-control' />
                <input type="password" placeholder='password' className='form-control' />
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <input type="checkbox" name="passwrod" id="" />
                        <label htmlFor="passwrod">Remember me</label>
                    </div>
                    <a href="#" className='text-decoration-none text-primary'>Forgot password?</a>
                </div>
                <button className='btn btn-purple'>Continue</button>
            </div>
            <hr className=''/>
            <div className='d-flex flex-column gap-2 mb-3'>
                <button className='btn btn-outline-primary' ><GoogleIcon className='mx-2'/>Continue with Google</button>
                <button className='btn btn-outline-danger'><FacebookRoundedIcon className='mx-2'/>Continue with Facebook</button>
            </div>
        </div>)
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
              <div className='d-flex justify-content-between'>
                     <div className='d-flex'>
                         <input type="checkbox" name="passwrod" id="" />
                         <label htmlFor="passwrod">Remember me</label>
                     </div>
                     <a href="#" className='text-decoration-none text-primary'>Forgot password?</a>
                 </div>
              <button className='btn btn-purple'>Continue</button>
          </div>
      </div>
    )
  }
}

export default Login