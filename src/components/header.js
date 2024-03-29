import * as React from 'react'

// Step 1: Import the useStaticQuery hook and graphql tag
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      {/* Step 3: Use the data in your component */}
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )
}

export default Header