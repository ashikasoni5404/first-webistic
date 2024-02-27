import React from "react";
import "./counter.css"

const Counter = () => {
    return (
        <div>
            <div className="owl">
                <div className="containter">
                    <div className="row">
                        <div className="col count">
                            <span>  <i class="	fas fa-user-edit"></i></span>
                            <span>1500</span>
                            <span>Clients</span>
                        </div>
                        <div className="col count">
                            <span><i class="fa fa-heart-o"></i></span>
                            <span>10</span>
                            <span>Awards</span>
                        </div>
                        <div className="col count"><span><i class="fa fa-code"></i></span>
                            <span>1500</span>
                            <span>Compounds</span>
                        </div>
                        <div className="col count"><span>   <i class="fab fa-telegram-plane"></i>   </span>
                            <span>50</span>
                            <span>Countries</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="demo">

            </div>
        </div>
    )
}

export default Counter;
