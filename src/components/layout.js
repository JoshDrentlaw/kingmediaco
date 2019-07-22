import React from "react"
import PropTypes from "prop-types"

import is from 'is_js'

import '../global.css'
import styled from 'styled-components'

import Header, { Socials } from "./header"


const Background = styled.div`

`

const Main = styled.main`
  min-height: calc(100vh - 112px);
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 1024px) {
    max-height: calc(100vh - 112px);
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
    width: 100%;

    @media(min-width: 1024px) {
        flex-direction: ${props => props.flexDirLg || 'row'};
        height: ${props => props.heightLg || '40vh'};
        justify-content: ${props => props.justifyLg || 'center'};
    }
`

const Footer = () => (
  <footer className="w-full text-center p-4 bg-black text-lightgrey z-50 fixed bottom-0 lg:relative lg:bottom-auto">
    <div className="lg:w-1/2 mx-auto flex justify-between">
      <div className="text-sm w-1/2">© {new Date().getFullYear()} </div>
      <Socials />
    </div>
  </footer>
)

const Layout = ({ children }) => {
  const isClient = typeof window !== 'undefined';
  const safari = is.safari();

  return(
    <Background safari={safari}>
      <div className="relative">
        <div id="top"></div>
        <Header />
        <Main className="lg:w-1/2 w-full relative overflow-scroll scrolling-touch lg:overflow-visible">{children}</Main>
        <Footer />
      </div>
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
