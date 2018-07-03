import React from 'react'

import Nav from './Nav'

class Results extends React.Component {

    constructor(props) {
        super(props)

        // TODO: structuring???? from App.jsx w spread operator

        // this.state = {
        //     nameOne: this.props.menu.nameOne,
        //     nameTwo: this.props.menu.nameTwo,
        //     entree: this.props.menu.entree,
        //     main: this.props.menu.main,
        //     dessert: this.props.menu.dessert
        // }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <React.Fragment>
                <Nav />
                <div className="container menu">

                    <h1 className="menuTitle">Your menu</h1>
                    <hr />
                    <ul>
                        <li>
                            <h3 className="menuTitle">Entreé</h3>
                            <p><small>chawcalasfdsafkn with yasdafjds on toast</small></p>
                        </li>
                        <li>
                            <h3 className="menuTitle">Main</h3>
                            <p><small>chawcalasfdsafkn with yasdafjds on toast</small></p>
                        </li>
                        <li>
                            <h3 className="menuTitle">Dessert</h3>
                            <p><small>chawcalasfdsafkn with yasdafjds on toast</small></p>
                        </li>
                        <li>
                            <h3 className="menuTitle">Wine pairing</h3>
                            <p><small>chawcalasfdsafkn with yasdafjds on toast</small></p>
                        </li>
                    </ul>

                </div>

            </React.Fragment>
        )
    }

}

export default Results