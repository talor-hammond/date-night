import React, {Component} from 'react'

class Recipes extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(props)
    }

    render() {
        return <h1>Hi</h1>
    }

}

export default Recipes