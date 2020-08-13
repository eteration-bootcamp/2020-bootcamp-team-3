import React from 'react'
import { Button, Input} from 'reactstrap';
import logo from '../Images/Logo/logo.png'
import searchIcon from '../Images/Icons/SearchIcon.png'
import shoppingCartIcon from '../Images/Icons/ShoppingCartIcon.png'


export default function Header(props) {
       
        return (
            <div>
               <Button style={langStyleEng}>English</Button>
               <Button style={langStyleTr}>Türkçe</Button>
               <Button style={wishlistBtn}>Wishlist</Button>
               <Button style={signInBtn}>Sign In</Button> 
               <Button style={createanAccountBtn}>Create an Account</Button>
               <img src={logo} alt="Logo" style={logoStyle} />
               <img src={searchIcon} alt="Search Icon" style={searchIconStyle} />
               <Input type="textarea" name="text" id="searchTextArea" placeholder="          Search for products" style={searchTextAreaStyle} />
               <Button style={searchBtnStyle}>Search</Button>
               <Button style={shoppingCartBtnStyle}>Cart</Button>
               <img src={shoppingCartIcon} alt="Shopping Cart Icon" style={shoppingCartIconStyle} />

            </div>
        )
    }


const langStyleEng = {

    /*English*/
    position: 'absolute',
    width: '75px',
    height: '25px',
    left: '1em',
    top: '1em',
    backgroundColor: '#fff',
    border: 'none',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '23px',
    outline: 'none',
    borderStyle:'none',


    color: 'rgba(65, 33, 10, 0.7)',
}

const langStyleTr = {
    
    /* Türkçe */
    position: 'absolute',
    width: '75px',
    height: '25px',
    left: '5em',
    top: '1em',
    backgroundColor: '#fff',
    border: 'none',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '23px',
    outline: 'none',

    color: 'rgba(65, 33, 10, 0.7)'

}

const wishlistBtn ={

    /* Wishlist */
    position: 'absolute',
    width: '71px',
    height: '25px',
    left: '80em',
    top: '1em',
    backgroundColor: '#fff',
    border: 'none',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '23px',
    outline: 'none',

    color: 'rgba(65, 33, 10, 0.7)'

}
const signInBtn= {

    /* Sign In */
    position: 'absolute',
    width: '73px',
    height: '25px',
    left: '86em',
    top: '1em',
    backgroundColor: '#fff',
    border: 'none',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '23px',
    outline: 'none',

    color: 'rgba(65, 33, 10, 0.7)'

}
const createanAccountBtn={

    /* Create an Account */
    position: 'absolute',
    width: '165px',
    height: '25px',
    left: '90em',
    top: '1em',
    backgroundColor: '#fff',
    border: 'none',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '23px',
    outline: 'none',

    color: 'rgba(65, 33, 10, 0.7)'

}

const logoStyle = {

    /* Logo */
    position: 'absolute',
    width: '142px',
    height: '142px',
    left: '1em',
    top: '2em',

}

const searchIconStyle = {
    position: 'absolute',
    width: '25px',
    height: '25px',
    left: '12em',
    top: '6em',
    opacity: '0.4'
}

const searchTextAreaStyle = {
    position: 'absolute',
    width: '405px',
    height: '40px',
    left: '174px',
    top: '5.5em',

    background: 'linear-gradient(180deg, #FFE9C8 0%, rgba(255, 238, 214, 0) 100%)',
    borderRadius: '50px'
}

const searchBtnStyle = {
    position: 'absolute',
    width: '112px',
    height: '40px',
    left: '467px',
    top: '5.5em',
    color:'rgba(65, 33, 10, 0.7)',

    background: 'linear-gradient(180deg, #FFB74A 0%, rgba(255, 238, 214, 0) 100%)',
    borderRadius: '50px'
}

const shoppingCartIconStyle = {
    position: 'absolute',
    width: '28px',
    height: '28px',
    right: '3em',
    top: '5.8em',
    

    opacity: 0.7
}

const shoppingCartBtnStyle = {
    position: 'absolute',
    width: '105px',
    height: '40px',
    right: '2em',
    top: '5.5em',
    textAlign: 'left',
    color:'rgba(65, 33, 10, 0.7)',

    background:'linear-gradient(180deg, #FFB74A 0%, rgba(255, 189, 91, 0.966458) 11.98%, rgba(255, 204, 127, 0.895) 37.5%, rgba(255, 211, 145, 0.857083) 51.56%, rgba(255, 222, 172, 0.804019) 70.31%, rgba(255, 238, 214, 0.72) 100%)',
    borderRadius: '50px',
}