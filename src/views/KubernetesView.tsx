import TopBar from '../components/TopBar'
import { NavLink } from 'react-router-dom'
import '../styles/KubernetesView.css'

function toggleMenu(event: any) {
  event.stopPropagation()
  const menu = event.target.nextElementSibling
  if (menu.style.display === 'none') {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}

document.body.addEventListener('click', () => {
  Array.from(document.getElementsByClassName('actions-dropdown')).forEach(element => {
    (element as HTMLElement).style.display = 'none'
  })
})

export default function KubernetesView() {
  return (
    <div id="kubernetes">
      <TopBar title='Kubernetes Clusters' values={true} />
      <div id="content">
        <table id="cluster-table">
          <tbody>
            <tr>
              <th />
              <th>Name</th>
              <th>Kubernetes Version</th>
              <th>Nodes</th>
              <th>Uptime</th>
              <th>Actions</th>
            </tr>
            <tr id="apollo16-list">
              <td style={{color: '#22aa22'}}>&#9679;</td>
              <td>apollo16</td>
              <td>K3s-v1.20.0-k3s1</td>
              <td>1</td>
              <td>2 days</td>
              <td>
                <div className="actions-menu">
                  <div onClick={toggleMenu} className="actions-button">&#10998;</div>
                  <NavLink className="actions-dropdown" to="/ClusterDetails/apollo16" style={{display: 'none'}}>
                    <p>Details</p>
                  </NavLink>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}