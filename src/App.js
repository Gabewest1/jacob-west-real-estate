import React from "react"
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Buy from "./pages/Buy"
import Sell from "./pages/Sell"
import PropertySearch from "./pages/PropertySearch"
import Testimonials from "./pages/Testimonials"

const App = () => (
    <Router>
        <div>
            <Navbar />

            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/buy" component={Buy} />
            <Route path="/sell" component={Sell} />
            <Route path="/property-search"component={PropertySearch} />
            <Route path="/testimonials" component={Testimonials} />


            <Footer />
        </div>
    </Router>
)

export default App
