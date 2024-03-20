import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  return <div>ProductDetails {productId}</div>;
};

export default ProductDetails;
