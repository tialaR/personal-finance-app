import { useState } from 'react';
import {
  FiHome,
  FiTrendingDown,
  FiPieChart,
  FiDollarSign,
  FiClipboard,
  FiChevronsLeft,
} from 'react-icons/fi';

import * as S from './styles';

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const toggle = () => setExpanded((prev) => !prev);

  return (
    <S.SidebarContainer $expanded={expanded}>
      <div>
        <S.Brand $expanded={expanded}>finance</S.Brand>

        <S.Nav role="navigation">
          <S.NavItem to="/" end $expanded={expanded}>
            <FiHome />
            <span>Overview</span>
          </S.NavItem>

          <S.NavItem to="/transactions" $expanded={expanded}>
            <FiTrendingDown />
            <span>Transactions</span>
          </S.NavItem>

          <S.NavItem to="/budgets" $expanded={expanded}>
            <FiPieChart />
            <span>Budgets</span>
          </S.NavItem>

          <S.NavItem to="/pots" $expanded={expanded}>
            <FiDollarSign />
            <span>Pots</span>
          </S.NavItem>

          <S.NavItem to="/recurring-bills" $expanded={expanded}>
            <FiClipboard />
            <span>Recurring Bills</span>
          </S.NavItem>
        </S.Nav>
      </div>

      <S.Toggle onClick={toggle} $expanded={expanded}>
        <FiChevronsLeft />
        <span>Minimize Menu</span>
      </S.Toggle>
    </S.SidebarContainer>
  );
}
