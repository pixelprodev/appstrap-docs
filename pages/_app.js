import Head from 'next/head'
import CSSReset from '../styles/CSSReset'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import DocsLayout from '../components/Docs/_layout'

export default function AppstrapDocs ({ Component, pageProps }) {
  const router = useRouter()

  return (
    <CSSReset>
      <Head>
        <title>Appstrap</title>
      </Head>
      <Header />
      {router.pathname.includes('docs')
        ? <DocsLayout><Component {...pageProps} /></DocsLayout>
        : <Component {...pageProps} />}
    </CSSReset>
  )
}
