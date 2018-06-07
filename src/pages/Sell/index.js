import React from "react"
import styled from "styled-components"

import SectionHeader from "../../components/SectionHeader"
import SiteContainer from "../../components/SiteContainer"
import SectionSubHeader from "../../components/SectionSubHeader"
import ContactForm from "../../components/ContactFormAndInfo/ContactForm"
import { PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../constants"
import ListingsList from "../../components/ListingsList"

class Sell extends React.Component {
    render() {
        return (
            <SellView {...this.props}>
                <SiteContainer>
                    <SectionHeader blueWord="Sellers" />

                    {/* <SectionSubHeader>This is text for the sub header</SectionSubHeader> */}

                    <Body>
                        <Wrapper>
                            <WhatsMyHomeWorth>
                                <h4>How Jacob makes the proccess a breeze</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quia voluptatibus tempora recusandae officiis.s
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

                        <FeaturedListingsContainer>
                            <FeaturedListingsHeader>
                                Featured Listings
                            </FeaturedListingsHeader>

                            <ListingsList currentListings />
                        </FeaturedListingsContainer>
                    </Body>
                </SiteContainer>
            </SellView>
        )
    }
}

const FeaturedListingsContainer = styled.div``

const FeaturedListingsHeader = styled.h3`
    font-weight: 500;
    margin-top: -2px;
    border-bottom: #eee 1px solid;
    padding-bottom: .3em;
    width: 47%;
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
        color: #2d3031;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;

        > * {
            flex-basis: 46%;
        }
    }
`

const SellPageContactForm = styled(ContactForm)`
    // margin-top: 22px;
`

const SellView = styled.div`
    padding: ${PAGE_PADDING};

    @media (max-width: 1000px) {
        padding: ${PAGE_PADDING_MOBILE};
    }
`


export default Sell
