import React, { useState } from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

import Hamburger from '../assets/svg/hamburger.inline.svg'

const Wrapper = styled.div`
  border-bottom: 1px solid #616161;
  height: 75px;

  @media(min-width: 1024px) {
    margin-top: 20px;
  }
`

const Links = styled.div.attrs(({ open }) => ({
  visibility: open ? 'visible' : 'hidden',
  transform: open ? `translateX(0%)` : `translateX(100%)`,
}))`

  @media (max-width: 1024px) {
    width: 45vw; height: 100vh;
    padding: 0.5em;
    padding-top: 4rem;
    position: absolute;
    visibility: ${props => props.visibility};
    top: 0; right: 0;
    transform: ${props => props.transform};
    transition: all 200ms ease-in;
  }
`

const A = styled(Link)`
  color: #9E9E9E;
  border-top: 1px solid #ffffff;
  padding: 2px 0;
  text-align: right;
  width: 94px;

  &.active {
    color: #ffffff;
  }

  @media (min-width: 1024px) {
    color: #9E9E9E;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    text-align: center;

    &:hover {
        color: #ffffff;
        border-top: 1px solid #616161;
        border-bottom: 1px solid #616161;
        transition: all 200ms ease-in-out;
    }

    &.active {
        color: #ffffff;
        border-top: 1px solid #616161;
        border-bottom: 1px solid #616161;
    }

    &.active:hover {
        color: #ffffff;
        border-top: 1px solid #616161;
        border-bottom: 1px solid #616161;
    }
  }
`

const hamburger = "flex items-center px-3 py-2 text-white";

const HamburgerButton = (props) => {
  const toggle = () => {
    props.toggle(!props.state)
  }

  return (
    <div className="block ml-auto z-50 lg:hidden">
      <button className={hamburger} onClick={toggle}>
        <Hamburger className="fill-current h-6 w-6" />
      </button>
    </div>
  )
}

const wrapper = 'bg-transparent mx-auto flex justify-between items-center p-4 overflow-hidden lg:p-0 lg:w-1/2';

const links =
  `bg-black lg:bg-transparent flex flex-col justify-start items-end text-md z-10 mt-4 lg:mt-0 lg:flex-row lg:visible`;

const Header = (props) => {
  const [open, setOpen] = useState(false);

  return(
    <nav className="relative w-full z-50">
      <Wrapper className={wrapper}>
        <span className="text-white md:text-4xl whitespace-no-wrap inline" style={{ gridArea: 'brand', fontSize: '31px' }}>King Media Co</span>
        <Links open={open} className={links}>
          <A className="block lg:inline lg:py-1" activeClassName="active" to='/'>Home</A>
          <A className="block lg:inline lg:py-1 lg:ml-6" activeClassName="active" to='/services/'>Services</A>
          <A className="block lg:inline lg:py-1 lg:ml-6" activeClassName="active" to='/blog/'>Blog</A>
          <A className="block lg:inline lg:py-1 lg:ml-6" activeClassName="active" to='/discovery/'>Discovery</A>
          <A className="block lg:inline lg:py-1 lg:ml-6" activeClassName="active" to='/contact/'>Contact</A>
        </Links>
        <HamburgerButton toggle={setOpen} state={open} />
      </Wrapper>
    </nav>
  )
}

export default Header
