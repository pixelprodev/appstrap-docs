import React from 'react'
import styled from '@emotion/styled'
import DocsNavLink from './DocsNavLink'

const Container = styled.div({
  width: 325,
  marginBottom: '1rem',
  height: 'auto',
  borderRight: '1px solid #E6E6E6',
  padding: 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  flexShrink: 0
})

const SectionHeader = styled.h2({
  fontSize: 18,
  fontWeight: 300,
  marginBottom: 15
})

const Divider = styled.div({
  width: 175,
  borderBottom: '1px solid #DFE2E5',
  margin: '20px 0'
})

export default function Sidebar () {
  return (
    <Container>
      <DocsNavLink href='/docs/quick-start'>Quick Start</DocsNavLink>
      <DocsNavLink href='/docs/how-it-works'>How It Works</DocsNavLink>
      <Divider />
      <SectionHeader>Configuration</SectionHeader>
      <DocsNavLink href='/docs/routes'>Routes</DocsNavLink>
      <DocsNavLink href='/docs/fixtures'>Fixtures</DocsNavLink>
      <DocsNavLink href='/docs/state'>State</DocsNavLink>
      <DocsNavLink href='/docs/interactor'>Interactor</DocsNavLink>

    </Container>
  )
}
