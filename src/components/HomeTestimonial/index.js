import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

class HomeTestimonial extends React.Component {
    render() {
        return (
            <TestimonialContainer {...this.props}>
                <QuotesWrapper>
                    <QuotesImg src="/assets/quotes.svg" />
                </QuotesWrapper>

                <TestimonialTextAccentNameContainer>
                    <TestimonialText>
                        {this.props.clientWords}
                    </TestimonialText>

                    <TestimonialName>
                        {this.props.clientName}
                    </TestimonialName>
                </TestimonialTextAccentNameContainer>
            </TestimonialContainer>
        )
    }
}

export default HomeTestimonial

HomeTestimonial.propTypes = {
    clientWords: PropTypes.string,
    clientName: PropTypes.string,
}

const TestimonialContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1000px) {
        width: 100%;
        margin-top: 40px;
    }
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

const TestimonialText = styled.p`
    padding: 0;
    margin: 0;
    font-style: italic;
    @media (max-width: 1000px) {
        // text-align: justify;
    }
`

const TestimonialName = styled.h4`
    letter-spacing: 0.02rem;
    color: #303030;
    margin-top: 10px;
`
