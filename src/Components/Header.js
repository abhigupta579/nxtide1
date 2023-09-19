import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from 'react'

import  './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';


export default function Header() {
  return (
    <div className='section header'> 
         <Navbar expand="lg" className="bg-light nav1">
      <Container>
        <Link href={'/'}><img src='https://nxtide.com/wp-content/uploads/2022/10/Logo-NXtide.png' className='img-fluid'/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="list1">
            <Link href={'/SoftService'} style={{textDecoration:'none',color:' rgba(0,0,0,.55)',margin:'8px'}}>Software Services</Link>
            <Link href={'/Case'} style={{textDecoration:'none',color:' rgba(0,0,0,.55)',margin:'8px'}}>Case Studies</Link>
            <Nav.Link href="#price">Pricing</Nav.Link>
            <Link href={'/Learn'} style={{textDecoration:'none',color:' rgba(0,0,0,.55)',margin:'8px'}}>About Us</Link>
            <Link href={'/Auth'} style={{textDecoration:'none',color:' rgba(0,0,0,.55)',margin:'8px'}}>Account</Link>
            
            <Link href={'/ContactForm'} className='contactNav text-white bg-danger rounded p-2'>Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
