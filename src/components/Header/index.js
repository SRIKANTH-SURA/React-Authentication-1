import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  renderDesktopNavbar = () => (
    <>
      <img
        className="website-logo-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-list">
        <Link to="/" className="nav-link nav-item">
          <li>Home</li>
        </Link>
        <Link to="/products" className="nav-link nav-item">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="nav-link nav-item">
          <li>Cart</li>
        </Link>
      </ul>
      <button className="logout-btn" type="button">
        Logout
      </button>
      {/* <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">
            Products
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">
            Cart
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <button className="logout-btn" type="button">
              Logout
            </button>
          </Link>
        </li>
      </ul> */}
    </>
  )

  renderMobileNavbar = () => (
    <>
      <div className="logo-container">
        <img
          className="website-logo-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          className="nav-logout-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
        />
      </div>
      <div className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <img
                className="nav-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              <img
                className="nav-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <img
                className="nav-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  )

  render() {
    return (
      <div className="header">
        <div className="mobile-navbar">{this.renderMobileNavbar()}</div>
        <div className="desktop-navbar">{this.renderDesktopNavbar()}</div>
      </div>
    )
  }
}

export default Header
