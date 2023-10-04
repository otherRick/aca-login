import styled from 'styled-components';
import type { TextProps } from './Text.types';

export const Text = styled.p<TextProps>`
  color: ${({ theme: { colors }, $color }) => colors[$color!] || colors.navy000};
  font-size: ${({ theme: { sizes }, $size }) => sizes[$size!] || sizes.m}px;
`;
