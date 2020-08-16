import React, { useState } from 'react'
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, } from 'reactstrap';

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
      
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div >
               <Navbar style={navbarStyle} color="#FFC801" light expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Female
                    </DropdownToggle>
                    <DropdownMenu left>
                        <DropdownItem>
                        Earrings
                        </DropdownItem>
                        <DropdownItem>
                        Hat
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        All
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Male
                    </DropdownToggle>
                    <DropdownMenu left>
                        <DropdownItem>
                        Watch
                        </DropdownItem>
                        <DropdownItem>
                        Tie
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        All
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                
                </Collapse>
            </Navbar>
      </div>
    )
}

const navbarStyle = {
    position: 'absolute',
    width: '100%',
    height: '8%',
    left: '0em',
    top: '10em',
    background: '#FFC801',
    
    mixBlendMode: 'normal'
}