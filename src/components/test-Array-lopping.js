import React from "react"
import { StaticQuery, graphql } from 'gatsby'


const ArrayLopping = () => (

  <div className="indexpage_main">
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
    />{/* End of the STatic Query */}

  </div>
)




export default ArrayLopping;