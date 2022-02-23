import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/TopBar.css'

export default function TopBar(props: any) {
  return (
    <div id="top-bar">
      <h2>{props.title} {props.subtitle}</h2>
      {props.values &&
        <div id="values-and-button">
          <div id="values">
            <div className="value-box">
              <p>78 CPUs</p>
            </div>
            <div className="value-box">
              <p>128 GB</p>
            </div>
            <div className="value-box">
              <p>1 Cluster</p>
            </div>
          </div>
          <NavLink id="add-cluster-button" to="/CreateCluster">
            <p>New Cluster</p>
          </NavLink>
        </div>
      }
    </div>
  )
}

TopBar.propTypes = {title: PropTypes.string.isRequired, subtitle: PropTypes.string, values: PropTypes.bool.isRequired}