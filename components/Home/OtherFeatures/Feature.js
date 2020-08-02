import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  flexBasis: '48%',
  ' span': {
    fontSize: 18,
    lineHeight: '34px'
  }
})

export default function Feature ({ description }) {
  return (
    <Container>
      <span>{description}</span>
    </Container>
  )
}
