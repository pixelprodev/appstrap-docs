import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 250
})
const Button = styled.button({
  height: 50,
  width: 250,
  fontSize: 20,
  margin: '0 25px'
}, ({ primary }) => {

})

export default function CTAButtons () {
  return (
    <Container>
      <Button>Documentation</Button>
      <Button primary>Quick Start</Button>
      <Button>View Examples</Button>
    </Container>
  )
}