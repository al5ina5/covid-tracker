import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
    render() {
        return <>
            <section>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>
            </section>
        </>
    }
}

export default Header