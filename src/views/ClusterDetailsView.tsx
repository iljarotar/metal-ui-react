import TopBar from '../components/TopBar'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

export default function ClusterDetailsView(props: any) {
  const { clusterId } = useParams()
  return ( 
    <div id="cluster-details">
      <TopBar title='Cluster Details' subtitle={clusterId} values={true} />
    </div>
  )
}