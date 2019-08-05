import React from "react"
import styled from "styled-components"
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from "../components/layout"

const ProjectItem = styled(Container)`
    width: 600px;

    div {
        width: 600px;
    }
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
                                fluid {
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
                        <Img fluid={node.mainProjectImage.asset.fluid} alt={node.mainProjectImage.caption} />
                        <H2>{node.projectTitle}</H2>
                    </ProjectItem>
                )
            )}
        </Layout>
    )
}

export default BlogPage
