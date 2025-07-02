import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.main`
  flex: 1;                     
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[300]};
  background: ${({ theme }) => theme.colors.white};
`;
