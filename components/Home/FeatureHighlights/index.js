import React from 'react'
import FeatureHighlight from './FeatureHighlight'
import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  margin: '50px 0',
  width: '100%',
  justifyContent: 'space-between'
})

export default function FeatureHighlights () {
  const highlights = [
    {
      title: 'Best Practice Friendly',
      description: 'The best way to test an application is to use it exactly the way you would in production.  Appstrap enables this by proiding the mock at the REST boundary.  Your app will never know its not getting production data!'
    },
    {
      title: 'Trivialize Edge Cases',
      description: 'Leverage built in response modifiers for errors and latency to test negative cases and slow services, all without code changes. Then take it to the next level with fixture intercepts to override responses covering any edge cases that might arise in your development and maintenance cycles.'
    },
    {
      title: 'Debug Like a Pro',
      description: 'App failing in production?  Reproduce it locally in an instant using the exact same payloads and configurations using our custom fixture interceptors.'
    }
  ]

  return (
    <Container>
      {highlights.map(benefit => <FeatureHighlight {...benefit} />)}
    </Container>
  )
}
