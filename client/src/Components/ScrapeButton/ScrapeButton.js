import React from "react";

const ScrapeButton = props =>(
    <div className="TopButton">
        <a className="waves-effect waves-light btn-large"{...props}><i className="material-icons left">cloud</i>Scrape</a>
    </div>
)
export default ScrapeButton;