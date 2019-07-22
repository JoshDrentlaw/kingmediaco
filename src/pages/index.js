import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from "../components/layout"

const H1 = styled.h1`
  color: #616161;
  font-size: 2em;
  margin: 1em 0;
`

const H2 = styled.h2`
  color: #616161;
  font-size: 2em;
  margin: 1em 0 1em;
`

const P = styled.p`
  color: #d4d4d4;
  font-size: 0.9em;
  line-height: 30px;
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home | King Media Co." />
    <Container margin="0 auto" heightLg="auto" heightSm="auto" widthLg="60%">
      <H1>we are: king media</H1>
      <P>King Media Co. is a media production service specializing in video production and video marketing. We are the cinematic solution when it comes to telling the stories of businesses and entrepreneurs.</P>
      <H2>cinematic solutions</H2>
      <P>Welcome to the visual world.<br />The era of online content, and video is king.<br />Ready to set your story into motion?</P>
    </Container>
  </Layout>
)

export default IndexPage
