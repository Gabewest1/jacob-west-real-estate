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

                    <SectionSubHeader>This is text for the sub header</SectionSubHeader>

                    <Body>
                        <Wrapper>
                            <BuyingProcess>
                                <h3>How Jacob makes the proccess a breeze</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quia voluptatibus tempora recusandae officiis.
                                    Molestias alias ut magni natus amet similique quam quibusdam,
                                    iure veniam vel, at quia blanditiis! Pariatur,
                                    eligendi.
                                </p>
                            </BuyingProcess>
                            <GettingStarted>
                                <h3>How to get started</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quia voluptatibus tempora recusandae officiis.
                                    Molestias alias ut magni natus amet similique quam quibusdam.
                                </p>
                            </GettingStarted>
                            <ContactForm />
                        </Wrapper>
                        <div>
                            This is where the MOTTO MORTAGE should go
                        </div>
                    </Body>
                </SiteContainer>
            </BuyView>
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
const BuyingProcess = styled.div`

    @media (min-width: 768px) {
        margin-right: 25px;
    }
`
const Wrapper = styled.div``
const Body = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;

        > * {
            flex-basis: 50%;
        }
    }
`
const BuyView = styled.div`
    ${PAGE_PADDING};
    background: white;
`

export default Buy
