import React from "react";

export const Card = ({Headline, Summary, URL, children}) =>(
    
    <div className="card blue-grey darken-1">
        <div className="card-content white-text"><h2 className="whiteText">{Headline}</h2></div>
        <h2 className="card-title">{Summary}</h2>
        <div className="card-action">
            <a href={URL}>Go</a>
            {children}
        </div>
    </div>

);
export default Card;
