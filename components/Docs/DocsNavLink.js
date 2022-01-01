import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const StyledLink = styled.a({
  fontSize: 18,
  lineHeight: '40px',
  textDecoration: 'none'
}, ({ active }) => ({
  fontWeight: active ? 700 : 400,
  color: active ? '#429F87' : '#293237'
}))

export default function DocsNavLink ({ href, children }) {
  const router = useRouter()

  return (
    <StyledLink href={href} active={router.pathname === href}>{children}</StyledLink>
  )
}
