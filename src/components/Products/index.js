// Write your JS code here
import './index.css'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

const Products = () => {
  const JWT = Cookies.get('jwt_token')
  if (JWT === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="products-container">
      <Header />
      <div className="products-items-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-logo"
        />
      </div>
    </div>
  )
}

export default Products
