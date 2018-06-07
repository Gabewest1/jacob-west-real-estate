import React from "react"
import styled from "styled-components"
import listingsData from "./listingsData"
import marketListings from "./marketData"

class ListingsList extends React.Component {
    render() {
        let dataType
        
        if(this.props.currentListings) {
            dataType = listingsData
        }

        if(this.props.mapListings) {
            dataType = marketListings
        }
        
        const featuredListingComponent = dataType.map(featuredListing => (
            <FeaturedListing>
                <ListingImage>
                    <Featured>
                        Featured
                    </Featured>
        
                    <img src={ featuredListing.img } alt={`house located at ${featuredListing.address1}`} />
                </ListingImage>
        
                <ListingInfo>
                    <h4>{ featuredListing.address1 || "Address Not Available" }</h4>
                    <p style={{ marginTop: -6, fontSize: 13 }}>{ featuredListing.address2 }</p>
                    <h2>{ featuredListing.price || "Price Not Available" }</h2>
        
                    <ListingStats>
                        <p><span>{ featuredListing.bedrooms || "?" }</span> BR</p>
                        <p><span>{ featuredListing.bathrooms || "?" }</span> BA</p>
                        <p><span>{ featuredListing.sqft || "?" }</span> SQFT</p>
                    </ListingStats>
        
                    <MlsNumber>
                        MLS# { featuredListing.mls || "Not Available" }
                    </MlsNumber>
                </ListingInfo>
            </FeaturedListing>
        ))
        
        return (
            <FeaturedListingsList>
                { featuredListingComponent }
            </FeaturedListingsList>
        )
    }
}


const Featured = styled.div`
    position: relative;
    bottom: 154px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
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
    max-height: 569px;
    width: 100%;
    overflow: scroll;
    margin-top: 25px;
    > * {
        margin-top: 14px;
    }
    > :nth-child(1){
        margin-top: 0px;
    }
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-thumb {
        background: #f6f6f6;
        border: #ddd 1px solid;
        border-radius: 5px;
        position: relative;
    }
`

const FeaturedListing = styled.div`
    box-sizing: border-box;
    width: 98.5%;
    display: flex;
    height: 160px;
    justify-content: space-between;

    // > * {
        // flex-basis: 50%;
    // }
`

const ListingImage = styled.div`
    width: 50%;
    max-width: 300px;
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
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top-right-radius: 8px;

    * {
        margin: 0;
        padding: 0;
    }
    h2{
        margin-top: 10px;
        color: #01a97a !important;
        line-height: 1em;
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
    width: 90%;
    margin-top: -3px;
    border-top: #eee 1px solid;
    padding-top: 2px;
`

export default ListingsList