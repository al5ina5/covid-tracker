import React from 'react'
// import Axios from 'axios'
// import { formatNumber } from '../../utils'

class About extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return <>
            <section>
                <h1>About This COVID-19 Tracker</h1>
            </section>

            <section>
                <h2>About</h2>
                <p>
                    I built this COVID-19 statistics tracker for 2 reasons: to provide awareness to the ongoing pandemic who is affecting the lives of many worldwide, and to put my skills as a developer to good use to create something that can help better the world. I believe it is extremely important that we respect social-distancing guidelines to ensure the planet's earliest recovery—and spare the most amount of lives while in the process. This website shows the hard (but true) numbers behind the infamous COVID-19.
                </p>
                <p>Yours truly,</p>
                <p><a href="https://sebastianalsina.com/">Sebastian Alsina</a></p>
            </section>

            <section>
                <h2>Contact</h2>
                <a href="#">
                    <button>
                        Join me on Discord
                    </button>
                </a>
                <p>Send me an email at X.</p>
            </section>

            <section>
                <h2>Technology</h2>
                <p>This tracker uses a combination of many technologies to present the facts.</p>
                <ul>
                    <li>This website is hosted on <a href="http://vercel.com">Vercel</a>.</li>
                    <li>The website is built in <a href="https://nextjs.org">NextJS</a>.</li>
                    <li>The website design (CSS framework) is powered by <a href="https://anticss.vercel.app">anti.css</a>—a class-less CSS framework to build modern web-apps.</li>
                    <li><a href="https://covidtracking.com/">The COVID Tracking Project</a> for COVID statistics and analytics.</li>
                </ul>
            </section>
            <section>
                <h2>Support the Developer</h2>
                <p>There's probably way better places you could donate your money to, but if you'd like to support the developer with a small donation to see more projects like this one, you'd be very appreciated!</p>
                <h3>Patreon</h3>
                <a href="https://patreon.com/sebastianalsina">
                    <button>
                        Become a Patron
                    </button>
                </a>
                <h3>Bitcoin Address</h3>
                <pre>3AJ6FtwZpvP6UExcPqnG4hWgivvAxf8ejf</pre>
                <h3>Stellar Address</h3>
                <pre>GDY6TJFWJTEPY6UPYTE7756I3LAY34FODNJET3TJPNJKN34UMS4PGVM7</pre>
            </section>
        </>
    }
}

export default About