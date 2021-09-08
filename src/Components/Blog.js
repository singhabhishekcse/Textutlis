import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    return (
        <>
        <div className="container">
            <h1 className="my-5" style= {{ color: props.mode === "dark" ? "white": "black" }}> Blogs:</h1>
           <div className="row my-2">
              
                <div className="col-sm-6 mt-2 ">
                
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" style= {{ color: props.mode === "dark" ? "black": "black" }}>1:-TextUtlis-Counter</h5>
                        <p className="card-text" style= {{ color: props.mode === "dark" ? "black": "black" }}><strong>Textutlis</strong> give you a way to analyze your text quickly and efficently.Be it word count character counter <br />
                        <strong>Textutlis</strong> is a free character count Tool that provides instant character count & word count statistics for a given text. Textutlis reports the number of words and characters. Thus it is suitable for  writing text with word/character limit. <br />
                        This words counter  software work in any web Browser such as Chrome, Firefox, Safari , Opera . its suits to count character in facebook,blog,books,excel document,pdf document , assay etc.</p>

                        <Link to="/" className="btn btn-primary">Read more...</Link>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 mt-2">
                    <div className="card">
                    <div className="card-body">
                   
                        <h5 className="card-title" style= {{ color: props.mode === "dark" ? "black": "black" }}>2:-TextUtlis-Counter</h5>
                        <p className="card-text" style= {{ color: props.mode === "dark" ? "black": "black" }}><strong>Textutlis</strong> give you a way to analyze your text quickly and efficently.Be it word count character counter <br />
                        <strong>Textutlis</strong> is a free character count Tool that provides instant character count & word count statistics for a given text. Textutlis reports the number of words and characters. Thus it is suitable for  writing text with word/character limit. <br />
                        This words counter  software work in any web Browser such as Chrome, Firefox, Safari , Opera . its suits to count character in facebook,blog,books,excel document,pdf document , assay etc.</p>
                        <Link to="/" className="btn btn-primary">Read more...</Link>
                    
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 mt-2">
                    <div className="card">
                    <div className="card-body">
                   
                        <h5 className="card-title" style= {{ color: props.mode === "dark" ? "black": "black" }}>3:-TextUtlis-Counter</h5>
                        <p className="card-text" style= {{ color: props.mode === "dark" ? "black": "black" }}><strong>Textutlis</strong> give you a way to analyze your text quickly and efficently.Be it word count character counter <br />
                        <strong>Textutlis</strong> is a free character count Tool that provides instant character count & word count statistics for a given text. Textutlis reports the number of words and characters. Thus it is suitable for  writing text with word/character limit. <br />
                        This words counter  software work in any web Browser such as Chrome, Firefox, Safari , Opera . its suits to count character in facebook,blog,books,excel document,pdf document , assay etc.</p>
                        <Link to="/" className="btn btn-primary">Read more...</Link>
                    
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 my-2">
                    <div className="card">
                    <div className="card-body">
                   
                        <h5 className="card-title" style= {{ color: props.mode === "dark" ? "black": "black" }}>4:-TextUtlis-Counter</h5>
                        <p className="card-text" style= {{ color: props.mode === "dark" ? "black": "black" }}><strong>Textutlis</strong> give you a way to analyze your text quickly and efficently.Be it word count character counter <br />
                        <strong>Textutlis</strong> is a free character count Tool that provides instant character count & word count statistics for a given text. Textutlis reports the number of words and characters. Thus it is suitable for  writing text with word/character limit. <br />
                        This words counter  software work in any web Browser such as Chrome, Firefox, Safari , Opera . its suits to count character in facebook,blog,books,excel document,pdf document , assay etc.</p>
                        <Link to="/" className="btn btn-primary">Read more...</Link>
                    
                    </div>
                    </div>
                </div>
               
            </div>
        </div>              
        </>
    )
}

export default Blog
