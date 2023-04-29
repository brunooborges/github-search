import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 350px;
  }

  @media only screen and (max-width: 525px) {
    img {
      width: 300px;
    }
  }
`;
