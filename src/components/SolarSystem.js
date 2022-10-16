import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="container">
          {planets.map((obj) => (<PlanetCard
            key={ obj.name }
            planetName={ obj.name }
            planetImage={ obj.image }
          />))}
        </div>
      </div>
    );
  }
}
export default SolarSystem;
