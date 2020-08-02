import React from 'react'
import styled from '@emotion/styled'
import Feature from './Feature'

const Container = styled.div({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
})
const Title = styled.h3({
  fontSize: 26,
  marginBottom: 20
})

export default function OtherFeatures () {
  const features = [
    'Write routes as Express handlers',
    'Fully compatible with any Express middleware',
    'Works as middleware with other Express based frameworks',
    'Ephemeral in-memory store for duration of process',
    'Growing collection of plugins',
    'Works headlessly for automated tests using same configuration',
    'Interactor can be managed both directly and over REST',
    'Startup < 5ms even with larger multi-route configurations',
    'Opt-in watch mode for development automatically reloads changes'
  ]

  return (
    <>
      <Title>Other notable features</Title>
      <Container>
        {features.map(feature => <Feature description={feature} />)}
      </Container>
    </>
  )
}