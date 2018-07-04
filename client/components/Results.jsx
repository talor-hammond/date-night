// React +
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import scrollToComponent from 'react-scroll-to-component'

// Components
import Nav from './Nav'
import Recipes from './Recipes'

class Results extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipePicked: false,
            recipes: this.props.recipes, // an array in itself; feed it through props to Recipes.jsx
            buttonText: 'Show recipes',
            backToTop: false
        }

        this.goToRecipes = this.goToRecipes.bind(this)
        this.handleScrollToElement = this.handleScrollToElement.bind(this)
        this.goToTop = this.goToTop.bind(this)
    }

    componentDidMount() {
        console.log(this.state.recipePicked);

    }

    handleScrollToElement() {
        scrollToComponent(this.refs.recipesList, {
            offset: -80,
            duration: 1200
        })
    }

    goToRecipes() {
        if (!this.state.recipePicked) { // when recipes have been opened...

            this.state.buttonText = 'Hide recipes'

            this.setState({ // causing a re-render...
                recipePicked: true,
                backToTop: true
            }, () => {
                console.log('Callback firing, ' + this.state.recipePicked)
                this.handleScrollToElement()
            })
            console.log(this.state.recipePicked)
        } else { // when recipes have been closed...
            console.log(this.state.recipePicked)
            this.state.buttonText = 'Show recipes'
            this.setState({ // causing a re-render...
                recipePicked: false,
                backToTop: false,
            }, () => {
                console.log('lol')
            })
        }

    }

    goToTop() {
        this.setState({
            backToTop: true
        }, () => {
            if (this.state.backToTop) {
                // after window has scrolled to top...
                this.setState({
                    backToTop: false
                }, () => {
                    scrollToComponent(this.refs.top, {
                        offset: -100,
                        duration: 1200,
                        align: 'bottom',
                        ease: 'inOutCirc'
                    })
                })
            }
        })

    }

    render() {
        let button = this.state.buttonText

        const { menu } = this.props
        const { entree, main, dessert, wine } = menu

        return (
            <React.Fragment>
                <Nav ref="top" />
                <div className="container menu">

                    <h1 className="menuTitle">{menu.nameOne} & {menu.nameTwo}'s menueeeeee</h1>
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

                    <button onClick={() => this.goToRecipes()}>{button}</button>

                </div>
                {
                    this.state.recipePicked &&
                    <Recipes recipes={this.state.recipes} ref="recipesList" />
                }
                {
                    this.state.backToTop && (
                        <div className="containerButton">
                            <button onClick={() => this.goToTop()}>Back to top</button>
                        </div>
                    )
                }

            </React.Fragment>
        )
    }

}

export default Results