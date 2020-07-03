import Head from 'next/head'
import { useRouter } from 'next/router'

import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    var router = useRouter()

    return <>
        <Meta />
        <Header />
        <Component {...pageProps} router={router} />
        <Footer />
    </>
}

export default MyApp