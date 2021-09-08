import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <> 
         <footer className ="bg-dark text-center text-white mt-5">
                    {/* <!-- Grid container --> */}
                    <div className ="container p-4 pb-0">
                      {/* <!-- Section: Social media --> */}
                      <section className ="mb-4">
                        {/* <!-- Facebook --> */}
                        <a className ="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/mranoint" role="button"
                          ><i className ="bi bi-facebook"></i></a>
                  
                        {/* <!-- Twitter --> */}
                        <a className ="btn btn-outline-light btn-floating m-1" href="https://www.twitter.com/mranoint" role="button"
                          ><i className ="bi bi-twitter"></i></a>
                  
                        {/* <!-- Google --> */}
                        <a className ="btn btn-outline-light btn-floating m-1" href="https://www.google.com/mranoint" role="button"
                          ><i className ="bi bi-google"></i></a>
                  
                        {/* <!-- Instagram --> */}
                        <a className ="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/mranoint" role="button"
                          ><i className ="bi bi-instagram"></i></a>
                  
                        {/* <!-- Linkedin --> */}
                        <a className ="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/mranoint" role="button"
                          ><i className ="bi bi-linkedin"></i></a>
                  
                        {/* <!-- Github --> */}
                        <a className ="btn btn-outline-light btn-floating m-1" href="https://www.github.com/mranoint" role="button"
                          ><i className ="bi bi-github"></i></a>
                      </section>
                      {/* <!-- Section: Social media --> */}
                    </div>
                    {/* <!-- Grid container --> */}
                  
                    {/* <!-- Copyright --> */}
                    <div className ="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>© 2022 Copyright :  
                      <Link className ="text-white" to="/" style={{textDecorationStyle:"none"}}>TextUtlis</Link>
                    </div>
                    {/* <!-- Copyright --> */}
        </footer>
            
        </>
    )
}

export default Footer
