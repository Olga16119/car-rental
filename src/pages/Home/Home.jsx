import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css['hero']}>
      <h1 className={css['hero-title']}>car rental </h1>
      <p className={css['hero-text']}>Find your dream car and drive it</p>

      <Link to="/catalog" className={css['start-btn']}>
        Start search
      </Link>
    </div>
  );
};

export default Home;
