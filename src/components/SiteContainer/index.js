import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const SiteContainerView = styled.div`
    width: 82%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const SiteContainer = props => (
    <SiteContainerView {...props}>{props.children}</SiteContainerView>
)

export default SiteContainer
