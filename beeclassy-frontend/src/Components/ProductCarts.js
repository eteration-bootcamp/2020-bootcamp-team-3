import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
const ProductCarts = (props) => {
  return (
    <CardGroup className="cardStyles">
        <CardGroup> 
      <Card>
        <CardImg top width="100%" src="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://statics.boyner.com.tr/contents/images/Landing/erkek-spor-ayakkabi.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://statics.boyner.com.tr/contents/images/categories/kadn-cuzdan.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://statics.boyner.com.tr/contents/images/categories/kadn-cuzdan.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
    <CardGroup>
    <Card>
      <CardImg top width="100%" src="https://statics.boyner.com.tr/contents/images/Landing/omuz-cantasi.jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://statics.boyner.com.tr/contents/images/Landing/erkek-spor-ayakkabi.jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://statics.boyner.com.tr/contents/images/categories/kadn-cuzdan.jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://statics.boyner.com.tr/contents/images/categories/kadn-cuzdan.jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </CardGroup>
  </CardGroup>
  );
};

export default ProductCarts;