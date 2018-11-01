import React, { Component } from 'react';
import './App.scss';

import {
  Navigation,
  Header,
  About,
  Features,
  Tours,
  Stories,
  Booking,
  Footer
} from '../components/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Header />

        <main>
          <About />
          <Features />
          <Tours />
          <Stories />
          <Booking />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
