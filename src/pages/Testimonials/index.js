import React from "react"
import styled from "styled-components"

import SectionHeader from "../../components/SectionHeader"
import SectionSubHeader from "../../components/SectionSubHeader"
import SiteContainer from "../../components/SiteContainer"

import testimonialsData from "./testimonialsData"
import { GREY, PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../constants"

class Testimonials extends React.Component {
    render() {
        const testimonialsComponent = testimonialsData.map(testimonial => (
            <Testimonial>
                <QuotationMarks>
                    <img src="/assets/quotes.svg" alt="quotation-mark" />
                </QuotationMarks>

                <QuoteView>
                    <p>{ testimonial.quote }</p>

                    <h4>{ testimonial.name }</h4>
                </QuoteView>
            </Testimonial>
        ))

        return (
            <TestimonialsView {...this.props}>
                <SiteContainer>
                    <SectionHeader blueWord="Testimonials" />
                    {/* <SectionSubHeader>Sub Header Yo man ayy lmao</SectionSubHeader> */}

                    <TestimonialsList>
                        { testimonialsComponent }
                    </TestimonialsList>
                </SiteContainer>
            </TestimonialsView>
        )
    }
}

const Testimonial = styled.li`
    display: flex;

    h4{
        margin: 0;
        margin-top: 6px;
        font-weight: 500;
        border-top: #eee 1px solid;
        width: 100%;
        padding-top: .25em;
    }
`
const TestimonialsList = styled.ul`
    padding: 0;
    margin: 0;
    margin-top: 10px;
    list-style: none;
    
    > * {
        margin-top: 44px;
    }

    > :nth-child(1){
        margin-top: 0px;
    }
`
const QuotationMarks = styled.div`
    width: 30px;
    margin-right: 7px;

    img {
        width: 100%;
        position: relative;
        top: 13px;
    }
`

const QuoteView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const TestimonialsView = styled.div`
    padding: ${PAGE_PADDING};

    @media (max-width: 1000px) {
        padding: ${PAGE_PADDING_MOBILE};
    }
`

export default Testimonials
