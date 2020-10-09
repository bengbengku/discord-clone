import React from 'react';
import "./ChatHeader.css";
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';

function ChatHeader({ channelName }) {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader__search">
                    <input placeholder="Search"/>
                    <SearchIcon />
                </div>

                <SendIcon />
                <HelpIcon />
            </div>
        </div>
    )
}

export default ChatHeader;
