import { Link } from 'react-router-dom';
function Header() {
  const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/blog', title: 'Blog' },
    { url: '/contact', title: 'Contact' },
    { url: '/app', title: 'App' },
    { url: '/products', title: 'Products' },
  ];
  return (
    <header>
      <Link to='/'>Logo</Link>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
