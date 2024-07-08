import React from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
// import "./style.css"
function Connect() : React.ReactElement {
  return (
    <div className="container-fluid my-5">
      <div className="d-flex justify-content-center align-items-center flex-wrap">
      <div className="card m-3 card-hover" style={{maxWidth:"500px"}}>
        <div className="card-body my-3">
          <h4 className="card-title my-3"><GroupsIcon style={{width:"40px", }} />People</h4>
          <p className="card-text my-3">
          Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
          </p>
          <a href="#" className="btn btn-outline-purple my-3">
            Connect
          </a>
        </div>
      </div>
      <div className="card  m-3 card2 " style={{maxWidth:"500px"}}>
        <div className="card-body my-3">
          <h5 className="card-title "><LocationOnIcon style={{width:"40px", color:"green"}}/> Place</h5>
          <p className="card-text ">
          Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
          </p>
          <a href="#" className="btn btn-outline-purple my-3">
            Meet up
          </a>
        </div>
      </div>
      <div className="card m-3 card3" style={{maxWidth:"500px"}}>
        <div className="card-body my-3">
          <h5 className="card-title my-3"><ShoppingBagIcon style={{width:"40px", color:"red"}}/>Product</h5>
          <p className="card-text my-3">
          Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
          </p>
          <a href="#" className="btn btn-outline-purple my-3">
            Get it
          </a>
        </div>
      </div>
      <div className="card m-3 card4" style={{maxWidth:"500px"}}>
        <div className="card-body my-3">
          <h5 className="card-title my-3"><AssignmentTurnedInIcon style={{width:"40px", color:"skyblue"}}/>Program</h5>
          <p className="card-text my-3">
          Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
          </p>
          <a href="#" className="btn btn-outline-purple my-3">
            Button
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Connect