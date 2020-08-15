import React from 'react'
import { Button, Container, Jumbotron } from 'reactstrap'
import facebookLogo from '../Images/Logo/facebookLogo.png'
import instagramLogo from '../Images/Logo/instagramLogo.png'
import twitterLogo from '../Images/Logo/twitterLogo.png'


export default function Footer() {
    return (
        <div >
            <Button style={aboutUs}>About Us</Button>
            <Button style={contactUs}>Contact Us</Button>
            <a href="/"><img src={facebookLogo} alt="facebookLogo" style={facebookStyle} /></a>
            <a href="/"><img src={instagramLogo} alt="instagramLogo" style={instagramStyle} /></a>
            <a href="/"><img src={twitterLogo} alt="instagramLogo" style={twitterStyle} /></a>
            
        </div>
    )
}

const aboutUs = {
    position: 'absolute',
    width: '90px',
    height: '30px',
    left: '3em',
    top: '172em',
    outline: 'none',
    borderStyle:'none',
    border: 'none',
    outline: 'none',
    backgroundColor: '#fff',
    fontFamily: 'Roboto',

    fontSize: '15px',
    lineHeight: '23px',
    
    color: 'rgba(65, 33, 10, 0.7)'
}

const contactUs = {
    position: 'absolute',
    width: '95px',
    height: '30px',
    left: '9em',
    top: '172em',
    outline: 'none',
    borderStyle:'none',
    border: 'none',
    outline: 'none',
    backgroundColor: '#fff',
    
    fontFamily: 'Roboto',

    fontSize: '15px',
    lineHeight: '23px',
    
    color: 'rgba(65, 33, 10, 0.7)'

}

const facebookStyle={
    position: 'absolute',
    width: '30px',
    height: '30px',
    right: '11em',
    top: '161em',
}

const instagramStyle ={
    position: 'absolute',
    width: '30px',
    height: '30px',
    right: '8em',
    top: '161em',
}

const twitterStyle = {
    position: 'absolute',
    width: '30px',
    height: '30px',
    right: '5em',
    top: '161em',
}