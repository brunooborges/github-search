import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function SearchInput({ value, onChange, onKeyDown, disabled }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Search user..."
        autoFocus
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
    </Container>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
