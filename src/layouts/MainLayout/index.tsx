import { Outlet } from 'react-router-dom';
import { Sidebar } from '@components/Sidebar';
import * as S from './styles';

const MainLayout: React.FC = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Content>
        {/* Todas as páginas aparecem aqui */}
        <Outlet />
      </S.Content>
    </S.Wrapper>
  );
}

export { MainLayout }
