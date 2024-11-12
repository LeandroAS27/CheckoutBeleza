import { useContext } from "react"
import { FetchProduct } from "../context/SearchContext"

const Footer = ({children}) => {
    const {calculateTotalPrice} = useContext(FetchProduct);
    const totalPrice = calculateTotalPrice()

    return(
        <footer className="w-full md:w-2/4 bg-white mt-4">
            <div className="flex flex-col space-y-6">
                <div className="flex justify-between mx-4 mt-4">
                    <p>Produtos: </p>
                    <p>R$ {(totalPrice).toLocaleString('pt-BR', {minimunFractionDigits: 2, maximumFractionDigits: 2})}</p>
                </div>
                
                <div className="flex justify-between mx-4">
                    <p>Frete: </p>
                    <p>R$ 5,30</p>
                </div>

                <div className="flex justify-between mx-4">
                    <p>Desconto: </p>
                    <p className="text-purple-500 font-bold">R$ 30,00</p>
                </div>
                
                <div className="flex justify-between mx-4">
                    <p className="font-bold">Subtotal: </p>
                    <p className="font-bold">R$ {(totalPrice + 5.30 - 30.00).toLocaleString('pt-BR', {minimunFractionDigits: 2, maximumFractionDigits: 2})}</p>
                </div>
            </div>
            <div className="flex justify-center">
                {children}
            </div>
        </footer>
    )
}

export default Footer;