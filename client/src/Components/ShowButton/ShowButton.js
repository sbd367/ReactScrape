import React from "react";

const ShowButton = props =>(
    <div className="TopButton">
    <a className="waves-effect waves-light btn-large"{...props}><i className="material-icons left">library_books</i>Show Articles</a>
    </div>
)
export default ShowButton;