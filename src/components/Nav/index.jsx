import './style.css'

const links = [
  {
    key: 'home',
    url: '/',
    label: 'Home'
  },
  {
    key: 'about',
    url: '/about',
    label: 'About Us'
  }
]

const Nav = () => {
  return (
    <nav className="nav">
      {links.map(({ key, url, label }) => (
        <a className='nav__link' key={key} href={url}>{label}</a>
      ))}
    </nav>
  )
}

export default Nav