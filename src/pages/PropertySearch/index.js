import React from "react"
import styled from "styled-components"
import SectionHeader from "../../components/SectionHeader"
import SectionSubHeader from "../../components/SectionSubHeader"
import Mls from "../../components/Mls"
import ContactForm from "../../components/ContactFormAndInfo/ContactForm"
import SiteContainer from "../../components/SiteContainer"
import ListingsList from "../../components/ListingsList"
import Map from "./map"
import { PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../constants"

class PropertySearch extends React.Component {
    render() {
        return (
            <PropertySearchView {...this.props} id="property-search">
                <SiteContainer>
                    <SectionHeader blueWord="Property" greyWord="Search" />
                    <h3>Lorem Ipsum Dolor Sit Amet</h3>

                    <p>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly believable.
                    </p>
                    <Mls pageId="property-search" />
                    <MapAndListContainer>
                        <PropSearchMap />

                        <ListingsList mapListings />
                    </MapAndListContainer>
                </SiteContainer>
            </PropertySearchView>
        )
    }
}

const PropertySearchView = styled.div`
    padding: ${PAGE_PADDING};

    h3{
        align-self: flex-start;
    }

    @media (max-width: 1000px) {
        padding: ${PAGE_PADDING_MOBILE};
    }
`
const MapAndListContainer = styled.div`
    width: 100%;
    margin-top: 20px;
`

const PropSearchMap = styled(Map)`
`

export default PropertySearch
