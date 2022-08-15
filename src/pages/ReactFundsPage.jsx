import { funds } from '../data/funds';
import { reports } from '../data/reports';

import Header from "../components/Header";
import Main from "../components/Main";
import Fund from "../components/Fund";
import FundReport from '../components/FundReport';
import FundMonth from '../components/FundMonth';

export default function ReactFundsPage() {
    return (
        <div>
            <Header size='large'>React Investments</Header>
            <Main>
                {
                    funds.map(fund => {
                        return (
                            <Fund fundName={fund.description} key={fund.id} invId={fund.id}>
                                <FundReport>
                                    {
                                        reports.filter(report => report.investmentId === fund.id).map(item => {
                                            return (
                                                <FundMonth key={item.id} investId={fund.id} month={item.month} year={item.year}
                                                    value={item.value} />
                                            );
                                        })
                                    }
                                </FundReport>
                            </Fund>
                        );
                    })
                }
            </Main>
        </div>
    );
}