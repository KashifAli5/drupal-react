import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import './profile.css'


const Profile = () => (
	<StaticQuery
      query={graphql`
          query {
           allNodeProfile {
		    edges {
		      node {
		        id
		        title
		        field_education {
		          value
		        }
		        field_bio {
		          value
		        }
		      }
		    }
		  }
        }
      `}
      render={data => (
          <div>
          {data.allNodeProfile.edges.map(({ node }, i) => (
            <div key={i} className="card-main">
            	<div className="crad-name"><h3> {node.title}</h3></div>
            	<div dangerouslySetInnerHTML={{ __html: node.field_education.value }} className="card-education"></div>
            	<div dangerouslySetInnerHTML={{ __html: node.field_bio.value }} className="card-bio"></div>

            </div>

          
          ))}
          
      </div>
      )}
    />


)


export default Profile;