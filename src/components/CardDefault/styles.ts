import styled, { css } from 'styled-components';

type CardProps = {
  $area?: string  /** nome da área declarada em `grid-template-areas` */
}

export const Card = styled.div<CardProps>`
  ${({ $area }) =>
    $area &&
    css`
      grid-area: ${$area};
    `}

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing[150]};
  padding: ${({ theme }) => theme.spacing[400]};
  width: 100%;          /* ocupa todo o espaço disponível */
  display: flex;
  flex-direction: column;

  /* Mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing[300]};
  }
`;
