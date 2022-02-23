import '../styles/Header.css'

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img src="./images/cloud.png" alt="Cloud" />
        <h1>Metal Cloud</h1>
      </div>
      <div id="user-menu">
        <div id="username">john_doe &#128025;</div>
        <div id="user-settings-dropdown">
          <a href="#" className="user-dropdown-item"><p>Profile</p></a>
          <a href="#" className="user-dropdown-item"><p>Logout</p></a>
        </div>
      </div>
    </header>
  )
}