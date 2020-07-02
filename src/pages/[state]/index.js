import React from 'react'
import Axios from 'axios'

class StateTracker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            state: '',
            covid: {}
        }
    }

    formatNumber(num) {
        var num = num || 0
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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
            </section>

            <section>

            </section>

            <section>
                <h2>
                    In the state of {this.props.state.toUpperCase()}...
                </h2>
                <p>{this.formatNumber(this.props.covid.positive)} have tested positive.</p>
                <p>{this.formatNumber(this.props.covid.hospitalized)} have been hospitalized.</p>
                <p>{this.formatNumber(this.props.covid.death)} have died.</p>
            </section>

            <section>
                <h2>Today in COVID-19...</h2>
                <p>{this.formatNumber(this.props.covid.positiveIncrease)} tested positive.</p>
                <p>{this.formatNumber(this.props.covid.hospitalizedIncrease)} were hospitalized.</p>
                <p>{this.formatNumber(this.props.covid.deathIncrease)} died.</p>
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