import React from "react"
import styled from "styled-components"
import { BLUE } from "../../constants"

class ContactForm extends React.Component {
    render() {
        return (
            <ContactFormView {...this.props}>
                <Wrapper>
                    <Input name="name" placeholder="Name" />
                    <Input name="number" placeholder="Number" />
                </Wrapper>
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
    width: 100%;
    height: 45px;
    background: ${BLUE};
    background: #1eb978;
    border: none;
    color: white;
    font-size: 14px;
    letter-spacing: 0.05rem;
    font-weight: 400;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${Input} {
        margin-bottom: 5px;
    
        &:last-child {
            margin-bottom: 0px;
        }
    }
    
    @media (min-width: 480px) {
        ${Input} {
            margin: 0;
            margin-right: 5px;
        
            &:last-child {
                margin-right: 0px;
            }
        }

        justify-content: space-between;
        flex-direction: row;
    }
`
const ContactFormView = styled.form`
    display: flex;
    flex-direction: column;

    * {
        // border: none;    
        border-radius: 2px;
        margin-bottom: 5px;
    }

    > *:last-child {
        margin-top: 1px;
        margin-bottom: 0;
    }
`

export default ContactForm
