import styled from 'styled-components';
import { ButtonProps } from './Button.types';
import { getColorByVariant } from './helpers/getColorByVariant';

export const Button = styled.button<ButtonProps>`
  background-color: ${({ $variant }) => {
    console.log(getColorByVariant($variant!).backgroundColor);

    return getColorByVariant($variant!).backgroundColor;
  }};
  border: none;
  border-radius: 100px;
  width: 340px;
  padding: 16px;
`;
