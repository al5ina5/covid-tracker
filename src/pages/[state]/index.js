import React from 'react'
import Axios from 'axios'
import { formatNumber } from '../../utils'

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
            <section>
                <h1>COVID-19 in {this.props.state.toUpperCase()}</h1>
                <p>Last updated at <code>{this.props.covid.dateModified}</code>.</p>
            </section>

            <section>

            </section>

            <section>
                <h2>
                    In the state of {this.props.state.toUpperCase()}...
                </h2>
                <p>{formatNumber(this.props.covid.positive)} have tested positive.</p>
                {/* <p>{formatNumber(this.props.covid.hospitalized)} have been hospitalized.</p> */}
                <p>{formatNumber(this.props.covid.death)} have died.</p>
            </section>

            <section>
                <h2>Today in COVID-19...</h2>
                <p>{formatNumber(this.props.covid.positiveIncrease)} tested positive.</p>
                {/* <p>{formatNumber(this.props.covid.hospitalizedIncrease)} were hospitalized.</p> */}
                <p>{formatNumber(this.props.covid.deathIncrease)} died.</p>
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

            {/* <section>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Statistic</th>
                        </tr>
                        <tr>
                            <td>1000</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
            </section> */}

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