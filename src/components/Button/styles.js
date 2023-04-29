import styled from 'styled-components';

export const Container = styled.button`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  padding: 8px 16px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  border: ${({ theme }) => theme.colors.button.border};
  transition: all ease;

  &:hover {
    background: ${({ theme }) => theme.colors.button.backgroundOnHover};
  }

  &:active {
    background: ${({ theme }) => theme.colors.button.backgroundOnClick};
    color: ${({ theme }) => theme.colors.button.textClick};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.inputDisabled.background};
    color: ${({ theme }) => theme.colors.text.dark};
    cursor: not-allowed;
  }
`;
