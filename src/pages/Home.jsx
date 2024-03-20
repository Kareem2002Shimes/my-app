import { Link, useNavigate } from 'react-router-dom';
import Todos from '../components/Todos';

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about');
  };
  const products = [
    { id: 1, title: 'Product 1', price: 12, desc: 'this is product1' },
    { id: 2, title: 'Product 2', price: 10, desc: 'this is product2' },
    { id: 3, title: 'Product 3', price: 6, desc: 'this is product3' },
  ];
  return (
    <main>
      <Todos />
      <button type='button' onClick={handleClick}>
        Go To About
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Home;
