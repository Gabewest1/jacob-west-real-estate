import React from "react"
import styled from "styled-components"

class Mls extends React.Component {
    render() {
        return (
            <MlsContainer {...this.props}>
                <MlsForm>
                    <MlsNumberInput placeholder="Enter City, Neighborhood, Address, Zip or MLS#" />
                    <MlsFilterOptions>Beds</MlsFilterOptions>
                    <MlsFilterOptions>Baths</MlsFilterOptions>
                    <MlsFilterOptions>Sq ft</MlsFilterOptions>
                    <MlsSubmitButton>Find Homes</MlsSubmitButton>
                </MlsForm>
            </MlsContainer>
        )
    }
}

const MlsContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 3px;
    background: rgb(246, 246, 246);
    border: black 1px solid;
    border: #c4c4c4 1px solid;
    
    @media (max-width: 1000px) {
        padding: 1px;
    }
`

const MlsForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

const MlsNumberInput = styled.input`
    width: 100%;
    height: 47px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: rgb(250, 250, 250);
    border: #c4c4c4 1px solid;
    color: rgb(67, 67, 67);
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    border-radius: 0px;
    background-clip: padding-box;
    
    &::-webkit-input-placeholder { 
        color: rgb(150, 150, 150);
        font-size: 15px;
        font-weight: 300;   
        font-family: 'Roboto', sans-serif;
        padding-left: 10px;
        @media (max-width: 1000px) {
            font-size: 11px;
        }
    }
    @media (max-width: 1000px) {
        font-size: 13px;
        height: 54px;
    }
`

const MlsFilterOptions = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 47px;
    background-color: #ececec;
    color: rgba(113, 113, 113, 0.832);
    border: rgba(170, 170, 170, 0.6) 1px solid; 
    border-left: none;   
    padding-left: 12px;
    box-sizing: border-box;
    font-size: 13px;
    letter-spacing: 0.035rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 1000px) {
        border-left: rgba(170, 170, 170, 0.6) 1px solid;
        border-top: none;
        width: 100%;
        font-size: 12px;
        height: 58px;
    }
`

const MlsSubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 47px;
    color: rgb(255, 255, 255);
    background-color:   #ea343e; 
    border: #d44552 1px solid;
    letter-spacing: 0.045rem;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 1000px) {
        width: 100%;
        letter-spacing: 0.025rem;
        height: 50px;
        font-size: 16px;
        background: #e74b6c;
        font-weight: 500;
    }
`

export default Mls
