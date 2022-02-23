import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BillingSettingsView from '../views/BillingSettingsView'
import ClusterDetailsView from '../views/ClusterDetailsView'
import CreateClusterView from '../views/CreateClusterView'
import DashboardView from '../views/DashboardView'
import GeneralSettingsView from '../views/GeneralSettingsView'
import IpAddressesView from '../views/IpAddressesView'
import KubernetesView from '../views/KubernetesView'
import VolumesView from '../views/VolumesView'
import Layout from '../views/Layout'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardView />} />
          <Route path="BillingSettings" element={<BillingSettingsView />} />
          <Route path="ClusterDetails/:clusterId" element={<ClusterDetailsView />} />
          <Route path="CreateCluster" element={<CreateClusterView />} />
          <Route path="IpAddresses" element={<IpAddressesView />} />
          <Route path="GeneralSettings" element={<GeneralSettingsView />} />
          <Route path="Kubernetes" element={<KubernetesView />} />
          <Route path="Volumes" element={<VolumesView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}