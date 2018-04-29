import React from "react"
import styled from "styled-components"

class PropertySearch extends React.Component {
    render() {
        return (
            <PropertySearchView {...this.props}>
                Property Search Here
            </PropertySearchView>
        )
    }
}

const PropertySearchView = styled.div`
    background: white;
`

export default PropertySearch
