import React from 'react'
import Head from 'next/head'
import Axios from 'axios'
import { formatNumber } from '../utils'

class StateTracker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            state: '',
            covid: {}
        }
    }

    componentDidMount = () => {
        if (!this.props.covid.date) {
            this.props.router.push({
                pathname: '/',
                query: { alert: `No such state with state code ${this.props.state.toUpperCase()}.` }
            }, {
                shallow: true
            })
        }
    }

    render() {
        return <>
            <Head>
                <title>{this.props.state.toUpperCase()} - COVID-19: The Numbers</title>
            </Head>
            <section>
                <h1>COVID-19 in {this.props.state.toUpperCase()}</h1>
                <h2>{formatNumber(this.props.covid.positive)} have tested positive in {this.props.state.toUpperCase()}. {formatNumber(this.props.covid.death)} have died.</h2>
                <h2>In the past 24 hours, {formatNumber(this.props.covid.positiveIncrease)} more tested positive and {formatNumber(this.props.covid.deathIncrease)} died.</h2>
            </section>

            <section>
                <table>
                    <tbody>
                        <tr>
                            <th>Statistic</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>Hospitalized Currently</td>
                            <td>{formatNumber(this.props.covid.hospitalizedCurrently)}</td>
                        </tr>
                        <tr>
                            <td>Hospitalized Cumulative</td>
                            <td>{formatNumber(this.props.covid.hospitalizedCumulative)}</td>
                        </tr>
                        <tr>
                            <td>Hospitalized Increase</td>
                            <td>{formatNumber(this.props.covid.hospitalizedIncrease)}</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>How can I help?</h2>
                <ul>
                    <li>Wear a mask.</li>
                    <li>Staying home and following social-distance guidelines.</li>
                    <li>Keep your distance from people in public.</li>
                    <li>Wash your hands!</li>
                    <li>Provide awareness around COVID-19 and Coronavirus.</li>
                </ul>
            </section>

            <section>
                <p>Data from <a target="_blank" href="https://covidtracking.com/">covidtracking.com</a>. Updated frequently.</p>
                <pre>https://covidtracking.com/api/v1/states/{this.props.state}/current.json</pre>
            </section>
        </>
    }
}

export default StateTracker

export async function getServerSideProps(context) {
    var state = context.params.state.toString().toLowerCase()

    var get = await Axios.get(`https://covidtracking.com/api/v1/states/${state}/current.json`).catch(err => console.log(err))

    var data = {}
    if (get) var data = get.data

    return {
        props: {
            covid: data,
            state: state
        }
    }
}