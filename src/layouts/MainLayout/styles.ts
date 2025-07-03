import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;             
  width: 100%;
`;

export const Content = styled.main`
  flex: 1; /* ocupa todo o resto */
  min-height: 0; /* evita overflow fantasma */
  overflow-y: auto; /* scroll só se precisar em todas as pages */

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  padding-left: ${({ theme }) => theme.spacing[500]};
  padding-right: ${({ theme }) => theme.spacing[500]};
  padding-top: ${({ theme }) => theme.spacing[400]};
  padding-bottom: ${({ theme }) => theme.spacing[400]};

  background: #F2F3F7;
`;
