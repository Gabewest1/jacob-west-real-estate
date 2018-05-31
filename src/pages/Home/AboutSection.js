import React from "react"
import styled from "styled-components"
import SectionHeader from "../../components/SectionHeader"
import SiteContainer from "../../components/SiteContainer/"

class AboutSection extends React.Component {
    render() {
        return (
            <AboutView>
                <SiteContainer>
                    <SectionHeader blueWord="About" greyWord="Us" noWrap />

                    <AboutImgAndTextContainer>
                        <ClientImgWrapper>
                            <ClientImg src="/assets/jacob2.jpg" />
                        </ClientImgWrapper>

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

                            <h3 style={{ marginTop: "42px" }}>Remax Elite®</h3>

                            <p>
                                Lorem Ipsum has been the industry&#39;s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>

                        </AboutTextContainer>
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
                </SiteContainer>
            </AboutView>
        )
    }
}

const AboutView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding-top: 80px;
    @media (max-width: 1000px) {
        padding-top: 45px;
    }
`

const AboutImgAndTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    align-items: flex-end;
    
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`

const ClientImgWrapper = styled.div`
    width: 290px;
    position: relative;
    bottom: 8px;
    @media (max-width: 1000px) {
        width: 70%;
        margin-top: -32px;
        border-radius: 50%;
    }
`

const ClientImg = styled.img`
    width: 100%;
    @media (max-width: 1000px) {
        border-radius: 50%;
    }
`

const AboutTextContainer = styled.div`
    width: 66%;
    margin-right: 15px;

    h3 {
        margin-top: 0;
    }

    @media (max-width: 1000px) {
        border-radius: 50%;
        width: 100%;
        margin-top: 10px;
    }
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
