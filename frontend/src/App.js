import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [message, setMessage] = useState('Default Message');

  useEffect(() => {
    getMessage();
  });

  const getMessage = async () => {
    const response =  await axios.get("http://localhost:8080/api/hello");
    setMessage(response.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Message from Backend: {message}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
