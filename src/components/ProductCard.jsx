import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
        <img src={product.image} alt="{product.title}" className='product-img' />
        <div className="card-body">
        <h3 className='prod-title'>{product.title}</h3>
        <p className='phar'>Price: {product.price}</p>
        <Link to={`/products/${product.id}`} className='details-link'>View Details</Link>
        </div>
    </div>
  )
}

export default ProductCard