import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
  } from 'reactstrap';

export default function ProductCard(props) {
    return (
        <div>
            <Card className="cardStyles">
                <CardImg top width="100%" src={props.imgUrl} alt={props.alt} />
                    <CardBody>
                        <CardTitle CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.subtitle}</CardSubtitle>
                        <CardText>{props.text}</CardText>
                        <Button>{props.button}</Button>
                    </CardBody>
            </Card>
        </div>
    )
}
