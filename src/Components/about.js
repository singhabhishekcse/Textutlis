import React from 'react'

const About = (props) => {




    return (
        <> <div className="container my-5">
          <h1 style= {{ color: props.mode === "dark" ? "white": "black" }}>About Us</h1>
            <div className="accordion my-3" id="accordionExample" >
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Analyze Your Text
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body"  style= {{ backgroundColor: props.mode === "dark" ? "##f4f5f6": "white",
                              color: props.mode === "dark" ? "black": "black"  }}>
                                    <strong>Textutlis</strong> give you a way to analyze your text quickly and efficently.Be it word count character count or
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Free To Use
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style= {{ backgroundColor: props.mode === "dark" ? "##f4f5f6": "white",
                              color: props.mode === "dark" ? "black": "black"  }}>
                                    <strong>Textutlis</strong> is a free character count Tool that provides instant character count & word count statistics for a given text. Textutlis reports the number of words and characters. Thus it is suitable for  writing text with word/character limit.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Browser Compatible
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style= {{ backgroundColor: props.mode === "dark" ? "##f4f5f6": "white",
                              color: props.mode === "dark" ? "black": "black"  }}>
                                   This words counter  software work in any web Browser such as Chrome, Firefox, Safari , Opera . its suits to count character in facebook,blog,books,excel document,pdf document , assay etc.
                                </div>
                                </div>
                            </div>
                   </div>
                </div>
        </>
    )
}

export default About
