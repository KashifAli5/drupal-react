import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby'

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
        query {
         allNodePage 
        {
          edges {
            node {
              id
              title
              body {
                value
              }
            }
          }
        }
      }
    `}
    render={data => (
        <div>
        {data.allNodePage.edges.map(({ node }, i) => (
          <li key={i}> <h3> {node.title}</h3> </li>

        ))}
        
    </div>
    )}
  />
)




export default IndexPage
