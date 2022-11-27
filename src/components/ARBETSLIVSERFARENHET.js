import React from "react";
// import { NavLink } from 'react-router-dom'

const ARBETSLIVSERFARENHET = () => {
  return (
    <div>
      {/* <NavLink to="/FÄRDIGHETER"><h1>FÄRDIGHETER</h1></NavLink> */}
      <div className="container-fluid  ">
        <div className="card-body col-md-12 mx-sm-5 mt-5  text-dark d-flex justify-content-between  align-content-center text-start  animate__animated animate__backInDown">
          <ul>
            <label className="mb-3  mt-5 text-info border-bottom text-end">
              <h4>ARBETSLIVSERFARENHET</h4>
            </label>
            <li>
              <h6>Bokbinderi, 2004-2013</h6>
            </li>
            <small>Gruppledare på Föfab bokbinderi</small>
            <li>
              <h6>Egenföretagare, 2009-2011</h6>
            </li>
            <small>Restaurangbranschen</small>
            <li>
              <h6>Egenföretagare 2020-2021</h6>
            </li>
            <small>Transportföretag </small>
            <li>
              <h6>Bokbinderi, 2013-2020</h6>
            </li>
            <small>Gruppledare på Aros bokbinderi</small>
            <li>
              <h6>Hitachi Energy , STRI pågående</h6>
            </li>
            <small>Provledare</small>
          </ul>
          <div>
            <label className="mb-3  mt-5 text-info border-bottom text-end">
              <h4>PRAKTIK</h4>
            </label>

            <li>WSP, 2021</li>
            <li>Strukton Rail AB, 2021</li>
            <li>Hitachi Energy, STRI 2022</li>
          </div>

          <div>
            <img
              className="col-md-6 col-lg-8  mx-3 col-sm-12 d-none d-sm-block mt-5"
              src="https://changes.ie/wp-content/uploads/2019/03/Learning-Style-Tab-min.jpg"
              alt=""
              height=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARBETSLIVSERFARENHET;

//  <div>
//             <NavLink to="/ARBETSLIVSERFARENHET"> {ARBETSLIVSERFARENHET} <h1>ARBETSLIVSERFARENHET</h1> </NavLink>

//             <div className="container-fluid  ">
//                 <div className="card-body  col-md-12 mx-sm-5 mt-5  text-dark d-flex justify-content-between  align-content-center text-start  animate__animated animate__backInDown img-fluid">
//                     <ul>
//                         <label className="mb-3  mt-5 text-info border-bottom text-end" ><h4>ARBETSLIVSERFARENHET</h4></label>
//                         <li><h6>Bokbinderi, 2004-2013</h6></li>
//                             <small>Gruppledare på Föfab bokbinderi</small>
//                         <li><h6>Egenföretagare, 2009-2011</h6></li>
//                             <small>Restaurangbranschen</small>
//                         <li><h6>Egenföretagare, 2019</h6></li>
//                             <small>Transportföretag, pågående </small>
//                         <li><h6>Bokbinderi, 2013-2020</h6></li>
//                             <small>Gruppledare på Aros bokbinderi</small>
//                     </ul>
//                 <div>
//                  <img className="col-md-4 col-lg-3 col-sm-auto img-fluid   mt-3 mx-5 "  src="https://73v3u36iopz178i0z3a33g7d-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/learning-experience-matters-768x771.jpg" alt="" />

//                 </div>

//               </div>
//             </div>
//         </div>
