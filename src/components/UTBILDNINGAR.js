import React from "react";
// import { NavLink } from 'react-router-dom'

const UTBILDNINGAR = ({ UTBILDNINGAR }) => {
  return (
    <div>
      {/* <NavLink to="/FÄRDIGHETER"><h1>FÄRDIGHETER</h1></NavLink> */}
      <div className="container-fluid  ">
        <div className="card-body col-md-12 mx-sm-5 mt-5  text-dark d-flex justify-content-between  align-content-center text-start  animate__animated animate__backInDown">
          <ul>
            <label className=" mb-3 mt-5  text-info border-bottom  text-end ">
              <h4>UTBILDNINGAR</h4>
            </label>
            <li>
              <h6>Datatekniker i Tehran - Iran</h6>
            </li>
            <small>120 poäng</small>
            <li>
              <h6>Naturvetenskap gymnasiet</h6>
            </li>
            <small>I Iran</small>
          </ul>
          <div>
            <img
              className="col-md-6 col-lg-7   img-fluid col-sm-12 d-none d-sm-block d-sm-none d-md-block  mt-5"
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202010/education_generic2_660_021219032911_191020031524.jpg"
              alt=""
              height=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UTBILDNINGAR;

//  <div>
//             <NavLink to="/UTBILDNINGAR" ><h1>UTBILDNINGAR</h1></NavLink>

//            <div className=" container-fluid">

//                     <div className=" card-body  mx-5 mt-5 text-dark d-flex justify-content-between  align-content-center text-start  animate__animated animate__backInDown">

//                       <ul>
//                                  <label className=" mb-3 mt-4  text-info border-bottom  text-end " ><h4>UTBILDNINGAR</h4></label>
//                               <li><h6>Datatekniker i Tehran - Iran</h6></li>
//                                  <small>120 poäng</small>
//                               <li><h6>Naturvetenskap gymnasiet</h6></li>
//                                  <small>I Iran</small>

//                       </ul>

//                       <div className="mt-4">
//                              <img className="col-md-6 col-lg-5 img-fluid col-sm-12 " src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202010/education_generic2_660_021219032911_191020031524.jpg" alt="" />

//                       </div>

//                    </div>

//            </div>

//         </div>
