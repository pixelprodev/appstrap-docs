import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  ' h1': {
    fontSize: 30,
    marginBottom: 20
  },
  ' p': {
    maxWidth: '50vw',
    fontSize: 20,
    lineHeight: '30px'
  }
})

export default function MissionStatement () {
  return (
    <Container>
      <h1>Powerful low-config mocked services for REST applications.</h1>
      <p>With a simple yet powerful config, appstrap enables consistent development, debugging, and testing of any app or service that consumes data over REST endpoints.</p>
    </Container>
  )
}