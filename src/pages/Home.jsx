import Footer from '../components/Footer';
import Todos from '../components/Todos';
import Header from '../components/header/Header';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Todos />
      </main>
      <Footer />
    </>
  );
}
export default Home;
