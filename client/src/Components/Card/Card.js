import React from "react";

export const Card = ({Headline, Summary, URL, id, children, clicks, change, name}) =>(
        
    <div className="card blue-grey darken-1">
        <div className="card-content white-text"><h2 className="whiteText">{Headline}</h2></div>
        <h2 className="card-title">{Summary}</h2>
        <div className="card-action">
            <a href={"https://www.foxnews.com"+URL} target="blank">Go</a>
            {children}
        </div>
    </div>
);
export default Card;
