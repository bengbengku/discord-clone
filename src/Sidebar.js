import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlineIcon from '@material-ui/icons/InfoOutlined';
import SidebarChannel from "./SidebarChannel";
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Benget Programmer</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel" />
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>  

            <div className="sidebar__voice">
                <SignalCellularAltIcon 
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlineIcon/>
                    <CallIcon />
                </div>
            </div>          
        </div>
    )
}

export default Sidebar
