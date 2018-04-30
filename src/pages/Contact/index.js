import React from "react"
import styled from "styled-components"
import SectionHeader from "../../components/SectionHeader"
import ContactFormAndInfo from "../../components/ContactFormAndInfo/"
import SiteContainer from "../../components/SiteContainer/"

class ContactPage extends React.Component {
    render() {
        return (
            <ContactPageView>
                <SiteContainer>
                    <SectionHeader blueWord="Contact" greyWord="Jacob" />
                    <ContactFormAndInfo />
                </SiteContainer>
            </ContactPageView>
        )
    }
}

const ContactPageView = styled.div`
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
// const ContactPageViewContainer = styled.div`
//     width: ${WIDTH_OF_ALL_CONTAINERS};
// `

export default ContactPage
