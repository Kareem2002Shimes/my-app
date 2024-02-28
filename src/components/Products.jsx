/* eslint-disable no-unused-vars */
import productData from '../../public/data/products.json';
import { useState } from 'react';
import styled from './style';
// import styles from '../styles/Products.module.css';
const Products = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <styled.ListContainer>
        {productData.map((product, i) => (
          <styled.List
            key={product.id}
            index={i}
            active={Boolean(i === number)}
          >
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <div>
              <span>
                Rate:
                {Array(product.rate)
                  .fill(0)
                  .map((_) => '*')}
              </span>
            </div>
            <strong>${product.price}</strong>
          </styled.List>
        ))}
      </styled.ListContainer>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
    </>
  );
};

export default Products;
