import { useContext } from "react"
import { FetchProduct } from "../context/SearchContext"

const Footer = ({children}) => {
    const {calculateTotalPrice} = useContext(FetchProduct);
    const totalPrice = calculateTotalPrice()

    return(
        <footer className="w-full md:w-2/4 h-52 bg-white mt-4">
            <div className="flex flex-col h-full space-y-6">
                <div className="flex justify-between mx-4 mt-4">
                    <p>Produtos: </p>
                    <p>R${totalPrice}</p>
                </div>
                
                <div className="flex justify-between mx-4">
                    <p>Frete: </p>
                    <p>R$ 5,30</p>
                </div>

                <div className="flex justify-between mx-4">
                    <p>Desconto: </p>
                    <p className="text-purple-500 font-bold">R$ 30,00</p>
                </div>

                <p className="font-bold my-4 mx-4">Subtotal R$ {totalPrice}</p>
            </div>
            <div className="flex justify-center">
                {children}
            </div>
        </footer>
    )
}

export default Footer;