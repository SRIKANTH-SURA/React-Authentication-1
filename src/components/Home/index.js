import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <div className="homepage-content">
          <div className="main-container">
            <h1 className="clothes-heading">clothes that get you noticed</h1>
            <img
              className="clothes-mobile-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
            <p className="clothes-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a maker of the
              era and we are in revolution. Your fashion makes you been seen
              heard that way you are. So, celebrate seasons new and exciting
              fashion in your own way.
            </p>
            <button className="shop-now-btn" type="button">
              Shop Now
            </button>
          </div>
          <div className="clothes-img-container">
            <img
              className="clothes-desktop-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
