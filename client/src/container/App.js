import React, { Component } from 'react';
import './App.scss';

import { Header, About, Features, Tours } from '../components/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <main>
          <About />
          <Features />
          <Tours />
        </main>
      </div>
    );
  }
}

export default App;
