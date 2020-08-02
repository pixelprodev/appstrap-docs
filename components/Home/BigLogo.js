import React from 'react'
import AppstrapLogo from '../AppstrapLogo'
import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  padding: '5rem 0',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  ' svg': {
    height: 150,
    width: 'auto',
    marginBottom: 20
  }
})

const LogoText = styled.span({
  fontSize: 80,
  fontWeight: 'bold'
})

export default function BigLogo () {
  return (
    <Container>
      <AppstrapLogo color={'#1B4A40'}/>
      <LogoText>Appstrap</LogoText>
    </Container>
  )
}