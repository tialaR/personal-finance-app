import type { ReactNode } from 'react';
import * as S from './styles';

interface CardDefaultProps {
  children: ReactNode;
  area?: string;
}

export const CardDefault: React.FC<CardDefaultProps> = ({
  children,
  area,
}) => <S.Card $area={area}>{children}</S.Card>;
