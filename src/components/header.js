import React, { useState } from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

import Hamburger from '../assets/svg/hamburger.inline.svg'

const Nav = styled.nav`
  position: relative;
  width: 100%;
  z-index: 50;
`

const Wrapper = styled.div`
  background-color: white;
  border-bottom: 1px solid #616161;
  height: 75px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  overflow: hidden;

  @media(min-width: 1024px) {
    margin-top: 20px;
    padding: 0;
    width: 80%;
  }
`

const Company = styled.span`
  display: inline;
  font-size: calc(25px + (31 - 25) * (100vw - 300px) / (880 - 300));
  grid-area: 'brand';
  white-space: nowrap;
`

const Links = styled.div.attrs(({ open }) => ({
  visibility: open ? 'visible' : 'hidden',
  transform: open ? `translateX(0%)` : `translateX(100%)`,
}))`
  background-color: white;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  visibility: visible;
  z-index: 10;

  @media (max-width: 1024px) {
    width: 45vw; height: 100vh;
    flex-direction: column;
    padding: 0.5em;
    padding-top: 4rem;
    margin-top: 1em;
    position: absolute;
    visibility: ${props => props.visibility};
    top: 0; right: 0;
    transform: ${props => props.transform};
    transition: all 200ms ease-in;
  }
`

const A = styled(Link)`
  color: black;
  display: block;
  border-top: 1px solid black;
  padding: 2px 0;
  text-align: right;
  width: 94px;

  &.active {
    background-color: black;
    color: white;
  }

  @media (min-width: 1024px) {
    color: black;
    display: inline;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: center;
    padding: 0 0.25em;
    margin-left: 1.5em;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
        background-color: rgba(153, 153, 153, 0.58);
        color: black;
        transition: all 200ms ease-in-out;
    }

    &.active:hover {
        background-color: black;
        color: white;
    }
  }
`

const HamburgerButtonContainer = styled.div`
  display: block;
  margin-left: auto;
  z-index: 50;

  @media(min-width: 1024px) {
    display: none;
  }
`

const HamburgerButton = styled.button`
  color: white;
  display: flex;
  align-items: center;
  padding: 0.5em 0.75em;

  svg {
    color: black;
    width: 1.5rem;
    height: 1.5rem;
  }
`

const HamburgerMenuButton = (props) => {
  const toggle = () => {
    props.toggle(!props.state)
  }

  return (
    <HamburgerButtonContainer>
      <HamburgerButton onClick={toggle}>
        <Hamburger style={{fill: 'currentColor'}} />
      </HamburgerButton>
    </HamburgerButtonContainer>
  )
}

const Header = (props) => {
  const [open, setOpen] = useState(false);

  return(
    <Nav>
      <Wrapper>
        <Company>King Media Co</Company>
        <Links open={open}>
          <A activeClassName="active" to='/'>Home</A>
          <A activeClassName="active" to='/services/'>Services</A>
          <A activeClassName="active" to='/blog/'>Blog</A>
          <A activeClassName="active" to='/discovery/'>Discovery</A>
          <A activeClassName="active" to='/contact/'>Contact</A>
        </Links>
        <HamburgerMenuButton toggle={setOpen} state={open} />
      </Wrapper>
    </Nav>
  )
}

export default Header
