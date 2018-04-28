import React from "react"
import styled from "styled-components"

const SubHeader = styled.h3`
    text-align: center;
    font-weight: bolder;
    position: relative;
    padding-bottom: 20px;
    
    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        background: #525252;
        width: 45px;
        height: 5px;
        transform: translateX(-50%);
    }
`

export default props => (
    <SubHeader {...props}>{props.children}</SubHeader>
)
