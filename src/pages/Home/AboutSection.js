import React from "react"
import styled from "styled-components"
import SectionHeader from "../../components/SectionHeader"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"

class AboutSection extends React.Component {
    render() {
        return (
            <AboutView>
                <AboutViewContainer>
                    <SectionHeader blueWord="About" greyWord="Us" />

                    <AboutImgAndTextContainer>
                        <AboutTextContainer>
                            <h3>Jacob West</h3>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                                Lorem Ipsum has been the industry&#39;s
                                standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of
                                type and scrambled it to make a type
                                specimen book. It has survived not only
                                five centuries, but also the leap
                                into electronic typesetting, remaining essentially unchanged.
                            </p>

                            <h3 style={{ marginTop: "32px" }}>Remax Elite®</h3>

                            <p>
                                Lorem Ipsum has been the industry&#39;s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>

                        </AboutTextContainer>
                        <ClientImgWrapper>
                            <ClientImg src="/assets/jacob2.jpg" />
                        </ClientImgWrapper>
                    </AboutImgAndTextContainer>

                    <SocialMediaLinksContainer>
                        <SocialMediaLinkWrapper>
                            <SocialMediaIcon src="/assets/facebook.svg" />
                        </SocialMediaLinkWrapper>

                        <SocialMediaLinkWrapper>
                            <SocialMediaIcon src="/assets/twitter.svg" />
                        </SocialMediaLinkWrapper>

                        <SocialMediaLinkWrapper>
                            <SocialMediaIcon src="/assets/instagram.svg" />
                        </SocialMediaLinkWrapper>
                    </SocialMediaLinksContainer>
                </AboutViewContainer>
            </AboutView>
        )
    }
}

const AboutView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AboutViewContainer = styled.div`
    width: ${WIDTH_OF_ALL_CONTAINERS};
    margin-top: 130px;
    display: flex;
    flex-direction: column;    
`

const AboutImgAndTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;    
`

const ClientImgWrapper = styled.div`
    width: 284px;
`

const ClientImg = styled.img`
    width: 100%;
`

const AboutTextContainer = styled.div`
    width: 66%;
`

const SocialMediaLinksContainer = styled.div`
    width: 112px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    margin-top: 18px;
`

const SocialMediaLinkWrapper = styled.div`
    width: 36px;
`

const SocialMediaIcon = styled.img`
    width: 100%;
`

export default AboutSection
