import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"
import SectionHeader from "../../components/SectionHeader"
import SiteContainer from "../../components/SiteContainer/"
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

class FeaturedNeighborhoodsSection extends React.Component {
    render() {
        return (
            <FeaturedNeighborhoodsView>
                <SiteContainer>
                    <SectionHeader blueWord="Featured" greyWord="Neighborhoods" />

                    <p>
                        These should scroll sideways instead of stacking on mobile
                    </p>
                 
                    <HoodsContainer>
                        <TopRowContainer>
                            <HoodWrapper>
                                <Hood src="/assets/austin.png" />
                            </HoodWrapper>

                            <HoodWrapper>
                                <Hood src="/assets/round-rock.png" />
                            </HoodWrapper>

                            <HoodWrapper>
                                <Hood src="/assets/pflug.png" />
                            </HoodWrapper>

                            <HoodWrapper>
                                <Hood src="/assets/georgetown.png" />
                            </HoodWrapper>
                        </TopRowContainer>

                        <BottomRowContainer>
                            <HoodWrapper>
                                <Hood src="/assets/round-rock.png" />
                            </HoodWrapper>

                            <HoodWrapper>
                                <Hood src="/assets/austin.png" />
                            </HoodWrapper>

                            <HoodWrapper>
                                <Hood src="/assets/georgetown.png" />
                            </HoodWrapper>

                            <HoodWrapper>
                                <Hood src="/assets/pflug.png" />
                            </HoodWrapper>
                        </BottomRowContainer>
                    </HoodsContainer>

                    <FeaturedCarousel autoPlay interval={3000} showStatus={false}>
                        <div>
                            <img src="/assets/austin.png" />
                        </div>

                        <div>
                            <img src="/assets/georgetown.png" />
                        </div>

                        <div>
                            <img src="/assets/pflug.png" />
                        </div>

                        <div>
                            <img src="/assets/austin.png" />
                        </div>

                        <div>
                            <img src="/assets/georgetown.png" />
                        </div>

                        <div>
                            <img src="/assets/pflug.png" />
                        </div>
                    </FeaturedCarousel>

                    <p style={{ marginTop: "60px" }}>Property ownership can be a big deal with.</p>
                </SiteContainer>
            </FeaturedNeighborhoodsView>
        )
    }
}


const FeaturedCarousel = styled(Carousel)`
    width: 50%;
    margin-top: 30px;

    @media (min-width: 1101px) {
        display: none;
    }
`

const FeaturedNeighborhoodsView = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 180px;
    p{
        margin: 0;
        padding: 0;
        text-align: center;
    }
`

const HoodsContainer = styled.div`
    width: 100%;
    margin-top: 98px;
    @media (max-width: 1100px) {
        display: none;
    }
`

const TopRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const BottomRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`

const HoodWrapper = styled.div`
    width: 210px;
    height: 138px;
    box-shadow: 3px 4px 17px 0 rgba(0, 0, 0, 0.35);
`

const Hood = styled.img`
    width: 100%;
    height: auto;
`

export default FeaturedNeighborhoodsSection
