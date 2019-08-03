import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from "../components/layout"

const ProjectItem = styled.section`
    max-width: 600px;
`

const H2 = styled.h2`
    font-size: 27px;
`

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        {
            allSanityPost {
                edges {
                    node {
                        id
                        project_title
                        blog_title
                        main_project_image {
                            caption
                            attribution
                            asset {
                                fluid(maxHeight: 600, maxWidth: 600, toFormat: WEBP) {
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
            <SEO title="Projects" />
            {data.allSanityPost.edges.map(({ node }) => (
                    <Container key={node.id}>
                        <ProjectItem>
                            <Img fluid={node.main_project_image.asset.fluid} alt="node.main_project_image.caption" />
                            <H2>{node.project_title}</H2>
                        </ProjectItem>
                    </Container>
                )
            )}
        </Layout>
    )
}

export default ProjectsPage