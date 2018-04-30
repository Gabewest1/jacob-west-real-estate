import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const SectionSubHeaderView = styled.h3`
    text-align: center;
    position: relative;
    padding-bottom: 20px;
    
    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        background: #525252;
        width: 45px;
        height: 3px;
        transform: translateX(-50%);
    }
`

const SectionSubHeader = props => (
    <SectionSubHeaderView {...props}>{props.children}</SectionSubHeaderView>
)

SectionSubHeader.propTypes = {
    children: PropTypes.element,
}

export default SectionSubHeader
