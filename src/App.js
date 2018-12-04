import React, { Component } from 'react';
import dc from './dc_logo.png';
import cap from './captain_america.png';
import './App.css';

function Home() {
  return (
    <div>

        <h1>Welcome to our first React App!</h1>
        <div className="container">
          <div className="column">
            <img src={dc} className="app-dc" alt="stark"/>
          </div>
          <div className="column">
            <img src={cap} className="app-cap" alt="lannister"/>
          </div>
        </div>

    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>      
    );
  }
}

export default App;

{/* <header className="App-header">
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
</header> */}