import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {

  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
      } catch (err) {
        setError('Error fetching product details')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()

  }, [id])

  if (loading) {
    return(
      <div>Loading...</div>
    )
  }
  if (error) {
    return(
      <div>Error: {error}</div>
    )
  }

  return (
    <div className='product-details'>
      <img src={product.image} alt="" className='product-det-img' />
      <div className="details-body">

      <h2>{product.title}</h2>
      <p className='phar'>{product.description}</p>
      <p className='phar'>Category: {product.category}</p>
      <p className='phar'>Price: ${product.price}</p>
      </div>
    </div>
  )
}

export default ProductDetails