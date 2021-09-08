import React , {useState}  from 'react'

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
   
     const [show ,setshow] = useState(false)
    
    return (  
        <>    
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                 
                    <div className="container-fluid">
                       
                    <Link className="navbar-brand mx-3" to="/">{props.title}</Link>
                   
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {setshow(!show)} }>
                          <span className="navbar-toggler-icon"></span>
                          </button>
                       
                        
                        <div className={`collapse navbar-collapse ${show ? "show":""}`} >
                       
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                            <Link className="nav-link active mx-2" style= {{ color: props.mode === "dark" ? "white": "black" }} aria-current="page" to="/">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link mx-2" style= {{ color: props.mode === "dark" ? "white": "black" }} to="/blog">{props.blog}</Link>
                            </li>
                           
                            <li className="nav-item">
                            <Link className="nav-link mx-2 " style= {{ color: props.mode === "dark" ? "white": "black" }} to="/about" tabIndex="-1" >{props.about}</Link>
                            </li>
                            </ul>
                            



                             {/* <form className="d-flex"> */}
                            {/* <button className="btn btn-outline-success login-btn  me-2" type="submit">{props.login}</button>
                            <button className="btn btn-outline-success logout-btn  me-2" type="submit">{props.logout}</button> */}
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                             </form>  */}
                            <div className={`form-check form-switch text-${ props.mode === "dark" ? "light": "dark" }`}>
                                       

                           






                              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                               <label className="form-check-label mx-2 " htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                            </div>

                        </div>
                 
                    </div>
                 </nav>
                
           
        </>
    )
}

export default NavBar

NavBar.prototype={ title: PropTypes.string.isRequired,
                   home: PropTypes.string.isRequired,
                   about: PropTypes.string.isRequired,
                   blog: PropTypes.string.isRequired,
                   login: PropTypes.string.isRequired,
                   logout:PropTypes.string.isRequired,



}
NavBar.defaultProps ={
                   title:" Set Title Here",
                   home: " Set Home Here",
                   about:" About Text Here",
                   blog: " Blog here",
                   login: " Log In Button Here",
                   logout:"Log out Button here",
}