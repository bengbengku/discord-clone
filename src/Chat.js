import React, { useEffect, useState } from "react";
import "./Chat.css";
import Message from "./Message";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import db from "./firebase";
import firebase from "firebase";

function Chat() {
  const channelId = useSelector(selectChannelId);
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessages = (e) => {
    e.preventDefault();
    db.collection('channels').doc(channelId).collection('messages')
    .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message 
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ketikan sesuatu untuk channel ${channelName} `}
          />
          <button
            disabled={!channelId}
            className="chat__inputButton"
            type="submit"
            onClick={sendMessages}
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsRoundedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
