import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  flexBasis: '30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
})
const Title = styled.h3({
  fontSize: 26,
  marginBottom: 20
})
const Description = styled.p({
  fontSize: 18,
  lineHeight: '24px'
})

export default function FeatureHighlight ({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}
