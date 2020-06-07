import React from "react"
import { graphql } from "gatsby"



import Layout from "../components/layout"

export const query = graphql`
  query ProjectQuery($id: Int!) {
    strapiProject(strapiId: { eq: $id }) {
      strapiId
      title
    }
  }
`

const Project = ({ data }) => {
  const project = data.strapiProject
  return (
    <Layout>
      <div>
          <h1>{project.title}</h1>
          <p>yo</p>
        </div>

    </Layout>
  )
}

export default Project