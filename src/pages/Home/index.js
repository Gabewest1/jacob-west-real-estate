import React from "react"
import styled from "styled-components"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import TestimonialsSection from "./TestimonialsSection"
import FeaturedNeighborhoodsSection from "./FeaturedNeighborhoodsSection"
import GettingStartedSection from "./GettingStartedSection"
import ContactSection from "./ContactSection"

class Home extends React.Component {
    render() {
        return (
            <HomeView {...this.props}>
                <HeroSection />
                <AboutSection />
                <TestimonialsSection />
                <FeaturedNeighborhoodsSection />
                <GettingStartedSection />
                <ContactSection />
            </HomeView>
        )
    }
}

const HomeView = styled.div`

`

export default Home
