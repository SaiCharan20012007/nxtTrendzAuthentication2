// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Cart = () => {
  const JWT = Cookies.get('jwt_token')
  if (JWT === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="cart-container">
      <Header />
      <div className="cart-mid-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-logo"
        />
      </div>
    </div>
  )
}

export default Cart
