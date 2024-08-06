// Write your code here

import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controller-card">
          <h1 className="layout-heading">Layout</h1>
          <div className="nav-card">
            <input
              type="checkbox"
              id="content"
              onChange={onChangeShowContent}
              checked={showContent}
            />
            <label htmlFor="content" className="list-types">
              Content
            </label>
          </div>
          <div className="nav-card">
            <input
              type="checkbox"
              id="leftNavbar"
              onChange={onChangeLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="list-types">
              Left Navbar
            </label>
          </div>
          <div className="nav-card">
            <input
              type="checkbox"
              id="rightNavbar"
              onChange={onChangeRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="rightNavbar" className="list-types">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
