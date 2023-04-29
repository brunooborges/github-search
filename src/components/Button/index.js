import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ onClick, disabled }) {
  return (
    <Container
      onClick={onClick}
      disabled={disabled}
    >
      Search
    </Container>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
