import { monthsOfTheYear } from "../data/months";
import { reports } from "../data/reports";

export default function FundMonth({
    month = 1,
    year = 2020,
    value = 0.0,
    investId
}) {
    const fundMonth = monthsOfTheYear.filter(item => item.month === month)[0].monthAbbrev;

    let priorValue = 0.0;
    let deltaPerc = 0.0;

    if (month > 1)
        priorValue = reports.filter(item => item.investmentId === investId && item.month === (month - 1))[0].value;

    if (priorValue > 0.0)
        deltaPerc = ((value / priorValue) - 1.0) * 100;

    let deltaColor = deltaPerc < 0 ? 'text-red-600' : 'text-green-600';
    if (month === 1)
        deltaColor = 'text-black-900';

    return (
        <div className="flex flex-row p-2 border-b">
            <div className="w-32">{fundMonth}/{year}</div>
            <div className={`flex-grow font-semibold ${deltaColor}`}>{value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
            <div className={`text-right font-semibold w-32 ${deltaColor}`}>{deltaPerc.toLocaleString('pt-BR', {maximumFractionDigits: 1, minimumFractionDigits: 1})}%</div>
        </div>
    );
}