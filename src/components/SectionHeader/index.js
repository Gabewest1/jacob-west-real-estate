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
    font-weight: 300;
    font-size: 40px;
    letter-spacing: 0.07rem;
    text-align: center;
    color: #003e75;
    box-sizing: border-box;
    padding: 0 1em;
    position: relative;
    bottom: 2px;

    @media (max-width: 1000px) {
        padding: 0;
        font-size: 40px;
    }

    @media (max-width: 491px) {
        padding: 0;
        font-size: 30px;
    }
`

const GreyText = styled.span`
    color: rgba(69, 69, 69, 0.9);
    text-transform: capitalize;
`

const BlueLine = styled.div`
    width: 50%;
    height: 1px;
    // background: rgb(46, 120, 181);
    background: rgb(226, 226, 226);

    @media (max-width: 1000px) {
        display: none;
    }
`

const GreyLine = styled.div`
    width: 50%;
    height: 1px;
    // background: rgb(140, 140, 140);
    background: rgb(226, 226, 226);
    
    @media (max-width: 1000px) {
        display: none;
    }
`

export default SectionHeader
