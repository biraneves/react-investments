export default function Header({children}) {
    return (
        <div className="bg-gray-900 h-24 p-8">
            <h1 className="text-white font-bold text-3xl leading-6 text-center">{children}</h1>
        </div>
    );
}