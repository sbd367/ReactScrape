import React from "react";

const CommentButton = props =>(
    <button className="waves-effect modal-trigger waves-light btn-large" name={props.name} onClick={props.click} data-target={props.name}>
        <i className="material-icons left">comment</i>

      Comment
    </button>
)
export default CommentButton;