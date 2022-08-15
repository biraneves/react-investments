import { funds } from '../data/funds';

import Header from "../components/Header";
import Main from "../components/Main";
import Fund from "../components/Fund";

export default function ReactFundsPage() {
    return (
        <div>
            <Header size='large'>React Investments</Header>
            <Main>
                {
                    funds.map(fund => {
                        return (
                            <Fund fundName={fund.description} key={fund.id} invId={fund.id}></Fund>
                        );
                    })
                }
            </Main>
        </div>
    );
}