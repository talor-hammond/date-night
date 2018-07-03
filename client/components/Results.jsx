import React, { Component } from 'react'

import Nav from './Nav'

class Results extends Component {

    constructor(props) {
        super(props)

        // TODO: structuring???? from App.jsx w spread operator
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const {menu, recipes} = this.props
        const {entree, main, dessert, wine} = menu
        return (
            <React.Fragment>
                <Nav />
                <div className="container menu">

                    <h1 className="menuTitle">Your menu</h1>
                    <hr />
                    <ul>
                        <li>
                            <h3 className="menuTitle">Entreé</h3>
                            <p><small>{entree}</small></p>
                        </li>
                        <li>
                            <h3 className="menuTitle">Main</h3>
                            <p><small>{main}</small></p>
                        </li>
                        <li>
                            <h3 className="menuTitle">Dessert</h3>
                            <p><small>{dessert}</small></p>
                        </li>
                        {wine && (
                            <li>
                                <h3 className="menuTitle">Wine pairing</h3>
                                <p><small>{wine}</small></p>
                            </li>
                        )}
                    </ul>

                </div>

            </React.Fragment>
        )
    }

}

export default Results