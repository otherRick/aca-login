import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.navy400};
  flex-direction: column;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  margin: 30px 0;
`;
