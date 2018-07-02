import React from 'react'

import Nav from './Nav'

class Results extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(props)
    }

    render() {
        return (
            <Nav />
        )
    }

}

export default Results