import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from "../components/layout"

const H1 = styled.h1`
  color: #616161;
  font-size: calc(22px + (27 - 22) * ((100vw - 300px) / (1600 - 300)));
  margin: 1em 0;
`

const H2 = styled.h2`
  color: #616161;
  font-size: calc(22px + (27 - 22) * ((100vw - 300px) / (1600 - 300)));
  margin: 1em 0 1em;
`

const P = styled.p`
  font-size: 14px;
  line-height: 30px;
  text-align: center;
`

const Button = styled.button`
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px 0;
  width: 60%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container margin="0 auto" heightLg="auto" heightSm="auto" widthLg="80%">
      <H1>we are king media</H1>
      <P>King Media Co. is a media production service specializing in video production and video marketing. We are the cinematic solution when it comes to photo and video services.</P>
      <Button><Link to="/discovery/">Explore Our Services</Link></Button>
    </Container>
  </Layout>
)

export default IndexPage
