import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ( {FÄRDIGHETER,ARBETSLIVSERFARENHET,Språkkunskaper,UTBILDNINGAR,Kontakt} ) => {
    return (
        

<div className="container-fluid mt-4 d-grid   ">
    
      
    <nav className="navbar Navbar-nav   shadow-none col-lg-10 col-md-auto col-sm-auto   me-auto ">
            <div className="container-fluid mx-5 d-flex position-absolute bottom-0 start-25 align-content-center ">
                <nav aria-label="breadcrumb ">
                <h5 className="text-light mb-1 ">Välkomna till mitt digitala cv:</h5>
                <h1 className="text-light mb-5 border-bottom border-warning">Yousif Azarakhsh Monfared</h1>
                    <ul className="breadcrumb gap-1 ">
                        <li className="gap-3"><p href="/#"><NavLink to="/UTBILDNINGAR"  activeClassName="activE"  className="text-white btn btn-bluee"> UTBILDNINGAR {UTBILDNINGAR}</NavLink></p></li>
                        <li className="gap-3"><p href="/#" ><NavLink to="/FÄRDIGHETER"  activeClassName="activE" className="text-white btn btn-bluee"> FÄRDIGHETER {FÄRDIGHETER} </NavLink></p></li>
                        <li className=""><p href="/#"><NavLink to="/ARBETSLIVSERFARENHET"  activeClassName="activE" className="text-white btn btn-bluee">ARBETSLIVSERFARENHET {ARBETSLIVSERFARENHET} </NavLink></p></li>
                        <li className="" ><p href="/#"><NavLink to="/Språkkunskaper"     activeClassName="activE"   className="text-white btn btn-bluee"> Språkkunskaper {Språkkunskaper} </NavLink></p></li>
                        <li className="" ><p href="/#"><NavLink to="/Kontakt"  activeClassName="activE" className="text-white btn btn-bluee"> Kontakt {Kontakt} </NavLink></p></li>
                    </ul>
                </nav>
            </div>
        </nav>
         


       
       
    
          
         
</div>
       
    )
}

export default Navbar






