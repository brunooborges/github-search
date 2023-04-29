import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0%   {transform: rotate(0deg)}
  100%   {transform: rotate(360deg)}
`;

const prixClipFix = keyframes`
  0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
  50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
  75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
`;

export const StyledLoader = styled.div`
  margin-top: 32px;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s linear infinite;

  &&::before,
  &&::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.colors.text.light};
    animation: ${prixClipFix} 2s linear infinite;
  }
  &&::after {
    inset: 8px;
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: ${({ theme }) => theme.colors.text.blue};
  }
`;
