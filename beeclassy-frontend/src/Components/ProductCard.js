import React , { useEffect, useState } from 'react'
import {
    Card, Button, CardImg, CardTitle, CardBody
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { detailsProduct } from './productActions';
import { addToCart } from './CartActions';


export default function ProductCard(props) {
   
  
   const productDetails= useSelector(state =>state.productDetails);
   const {product, loading, error} = productDetails;
   const dispatch = useDispatch();
  
   useEffect(() => {
       dispatch(detailsProduct(props.key));
        return() => {
            //
        };
   
    }, []);
  
    let  history  = useHistory();
    const handleAddtoCart= () =>{
        dispatch(addToCart(props.prodid));
        history.push("/cart/"+props.prodid)
    }
    return (
        <div>
            <Card className="cardStyles">
                <CardImg top width="100%" src={props.imgUrl} alt={props.alt} />
                    <CardBody>
                        <CardTitle style={titleStyle1}>{props.title}</CardTitle>
                        <CardTitle style={titleStyle2}>{props.price + props.currency}</CardTitle>
                        
                        <Button onClick={handleAddtoCart} style={buttonStyle}>{props.cartButton}</Button>
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
    color:"white",
    fontSize:"14px"
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