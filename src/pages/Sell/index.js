import React from "react"
import styled from "styled-components"

import SectionHeader from "../../components/SectionHeader"
import SiteContainer from "../../components/SiteContainer"
import SectionSubHeader from "../../components/SectionSubHeader"
import ContactForm from "../../components/ContactFormAndInfo/ContactForm"

import { PAGE_PADDING } from "../../constants"

class Sell extends React.Component {
    render() {
        return (
            <SellView {...this.props}>
                <SiteContainer>
                    <SectionHeaderNoMargin blueWord="Sellers" />

                    <SectionSubHeader>This is text for the sub header</SectionSubHeader>

                    <Body>
                        <Wrapper>
                            <WhatsMyHomeWorth>
                                <h4>How Jacob makes the proccess a breeze</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quia voluptatibus tempora recusandae officiis.
                                    Molestias alias ut magni natus amet similique quam quibusdam,
                                    iure veniam vel, at quia blanditiis! Pariatur,
                                    eligendi.
                                </p>
                            </WhatsMyHomeWorth>
                            <GettingStarted>
                                <h4>How to get started</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quia voluptatibus tempora recusandae officiis.
                                    Molestias alias ut magni natus amet similique quam quibusdam.
                                </p>
                            </GettingStarted>
                            <SellPageContactForm />
                        </Wrapper>
                        <div>
                            This is where the current listings should go
                        </div>
                    </Body>
                </SiteContainer>
            </SellView>
        )
    }
}

const SectionHeaderNoMargin = styled(SectionHeader)`
    height: 60px;

    * {
        margin: 0;
    }
`
const GettingStarted = styled.div``
const WhatsMyHomeWorth = styled.div`

    @media (min-width: 768px) {
        margin-right: 25px;
    }
`
const Wrapper = styled.div``
const Body = styled.div`
    display: flex;
    flex-direction: column;
    
    h4{
        font-weight: 600;
        color: #202629;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;

        > * {
            flex-basis: 50%;
        }
    }
`
const SellView = styled.div`
    ${PAGE_PADDING}
    background: white;
`

const SellPageContactForm = styled(ContactForm)`
    margin-top: 22px;
`

export default Sell
