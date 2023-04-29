import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  max-width: 500px;
  width: 100%;

  input {
    width: 100%;
    background: ${({ theme }) => theme.colors.text.light};
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.dark};
    }

    &[disabled] {
      background-color: ${({ theme }) => theme.colors.inputDisabled.background};
      cursor: not-allowed;
    }
  }
`;
