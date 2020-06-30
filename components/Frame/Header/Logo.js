import React from 'react'
import AppstrapLogo from '../../AppstrapLogo'
import styled from '@emotion/styled'

const Link = styled.a({
  textDecoration: 'none'
})

const Container = styled.div({
  display: 'flex',
  width: 200,
  alignItems: 'center',
  justifyContent: 'flex-start'
})

const Text = styled.span({
  fontWeight: 700,
  color: '#1B4A40',
  fontSize: 24,
  marginLeft: 10
})

export default function Logo () {
  return (
    <Link href={'/'}>
      <Container>
        <AppstrapLogo color={'#1B4A40'}/>
        <Text>Appstrap</Text>
      </Container>
    </Link>
  )
}