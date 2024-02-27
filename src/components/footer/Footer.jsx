import React from "react";
import "./footer.css"
const Footer = () => {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <ul class="adress">
                                <span>Comapnay Info</span>
                                <li>
                                    <p class="con-para">We are one of the world leading companies in manufacturing pharmaceutical standards, including stable-isotope labeled internal standards, metabolites, degradation compounds / impurities, and inhibitor reference compounds</p>
                                </li>
                                <li>
                                    <button type="button" class="btn btn-outline-danger">&gt; Read More</button>
                                </li>


                            </ul>
                        </div>

                        <div class="col">
                            <ul class="contact">
                                <span>Contact</span>
                                <li>
                                    <p class="con-para"> India : +90 1234 56789</p>
                                </li>

                                <li>
                                    <p class="con-para">Email : info@gmail.com</p>
                                </li>

                            </ul>
                        </div>

                        <div class="col buttn">
                            <span>Information</span>
                            <div className="row" >
                                <div className="col">
                                <button type="button" class=" first-btn">PRODUCT</button>
                                </div>
                                <div className="col">
                                <button type="button" class=" first-btn">CUSTOM ANALYSIS</button>
                                </div>
                            </div>
                            <div className="row sec-line" >
                                <div className="col">
                                <button type="button" class=" first-btn">CUSTOM SYSTHESIS</button>
                                </div>
                                <div className="col">
                                <button type="button" class=" first-btn">CONTACT US</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </footer>

        </div>

    )
}
export default Footer;