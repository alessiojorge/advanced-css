import React, { Component } from 'react';

import {
  Navigation,
  Popup,
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
        <Popup />
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
