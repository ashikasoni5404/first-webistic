import React from "react";
import "./template.css"

const Template = () => {
    return (
        <>
            <div className="container ">
                <div className="row temp-box">
                    <div className="col-md ">
                        <img className="temp-image" src="https://wallpapers.com/images/high/science-lab-background-1600-x-1066-0qtvnv04om24l3am.webp" alt="#" />
                    </div>

                    <div className="col-md temp-bio">
                        <div class="row">
                                    <div class="">
                                        <h2 class="card-title">ARTIS STANDARDS</h2>
                                    </div>
                        </div>
                        <div className="row">
                        <p class="card-temp-text"><span>We are one of the world leading companies in manufacturing pharmaceutical standards, including stable-isotope labeled internal standards, metabolites, degradation compounds/impurities, and inhibitor reference compounds. Our products are widely used in Bioanalysis (BA) for preclinical/early stage clinical studies and Bioequivalence (BE) studies for generic drug development.

We also provide stable-isotope labeled reference standards for environmental and agricultural uses.</span><br/><br/>
<a href="#" class="btn btn-primary">READ MORE</a></p>
                                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Template;