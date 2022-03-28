import logo from './assets/img/logo.png';
import './assets/css/style.css';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link href="./assets/css/style.css" rel="stylesheet" />
        <div className="topnav">
          <a href='/'>
            <img src={logo} width={200} alt='logo' />
          </a>
          <Link to="/">Home</Link>
          <Link to="/mobile-list">Mobile List</Link>
          <Link to="/about">About</Link>
          <form>
            <input type="text" />
            <input type="submit" defaultValue="Cari" />
          </form>
        </div>
      </div>
  );
}

export default Layout;
