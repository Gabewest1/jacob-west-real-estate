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
    width: 100%;
    height: 100vh;
    background: url('/assets/hero1.png') no-repeat;
    background-size: 120%;
    background-position: 30% 68%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeroViewContainer = styled.div`
    width: ${WIDTH_OF_ALL_CONTAINERS};
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
`

const BoldenWord = styled.span`
    font-weight: 500;
    color: rgb(251, 251, 251);
`

export default HeroSection
