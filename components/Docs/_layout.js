import styled from '@emotion/styled'
import Sidebar from './Sidebar'
import docsStyles from './_styles'

const Container = styled.div({
  borderTop: '1px solid #DFE2E5',
  width: '100%',
  minHeight: 'calc(100vh - 80px)',
  display: 'flex'
})
const DocsContent = styled.div({
  padding: 50,
  ...docsStyles
})

export default function DocsLayout ({ children }) {
  return (
    <Container>
      <Sidebar />
      <DocsContent>
        {children}
      </DocsContent>
    </Container>
  )
}
