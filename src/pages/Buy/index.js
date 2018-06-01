import React from "react"
import styled from "styled-components"

import SectionHeader from "../../components/SectionHeader"
import SectionSubHeader from "../../components/SectionSubHeader"
import ContactForm from "../../components/ContactFormAndInfo/ContactForm"
import SiteContainer from "../../components/SiteContainer"

import { PAGE_PADDING } from "../../constants"

class Buy extends React.Component {
    render() {
        return (
            <BuyView {...this.props}>
                <SiteContainer>
                    <SectionHeaderNoMargin blueWord="Buyers" />

                    <Body>
                        <Wrapper>
                            <BuyingProcess>
                                <h4>How Jacob makes the proccess a breeze</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quia voluptatibus tempora recusandae officiis.
                                    Molestias alias ut magni natus amet similique quam quibusdam,
                                    iure veniam vel, at quia blanditiis! Pariatur,
                                    eligendi.
                                </p>
                            </BuyingProcess>

                            <GettingStarted>
                                <h4>How to get started</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quia voluptatibus tempora recusandae officiis.
                                    Molestias alias ut magni natus amet similique quam quibusdam.
                                </p>
                            </GettingStarted>

                            <ContactMottoContainer>
                                <ContactFormBuyPage />

                                <MottoCard>
                                    <Logo>
                                        <img src="/assets/mottologo.png" />
                                    </Logo>

                                    <MottoH1>
                                        Your Dream. Our Expertise.
                                    </MottoH1>

                                    <MottoP>
                                        Experience load originators in the Motto Mortgage network are
                                        ready to help make your homeownership dream a reality.
                                        It's what they do best.
                                    </MottoP>

                                    <LinkToMottoWebsite href="https://www.mottomortgage.com/" target="blank">
                                        Go to MottoMortgage.com
                                    </LinkToMottoWebsite>
                                </MottoCard>
                            </ContactMottoContainer>
                        </Wrapper>
                    </Body>
                </SiteContainer>
            </BuyView>
        )
    }
}

const ContactFormBuyPage = styled(ContactForm)`
    width: 48%;

    @media (max-width: 769px) {
        width: 100%;
    }
`

const ContactMottoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 769px) {
        flex-direction: column;
    }
`

const MottoCard = styled.div`
    width: 48%;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    padding: 0 2em;
    border: #ddd 1px solid;
    background: #fafafa;
    position: relative;
    top: 24px;

    @media (max-width: 769px) {
        width: 100%;
    }
`

const Logo = styled.div`
    width: 20%;

    img{
        width: 100%;
    }
`

const MottoH1 = styled.h2`
    color: #383e44;
    padding: 0;
    margin: 0;
    margin-top: 18px;
`
const MottoP = styled.p`
    padding: 0;
    margin: 0;
    margin-top: 8px;
    font-size: 13px;
`
const LinkToMottoWebsite = styled.a`
    background: #526cff;
    color: white;
    text-decoration: none;
    font-size: 13px;
    padding: .65em 1em;
    box-sizing: border-box;
    border-radius: 2px;
    font-weight: 500;
    margin-top: 20px;
`

const SectionHeaderNoMargin = styled(SectionHeader)`
    height: 60px;
    margin-top: 10px;
`
const GettingStarted = styled.div``
const BuyingProcess = styled.div`

    @media (min-width: 768px) {
        margin-right: 25px;
    }
`
const Wrapper = styled.div``
const Body = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    h4{
        font-weight: 600;
        color: #202629;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        }
    }
`
const BuyView = styled.div`
    ${PAGE_PADDING};
    background: white;
`

export default Buy
