import React, { Component } from 'react';
import './App.scss';

import { Header, About } from '../components/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <main>
          <About />
        </main>
      </div>
    );
  }
}

export default App;
