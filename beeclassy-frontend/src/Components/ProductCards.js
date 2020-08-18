import React from 'react';
import { CardGroup } from 'reactstrap';
import ProductCard from './ProductCard'
import axios from "axios"

const ProductCards = (props) => {
  let [responseData, setResponseData] = React.useState('');
  const fetchData = React.useCallback(() => {
    axios.get("http://localhost:8080/api/v1/product")
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])
  console.log(responseData)
  


  const productComponents = responseData && responseData.map(product => <ProductCard 
    key={product.id}
    imgUrl={product.imgUrl}
    price={product.price}
    currency="₺"
    title={product.name}
    cartButton="Add to Cart"
    wishButton="Add to Wishlist" />)

  return (
    <CardGroup className="cardGroupStyles">
      {productComponents}
    </CardGroup>
    
  );
};

export default ProductCards;