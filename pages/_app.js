import Head from 'next/head'
import '../styles/globals.css'
import Layout from './components/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  
  return  <div>

  <Layout><Component {...pageProps} /></Layout> 
 
   
  </div>
  
}

export default MyApp
