import React from 'react'
// import { NavLink } from 'react-router-dom'

const Kontakt = () => {
    return (
        <div>
            {/* <NavLink to="/Kontakt"></NavLink> */}

            <div>

{/* <NavLink to="/FÄRDIGHETER"><h1>FÄRDIGHETER</h1></NavLink> */}
  <div className="container-fluid  ">
    <div className="card-body col-md-12 mx-sm-5 mt-5  text-dark d-flex justify-content-center  align-content-center text-start  animate__animated animate__backInDown">
            <ul>
            <label className="mb-3  mt-5 text-info border-bottom text-end" ><h4>KONTAKT</h4></label>
                <h6>Yousif Azarakhsh Monfared</h6>
                    
                    <i className="fas fa-id-card"><span className=" mx-2">1983-12-08-****</span></i>
                     <br />
                    
                      <i className="fas fa-at"><a className="mx-2" href="http://www.gmail.com">yousif.azarakhshmonfared@edu.arboga.se</a></i>
                       <br />
                       <i className="fas fa-phone-alt"><span className="mx-2">070-748 88 66</span></i>
                       
            
            </ul>
      
      </div>
  
  
  
  </div>
            
 

</div>



        </div>
    )
}

export default Kontakt


