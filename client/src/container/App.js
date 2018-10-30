import React, { Component } from 'react';
import './App.scss';

import { Header, About, Features, Tours, Stories } from '../components/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <main>
          <About />
          <Features />
          <Tours />
          <Stories />
        </main>
      </div>
    );
  }
}

export default App;
