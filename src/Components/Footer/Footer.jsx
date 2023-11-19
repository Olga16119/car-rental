import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css['footer']}>
      <div className={css['footer-text']}>
        <p>Сhoose the best-</p>
        <NavLink to="/" className={css['footer-link']}>
          Car Rental
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
