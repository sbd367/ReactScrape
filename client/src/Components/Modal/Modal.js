import React from "react";

export const Modal = props =>(
    <div id={props.id} className="modal">
            <div className="modal-content">
                <h2>Comments</h2>
                <ul>
                    <li>{props.comments}</li>
                </ul>
                <form>
                    <div className="input-field col m6">
                        <input onChange={props.change} name={props.name} placeholder="Comment" id="Comment" type="text" className="validate"/>
                    </div>
                </form>

            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a><a onClick={props.clicks} name={props.id} className="modal-close waves-effect waves-green btn-flat">Save</a>
            </div>
        </div>
    </div>
)
export default Modal;