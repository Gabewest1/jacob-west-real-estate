import React from "react"
import styled from "styled-components"

import SectionHeader from "../../components/SectionHeader"
import SectionSubHeader from "../../components/SectionSubHeader"
import SiteContainer from "../../components/SiteContainer"

import testimonialsData from "./testimonialsData"
import { GREY } from "../../constants"


class Testimonials extends React.Component {
    render() {
        const testimonialsComponent = testimonialsData.map(testimonial => (
            <Testimonial>
                <QuoteView>
                    <div>
                        <img src="/assets/quotes.svg" alt="quotation-mark" />
                    </div>
                    <p>{ testimonial.quote }</p>
                </QuoteView>
                <HorizontalBar />
                <h3>{ testimonial.name }</h3>
            </Testimonial>
        ))

        return (
            <TestimonialsView {...this.props}>
                <SiteContainer>
                    <SectionHeader blueWord="Testimonials" />
                    <SectionSubHeader>Sub Header Yo man ayy lmao</SectionSubHeader>

                    <TestimonialsList>
                        { testimonialsComponent }
                    </TestimonialsList>
                </SiteContainer>
            </TestimonialsView>
        )
    }
}

const HorizontalBar = styled.div`
    height: 7px;
    width: 27px;
    border-radius: 4px;
    background-color: ${GREY};
`
const Testimonial = styled.li`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TestimonialsList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`
const QuoteView = styled.div`
    display: flex;

    img {
        width: 20px;
        margin-right: 7px;
    }
`
const TestimonialsView = styled.div`
    background: white;
`

export default Testimonials
