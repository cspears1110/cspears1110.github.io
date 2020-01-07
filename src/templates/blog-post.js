import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

//border-radius: 1em 0 1em 0;
const MarkedHeader = styled.h1`
  display: inline;
  border-radius: .5em .1em 1em .25em;
  background-image: linear-gradient(
    -100deg,
    rgba(167, 255, 235, 0.15),
    rgba(167, 255, 235, 0.8) 100%,
    rgba(167, 255, 235, 0.25)
  );
`

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  margin-top: 2em;

  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(167, 255, 235, 0.8),
      rgba(167, 255, 235, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }

  blockquote {
    background: #f9f9f9;
    border-left: 10px solid rgba(167, 255, 235, 0.8);
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
        <Img fluid={featuredImgFluid} />
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
