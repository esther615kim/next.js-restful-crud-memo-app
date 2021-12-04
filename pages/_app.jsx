import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {//여기 para2개 잘 몰라
  return (
    <Layout>
      < Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
