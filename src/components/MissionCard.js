import React from 'react';
import PropTypes from 'prop-types';

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
};

MissionCard.defaultProps = {
  name: 'Apollo 11',
  year: '1960',
  country: 'USA',
  description: 'LUA',

};

export default MissionCard;
