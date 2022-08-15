import { reports } from "../data/reports";

export default function Fund({
    children,
    fundName = 'Fund name',
    invId
}) {

    const valueJan = reports.filter((report) => report.investmentId === invId && report.month === 1)[0].value;
    const valueDec = reports.filter((report) => report.investmentId === invId && report.month === 12)[0].value;
    const rendimentoPerc = ((valueDec / valueJan) - 1.0) * 100;
    
    const valueColor = valueJan < valueDec ? 'text-green-600' : 'text-red-600';

    return (
        <div className="border m-2 p-5 rounded-md shadow-sm w-3/4 mx-auto bg-white">
            <h2 className="font-semibold text-xl text-center">{fundName}</h2>
            <h3 className="font-semibold text-lg text-center my-2 text-gray-600">
                Rendimento total:{' '}
                <span className={valueColor}>
                    {(valueDec - valueJan).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} ({rendimentoPerc.toLocaleString('pt-br', {maximumFractionDigits: 2})}%)
                </span>
            </h3>
            {children}
        </div>
    );
}