import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ProductDetails from '../components/ProductsDetails'
import Footer from "../components/Footer";

const ConfirmPayment = () => {
    const location = useLocation();
    const data = location.state || {};
    const navigate = useNavigate();

    const maskCardNumber = (cardNumber) => {
        const cleanedCardNumber = cardNumber.replace(/\s+/g, '');

        return cleanedCardNumber.slice(0, 12).replace(/\d/g, '*') + cleanedCardNumber.slice(-4)
    }

    const maskedCardNumber = maskCardNumber(data.cardNumber)

    const handleClick = () => {
        navigate(`/`)
    }

    return(
        <div className="w-full min-h-screen bg-gray-100">
            <header className="flex w-full md:w-2/4 justify-center items-center mx-auto">
                <Header/>
            </header>

            <main className="w-full flex flex-col items-center flex-grow mt-4">
                <section className="bg-white w-full sm:w-3/4 lg:w-1/2 h-40 flex flex-col justify-center items-center border rounded-md">
                    <h1 className="font-bold text-xl">Compra efetuada com sucesso</h1>
                    <p>{maskedCardNumber}</p>
                    <p>{data.cardHolder}</p>
                    <p>{data.expiryDate}</p>
                </section>

                <section className="bg-white border shadow-md rounded-lg mx-auto my-8 p-6 max-w-md w-full">
                    <ProductDetails/>
                </section>
            </main>

            <footer className="flex flex-col justify-center items-center">
                <Footer/>
                <button
                className="w-full md:w-2/4 py-2 px-2 bg-black text-white font-bold rounded-md"
                onClick={handleClick}
                >Voltar ao inicio do protótipo</button>
            </footer>
        </div>
    )
}

export default ConfirmPayment;