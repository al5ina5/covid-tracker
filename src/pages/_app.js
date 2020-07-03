import ReactGA from 'react-ga'
import { useRouter, useEffect } from 'next/router'

import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    var router = useRouter()

    // useEffect(() => {
    //     router.events.on('routeChangeStart', () => {
    //         ReactGA.initialize('UA-87017209-13');
    //         ReactGA.pageview(window.location.pathname + window.location.search);
    //     })
    // })

    return <>
        <Meta />
        <Header />
        <Component {...pageProps} router={router} />
        <Footer />
    </>
}

export default MyApp