import React from 'react';
import { CardGroup } from 'reactstrap';
import ProductCard from './ProductCard'
import productData from './ProductData'

const ProductCards = (props) => {

  const productComponents = productData.map(product => <ProductCard 
    key={product.id}
    imgUrl={product.imgUrl}
    alt={product.alt}
    title={product.title}
    subtitle={product.subtitle}
    text={product.text}
    button={product.button} />)

  return (
    <CardGroup className="cardGroupStyles">
      {productComponents}
    </CardGroup>
    
  );
};

export default ProductCards;