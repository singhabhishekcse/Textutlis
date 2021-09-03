import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <>
           <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/" className="btn btn-primary">Go somewhere</Link>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/" className="btn btn-primary">Go somewhere</Link>
                    </div>
                    </div>
                </div>
            </div>
                            
        </>
    )
}

export default Blog
