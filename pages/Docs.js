import React from 'react'
import Frame from '../components/Frame'
import styled from '@emotion/styled'
import Sidebar from '../components/Docs/Sidebar'

const Layout = styled.div({
  display: 'flex',
  height: 'calc(100vh - 100px)'
})

export default function Docs() {
  return (
    <Frame>
      <Layout>
        <Sidebar />
        <span>docs</span>
      </Layout>
    </Frame>
  )
}
