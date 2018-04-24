import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import BeTheFirst from '../BodyComponents/BeTheFirst';
import MainInfo from '../BodyComponents/MainInfo';
import Invite from '../BodyComponents/Invite';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="mouse-icon hidden-xs">
				  <div class="scroll"></div>
        </div>
        <BeTheFirst/>
        <MainInfo />
        <Invite />
        <Footer />
      </div>
    );
  }
}

export default App;
