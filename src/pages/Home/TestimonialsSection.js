import React from "react"
import styled from "styled-components"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"
import HomeTestimonial from "../../components/HomeTestimonial"

class TestimonialsSection extends React.Component {
    render() {
        return (
            <TestimonialsView>
                <TestimonialsViewContainer>
                    <h3>But don&#39;t just take my word for it.</h3>

                    <TestimonialsAccentHome />

                    <TestimonialsContainer>
                        <HomeTestimonial
                            clientName="Jane Doe"
                            clientWords="I was incredibly absolutly impressed withon my house within DAYS of listing, just as he hoped to when I signed on with Benefit."
                        />

                        <HomeTestimonial
                            clientName="Jane Doe"
                            clientWords="I was incredibly absolutly impressed withon my house within DAYS of listing, just as he hoped to when I signed on with Benefit."
                        />

                        <HomeTestimonial
                            clientName="Jane Doe"
                            clientWords="I was incredibly absolutly impressed withon my house within DAYS of listing, just as he hoped to when I signed on with Benefit."
                        />
                    </TestimonialsContainer>
                </TestimonialsViewContainer>
            </TestimonialsView>
        )
    }
}

const TestimonialsView = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const TestimonialsViewContainer = styled.div`
    width: ${WIDTH_OF_ALL_CONTAINERS};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    h3{
        color: #2b2b2b;
    }
`

const TestimonialsAccentHome = styled.div`
    width: 30px;
    height: 3px;
    background: #1e1e1e;
`

const TestimonialsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
`

export default TestimonialsSection
