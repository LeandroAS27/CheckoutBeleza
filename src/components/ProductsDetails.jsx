import { useContext } from "react"
import { FetchProduct } from "../context/SearchContext"
import { useEffect } from "react"
import axios from 'axios'

import Footer from "./Footer"

const ProductsDetails = () => {
    const {products, setProducts} = useContext(FetchProduct)

    useEffect(() => { 
        const fetchProduct = async () => {
          try {
            const response = await axios.get('https://dummyjson.com/products')
            setProducts(response.data.products.slice(0, 3))
          } catch (error) {
            console.log(error)
          }
        }
        fetchProduct()
    }, [])


    return(
        <main>
            {products && Array.isArray(products) && (
                <div>
                    {products.map((product) => (
                        <div key={product.id} className="flex justify-start items-center mb-4">
                            <img 
                            src={product.thumbnail} 
                            alt={product.title}
                            className="w-24 h-24 object-contain"/>

                            <div className="flex-1 px-4">
                                <h2>{product.title}</h2>
                            </div>
                            <p className="font-bold text-lg text-gray-800">R${product.price}</p> 
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}

export default ProductsDetails;