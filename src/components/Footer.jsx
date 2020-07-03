import React from 'react'
import Link from 'next/link'

class Footer extends React.Component {
    render() {
        return <>
            <section>
                <footer>
                    <nav>
                        <a target="_blank" href="http://github.com/al5ina5/covid-tracker">GitHub</a>
                        <a target="_blank" href="https://discord.gg/2cuchD9">Discord</a>
                    </nav>
                    <br />
                    <p>Designed and Developed by <a href="https://sebastianalsina.com">Sebastian Alsina</a></p>
                </footer>
            </section>
        </>
    }
}

export default Footer