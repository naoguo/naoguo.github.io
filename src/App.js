import logo from './logo.png';
import './App.css';

import ReactGA from 'react-ga4';
ReactGA.initialize('G-WVGE68JT2Q');
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/naoguo" 
          target="_blank"
          rel="noopener noreferrer"
        >
          BrainPod脑锅
        </a>
      </header>
    </div>
  );
}

export default App;
