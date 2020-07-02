import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
    var router = useRouter()

    return <>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/anticss" />
        </Head>
        <Header />
        <Component {...pageProps} router={router} />
    </>
}

export default MyApp