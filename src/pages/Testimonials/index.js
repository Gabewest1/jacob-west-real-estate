import React from "react"
import styled from "styled-components"

class Testimonials extends React.Component {
    render() {
        return (
            <TestimonialsView {...this.props}>
                Testimonials Here
            </TestimonialsView>
        )
    }
}

const TestimonialsView = styled.div`
    background: white;
`

export default Testimonials
