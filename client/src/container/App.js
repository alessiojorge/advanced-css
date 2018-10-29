import React, { Component } from 'react';
import './App.scss';

import { Header, About, Features } from '../components/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <main>
          <About />
          <Features />
        </main>
      </div>
    );
  }
}

export default App;
