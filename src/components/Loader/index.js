import React from 'react';

import PropTypes from 'prop-types';

import { StyledLoader } from './styles';

export default function Loader({ size = 48 }) {
  return <StyledLoader size={size} />;
}

Loader.propTypes = {
  size: PropTypes.number,
};
