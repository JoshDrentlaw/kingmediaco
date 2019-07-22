import React from "react"
import PropTypes from "prop-types"

import '../global.css'
import styled from 'styled-components'

import Header from "./header"
import Instagram from '../assets/svg/instagram.inline.svg'
import Facebook from '../assets/svg/facebook.inline.svg'
import Vimeo from '../assets/svg/vimeo.inline.svg'
import Youtube from '../assets/svg/youtube.inline.svg'


const Background = styled.div`
  background-color: black;
  color: white;
  height: 100%;
  overflow: hidden;
`

const Main = styled.main`
  min-height: calc(100vh - 187px);
  height: auto;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 1024px) {
    min-height: calc((100vh - 157px));
  }
`

export const Container = styled.section`
    align-items: center;
    display: flex;
    height: ${props => props.heightSm || 'auto'};
    flex-direction: ${props => props.flexDirSm || 'column'};
    justify-content: center;
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    width: ${props => props.widthSm || '100%'};

    @media(min-width: 1024px) {
        flex-direction: ${props => props.flexDirLg || 'column'};
        height: ${props => props.heightLg || '40vh'};
        justify-content: ${props => props.justifyLg || 'center'};
        width: ${props => props.widthLg || '100%'};
    }
`

export const Socials = () => (
  <div>
    <a href="#" className="text-white inline border-none">
      <Vimeo className="fill-current w-6 h-6 inline" />
    </a>
    <a href="#" className="text-white inline border-none ml-4">
      <Facebook className="fill-current w-6 h-6 inline" />
    </a>
    <a href="#" className="text-red-700 inline border-none ml-4">
      <Youtube className="fill-current w-6 h-6 inline" />
    </a>
    <a href="#" className="text-white inline border-none ml-4">
      <Instagram className="fill-current w-6 h-6 inline" />
    </a>
  </div>
)

const Footer = () => (
  <footer className="w-full text-center text-xl p-4 text-lightgrey z-50 relative bottom-auto">
    <div className="lg:w-1/2 mx-auto flex flex-col lg:flex-row justify-between">
      <div>© King Media Co {new Date().getFullYear()} </div>
      <Socials />
    </div>
  </footer>
)

const Layout = ({ children }) => {

  return(
    <Background className="font-serif">
      <div className="relative">
        <Header />
        <Main className="lg:w-1/2 w-full relative overflowY-scroll scrolling-touch overflowX-hidden lg:overflow-visible">{children}</Main>
        <Footer />
      </div>
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
