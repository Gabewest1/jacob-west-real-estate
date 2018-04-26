import React from "react"
import styled from "styled-components"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"

class HomeTestimonial extends React.Component {
    render() {
        return (
            <TestimonialContainer {...this.props}>
                <QuotesWrapper>
                    <QuotesImg src="/assets/quotes.svg"/>
                </QuotesWrapper>

                <TestimonialTextAccentNameContainer>
                    <TestimonialText {...this.props}>
                        {this.props.clientWords}
                    </TestimonialText>

                    <TestimonialAccent>
                    </TestimonialAccent>

                    <TestimonialName {...this.props}>
                        {this.props.clientName}
                    </TestimonialName>
                </TestimonialTextAccentNameContainer>
            </TestimonialContainer>
        )
    }
}




export default HomeTestimonial


const TestimonialContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
`

const QuotesWrapper = styled.div`
    width: 14px;
`

const QuotesImg = styled.img`
    width: 100%;
`

const TestimonialTextAccentNameContainer = styled.div`
    width: 92%;
`

const TestimonialText = styled.div`
    font-size: 15px;
    font-weight: 400;
    font-style: italic;
    line-height: 1.7em;
    color: #484848;
`

const TestimonialAccent = styled.div`
    width: 20px;
    height: 2px;
    background: rgba(0, 0, 0, 0.8);
    margin-top: 14px;
`

const TestimonialName = styled.div`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.02rem;
    color: #151515;
    margin-top: 6px;
`
