import React from 'react'
import styled from '@emotion/styled'
import GithubLogo from '../../svg/GithubLogo'

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 300,
  ' svg': {
    width: 30,
    height: 30,
    fill: '#1B4A40'
  }
})

const Divider = styled.div({
  width: 1,
  height: 40,
  border: '1px solid #CCC'
})

const Link = styled.a({
  fontSize: 16,
  fontWeight: 600,
  textDecoration: 'none',
  ' &:hover': {
    textDecoration: 'underline'
  }
})

export default function Links () {
  return (
    <Container>
      <Link href='/docs'>Docs</Link>
      <Link href='/plugins'>Plugins</Link>
      <Link href='/examples'>Examples</Link>
      <Divider />
      <Link href='//github.com/pixelprodev/appstrap'>
        <GithubLogo />
      </Link>
    </Container>
  )
}
