import { createContext, useState } from "react";

export const FetchProduct = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const calculateTotalPrice = () => {
        return products.reduce((total, product) => total + product.price, 0)
    };

    return(
        <FetchProduct.Provider value={{products, setProducts, calculateTotalPrice}}>
            {children}
        </FetchProduct.Provider>
    )
}