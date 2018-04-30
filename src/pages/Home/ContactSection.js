import React from "react"
import styled from "styled-components"
import ContactFormAndInfoView from "../../components/ContactFormAndInfo/"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"
import SectionHeader from "../../components/SectionHeader"

class ContactSection extends React.Component {
    render() {
        return (
            <ContactSectionView>
                <ContactSectionViewContainer>
                    <SectionHeader blueWord="Contact" greyWord="Jacob" />

                    <ContactFormAndInfoView />
                </ContactSectionViewContainer>
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
`
const ContactSectionViewContainer = styled.div`
    width: ${WIDTH_OF_ALL_CONTAINERS};
    margin-top: 140px;
`
export default ContactSection
