import React from "react"
import styled from "styled-components"

import SectionHeader from "../../components/SectionHeader"
import SiteContainer from "../../components/SiteContainer/"

import { PAGE_PADDING } from "../../constants"

class About extends React.Component {
    render() {
        return (
            <AboutView {...this.props}>
                <SiteContainer>
                    <SectionHeader blueWord="About" greyWord="Us" noWrap={false} />

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
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                                Lorem Ipsum has been the industry&#39;s
                                standard dummy text ever since the 1500s.
                            </p>

                            <h3 style={{ marginTop: "32px" }}>Remax Elite®</h3>

                            <p>
                                Lorem Ipsum has been the industry&#39;s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                                Lorem Ipsum has been the industry&#39;s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>

                        </AboutTextContainer>
                        <ClientImgWrapper>
                            <ClientImg src="/assets/jacob2.jpg" />
                        </ClientImgWrapper>
                    </AboutImgAndTextContainer>

                </SiteContainer>
            </AboutView>
        )
    }
}

const AboutImgAndTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;    
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`

const ClientImgWrapper = styled.div`
    width: 284px;
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
    width: 100%;
    @media (max-width: 1000px) {
        border-radius: 50%;
        width: 100%;
        // text-align: justify;
        margin-top: 10px;
    }
`

const AboutView = styled.div`
    ${PAGE_PADDING}
`

export default About
