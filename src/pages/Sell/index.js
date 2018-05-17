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
                    <Featured>
                        Featured
                    </Featured>

                    <img src={ featuredListing.img } alt={`house located at ${featuredListing.address1}`} />
                </ListingImage>

                <ListingInfo>
                    <h4>{ featuredListing.address1 }</h4>
                    <p style={{ marginTop: -2, fontSize: 14 }}>{ featuredListing.address2 }</p>
                    <h2>{ featuredListing.price }</h2>

                    <ListingStats>
                        <p><span>{ featuredListing.bedrooms }</span> BR</p>
                        <p><span>{ featuredListing.bathrooms }</span> BA</p>
                        <p><span>{ featuredListing.sqft }</span> SQFT</p>
                    </ListingStats>

                    <MlsNumber>
                        MLS# { featuredListing.mls }
                    </MlsNumber>
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

const Featured = styled.div`
    position: relative;
    bottom: 154px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    width: 80px;
    height: 20px;
    color: white;
    background: black;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.03rem;
`

const FeaturedListingsList = styled.div`
    max-height: 490px;
    width: 100%;
    overflow: scroll;
    > * {
        margin-top: 14px;
    }
    > :nth-child(1){
        margin-top: 0px;
    }
`

const FeaturedListing = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    height: 160px;
    justify-content: space-between;
    > * {
        flex-basis: 50%;
    }
`

const ListingImage = styled.div`
    width: 200px;
    height: 160px;
    position: relative;
    bottom: 20px;

    img{
        border-top-left-radius: 9px;
        border-bottom-left-radius: 9px;
        width: 100%;
        height: 100%;
    }
`

const ListingInfo = styled.div`
    border: #eee 1px solid;
    padding: 1em;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;

    * {
        margin: 0;
        padding: 0;
    }
    h2{
        margin-top: 10px;
        color: #01a97a !important;
    }
`

const ListingStats = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    span{
        font-weight: 600;
    }
    p{
        font-size: 11px;
    }
`

const MlsNumber = styled.p`
    font-size: 11px;
    border-top: #eee 1px solid;
    paddin-top: 6px;
`

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
        color: #2d3031;
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
