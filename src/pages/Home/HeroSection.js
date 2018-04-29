import React from "react"
import styled from "styled-components"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"
import Mls from "../../components/Mls"

class HeroSection extends React.Component {
    render() {
        return (
            <HeroView>
                <HeroViewContainer>
                    <HeroHeader>
                        The search for your new <BoldenWord>home </BoldenWord>starts here.
                    </HeroHeader>
                    <Mls />
                </HeroViewContainer>
            </HeroView>
        )
    }
}

const HeroView = styled.div`
    width: 1200px;
    width: 100%;
    height: 100vh;
    background: url('/assets/hero1.png') no-repeat;
    background-size: 120%;
    background-position: 30% 68%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
        background-size: 322%;
    }
`

const HeroViewContainer = styled.div`
    width: ${WIDTH_OF_ALL_CONTAINERS};
    position: absolute;
`

const HeroHeader = styled.div`
    font-size: 50px;
    color: rgb(250, 250, 250);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    letter-spacing: -0.1rem;
    position: relative;
    top: 6px;
    @media (max-width: 1000px) {
        font-size: 28px;
    }
`

const BoldenWord = styled.span`
    font-weight: 500;
    color: rgb(251, 251, 251);
`

export default HeroSection
