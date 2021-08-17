import React from 'react'
// import { NavLink } from 'react-router-dom'

const Färdigheter = () => {
    return (
        <div>

          {/* <NavLink to="/FÄRDIGHETER"><h1>FÄRDIGHETER</h1></NavLink> */}
            <div className="container-fluid  ">
              <div className="card-body col-md-12 mx-sm-5 mt-5 mx-10 text-dark d-flex justify-content-between  align-content-center text-start  animate__animated animate__backInDown">
                      <ul>
                          <label className=" mb-3  mt-5 text-info border-bottom  text-end " ><h4>Färdigheter</h4></label>
                          <li>B-körkort</li>
                          <li>Truckkort</li>
                          <li>Officepaketet, Mac och Windows</li>
                      </ul>
                <div>
                  <img className="col-md-6 col-lg-8 img-fluid col-sm-12 d-none d-sm-block d-sm-none d-md-block   mt-5" src="https://prylkoll.se/wp-content/uploads/2008/10/tool-fist-470-1008.jpg" alt="" height="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Färdigheter
