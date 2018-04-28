import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"
import SectionHeader from "../../components/SectionHeader"

class GettingStartedSection extends React.Component {
    render() {
        return (
            <GettingStartedView>
                <GettingStartedViewContainer>
                    <SectionHeader blueWord="Getting" greyWord="started" />

                    <h3 style={{ marginTop: "46px" }}>Having to exist in this world can be hard Jacob.</h3>

                    <p>
                        Property values are always going to be around, never
                        get to<br /> know what you can or can&#39;t just by asking.
                    </p>

                    <ThreeStepProcess>
                        <div>
                            <StepImageWrapper>
                                <StepImage src="/assets/why-us.png" />
                            </StepImageWrapper>
                            
                            <h3>Why Us</h3>

                            <p>
                                This is where the description will lead into the about us page,
                                lorem ipsum dolor sit amet, Greater Austin area, to learn more
                                about Jacob and his company
                            </p>

                            <LearnMoreButton to="/about">
                                Learn More
                            </LearnMoreButton>
                        </div>

                        <div>
                            <StepImageWrapper>
                                <StepImage src="/assets/buy.png" />
                            </StepImageWrapper>
                            
                            <h3>Buying</h3>

                            <p>
                                This is where the description will lead into the about us page,
                                lorem ipsum dolor sit amet, Greater Austin area, to learn more
                                about Jacob and his company
                            </p>

                            <LearnMoreButton to="/buy">
                                Learn More
                            </LearnMoreButton>
                        </div>

                        <div>
                            <StepImageWrapper>
                                <StepImage src="/assets/sell.png" />
                            </StepImageWrapper>
                            
                            <h3>Selling</h3>

                            <p>
                                This is where the description will lead into the about us page,
                                lorem ipsum dolor sit amet, Greater Austin area, to learn more
                                about Jacob and his company
                            </p>

                            <LearnMoreButton to="/sell">
                                Learn More
                            </LearnMoreButton>
                        </div>
                    </ThreeStepProcess>

                    <GettingStartedAccent />

                    <p style={{ marginTop: "17px", color: "#464646" }}>
                        Property values are always going to be around, never get to<br /> know
                        what you can or can&#39;t just by asking.
                    </p>
                </GettingStartedViewContainer>
            </GettingStartedView>
        )
    }
}

export default GettingStartedSection


const GettingStartedView = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const GettingStartedViewContainer = styled.div`
    width: ${WIDTH_OF_ALL_CONTAINERS};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 170px;
    h3{
        margin-top: 46px;
    }
    p{
        text-align: center;
    }
`

const ThreeStepProcess = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    
    div{
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
    }
`

const StepImageWrapper = styled.div`
    width: 110px;
`

const StepImage = styled.img`
    width: 100%;
`

const LearnMoreButton = styled(Link)`
    box-shadow: 2px 2px 14px 0 rgba(0, 0, 0, 0.1);
    background: #ef4c4c;
    border-radius: 2px;
    color: white;
    font-weight: 300;
    font-size: 13px;
    border: none;
    width: 117px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

const GettingStartedAccent = styled.div`
    width: 30px;
    height: 3px;
    background: #242424;
    margin-top: 160px;
`
