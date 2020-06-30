import React from 'react'
import CSSReset from '../../styles/CSSReset'
import Header from './Header'
import styled from '@emotion/styled'

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

export default function Frame ({ children }) {
  return (
    <CSSReset>
      <Content>
        <Header />
        {children}
      </Content>
    </CSSReset>
  )
}