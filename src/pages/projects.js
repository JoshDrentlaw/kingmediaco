import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from "../components/layout"

const ProjectItem = styled.section``

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
                                fluid(maxHeight: 600, maxWidth: 600) {
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
            <Container>
                {data.allSanityPost.edges.map(({ node }) => (
                        <ProjectItem key={node.id}>
                            <h2>{node.project_title}</h2>
                        </ProjectItem>
                    )
                )}
            </Container>
        </Layout>
    )
}

export default ProjectsPage