import React from 'react'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import Duckify from '../components/Duckify'

const App = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      //title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Duckify />
      </main>
    </Layout>
  )
}

export default App
