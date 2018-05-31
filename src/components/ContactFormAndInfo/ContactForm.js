import React from "react"
import styled from "styled-components"
import { BLUE } from "../../constants"

class ContactForm extends React.Component {
    render() {
        return (
            <ContactFormView {...this.props}>
                <label>Name</label>
                <Input name="name" placeholder="Name" />
                
                <label>Phone Number</label>
                <Input name="number" placeholder="Number" />
                
                <label>Message</label>
                <TextArea name="message" placeholder="Message" />
                <SubmitButton>Contact</SubmitButton>
            </ContactFormView>
        )
    }
}

const Input = styled.input`
    height: 34px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background: #f6f6f6;
    border: #ddd 1px solid;
`

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    height: 130px;
    margin: 0;
    box-sizing: border-box;
    background: #f6f6f6;
    border: #ddd 1px solid;
    resize: none;
`
const SubmitButton = styled.button`
    width: 140px;
    height: 40px;
    background: ${BLUE};
    background: #1eb978;
    border: none;
    color: white;
    font-size: 14px;
    letter-spacing: 0.05rem;
    font-weight: 500;
`

const ContactFormView = styled.form`
    display: flex;
    flex-direction: column;

    label{
        color: #6f6f6f;
        font-size: 14px;
        position: relative;
        top: 4px;
        left: 1px;
    }

    * {
        // border: none;    
        border-radius: 2px;
        margin-bottom: 5px;
    }

    > *:last-child {
        margin-top: 4px;
        margin-bottom: 0;
    }
`

export default ContactForm
