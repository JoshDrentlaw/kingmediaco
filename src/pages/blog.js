import React from "react"
import styled from "styled-components"
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from "../components/layout"

const ProjectItem = styled.div`
    width: 100%; height: 100%;
`

const H2 = styled.h2`
    font-size: 27px;
`

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        {
            allSanityPost(sort: {fields: publishedAt, order: DESC}) {
                edges {
                    node {
                        id
                        projectTitle
                        mainProjectImage {
                            asset {
                                fluid(maxWidth: 600) {
                                    ...GatsbySanityImageFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="Blog" />
            {data.allSanityPost.edges.map(({ node }) => (
                    <ProjectItem key={node.id} padding="1em">
                        <Img fluid={node.mainProjectImage.asset.fluid} alt={node.id} />
                        <H2>{node.projectTitle}</H2>
                    </ProjectItem>
                )
            )}
        </Layout>
    )
}

export default BlogPage
