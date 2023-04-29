import React from 'react';

import PropTypes from 'prop-types';

import sad from '../../assets/images/sad.svg';

import { Container } from './styles';

export default function ErrorStatus({ searchTerm }) {
  return (
    <Container>
      <img
        src={sad}
        alt="Sad"
      />

      <div className="details">
        {!searchTerm && <strong>Github user could not be found!</strong>}
        {searchTerm && <strong>Github user ”{searchTerm}” could not be found!</strong>}
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
