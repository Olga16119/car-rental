import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import Logo from 'Components/Logo/Logo';

const Navigation = () => {
  return (
    <nav className={css['navigation']}>
      <NavLink to="/">
        <Logo width={100} height={100} id={'../../images/svg/rent-a-car-icon.svg'} />
      </NavLink>

      <ul className={css['nav-list']}>
        <li>
          <NavLink className={css['nav-link']} to="/catalog">
            Catalog
          </NavLink>
        </li>

        <li>
          <NavLink className={css['nav-link']} to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
