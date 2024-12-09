import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{

        const fetchProduct = async () => {
            try{
                const response = await axios.get('https://fakestoreapi.com/products')
                setProducts(response.data)
            } catch (err) {
                setError('Error fetching product details')
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [])

    if (loading) {
        return(
            <div>Loading...</div>
        )
    }
    if (error) {
        return (
            <div>Error: {error}</div>
        )
    }
    console.log(products)

  return (
    <div className='product-list'>
        {products.map( product => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductList