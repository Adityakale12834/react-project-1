import React, { useState } from 'react'
import Login from './Login';
import Signin from './Signin';
import { useMediaQuery } from 'react-responsive';
function Register(): React.ReactElement {
    const [login, setLogin] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <div className='d-flex flex-column'>
        {!isMobile && <div className='mb-4'>
        <button  onClick={() => setLogin(false)} className='btn' style={{fontSize:"20px", border:"none",color:"purple",borderBottom:!login ? '2px solid purple' : 'none'}}><strong>Sign In</strong></button>
        <button onClick={() => setLogin(true)} className='btn' style={{fontSize:"20px", border:"none",color:"purple",borderBottom:login ? '2px solid purple' : 'none'}}><strong>Join In</strong></button>
        </div>}
        {isMobile && <div className='mb-2 d-flex justify-content-center'>
        <button  onClick={() => setLogin(false)} className='btn focusbtn' style={{fontSize:"20px", border:"none",color:"purple",borderBottom:!login ? '2px solid purple' : 'none'}}><strong>Sign In</strong></button>
        <button onClick={() => setLogin(true)} className='btn focusbtn' style={{fontSize:"20px", border:"none",color:"purple",borderBottom:login ? '2px solid purple' : 'none'}}><strong>Join In</strong></button>
        </div>}
        <div className=''>
            {login ? <Login /> : <Signin />}
        </div>
    </div>
  )
}

export default Register;