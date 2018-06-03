import React from "react"
import styled from "styled-components"
// import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"
import Mls from "../../components/Mls"
import SiteContainer from "../../components/SiteContainer/"

class HeroSection extends React.Component {
    render() {
        return (
            <HeroView id="hero">
            ‏<HeroOverlay />
                <SiteContainer style={{ position: "relative", bottom: "13px" }}>
                    <HeroHeader>
                        The search for your new <BoldenWord>home </BoldenWord>starts here.
                    </HeroHeader>
                    <Mls />
                </SiteContainer>
            </HeroView>
        )
    }
}

const HeroView = styled.div`
    width: 1200px;
    width: 100%;
    height: 100vh;
    background: url('/assets/heroimagemain.jpg') no-repeat;
    background-size: 149%;
    background-position: 0% 55%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 1000px) {
        background-size: 322%;
        background-position: 34% 78%;
    }
`

const HeroOverlay = styled.div`
    width: 100%;
    height: 100vh;
    background: #0d0e157f;
    position: absolute;
`

const HeroHeader = styled.div`
    font-size: 50px;
    color: rgb(250, 250, 250);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    // font-family: 'Raleway', sans-serif;
    // font-family: 'Segoe UI';
    
    font-weight: 300;
    letter-spacing: -0.1rem;
    position: relative;
    top: 6px;
    align-self: flex-start;
    @media (max-width: 1000px) {
        line-height: 1em;
        font-size: 40px;
        top: -4px;
    }
`

const BoldenWord = styled.span`
    font-weight: 400;
    color: rgb(251, 251, 251);
`

export default HeroSection
