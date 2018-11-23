import React from "react";

const DeleteButton = props =>(
    <a className="waves-effect waves-light btn-large" onClick={props.click} name={props.name}>
        <i className="material-icons left">delete</i>

      Delete
    </a>
)
export default DeleteButton;