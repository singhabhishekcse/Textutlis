import React , {useState}  from 'react'

import PropTypes from 'prop-types';


const NavBar = (props) => {
   
     const [show ,setshow] = useState(false)
    
    return (  
        <>  
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid ">
                        <a className="navbar-brand" href="/">{props.title}</a>
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {setshow(!show)} }>
                          <span className="navbar-toggler-icon"></span>
                          </button>
                   
                        <div className={`collapse navbar-collapse ${show ? "show":""}`} >
                       
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" style= {{ color: props.mode === "dark" ? "white": "black" }} aria-current="page" href="/">{props.home}</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" style= {{ color: props.mode === "dark" ? "white": "black" }} href="/">{props.blog}</a>
                            </li>
                           
                            <li className="nav-item">
                            <a className="nav-link " style= {{ color: props.mode === "dark" ? "white": "black" }} href="/" tabIndex="-1" >{props.about}</a>
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
                               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
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