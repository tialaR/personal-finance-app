import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const SummaryGrid = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[300]};

  /* DESKTOP — 3 colunas ocupam todo espaço */
  grid-template-columns: repeat(3, 1fr);

  padding-top: ${({ theme }) => theme.spacing[400]};
  padding-bottom: ${({ theme }) => theme.spacing[400]};

  /* TABLET — encolhe até 13.375rem; quebra linha */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${({ theme }) => theme.dimensions.minColumnWidth}, 1fr)
    );
  }

  /* MOBILE — empilha */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewGrid = styled.section`
  flex: 1;   /* só aqui, porque este grid deve esticar */

  display: grid;
  gap: ${({ theme }) => theme.spacing[300]};

  /* DESKTOP */
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'pots         budgets'
    'transactions budgets'
    'transactions recurring';

  /* TABLET + MOBILE (≤ 1023px) */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;  
    grid-template-areas:
      'pots'
      'transactions'
      'budgets'
      'recurring';
  }
`;


