import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import ProductCard from './ProductCard'

const ProductCards = (props) => {
  return (
    <CardGroup className="cardGroupStyles">
      <ProductCard 
        imgUrl="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg"
        alt="Card image cap"
        title="Card title"
        subtitle="Card subtitle"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        button="Button"
      >
      </ProductCard> 
      <ProductCard 
        imgUrl="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg"
        alt="Card image cap"
        title="Card title"
        subtitle="Card subtitle"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        button="Button"
      >
      </ProductCard>
      <ProductCard 
        imgUrl="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg"
        alt="Card image cap"
        title="Card title"
        subtitle="Card subtitle"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        button="Button"
      >
      </ProductCard>
      <ProductCard 
        imgUrl="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg"
        alt="Card image cap"
        title="Card title"
        subtitle="Card subtitle"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        button="Button"
      >
      </ProductCard>
    
      <ProductCard 
          imgUrl="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg"
          alt="Card image cap"
          title="Card title"
          subtitle="Card subtitle"
          text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          button="Button"
      >
      </ProductCard>
      <ProductCard 
        imgUrl="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg"
        alt="Card image cap"
        title="Card title"
        subtitle="Card subtitle"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        button="Button"
      >
      </ProductCard>
      <ProductCard 
        imgUrl="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg"
        alt="Card image cap"
        title="Card title"
        subtitle="Card subtitle"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        button="Button"
      >
      </ProductCard>
      <ProductCard 
        imgUrl="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg"
        alt="Card image cap"
        title="Card title"
        subtitle="Card subtitle"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        button="Button"
      >
      </ProductCard>
      <ProductCard 
        imgUrl="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg"
        alt="Card image cap"
        title="Card title"
        subtitle="Card subtitle"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        button="Button"
      >
      </ProductCard>
    </CardGroup>
    
  );
};

export default ProductCards;