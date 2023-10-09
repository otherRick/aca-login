import styled from 'styled-components';
import { ButtonProps } from './Button.types';
import { getColorByVariant } from './helpers/getColorByVariant';

export const Button = styled.button<ButtonProps>`
  background-color: ${({ $variant }) => getColorByVariant($variant!).backgroundColor};
  border: none;
  border-radius: 100px;
  max-height: 52px;
  width: 340px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
