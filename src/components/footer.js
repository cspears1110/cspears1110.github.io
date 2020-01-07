import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import React from "react"
import { FaEnvelope, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const SiteFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`

const IconList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-bottom: 0.5em;
  font-size: 1.25em;
`

const Icon = styled.a`
  list-style-type: none;
  margin: 0;
  padding-left: 1em;
  padding-right: 1em;
`

const Footer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query FooterLinksQuery {
        site {
          siteMetadata {
            social {
              email
              facebook
              twitter
              github
            }
          }
        }
      }
    `}
    render={data => (
      <SiteFooter>
      <IconList>
        <Icon>
          <OutboundLink href={`mailto:${data.site.siteMetadata.social.email}`}>
            <FaEnvelope />
          </OutboundLink>
        </Icon>
        <Icon>
          <OutboundLink href={data.site.siteMetadata.social.facebook}>
            <FaFacebookF />
          </OutboundLink>
        </Icon>
        <Icon>
          <OutboundLink href={data.site.siteMetadata.social.twitter}>
            <FaTwitter />
          </OutboundLink>
        </Icon>
        <Icon>
          <OutboundLink href={data.site.siteMetadata.social.github}>
            <FaGithub />
          </OutboundLink>
        </Icon>
      </IconList>
      <FooterText>
        © {new Date().getFullYear()}, Built with ❤️ by Cole Spears
      </FooterText>
    </SiteFooter>
    )}
  />
)

export default Footer
