import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector()
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
