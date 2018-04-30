import React from "react"
import styled from "styled-components"

class About extends React.Component {
    render() {
        return (
            <AboutView {...this.props}>
                About Here
            </AboutView>
        )
    }
}

const AboutView = styled.div`
    background: white;
`

export default About
