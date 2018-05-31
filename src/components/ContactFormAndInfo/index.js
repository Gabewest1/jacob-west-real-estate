import React from "react"
import styled from "styled-components"
import ContactForm from "./ContactForm"

class ContactSection extends React.Component {
    render() {
        return (
            <ContactFormAndInfoView {...this.props}>
                <Body>
                    <LeaveMessageWrapper>
                        <SubHeader>Leave A Message</SubHeader>
                        <ContactMessage>
                            We promise to never share personal information with
                            any thieves, hackers or third party services.
                        </ContactMessage>
                        <ContactForm />
                    </LeaveMessageWrapper>

                    <ContactDirectlyWrapper>
                        <SubHeader>Contact Directly</SubHeader>

                        <ContactInfoContainer>
                            <ContactWrapper>
                                <ContactTitle>Personal Phone</ContactTitle>
                                <ContactInfo>512 669 9649</ContactInfo>
                            </ContactWrapper>

                            <ContactWrapper>
                                <ContactTitle>Email</ContactTitle>
                                <ContactInfo>jacobwest1@austinelite.com</ContactInfo>
                            </ContactWrapper>

                            <ContactWrapper>
                                <ContactTitle>Office Address</ContactTitle>
                                <ContactInfo>
                                    2321 Loquat Ln Round Rock, Texas 78664
                                </ContactInfo>
                            </ContactWrapper>

                            <ContactWrapper>
                                <ContactTitle>Office Phone</ContactTitle>
                                <ContactInfo>512 669 9649</ContactInfo>
                            </ContactWrapper>
                        </ContactInfoContainer>
                    </ContactDirectlyWrapper>
                </Body>
            </ContactFormAndInfoView>
        )
    }
}

const SubHeader = styled.h3``
const ContactMessage = styled.p``
const ContactTitle = styled.h3`
    font-size: 15px;
    font-weight: 600;
`
const ContactInfo = styled.p`
    font-size: 13px;
    font-weight: 400;
`
const ContactWrapper = styled.div`
    margin-bottom: 10px;
    
    * {
        margin: 0;
    }
`
const ContactDirectlyWrapper = styled.div``
const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 610px) {
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        ${ContactWrapper}:nth-child(odd) {
            flex-basis: 60%;
        }
    
        ${ContactWrapper}:nth-child(even) {
            flex-basis: 40%;
        }
    }
    @media (min-width: 768px) {
        margin-top: 79px;
        flex-direction: column;
    }
`
const LeaveMessageWrapper = styled.div`
    max-width: 500px;
    @media (min-width: 768px) {
        margin-right: 60px;
    }
`
const Body = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding-bottom: 100px;
    margin-top: 40px;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const ContactFormAndInfoView = styled.div`
    background: white;
    width: 100%;
`

export default ContactSection
