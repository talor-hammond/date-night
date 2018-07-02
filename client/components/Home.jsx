import React from 'react'

// Components:
import Form from './Form'
import Nav from './Nav'

const Home = (props) => {

    return (
        <React.Fragment>

                <Nav />
                <Form updateState={props.updateState}/>

        </React.Fragment>
    )

}

export default Home

