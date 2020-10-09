import React from 'react'
import "./Message.css";
import {Avatar} from "@material-ui/core";

function Message() {
    return (
        <div className="message">
            <Avatar src=""/>
            <div className="message__info">
                <h4>bengbengku
                    <span className="message__timestamp">this is timestamp</span>
                </h4>
                <p>This is message</p>
            </div>
        </div>
    )
}

export default Message
