import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { GREY } from "../../constants"

const SectionSubHeaderView = styled.h3`
    text-align: center;
    position: relative;
    padding-bottom: 18px;
    margin-top: 34px;
    font-size: 17px;
    letter-spacing: 0.01rem;
    font-weight: 700;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        background: ${GREY};
        width: 39px;
        height: 2px;
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
