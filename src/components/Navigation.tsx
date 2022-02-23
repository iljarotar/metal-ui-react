import '../styles/Navigation.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <div id="nav-list">
        <div className="nav-item">
          <NavLink className={({isActive}) => (isActive?'active':'inactive')} to="/">Dashboard</NavLink>
        </div>
        <div className="nav-item">
          <NavLink className={({isActive}) => (isActive?'active':'inactive')} to="/Kubernetes">Kubernetes</NavLink>
        </div>
        <div className="nav-item">
          <NavLink className={({isActive}) => (isActive?'active':'inactive')} to="/Volumes">Volumes</NavLink>
        </div>
        <div className="nav-item">
          <NavLink className={({isActive}) => (isActive?'active':'inactive')} to="/IpAddresses">Ip Addresses</NavLink>
        </div>
        <div>
          <div id="submenu-summary">Settings</div>
          <div id="submenu">
            <div className="nav-item">
              <NavLink className={({isActive}) => (isActive?'active-submenu-link':'inactive-submenu-link')} to="/GeneralSettings">General</NavLink>
            </div>
            <div className="nav-item">
              <NavLink className={({isActive}) => (isActive?'active-submenu-link':'inactive-submenu-link')} to="/BillingSettings">Billing</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div id="version-info">
        <p>Metal Cloud</p>
        <p>API Version XY</p>
      </div>
    </nav>
  )
}