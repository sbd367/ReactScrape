import React from "react";

export const Card = ({Headline, Summary, URL, id, children, clicks, change, name}) =>(
<div className="LeCard">
    <div id={id} className="modal">
        <div className="modal-content">
            <form>
                <div className="input-field col m6">
                    <input onChange={change} name={name} placeholder="Comment" id="Comment" type="text" className="validate"/>
                </div>
            </form>

        <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a><a onClick={clicks} className="modal-close waves-effect waves-green btn-flat">Save</a>
        </div>
    </div>
</div>
    
    <div className="card blue-grey darken-1">
        <div className="card-content white-text"><h2 className="whiteText">{Headline}</h2></div>
        <h2 className="card-title">{Summary}</h2>
        <div className="card-action">
            <a href={"https://www.foxnews.com"+URL} target="blank">Go</a>
            {children}
        </div>
    </div>
</div>

);
export default Card;
