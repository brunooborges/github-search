import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: ${({ listLength }) => (listLength === 1 ? '250px' : '100%')};
  grid-template-columns: ${({ listLength }) =>
    listLength === 1 ? 'repeat(1,1fr)' : 'repeat(5, 1fr)'};
  grid-gap: 16px;
  margin: 16px 0 32px 0;

  .card {
    border: 1px solid ${({ theme }) => theme.colors.infoCard.light};
    border-radius: 6px;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.infoCard.main};

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
    }

    img {
      max-width: 125px;
      width: 100%;
      height: auto;
      border-radius: 50%;
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.infoCard.light};
    }

    p {
      margin: 12px 0;
      color: ${({ theme }) => theme.colors.text.dark};
      text-align: center;
    }

    .otherInfos {
      max-width: 250px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: ${({ listLength }) =>
      listLength === 1 ? 'repeat(1,1fr)' : 'repeat(3, 1fr)'};
    width: ${({ listLength }) => (listLength === 1 ? '250px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: ${({ listLength }) =>
      listLength === 1 ? 'repeat(1,1fr)' : 'repeat(2, 1fr)'};
  }

  @media only screen and (max-width: 525px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
