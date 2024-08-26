import { Link } from "react-router-dom";
import logo from './logo-cinetag-branco.png';
import styles from './Header.module.css';
import HeaderLink from "components/HeaderLink";

function Header() {
  return (
    // eslint-disable-next-line no-undef
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="logo cinetag" />
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="./Favoritos">Favoritos</HeaderLink>
      </nav>
    </header>
  );
}

export default Header;
