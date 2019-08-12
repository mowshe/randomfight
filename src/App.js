import React from 'react';
import './App.css';
import FetchUser from './components/FetchUser.js'

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <FetchUser/>
        <h1>VS</h1>
        <FetchUser/>

      </header>
      </div>
    );
  }
}

export default App;
