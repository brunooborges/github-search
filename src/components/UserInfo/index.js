import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function UserInfo({ infos }) {
  return (
    <Container listLength={infos.length}>
      {infos.map((infos) => (
        <div
          className="card"
          key={infos.id}
        >
          <a
            href={infos.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={infos.avatar_url}
              alt="avatar"
            />
            <p>@{infos.login}</p>
          </a>
        </div>
      ))}
    </Container>
  );
}

UserInfo.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      html_url: PropTypes.string,
      avatar_url: PropTypes.string,
      login: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};
