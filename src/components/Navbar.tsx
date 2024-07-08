import React, { useState } from 'react'
import { Bookmark,Bell,ShoppingCart } from 'lucide-react';
import SearchIcon from '@mui/icons-material/Search';
import {useMediaQuery} from 'react-responsive';

function Navbar() :React.ReactElement {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [search , setSearch] = useState<boolean>(false);
  return (
    // <nav
    //   classNameName="navbar navbar-expand-lg navbar-light bg-light"
    //   style={{ height: "100px" }}
    // >
    //   <div classNameName="container-fluid">
    //     <div classNameName="overflow-hidden">
    //       <img classNameName="" style={{width:"200px"}} src="/src/assets/logo.png" alt="" />
    //     </div>
    //     <Bell color="rgba(128, 100, 162, 1)"
    //       // classNameName="navbar-toggler"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //       />
    //     <button
    //       classNameName="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span classNameName="navbar-toggler-icon"></span>
    //     </button>

    //     <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
    //       <form classNameName="d-flex">
    //         <input
    //           classNameName="form-control "
    //           type="search"
    //           placeholder="Search here..."
    //           aria-label="Search"
    //           style={{ width: "300px" }}
    //         />
    //         <button
    //           classNameName="btn btn-outline-success"
    //           style={{ background: "rgba(128, 100, 162, 1)", color: "white" }}
    //           type="submit"
    //         >
    //           <SearchIcon />
    //         </button>
    //       </form>
    //       <div classNameName="d-flex gap-5 px-5">
    //         <div classNameName="d-flex">
    //           <Compass classNameName="" color="rgba(128, 100, 162, 1)" />
    //           <h6 classNameName="" style={{ color: "rgba(128, 100, 162, 1)" }}>
    //             explore
    //           </h6>
    //         </div>
    //         <div classNameName="d-flex">
    //           <Bookmark classNameName="" color="rgba(128, 100, 162, 1)" />
    //           <h6 style={{ color: "rgba(128, 100, 162, 1)" }}>bookmark</h6>
    //         </div>
    //         <div classNameName="d-flex gap-5">
    //           <Bookmark color="rgba(128, 100, 162, 1)" />
    //           <Bell color="rgba(128, 100, 162, 1)" />
    //           <ShoppingCart color="rgba(128, 100, 162, 1)" />
    //         </div>
    //       </div>
    //       <button classNameName="btn btn-outline-primary">Sign In</button>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {!search && (
          <div className='d-flex'>
            <div className="overflow-hidden navbar-toggler" style={{ border: "none" }}>
              <img
              className="navbar-toggler"
                style={{ width: "200px", border:"none" }}
                src="/src/assets/logo.png"
                alt=""
              />
            </div>
            <button
              className="btn navbar-toggler"
              style={{ border: "none" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="" style={{ color: "rgba(128, 100, 162, 1)" }}>
                <Bell />
              </span>
            </button>
            <button
              className="btn navbar-toggler"
              style={{ border: "none" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSearchContent"
              aria-controls="navbarSearchContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setSearch(!search)}
            >
              <span className="" style={{ color: "rgba(128, 100, 162, 1)" }}>
                <SearchIcon />
              </span>
            </button>
            <button
              className="btn navbar-toggler"
              style={{ border: "none" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                style={{ color: "purple" }}
              ></span>
            </button>
          </div>
        )}
        {search && (
          <div id="navbarSearchContent" className="d-flex">
            <input
              type="text"
              id="navbarSearchContent"
              className="form-control"
              placeholder="Search..."
              autoFocus
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setSearch(false)}
            >
              Close
            </button>
          </div>
        )}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 d-flex align-items-center">
          {!isTabletOrMobile && <li className="nav-item mx-5">
            <div className="overflow-hidden">
              <img
                className=""
                style={{ width: "250px" }}
                src="/src/assets/logo.png"
                alt=""
              />
            </div>
          </li>}
           {!isTabletOrMobile && <li className="nav-item mx-5">
              <form className="d-flex">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search here..."
                  aria-label="Search"
                  style={{ width: "300px" }}
                />
                <button
                  className="btn btn-outline-success"
                  style={{
                    background: "rgba(128, 100, 162, 1)",
                    color: "white",
                  }}
                  type="submit"
                >
                  <SearchIcon />
                </button>
              </form>
            </li>
            }
            <li className="nav-item dropdown mx-auto my-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                explore
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    People - Community
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Places - Venues
                  </a>
                </li>
                {/* <li><hr className="dropdown-divider" /></li> */}
                <li>
                  <a className="dropdown-item" href="#">
                    Programs - Events
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Product - Store
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blogs
                  </a>
                </li>
              </ul>
            </li> 
            <li className="nav-item dropdown mx-auto my-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hobbies
              </a>
              <ul className="dropdown-menu">
                <li className=''>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item d-flex my-2 mx-auto">
              <ShoppingCart className="mx-3" color="rgba(128, 100, 162, 1)" />
            </li>
            <li className='nav-items mx-auto my-2'>
            <Bookmark className="mx-3 " color="rgba(128, 100, 162, 1)" />
            </li>
            <li className="nav-item mx-auto my-2">
              <button type="button" className="btn btn-outline-purple">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar