import React from "react"
import styled from "styled-components"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"

const SiteWrapper = styled.div`
    width: ${WIDTH_OF_ALL_CONTAINERS};
    margin: 0 auto;
`

export default props => (
    <SiteWrapper {...props}>{props.children}</SiteWrapper>
)

