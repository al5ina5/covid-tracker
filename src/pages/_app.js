import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import Meta from '../components/Meta'

function MyApp({ Component, pageProps }) {
    var router = useRouter()

    return <>
        <Meta />
        <Header />
        <Component {...pageProps} router={router} />
    </>
}

export default MyApp