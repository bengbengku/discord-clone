import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  
  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar />
        <Chat />
        </>
      ) : (
        <h2>Anda harus login</h2>
      )}
      
    </div>
  );
}

export default App;
