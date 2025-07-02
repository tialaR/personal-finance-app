import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@layouts/MainLayout';
import { Overview } from '@pages/Overview';
import { Transactions } from '@pages/Transactions';
import { Budgets } from '@pages/Budgets';
import { Pots } from '@pages/Pots';
import { RecurringBills } from '@pages/RecurringBills';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Overview />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="budgets"      element={<Budgets />} />
          <Route path="pots"         element={<Pots />} />
          <Route path="recurring-bills" element={<RecurringBills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes }
