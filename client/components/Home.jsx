import React from 'react'
import {Link} from 'react-router-dom'

// Components:
import Form from './Form'
import Nav from './Nav'

// Imports from apiCLient.js:
import api from '../apiClient'

const Home = (props) => {

    return (
        <React.Fragment>

                <Link to='/create'><button>Go</button></Link>

        </React.Fragment>
    )

}

export default Home

