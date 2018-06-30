import React from 'react'

// Components:
import Form from './Form'

// Imports from apiCLient.js:
import api from '../apiClient'

const Home = (props) => {

    return (
        <React.Fragment>
            <div className="container">
                <header>
                    <marquee><h1>datenite</h1></marquee>
                </header>

                <Form />
            </div>
        </React.Fragment>
    )

}

export default Home

