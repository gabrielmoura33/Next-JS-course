import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

// import { Container } from './styles';

const AddToCartModal = dynamic(
  () => import('../../../components/AddToCartModal'),
  { loading: () => <p>Loading</p>, ssr: false }
)
const Product: React.FC = () => {
  const router = useRouter();
  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);

  function handdleAddToCart() {
    setIsAddToCartModalVisible(true)
  }
  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handdleAddToCart}>Add to Cart</button>

      {
        isAddToCartModalVisible && <AddToCartModal />
      }
    </div>
  );
  
}

export default Product;