import React from "react";

const SaveButton = props =>(
    <a className="waves-effect waves-light btn-large" onClick={props.click} name={props.name}>
        <i className="material-icons left">save</i>

      Save
    </a>
)
export default SaveButton;