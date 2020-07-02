import React from 'react'
import Axios from 'axios'
import { withRouter } from 'next/router'

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
                <p>Track the latest numbers in COVID-19 by state.</p>

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
        </>
    }
}

export default Index