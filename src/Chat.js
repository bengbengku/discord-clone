import React from 'react';
import './Chat.css';
import Message from "./Message";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input placeholder="Type a message ..."/>
                    <button className="chat__inputButton" type="submit">
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsRoundedIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat;
