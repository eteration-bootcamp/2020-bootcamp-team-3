import React from 'react';
import { CardGroup } from 'reactstrap';
import ProductCard from './ProductCard'
import productData from './ProductData'

const ProductCards = (props) => {

  const productComponents = productData.map(product => <ProductCard 
    key={product.id}
    imgUrl={product.imgUrl}
    price={product.price}
    currency={product.currency}
    title={product.title}
    subtitle={product.subtitle}
    text={product.text}
    cartButton={product.cartButton}
    wishButton={product.wishButton} />)

  return (
    <CardGroup className="cardGroupStyles">
      {productComponents}
    </CardGroup>
    
  );
};

export default ProductCards;