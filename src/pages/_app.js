import 'anticss'
import { useRouter } from 'next/router'

import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
    var router = useRouter()

    return <>
        <Header />
        <Component {...pageProps} router={router} />
    </>
}

export default MyApp