import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

export default function AboutUs() {
    return (
        <div className="aboutStyle">
    <Jumbotron fluid >
        <Container fluid >
          <h1 className="display-4">Always Bee Classy...</h1>
          <p className="lead">What is the perfect way to dress up any outfit or add your own flair? 
          Accessorizing with jewelry, of course! From sparkling diamond necklaces and fashionable layered bracelets 
          to statement earrings and trendy stackable rings to sophisticated watches, beeclassy has the perfect jewelry 
          piece to accentuate your wardrobe, your lifestyle and your budget.</p>
          <p className="lead">Who says men can't dress up their wardrobe too?! Find sophisticated and handsome jewelry for men such as watches, 
          necklaces and chains. Whether there's a major event or you're looking for something just because, our selection of 
          men's jewelry and gift ideas has everything you need and more.</p>
          <p className="lead">Find amazing clearance jewelry in popular styles, such as birthstone jewelry , anniversary bands, 
          fashion necklaces, glasses and drop earrings . Explore previously owned watches in modern and fashionable styles as well as 
          classic and traditional designs for watches that add elegance to your already impressive look. Our collection of used engagement 
          rings and other previously owned jewelry is a great way to get beautiful styles for an excellent value.</p>
        
        </Container>
    </Jumbotron>
    </div>
    )
}
