import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@layouts/MainLayout';
import { Overview } from '@pages/Overview';
import { Transactions } from '@pages/Transactions';
import { Budgets } from '@pages/Budgets';
import { Pots } from '@pages/Pots';
import { RecurringBills } from '@pages/RecurringBills';
import { NotFound } from '@pages/NotFound';

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
        handle: { pageTitle: 'Overview' },
      },
      {
        path: 'transactions',
        element: <Transactions />,
        handle: { pageTitle: 'Transactions' },
      },
      {
        path: 'budgets',
        element: <Budgets />,
        handle: { pageTitle: 'Budgets' },
      },
      {
        path: 'pots',
        element: <Pots />,
        handle: { pageTitle: 'Pots' },
      },
      {
        path: 'recurring-bills',
        element: <RecurringBills />,
        handle: { pageTitle: 'Recurring Bills' },
      },
      {
        path: '*',
        element: <NotFound />,
        handle: { pageTitle: '404 - Not Found' },
      },
    ],
  },
]);

export const AppRoutes: React.FC = () => {
  return <RouterProvider router={appRoutes} />;
}
