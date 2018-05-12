import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

class SectionHeader extends React.Component {
    render() {
        return (
            <SectionHeaderContainer {...this.props}>
                <BlueLine />

                <BlueText>
                    { this.props.blueWord } <GreyText>{ this.props.greyWord }</GreyText>
                </BlueText>

                <GreyLine />
            </SectionHeaderContainer>
        )
    }
}

SectionHeader.propTypes = {
    blueWord: PropTypes.string,
    greyWord: PropTypes.string,
    whiteSpace: PropTypes.string,
}

const SectionHeaderContainer = styled.div`
    width: 100%;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    white-space: ${({ noWrap }) => noWrap ? "nowrap" : "wrap"};
    @media (max-width: 1000px) {
        justify-content: center;
    }
`

const BlueText = styled.h1`
    font-family: raleway;
    font-weight: 300;
    font-size: 40px;
    letter-spacing: 0.3rem;
    text-transform: uppercase;  
    text-align: center;
    color: #003e75;
    box-sizing: border-box;
    padding: 0 1em;
    // white-space: nowrap;
    @media (max-width: 1000px) {
        padding: 0;
        font-size: 28px;
    }
`

const GreyText = styled.span`
    color: rgba(69, 69, 69, 0.9);  
`

const BlueLine = styled.div`
    width: 50%;
    height: 1px;
    background: rgba(7, 85, 150, 0.5);
    @media (max-width: 1000px) {
        display: none;
    }
`

const GreyLine = styled.div`
    width: 50%;
    height: 1px;
    background: rgba(140, 140, 140, 0.55);
    @media (max-width: 1000px) {
        display: none;
    }
`

export default SectionHeader
