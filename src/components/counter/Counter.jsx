import React from "react";
import "./counter.css"

const Counter = () => {
    return (
        <div className="counter">
            <div className="owl">
                        <div className=" count">
                            <span>  <i class="	fas fa-user-edit"></i></span>
                            <span>1500</span>
                            <span>Clients</span>
                        </div>
                        <div className=" count">
                            <span className="h-fa"><i class="fa fa-heart" aria-hidden="true"></i></span>
                            <span className="num">10</span>
                            <span>Awards</span>
                        </div>
                        <div className="count"><span><i class="fa fa-code"></i></span>
                            <span>1500</span>
                            <span>Compounds</span>
                        </div>
                        <div className=" count"><span>   <i class="fab fa-telegram-plane"></i>   </span>
                            <span>50</span>
                            <span>Countries</span>
                        </div>
            </div>
        </div>
    )
}

export default Counter;
