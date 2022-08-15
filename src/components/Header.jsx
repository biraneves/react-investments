export default function Header({children, size}) {
    let fontSize = 'text-xl';

    if (size === 'large')
        fontSize = 'text-3xl';
    return (
        <div className="bg-gray-900 h-24 p-8">
            <h1 className={`text-white font-bold leading-6 text-center ${fontSize}`}>{children}</h1>
        </div>
    );
}