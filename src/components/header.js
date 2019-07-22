import React, { useState } from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

import Hamburger from '../assets/svg/hamburger.inline.svg'

const Wrapper = styled.div`
  border-bottom: 1px solid #616161;
  height: 95px;
`

const Links = styled.div.attrs(({ open }) => ({
  visibility: open ? 'visible' : 'hidden',
  transform: open ? `translateX(0%)` : `translateX(100%)`,
}))`

  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 1024px) {
    width: 40vw; height: 100vh;
    padding: 1rem;
    padding-top: 4rem;
    position: absolute;
    visibility: ${props => props.visibility};
    top: 0; right: 0;
    transform: ${props => props.transform};
    transition: all 200ms ease-in;
  }
`

const hamburger = "flex items-center px-3 py-2 text-white";

const HamburgerButton = (props) => {
  const toggle = () => {
    props.toggle(!props.state)
  }

  return (
    <div className="block ml-auto z-50 lg:hidden" style={{ gridArea: 'links' }}>
      <button className={hamburger} onClick={toggle}>
        <Hamburger className="fill-current h-6 w-6" />
      </button>
    </div>
  )
}

const wrapper = 'bg-transparent mx-auto flex justify-between items-center p-4 lg:p-0 lg:w-1/2';

const links =
  `bg-black lg:bg-transparent flex flex-col justify-center items-center text-lg z-10 lg:flex-row lg:visible`;

const Header = (props) => {
  const [open, setOpen] = useState(false);

  return(
    <nav className="relative w-full z-50">
      <Wrapper className={wrapper}>
        <span className="text-white md:text-4xl text-xl whitespace-no-wrap inline" style={{ gridArea: 'brand' }}>King Media Co</span>
        <Links open={open} className={links}>
          <div className="">
            <Link className="block lg:inline lg:py-1 text-center" activeClassName="active" to='/'>Home</Link>
            <Link className="block lg:inline lg:py-1 lg:ml-4 text-center" activeClassName="active" to='/projects/'>Projects</Link>
            <Link className="block lg:inline lg:py-1 lg:ml-4 text-center" activeClassName="active" to='/blog/'>Blog</Link>
            <Link className="block lg:inline lg:py-1 lg:ml-4 text-center" activeClassName="active" to='/contact/'>Contact</Link>
          </div>
        </Links>
        <HamburgerButton toggle={setOpen} state={open} />
      </Wrapper>
    </nav>
  )
}

export default Header
