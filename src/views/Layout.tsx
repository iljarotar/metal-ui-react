import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Main from '../components/Main'
import './Layout.css'

export default function Layout() {
  return (
    <div id="layout">
      <Header />
      <Navigation />
      <Main />
    </div>
  )
}