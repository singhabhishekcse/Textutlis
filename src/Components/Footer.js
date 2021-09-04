import React from 'react'

const Footer = () => {
    return (
        <>  <footer className ="bg-dark text-center text-white">
        {/* <!-- Grid container --> */}
        <div className ="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className ="mb-4">
            {/* <!-- Facebook --> */}
            <a className ="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/mranoint" role="button"
              ><i className ="fab fa-facebook-f"></i></a>
      
            {/* <!-- Twitter --> */}
            <a className ="btn btn-outline-light btn-floating m-1" href="https://www.twitter.com/mranoint" role="button"
              ><i className ="fab fa-twitter"></i></a>
      
            {/* <!-- Google --> */}
            <a className ="btn btn-outline-light btn-floating m-1" href="https://www.google.com/mranoint" role="button"
              ><i className ="fab fa-google"></i></a>
      
            {/* <!-- Instagram --> */}
            <a className ="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/mranoint" role="button"
              ><i className ="fab fa-instagram"></i></a>
      
            {/* <!-- Linkedin --> */}
            <a className ="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/mranoint" role="button"
              ><i className ="fab fa-linkedin-in"></i></a>
      
            {/* <!-- Github --> */}
            <a className ="btn btn-outline-light btn-floating m-1" href="https://www.github.com/mranoint" role="button"
              ><i className ="fab fa-github"></i></a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}
      
        {/* <!-- Copyright --> */}
        <div className ="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>© 2020 Copyright:
          <a className ="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
            
        </>
    )
}

export default Footer
