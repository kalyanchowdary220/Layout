import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

// Write your code here

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-main-container">
          <div>
            {showLeftNavbar ? (
              <div className="body-left-navbar">
                <h1 className="body-left-navbar-heading">Left Navbar Menu</h1>
                <ul className="body-left-list-menu-con">
                  <li className="item">Item 1</li>
                  <li className="item">Item 2</li>
                  <li className="item">Item 3</li>
                  <li className="item">Item 4</li>
                </ul>
              </div>
            ) : null}
          </div>
          <div>
            {showContent ? (
              <div className="show-content-container">
                <h1 className="show-content-heading">Content</h1>
                <p className="show-content-para">
                  Lorem ipsum dolor sitamet , consectetur adipiscing slit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            ) : null}
          </div>
          <div>
            {showRightNavbar ? (
              <div className="right-navbar-container">
                <h1 className="right-navbar-heading">Right Navbar</h1>
                <div className="ad-para-card">
                  <p className="ad-1-para">Ad 1</p>
                </div>
                <div className="ad-para-card">
                  <p className="ad-1-para">Ad 2</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
