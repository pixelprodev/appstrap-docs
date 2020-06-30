import React from 'react'
import Logo from './Logo'
import styled from '@emotion/styled'
import Links from './Links'

const Container = styled.div({
  display: 'flex',
  height: 100,
  padding: '0 30px',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export default function Header () {
  return (
    <Container>
      <Logo />
      <Links />
    </Container>
  )
}