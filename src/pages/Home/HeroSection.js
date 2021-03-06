import React from "react"
import styled from "styled-components"
import Mls from "../../components/Mls"

class HeroSection extends React.Component {
    render() {
        return (
            <HeroView id="hero">
            ‏<HeroOverlay />
                <HeroContainer>
                    <HeroHeader>
                        The search for your new <BoldenWord>home </BoldenWord>starts here.
                    </HeroHeader>
                    <Mls pageId="hero" />
                </HeroContainer>
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
    background-position: 0% 54%;
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

const HeroContainer = styled.div`
    width: 76%;
    max-width: 1024px;    

    @media (max-width: 1000px) {
        width: 80%;
    }
`

const HeroOverlay = styled.div`
    width: 100%;
    height: 100vh;
    background: #0d0e1570;
    position: absolute;
    top: 0;
    left: 0;
`

const HeroHeader = styled.div`
    font-size: 50px;
    color: rgb(250, 250, 250);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    font-weight: 400;
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
    font-weight: 500;
    color: rgb(251, 251, 251);
`

export default HeroSection
