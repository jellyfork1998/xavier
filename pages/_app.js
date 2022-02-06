import Head from 'next/head'
import '../styles/globals.css'
import Layout from './components/Layout/Layout'


function MyApp({ Component, pageProps }) {
  
  return  <div>
  <Head>

  </Head>
  <Layout><Component {...pageProps} /></Layout> 
 
   
  </div>
  
}

export default MyApp
