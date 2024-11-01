import Footer from "../components/Footer";
import Header from "../components/Header"
import ProductsDetails from "../components/ProductsDetails";

import {useNavigate} from 'react-router-dom'

const Bag = () => {
    const navigate = useNavigate()

    const handleClickBuy = () => {
        navigate(`/Payment`);
    }

    return(
        <div className="bg-gray-100 w-full h-screen">
            <header className="flex w-full justify-center items-center">
                <Header/>
            </header>

            <main className="bg-white border shadow-md rounded-lg mx-auto mt-8 p-6 max-w-md w-full">
                <ProductsDetails/>
            </main>

            <footer className="flex flex-col items-center">
                <Footer/>
                <button
                onClick={handleClickBuy}
                className="w-3/4 py-2 px-2 bg-purple-500 text-white font-bold rounded-md"
                >Seguir para o pagamento
                </button>
            </footer>
        </div>
    )
}

export default Bag;