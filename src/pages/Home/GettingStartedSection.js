import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import "font-awesome/css/font-awesome.min.css"
import SectionHeader from "../../components/SectionHeader"
import SiteContainer from "../../components/SiteContainer/"

class GettingStartedSection extends React.Component {
    render() {
        return (
            <GettingStartedView>
                <SiteContainer>
                    <SectionHeader blueWord="Getting" greyWord="started" />

                    <h3 style={{ marginTop: "15px" }}>Having to exist in this world can be hard Jacob.</h3>

                    <p style={{ marginTop: "0px" }}>
                        Property values are always going to be around, never
                        get to know what you can or can&#39;t just by asking.
                    </p>

                    <ThreeStepProcess>
                        <StepContainer>
                            <WhyUsIcon />

                            
                            <h3>Why Us</h3>

                            <p>
                                This is where the description will lead into the about us page,
                                lorem ipsum dolor sit amet, Greater Austin area, to learn more
                                about Jacob and his company
                            </p>

                            <LearnMoreButton to="/about">
                                Learn More
                            </LearnMoreButton>
                        </StepContainer>

                        <StepContainer>
                            <BuyIcon />

                            <h3>Buying</h3>

                            <p>
                                This is where the description will lead into the about us page,
                                lorem ipsum dolor sit amet, Greater Austin area, to learn more
                                about Jacob and his company
                            </p>

                            <LearnMoreButton to="/buy">
                                Learn More
                            </LearnMoreButton>
                        </StepContainer>

                        <StepContainer>
                            <SellIcon />


                            <h3>Selling</h3>

                            <p>
                                This is where the description will lead into the about us page,
                                lorem ipsum dolor sit amet, Greater Austin area, to learn more
                                about Jacob and his company
                            </p>

                            <LearnMoreButton to="/sell">
                                Learn More
                            </LearnMoreButton>
                        </StepContainer>
                    </ThreeStepProcess>

                    <GettingStartedAccent />

                    <p style={{ marginTop: "17px", color: "#464646" }}>
                        Property values are always going to be around, never get to know
                        what you can or can&#39;t just by asking.
                    </p>
                </SiteContainer>
            </GettingStartedView>
        )
    }
}

export default GettingStartedSection


const GettingStartedView = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 170px;
    h3{
        margin-top: 46px;
    }
    p{
        text-align: center;
    }
    @media (max-width: 1000px) {
        padding-top: 138px;
        h3{
            margin-top: 10px;
            font-size: 16px;
        }
        p{
            font-size: 13px;
        }
    }
`
const ThreeStepProcess = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    @media (max-width: 1000px) {
        flex-direction: column;
        margin-top: 0px;
    }
`
const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        margin-top: 40px;
    }
    p{
        width: 74%;
        text-align: center;
        font-size: 15px;
        font-weight: 300;
        line-height: 1.75em;
        margin-top: -8px;
    }
    @media (max-width: 1000px) {
        margin-top: 88px;
        h3{
            margin-top: 20px;
        }
        p{
            text-align: start;
            margin-top: 5px;
            width: 100%;
        }
    }
`

const Icons = styled.div`
  z-index: 200;
  ::before{
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
        font-size: 3.9em;
        color: #303d48;
        background: #ffffff;
        border-radius: 50%;
        border: #303d48 2px solid;
    }
`

const WhyUsIcon = styled(Icons)`
    ::before{
        content: "\f0c0";
        font-size: 2.9em;
        padding: 0.308em;
    }
`

const BuyIcon = styled(Icons)`
    ::before{
        content: "\f084";
        font-size: 3.55em;
        padding: .17em .17em;
    }
`

const SellIcon = styled(Icons)`
    ::before{
        content: "\f015";
        padding: .12em .15em;
    }
`

const LearnMoreButton = styled(Link)`
    border-radius: 50px;
    color: #5181d4;
    font-weight: 500;
    letter-spacing: 0.04rem;
    font-size: 10px;
    text-transform: uppercase;
    // font-feature-settings: "c2sc" 1;
    border: #7386ff 1px solid;
    width: 95px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    @media (max-width: 1000px) {
        margin-top: -3px;
    }
`

const GettingStartedAccent = styled.div`
    width: 30px;
    height: 3px;
    background: #242424;
    margin-top: 110px;
`
