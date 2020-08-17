import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardBody
} from 'reactstrap';

export default function ProductCard(props) {
    return (
        <div>
            <Card className="cardStyles">
                <CardImg top width="100%" src={props.imgUrl} alt={props.alt} />
                    <CardBody>
                        <CardTitle style={titleStyle1}>{props.title}</CardTitle>
                        <CardTitle style={titleStyle2}>{props.price + props.currency}</CardTitle>
                        
                        <Button style={buttonStyle}>{props.cartButton}</Button>
                        <div className ="divider"/>
                        <Button style={buttonStyle}>{props.wishButton}</Button>
                    </CardBody>
            </Card>
        </div>
    )
}

const buttonStyle = {

    marginTop:"20px",
    backgroundColor:"rgba(65, 33, 10, 0.7)",
    color:"white"
}

const titleStyle1 = {
    fontSize:"16px",
    fontVariant: "small-caps",
    fontWeight: "bold",
}

const titleStyle2 = {
    fontSize:"14px",
    fontVariant: "small-caps",
    fontWeight: "normal",
}