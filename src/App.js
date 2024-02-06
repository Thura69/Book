import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Add the Bidvertiser script here
    const script = document.createElement('script');
    script.src = `//bdv.bidvertiser.com/BidVertiser.dbm?pid=Bidvertiser2091116&bid=1927833`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
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
