import Head from 'next/head'

const Meta = () => (
    <Head>
        <script
            dangerouslySetInnerHTML={{
                __html: `
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-87017209-13"></script>
                <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-87017209-13');
              `,
            }}
        />

        <title>COVID-19: The Numbers</title>
        <meta name="og:title" property="og:title" content="COVID-19: The Numbers" />
        <meta property="og:site_name" content="COVID-19: The Numbers" />
        <meta name="twitter:title" content="COVID-19: The Numbers" />

        <meta name="description" content="COVID-19 statistics for every state in the USA." />
        <meta name="og:description" property="og:description" content="COVID-19 statistics for every state in the USA." />

        <meta property="og:url" content="https://covid-tracking.vercel.app" />
        <meta name="twitter:site" content="https://covid-tracking.vercel.app" />

        <link rel="icon" type="image/png" href="/img/covid.png" />
        <link rel="apple-touch-icon" href="/img/covid.jpg" />
        <meta property="og:image" content="/img/covid.pjpgng" />
        <meta name="twitter:image" content="https://covid-tracking.vercel.app/img/covid.jpg" />

        <meta name="twitter:creator" content="@youngseebi" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />

        <link rel="stylesheet" href="https://unpkg.com/anticss" />
    </Head>
)

export default Meta