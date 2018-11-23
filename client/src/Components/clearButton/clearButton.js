import React from "react";

const ClearButton = props =>(
    <div className="TopButton">
        <a className="waves-effect waves-light top_button btn-large" {...props}>
            <i className="material-icons left">delete</i>

        Delete
        </a>
    </div>
)
export default ClearButton;