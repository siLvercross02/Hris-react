import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import image from '../../assets/pilchi-logo-copy.png';

const Header = () => {
    return(
        <Navbar className="bg-pilchi sticky-top">
            <Navbar.Brand href="#">
            <Image src={image} />
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header;