import React from "react"
import styled from "styled-components"

import Baths from "./Baths"
import Beds from "./Beds"
import SquareFeet from "./SquareFeet"


const BEDS = "Beds"
const BATHS = "Baths"
const SQ_FT = "Sq ft"

class Mls extends React.Component {
    constructor() {
        super()
        this.defaultEditBox = {
            width: 0,
            height: 90,
            top: "100%"
        }
        this.state = {
            activeFilter: undefined,
            editBox: this.defaultEditBox
        }
    }
    render() {
        const { editBox, activeFilter } = this.state

        return (
            <MlsContainer {...this.props} innerRef={container => this.container = container}>
                <MlsForm onSubmit={this._handleSubmit}>
                    <MlsNumberInput placeholder="Enter City, Neighborhood, Address or Zip" />
                    <MlsFilterOptions 
                        isActive={activeFilter === BEDS}
                        innerRef={beds => this.beds = beds}
                    >
                        <span onClick={this._handleFilterClick}>Beds</span>
                        <EditBox style={editBox} isActive={activeFilter === BEDS}>
                            <Beds />
                        </EditBox>
                    </MlsFilterOptions>
                    <MlsFilterOptions 
                        isActive={activeFilter === BATHS}
                        innerRef={bath => this.bath = bath}
                    >
                        <span onClick={this._handleFilterClick}>Baths</span>
                        <EditBox style={editBox} isActive={activeFilter === BATHS}>
                            <Baths />
                        </EditBox>
                    </MlsFilterOptions>
                    <MlsFilterOptions 
                        isActive={activeFilter === SQ_FT}
                        innerRef={squareFeet => this.squareFeet = squareFeet}
                    >
                        <span onClick={this._handleFilterClick}>Sq ft</span>
                        <EditBox style={editBox} isActive={activeFilter === SQ_FT}>
                            <SquareFeet />
                        </EditBox>
                     </MlsFilterOptions>
                    <MlsSubmitButton innerRef={button => this.button = button}>Find Homes</MlsSubmitButton>
                </MlsForm>
            </MlsContainer>
        )
    }
    _handleSubmit = (e) => {
        e.preventDefault()
    }
    _handleFilterClick = (e) => {
        e.preventDefault()

        const nextActiveFilter = e.target.textContent
        const didClickAlreadyActiveFilter = nextActiveFilter === this.state.activeFilter

        if (didClickAlreadyActiveFilter) {
            this.setState({ activeFilter: false, editBox: this.defaultEditBox})
        } else {
            const { x:containerX, width: containerWidth } = this.container.getBoundingClientRect()
            const { x:bedX } = this.beds.getBoundingClientRect()

            const left = bedX - containerX
            const width = (containerX + containerWidth) - bedX
            console.log(bedX, width)
            this.setState({ activeFilter: nextActiveFilter, editBox: { ...this.state.editBox, width } })
        }
    }
}

const SEARCH_BAR_WIDTH = 300

const EditBox = styled.div`
    position: absolute;
    background: lightgray;
    display: ${({ isActive }) => isActive ? "flex" : "none"};
    align-items: center;
    justify-content: space-around;
    left: ${SEARCH_BAR_WIDTH}px;

    > * {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        padding: 12px;

        p {
            margin: 0 0 5px 0;
            width: 100%;
            text-align: left;
        }

        input {
            height: 35px;
            padding-left: 10px;
            flex-basis: 48%;
            box-sizing: border-box;
        }
    }
`

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
    position: relative;
    
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

const MlsNumberInput = styled.input`
    min-width: ${SEARCH_BAR_WIDTH}px;
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
    background-color: ${({ isActive }) => isActive ? "lightgray" : "#ececec"};
    color: rgba(113, 113, 113, 0.832);
    border: rgba(170, 170, 170, 0.6) 1px solid; 
    border-left: none;   
    padding-left: 12px;
    box-sizing: border-box;
    font-size: 13px;
    letter-spacing: 0.035rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    outline: none;

    span {
        display: flex;
        align-items: center;
        height: 45px;
        width: 100%;
    }
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
