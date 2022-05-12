import React from 'react'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import Duckify from '../components/Duckify'

const App = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout>
      <main>
        <Duckify />
      </main>
    </Layout>
  )
}

export default App
