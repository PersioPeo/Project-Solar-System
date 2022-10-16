import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';
import './SolarSystem.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions-container">
          {missions.map((obj) => (<MissionCard
            key={ obj.name }
            name={ obj.name }
            description={ obj.description }
            year={ obj.year }
            country={ obj.country }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
