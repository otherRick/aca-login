import styled from 'styled-components';
import { InputContainerProps, InputProps } from './Input.types';

const getBorderProperty = (color: string) => `1px solid ${color}`;
const getWidthSize = (fullWidth?: boolean, isWeb?: boolean) =>
  fullWidth ? (isWeb ? 490 : 340) : 232;

export const Container = styled.div<InputContainerProps>`
  background-color: ${({ theme: { colors } }) => colors.navy300};
  border: ${({ $errorMessage, theme: { colors } }) =>
    $errorMessage ? getBorderProperty(colors.red600) : 'none'};
  border-radius: 6px;
  width: ${({ $fullWidth, $isWeb }) => getWidthSize($fullWidth, $isWeb)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  box-sizing: border-box;
`;

export const InfoTextWrapper = styled.div`
  margin-left: 20px;
  max-width: 300px;
`;

export const SvgWrapper = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  &:hover {
    opacity: 0.6;
  }
  &:active {
    opacity: 0.3;
  }
`;

export const Input = styled.input<InputProps>`
  background-color: transparent;
  color: ${({ theme: { colors } }) => colors.navy900};
  font-weight: ${({ theme: { weights } }) => weights.regular};
  border: none;
  flex: 10;
  padding: 20px;
  outline: none;
`;
