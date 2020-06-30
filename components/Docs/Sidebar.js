import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  width: 275,
  height: 'auto',
  background: '#F6F8FA',
  border: '1px solid #E6E6E6'
})

export default function Sidebar () {
  return (
    <Container>
      <span>sidebar</span>
    </Container>
  )
}