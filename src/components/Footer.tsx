import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

function Footer(): React.ReactElement {
  return (
    <div className=''>
      <footer
        className="text-center text-lg-start"
        style={{ background: "white" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  How Do I
                </h6>
                <p>
                  <a className="text-black">Sign Up</a>
                </p>
                <p>
                  <a className="text-black">Add a Listing</a>
                </p>
                <p>
                  <a className="text-black">Claim Listing</a>
                </p>
                <p>
                  <a className="text-black">Post a Query</a>
                </p>
                <p>
                  <a className="text-black">Add a Blog Post</a>
                </p>
                <p>
                  <a className="text-black">Other Queries</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Quick links
                </h6>
                <p>
                  <a className="text-black">Listings</a>
                </p>
                <p>
                  <a className="text-black">Blog Posts</a>
                </p>
                <p>
                  <a className="text-black">Shop / Store</a>
                </p>
                <p>
                  <a className="text-black">Community</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Hobbeycue
                </h6>
                <p>
                  <a className="text-black">About us</a>
                </p>
                <p>
                  <a className="text-black">Our Services</a>
                </p>
                <p>
                  <a className="text-black">Work with Us</a>
                </p>
                <p>
                  <a className="text-black">FAQ</a>
                </p>
                <p>
                  <a className="text-black">Contact Us</a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Social Media
                </h6>
                <p className='d-flex gap-3' style={{color:"rgba(128, 100, 162, 1)"}}>
                  <FacebookRoundedIcon/>
                  <InstagramIcon/>
                  <PinterestIcon/>
                  <XIcon/>
                  <YouTubeIcon/>
                  <TelegramIcon/>
                  <GoogleIcon/>
                  <EmailIcon/>
                </p>
                <div>
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Social Media
                </h6>
                  <div className='d-flex'>
                    <input type="text" className='form-control' placeholder='invite people'/>
                    <button className='btn' style={{background:"rgba(128, 100, 162, 1)", color:"white"}}>Invite</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="text-center">
                <div className="p-3">
                © Purple Cues Private Limited
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer