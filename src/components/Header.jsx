import { useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation();

    return(
        <header className="flex w-full h-12">
            <ul className="w-full flex justify-evenly bg-white shadow-md items-center">
                <li
                className={`cursor-pointer ${location.pathname === "/" ? 'border-b-4 border-purple-500' : ''}`}
                >Sacola
                </li>
                <li
                className={`cursor-pointer ${location.pathname === "/Payment" ? 'border-b-4 border-purple-500' : ''}`}
                >Pagamento</li>
                <li
                className={`cursor-pointer ${location.pathname === "/confirmPayment" ? 'border-b-4 border-purple-500' : ''}`}
                >Confirmacao</li>
            </ul>
        </header>
    )
}
export default Header