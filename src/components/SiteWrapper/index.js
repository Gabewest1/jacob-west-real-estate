import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"


const SiteWrapperView = styled.div`
    width: ${WIDTH_OF_ALL_CONTAINERS};
    margin: 0 auto;
`

const SiteWrapper = props => (
    <SiteWrapperView {...props}>{props.children}</SiteWrapperView>
)

SiteWrapper.propTypes = {
    children: PropTypes.element,
}

export default SiteWrapper
