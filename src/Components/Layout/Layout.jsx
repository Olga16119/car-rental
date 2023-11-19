import Container from 'Components/Container/Container';
// import Footer from 'components/Footer';
import Header from 'Components/Header/Header';
// import IconSprite from 'components/IconSprite';
import Loader from 'Components/Loader/Loader';
import Section from 'Components/Section/Section';
import { Suspense } from 'react';
// import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* <Toaster />
      <IconSprite /> */}
      <Header />
      <Suspense
        fallback={
          <Loader
            size={15}
            margin={10}
            position={{
              marginTop: '100px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          />
        }
      >
        <main>
          <Container>
            <Section>
              <Outlet />
            </Section>
          </Container>
        </main>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;