import React from "react"
import styled from "styled-components"
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Buy from "./pages/Buy"
import Sell from "./pages/Sell"
import PropertySearch from "./pages/PropertySearch"
import Testimonials from "./pages/Testimonials"

/*
    Since the navbar is fixed, the content of each page starts underneath the navbar.
    Need to add padding top equal to the Navbars height so the pages don't get
    covered by the Navbar.
*/
const NAVBAR_HEIGHT = "73px"
const AppView = styled.div`
    padding-top: ${({ path }) => path === "/" ? 0 : NAVBAR_HEIGHT};
`

const App = () => (
    <Router>
        <Route
            path="/"
            component={props => (
                <AppView path={props.location.pathname}>
                    <Navbar style={{ height: NAVBAR_HEIGHT }} />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/buy" component={Buy} />
                    <Route path="/sell" component={Sell} />
                    <Route path="/property-search" component={PropertySearch} />
                    <Route path="/testimonials" component={Testimonials} />

                    <Footer />
                </AppView>
            )}
        />
    </Router>
)

export default App
