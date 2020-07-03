import React from 'react'
import Axios from 'axios'
import Link from 'next/link'
import States from '../states.json'
import { formatNumber } from '../utils'

class Index extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            state: '',
            alert: ''
        }
    }

    render() {
        return <>
            <section>
                <h1>COVID-19 in the USA</h1>
                <h2>{formatNumber(this.props.covid.positive)} positive cases in the USA. {formatNumber(this.props.covid.death)} have resulted in death.</h2>
            </section>

            <section>
                <h2>Track by State</h2>
                <p>Track the latest numbers in COVID-19 by state. Enter your state code.</p>

                {this.state.alert && (
                    <p>{this.state.alert}</p>
                )}

                {this.props.router.query.alert && (
                    <p>{this.props.router.query.alert}</p>
                )}

                <form action="">
                    <input type="text" name="state" placeholder="FL" onChange={(e) => {
                        e.preventDefault()

                        this.setState({
                            alert: '',
                            [e.target.name]: e.target.value.toLowerCase()
                        })
                    }} />
                    <button onClick={(e) => {
                        e.preventDefault()

                        if (!this.state.state) {
                            this.setState({
                                alert: 'You must enter a state.'
                            })
                            return
                        }

                        this.props.router.push(`/[state]`, `/${this.state.state}`)
                    }}>Track</button>
                </form>
            </section>

            <section>
                <h2>Quick Links</h2>
                <p>
                    {Object.keys(States).map((state, index) => (
                        <>
                            <Link key={index} href="/[state]" as={`/${state.toLowerCase()}`}>
                                <a>{States[state]} ({state})</a>
                            </Link>, &nbsp;
                        </>
                    ))}
                </p>
            </section>
        </>
    }
}

export async function getServerSideProps(context) {
    var get = await Axios.get(`https://covidtracking.com/api/v1/us/current.json`).catch(err => console.log(err))

    var data = get.data[0]

    return {
        props: {
            covid: data
        }
    }
}

export default Index