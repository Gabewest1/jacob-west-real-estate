import React from "react"
import styled from "styled-components"

class SectionHeader extends React.Component {
    render() {
        return (
            <SectionHeaderContainer>
                <BlueLine {...this.props} />

                <BlueText {...this.props}>
                    { this.props.blueWord } <GreyText>{ this.props.greyWord }</GreyText>
                </BlueText>

                <GreyLine {...this.props} />
            </SectionHeaderContainer>
        )
    }
}

const SectionHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`

const BlueText = styled.h1`
    font-family: raleway;
    font-weight: 300;
    font-size: 2.3em;
    letter-spacing: 0.3rem;
    text-transform: uppercase;  
    color: #003e75;
    background: white;
    box-sizing: border-box;
    padding: 0 1em;
    white-space: nowrap;
`

const GreyText = styled.span`
    color: rgba(69, 69, 69, 0.9);  
`

const BlueLine = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(113, 147, 176, 0.95);
`

const GreyLine = styled.div`
    width: 100%;
    height: 1px;
    background: rgb(140, 140, 140);
`

export default SectionHeader
