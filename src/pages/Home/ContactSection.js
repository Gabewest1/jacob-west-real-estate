import React from "react"
import styled from "styled-components"
import ContactFormAndInfoView from "../../components/ContactFormAndInfo/"
import SectionHeader from "../../components/SectionHeader"
import SiteContainer from "../../components/SiteContainer/"

class ContactSection extends React.Component {
    render() {
        return (
            <ContactSectionView>
                <SiteContainer>
                    <SectionHeader blueWord="Contact" greyWord="Jacob" />

                    <ContactFormAndInfoView />
                </SiteContainer>
            </ContactSectionView>
        )
    }
}

const ContactSectionView = styled.div`
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 140px;
`
export default ContactSection
