import React from "react"
import styled from "styled-components"

import SectionHeader from "../../components/SectionHeader"
import SiteContainer from "../../components/SiteContainer"
import SectionSubHeader from "../../components/SectionSubHeader"
import ContactForm from "../../components/ContactFormAndInfo/ContactForm"
import listingsData from "./listingsData"
import { PAGE_PADDING } from "../../constants"

class Sell extends React.Component {
    render() {
        const featuredListingComponent = listingsData.map(featuredListing => (
            <FeaturedListing>
                <ListingImage>
                    <img src={ featuredListing.img } alt={`house located at ${featuredListing.address1}`} />
                </ListingImage>

                <ListingInfo>
                    <h3>{ featuredListing.address1 }</h3>
                    <p>{ featuredListing.address2 }</p>
                    <p>{ featuredListing.price }</p>

                    <ListingStats>
                        <p><span>{ featuredListing.bedrooms }</span> BR</p>
                        <p><span>{ featuredListing.bathrooms }</span> BA</p>
                        <p><span>{ featuredListing.sqft }</span> SQ FT</p>
                    </ListingStats>


                </ListingInfo>
            </FeaturedListing>
        ))

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

                            <FeaturedListingsList>
                                { featuredListingComponent }
                            </FeaturedListingsList>
                        </FeaturedListingsContainer>
                    </Body>
                </SiteContainer>
            </SellView>
        )
    }
}

const FeaturedListingsContainer = styled.div``

const FeaturedListingsList = styled.div`
    max-height: 490px;
    width: 100%;
    overflow: scroll;
    > * {
        margin-top: 10px;
    }
    > :nth-child(1){
        // margin-top: 0px;
    }
`

const FeaturedListing = styled.div`
    box-sizing: border-box;
    padding: 1em 2em;
    background: #eee;
    width: 100%;
    display: flex;
    justify-content: space-between;
    > * {
        flex-basis: 47%;
    }
`

const ListingImage = styled.div`
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
`

const ListingInfo = styled.div`
    * {
        margin: 0;
        padding: 0;
    }
`

const ListingStats = styled.div``

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
            flex-basis: 47%;
        }
    }
`

const SellPageContactForm = styled(ContactForm)`
    margin-top: 22px;
`


const FeaturedListingsHeader = styled.h1`
    font-weight: 200;
`

const SellView = styled.div`
    ${PAGE_PADDING}
    background: white;
`


export default Sell
