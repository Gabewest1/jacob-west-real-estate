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
}

const SectionHeaderContainer = styled.div`
    width: 100%;    
    height: 'delete this property, just testing rebase';
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BlueText = styled.h1`
    font-family: raleway;
    font-weight: 300;
    font-size: 2.3em;
    letter-spacing: 0.3rem;
    text-transform: uppercase;  
    color: #003e75;
    box-sizing: border-box;
    padding: 0 1em;
    white-space: nowrap;
`

const GreyText = styled.span`
    color: rgba(69, 69, 69, 0.9);  
`

const BlueLine = styled.div`
    width: 50%;
    height: 1px;
    background: rgba(7, 85, 150, 0.5);
`

const GreyLine = styled.div`
    width: 50%;
    height: 1px;
    background: rgba(140, 140, 140, 0.55);
    test: test;
    test2: test2;
    test3: test3;
    test4: test4;
    test5: test5;
`

export default SectionHeader
