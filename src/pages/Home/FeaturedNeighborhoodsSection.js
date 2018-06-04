import React from "react"
import styled from "styled-components"
import SectionHeader from "../../components/SectionHeader"
import SiteContainer from "../../components/SiteContainer/"

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

                    <p style={{ marginTop: "60px" }}>Property ownership can be a big deal with.</p>
                </SiteContainer>
            </FeaturedNeighborhoodsView>
        )
    }
}

const FeaturedNeighborhoodsView = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 180px;
    p{
        text-align: center;
    }
    @media (max-width: 1000px) {
        padding-top 130px;
    }
`

const HoodsContainer = styled.div`
    width: 100%;
    margin-top: 98px;
    @media (max-width: 1000px) {
        margin-top: 20px;
    }
`

const TopRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

const BottomRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    @media (max-width: 1000px) {
        flex-direction: column;
        margin-top: 0px;
    }
`

const HoodWrapper = styled.div`
    width: 210px;
    height: 138px;
    box-shadow: 3px 4px 17px 0 rgba(0, 0, 0, 0.35);
    @media (max-width: 1000px) {
        width: 90%;
        height: 40vw;
        margin: 0 auto;
        margin-top: 70px;
    }
`

const Hood = styled.img`
    width: 100%;
    height: auto;
`

export default FeaturedNeighborhoodsSection
