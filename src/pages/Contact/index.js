import React from "react"
import styled from "styled-components"
import SectionHeader from "../../components/SectionHeader"
import ContactFormAndInfo from "../../components/ContactFormAndInfo/"
import SiteContainer from "../../components/SiteContainer/"
import { PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../constants"

class ContactPage extends React.Component {
    render() {
        return (
            <ContactPageView>
                <SiteContainer>
                    <SectionHeader blueWord="Contact" greyWord="Jacob" noWrap />

                    <ContactFormAndInfo />
                </SiteContainer>
            </ContactPageView>
        )
    }
}

const ContactPageView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: ${PAGE_PADDING};

    @media (max-width: 1000px) {
        ${PAGE_PADDING_MOBILE};
    }
    
`

export default ContactPage
