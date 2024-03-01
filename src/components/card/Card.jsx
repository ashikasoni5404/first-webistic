import React from "react";
import "./card.css";

const Card = () => {

    return (
        <>
            <section className="cardd ">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div class="card-body">
                                <div><img class="card-image" src="https://artisbiotech.com/images/icons/browser.png" alt="#" /></div>
                                <br />
                                <h3 className="card-heading">CONSTANT R&D</h3>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card-body">
                                <div><img class="card-image" src="https://artisbiotech.com/images/icons/browser.png" alt="#" /></div>
                                <br />
                                <h3 className="card-heading">CONSTANT R&D</h3>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card-body">
                                <div><img class="card-image" src="https://artisbiotech.com/images/icons/browser.png" alt="#" /></div>
                                <br />
                                <h3 className="card-heading">CONSTANT R&D</h3>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
};
export default Card;
