import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Title from './components/Title';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <SolarSystem />
        <Title />
        <Missions />
        <footer>2022 - Pérsio Pereira - Projeto Solar System</footer>
      </div>
    );
  }
}

export default App;
