import Navigation from 'Components/Navigation/Navigation';
import Container from 'Components/Container/Container';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css['header']}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;