import React from "react"
import styled from "styled-components"
import HomeTestimonial from "../../components/HomeTestimonial"
import SiteContainer from "../../components/SiteContainer/"

class TestimonialsSection extends React.Component {
    render() {
        return (
            <TestimonialsView>
                <SiteContainer>
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
                </SiteContainer>
            </TestimonialsView>
        )
    }
}

const TestimonialsView = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    
    h3{
        color: #2b2b2b;
    }
    @media (max-width: 1000px) {
        padding-top: 140px;
    }
    
`
const TestimonialsAccentHome = styled.div`
    width: 30px;
    height: 3px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 50px;
`

const TestimonialsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    @media (max-width: 1000px) {
        flex-direction: column;
        margin-top: 30px;
    }
`

export default TestimonialsSection
