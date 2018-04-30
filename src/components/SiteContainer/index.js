import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const SiteContainerView = styled.div`
    width: 74%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
        width: 82%;
    }
`

const SiteContainer = props => (
    <SiteContainerView {...props}>{props.children}</SiteContainerView>
)

SiteContainer.propTypes = {
    children: PropTypes.element,
}

export default SiteContainer
