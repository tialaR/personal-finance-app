import { CardSummary } from "@components/CardSummary";
import { CardDefault } from "@components/CardDefault";

import * as S from './styles';

const Overview: React.FC = () => {
    return(
        <S.Wrapper>
            <S.SummaryGrid>
                <CardSummary
                    title="Current Balance"
                    amount="$4,836.00"
                    variant="primary"
                />
                <CardSummary
                    title="Income"
                    amount="$3,814.25"
                />
                <CardSummary
                    title="Expenses"
                    amount="$1,700.50"
                />
            </S.SummaryGrid>
        
            <S.OverviewGrid>
                <CardDefault area="pots">
                    <h2>Pots</h2>
                    <p>Descrição…</p>
                </CardDefault>

                <CardDefault area="budgets">
                    <h2>Budgets</h2>
                    <p>Descrição…</p>
                </CardDefault>

                <CardDefault area="transactions">
                    <h2>Transactions</h2>
                    <p>Descrição…</p>
                </CardDefault>

                <CardDefault area="recurring">
                    <h2>Recurring Bills</h2>
                    <p>Descrição…</p>
                </CardDefault>
            </S.OverviewGrid>
        </S.Wrapper>
  );
}

export { Overview }