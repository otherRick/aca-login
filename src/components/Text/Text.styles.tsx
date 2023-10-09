import styled from 'styled-components';
import type { TextProps } from './Text.types';

export const Text = styled.p<TextProps>`
  color: ${({ theme: { colors }, $color }) => colors[$color!] || colors.navy000};
  font-size: ${({ theme: { sizes }, $size }) => sizes[$size!] || sizes.m}px;
  text-transform: ${({ $capitalized }) => ($capitalized ? 'uppercase' : undefined)};
  margin: 0px;
  padding: 0px;
  font-weight: ${({ theme: { weights }, $weight }) => weights[$weight!] || weights.regular};
  letter-spacing: ${({ $letterSpacingEnabled }) => ($letterSpacingEnabled ? '12px' : undefined)};
`;
