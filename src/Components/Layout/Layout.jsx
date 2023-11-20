import Container from 'Components/Container/Container';
import Footer from 'Components/Footer/Footer';
import Header from 'Components/Header/Header';
import Loader from 'Components/Loader/Loader';
import Section from 'Components/Section/Section';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Suspense
        fallback={
          <Loader
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
      <Footer />
    </>
  );
};

export default Layout;
