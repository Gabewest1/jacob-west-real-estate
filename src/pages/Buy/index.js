import React from "react"
import styled from "styled-components"

import SectionHeader from "../../components/SectionHeader"
import SectionSubHeader from "../../components/SectionSubHeader"
import ContactForm from "../../components/ContactFormAndInfo/ContactForm"
import SiteContainer from "../../components/SiteContainer"

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
                                <Header>How Jacob makes the proccess a breeze</Header>
                                <Description>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quia voluptatibus tempora recusandae officiis.
                                    Molestias alias ut magni natus amet similique quam quibusdam,
                                    iure veniam vel, at quia blanditiis! Pariatur,
                                    eligendi.
                                </Description>
                            </BuyingProcess>
                            <Image src="/assets/jacob2.jpg" alt="Jacob West Realtor" />
                        </Wrapper>
                        <GettingStarted>
                            <Header>How to get started</Header>
                            <Description>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quia voluptatibus tempora recusandae officiis.
                                Molestias alias ut magni natus amet similique quam quibusdam.
                            </Description>
                        </GettingStarted>

                        <ContactForm />
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
const Header = styled.h3``
const Description = styled.p``
const Image = styled.img`
    max-height: 225px;
    max-width: 225px;
    margin: 0 auto;
`
const GettingStarted = styled.div``
const BuyingProcess = styled.div`

    @media (min-width: 768px) {
        margin-right: 25px;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
const Body = styled.div``
const BuyView = styled.div`
    padding: 60px 0;
    background: white;
`

export default Buy
