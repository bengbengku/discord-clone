import React from 'react'
import "./Message.css";
import {Avatar} from "@material-ui/core";

function Message() {
    return (
        <div className="message">
            <Avatar src="https://avatars0.githubusercontent.com/u/42617505?s=460&u=1b725f9f405fe7e5a0f77ab112326619a8ac1d96&v=4"/>
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
