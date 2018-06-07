import React from "react"
import styled from "styled-components"
import SectionHeader from "../../components/SectionHeader"
import SectionSubHeader from "../../components/SectionSubHeader"
import Mls from "../../components/Mls"
import ContactForm from "../../components/ContactFormAndInfo/ContactForm"
import SiteContainer from "../../components/SiteContainer"
import { PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../constants"
import Map from "./map"

class PropertySearch extends React.Component {
    render() {
       
        return (
            <PropertySearchView {...this.props} id="property-search">
                <SiteContainer>
                    <SectionHeader blueWord="Property" greyWord="Search" />
                    <Mls pageId="property-search" />
                    <MapAndListContainer>
                        <Map />
                    </MapAndListContainer>
                </SiteContainer>
            </PropertySearchView>
        )
    }
}

const PropertySearchView = styled.div`
    padding: ${PAGE_PADDING};

    @media (max-width: 1000px) {
        padding: ${PAGE_PADDING_MOBILE};
    }
`
const MapAndListContainer = styled.div``

export default PropertySearch
