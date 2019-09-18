import React from "react";
import { Navbar, NavItem } from 'react-materialize';

export default function Header() {

  function onClick(){
    
  }

  return (
    <Navbar brand={<a />} alignLinks="left">
      <NavItem onClick={onClick}>
        GitHub
    </NavItem>
      <NavItem href="components.html">
        Trending
    </NavItem>
    </Navbar>
  )
}



