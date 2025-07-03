import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.main`
  flex: 1;                     
  overflow-y: auto;
  padding-left: ${({ theme }) => theme.spacing[500]};
  padding-right: ${({ theme }) => theme.spacing[500]};
  padding-top: ${({ theme }) => theme.spacing[400]};
  padding-bottom: ${({ theme }) => theme.spacing[400]};
  background: #F2F3F7;
`;
