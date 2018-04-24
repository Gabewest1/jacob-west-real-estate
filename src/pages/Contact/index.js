import React from "react"
import styled from "styled-components"

class Contact extends React.Component {
    render() {
        return (
            <ContactView {...this.props}>
                Contact Here
            </ContactView>
        )
    }
}

const ContactView = styled.div``

export default Contact
