import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, description } = this.props;
    return (
      <div className="cardContainer border" data-testid="missions-card">
        <p data-testid="missions-name">{name}</p>
        <p data-testid="missions-year">{year}</p>
        <p data-testid="missions-country">{country}</p>
        <p data-testid="missions-description">{description}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

MissionCard.defaultProps = {
  name: 'Apollo 11',
  year: '1969',
  country: 'USA',
  description: 'Lua',
}.isRequired;

export default MissionCard;
