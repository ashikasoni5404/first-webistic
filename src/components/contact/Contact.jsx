import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <>
            <div>
                <section  >
                    <img class="foto"  src="https://media.istockphoto.com/id/1141639313/photo/contact-us-woman-hand-holding-icon-customer-support-concept-copy-space.jpg?s=612x612&w=0&k=20&c=HK-XWrrf6kuezCVb_hvSE1fWu-vpsqoCDb30En5H8y8= " alt="#" />
                </section>
                <br/>
                <section>
                <div class="container">
                    <div class="row">
                        <div class="col first">
                            <div className="india-info">

                                <h1> <span>&#9998;</span> CONTACT INFORMATION</h1>
                                <div className="sub_head"><h3>India</h3></div>
                                <address className="contact_add">
                                    <div > Email :<a href="mailto:jim@example.com">jim@example.com</a><br /></div>
                                    <div> Tel :<a href="tel:+918849247288">+918849247288 / +918793715125</a></div>
                                    <div>Artis Biotech India LLP.: 1-Park View, Plot No. 1-3, Survey No. 156/2P, 79/2P, Palghar East, Maharashtra, India-401404</div>
                                </address>
                            </div>
                            <div className="china-info">
                                <div className="sub_head"><h3>China</h3></div>
                                <address className="contact_add">
                                    <div> Email :<a href="mailto:jim@example.com">jim@example.com</a><br /></div>
                                    <div> Tel :<a href="tel:+14155550132">+1 (415) 555‑0132</a></div>
                                    <div>Artis Biotech India LLP.: 1-Park View, Plot No. 1-3, Survey No. 156/2P, 79/2P, Palghar East, Maharashtra, India-401404</div>
                                </address>
                            </div>


                        </div>


                        <div class="col second">
                            <h1><span>&#9993;</span> GET ON TOUCH</h1>
                            <br/>
                           <div className="main_form">
                           <form>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                                        Name <span className="dot"> *</span>
                                    </label>
                                    <div class="col-sm-10">
                                        <input type="name" class="form-control" id="" placeholder="Enter Name" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                                        Email <span className="dot"> *</span>
                                    </label>
                                    <div class="col-sm-10">
                                        <input type="name" class="form-control" id="" placeholder="abc@gmail.com" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                                        Phone No
                                    </label>
                                    <div class="col-sm-10">
                                        <input type="name" class="form-control" id="" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                                        Product
                                    </label>
                                    <div class="col-sm-10">
                                        <input type="name" class="form-control" id="" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                                        Comment<span className="dot">*</span>
                                    </label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    </div>
                                </div>


                                <button type="submit" class="btn btn-danger .btn-lg buttn" >
                                    SEND YOUR MESSAGE
                                </button>



                            </form>
                           </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        </>
    );
};
export default Contact;
