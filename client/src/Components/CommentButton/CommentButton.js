import React from "react";

const CommentButton = props =>(
    <a className="waves-effect modal-trigger waves-light btn-large" name={props.name} onClick={props.click} href={"#"+props.name}>
        <i className="material-icons left">comment</i>

      Comment
    </a>
)
export default CommentButton;