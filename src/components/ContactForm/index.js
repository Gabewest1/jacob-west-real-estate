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
                <SubmitButton>CONTACT</SubmitButton>
            </ContactFormView>
        )
    }
}

const Input = styled.input`
    height: 34px;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    background: #c3c3c3;
`
const TextArea = styled.textarea`
    width: 100%;
    padding: 5px;
    height: 105px;
    margin: 0;
    box-sizing: border-box;
    background: #c3c3c3;
`
const SubmitButton = styled.button`
    width: 100%;
    background: ${BLUE};
    border: none;
    color: white;
    line-height: 34px;
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
        border: none;    
        border-radius: 2px;
        margin-bottom: 5px;    
    }

    > *:last-child { 
        margin-bottom: 0; 
    }
`

export default ContactForm
