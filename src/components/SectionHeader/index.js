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
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BlueText = styled.h1`
    font-family: raleway;
    font-weight: 200;
    font-size: 40px;
    letter-spacing: 0.3rem;
    text-transform: uppercase;  
    text-align: center;
    color: #003e75;
    box-sizing: border-box;
    padding: 0 1em;
    white-space: nowrap;
    @media (max-width: 1000px) {
        flex-direction: column;
        font-size: 32px;
        white-space: normal;
    }
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
    test6: test6;
    test7: test7;
    test8: test8;
    test9: test9;
    test10: test10;
    test11: test11;
    test12: test12;
`

export default SectionHeader
