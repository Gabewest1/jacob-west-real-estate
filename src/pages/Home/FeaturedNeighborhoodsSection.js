import React from "react"
import styled from "styled-components"
import SectionHeader from "../../components/SectionHeader"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"

class FeaturedNeighborhoodsSection extends React.Component {
    render() {
        return (
            <FeaturedNeighborhoodsView>
                <FeaturedNeighborhoodsViewContainer>
                    <SectionHeader blueWord="Featured" greyWord="Neighborhoods" />

                    <p>
                        Property ownership can be a big deal, especially in todays&#39; climate.
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
                </FeaturedNeighborhoodsViewContainer>
            </FeaturedNeighborhoodsView>
        )
    }
}

const FeaturedNeighborhoodsView = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 180px;
`

const FeaturedNeighborhoodsViewContainer = styled.div`
    width: ${WIDTH_OF_ALL_CONTAINERS};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HoodsContainer = styled.div`
    width: 100%;
    margin-top: 98px;
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
`

export default FeaturedNeighborhoodsSection
