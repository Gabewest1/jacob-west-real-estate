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

        this.state = {
            activeFilter: undefined,
            editBox: {
                left: undefined,
                width: undefined
            }
        }
    }
    render() {
        const { editBox, activeFilter } = this.state

        return (
            <MlsContainer {...this.props} innerRef={container => this.container = container}>
                <MlsForm onSubmit={this._handleSubmit}>
                    <Input placeholder="Enter City, Neighborhood, Address or Zip" name="mlsSearch" />
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
    componentDidMount = () => {
        document.getElementById("hero").addEventListener("click", this._removeActiveFilter)
    }
    componentWillUnmount = () => {
        document.getElementById("hero").removeEventListener("click", this._removeActiveFilter)        
    }
    _handleSubmit = (e) => {
        e.preventDefault()
    }
    _handleFilterClick = (e) => {
        const nextActiveFilter = e.target.textContent
        const didClickAlreadyActiveFilter = nextActiveFilter === this.state.activeFilter

        if (didClickAlreadyActiveFilter) {
            this.setState({ activeFilter: false })
        } else {
            const { x:containerX, width: containerWidth } = this.container.getBoundingClientRect()
            const { x:bedX } = this.beds.getBoundingClientRect()

            const left = getComputedStyle(document.querySelector("[name=mlsSearch]")).width;

            const width = (containerX + containerWidth) - bedX
            console.log(bedX, width)
            this.setState({ activeFilter: nextActiveFilter, editBox: { ...this.state.editBox, width, left } })
        }
    }
    _removeActiveFilter = (e) => {
        if (e.target === document.getElementById("hero")) {
            this.setState({ activeFilter: false })
        }
    }
}

const SEARCH_BAR_WIDTH = 300

const EditBox = styled.div`
    position: absolute;
    background: lightgray;
    display: flex;
    height: ${({ isActive }) => isActive ? "91px" : "0px"};
    align-items: center;
    justify-content: space-around;
    transition: all .2s ease-in;
    overflow: hidden;
    top: 100%;

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

    @media (max-width: 1000px) {
        left: 0 !important;
        width: 100% !important;
        position: relative;
    }
`

const MlsContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 1px;
    background: none;
    border: #c4c4c469 1px solid;
    
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

const Input = styled.input`
    min-width: ${SEARCH_BAR_WIDTH}px;
    width: 100%;
    height: 47px;
    box-sizing: border-box;
    padding: 0 15px;
    margin: 0;
    background-color: rgb(250, 250, 250);
    border: #c4c4c4 1px solid;
    color: rgb(67, 67, 67);
    font-size: 14px;
    border-radius: 0px;
    // font-family: 'Segoe UI';
    
    background-clip: padding-box;
    
    &::-webkit-input-placeholder { 
        color: rgb(150, 150, 150);
        font-size: 15px;
        font-weight: 300;   
        // font-family: 'Segoe UI';

        @media (max-width: 1000px) {
            font-size: 11px;
        }
    }
    @media (max-width: 1000px) {
        font-size: 13px;
        height: 54px;
    }
`

const MlsFilterOptions = styled.div`
    width: 300px;
    background-color: ${({ isActive }) => isActive ? "lightgray" : "#ececec"};
    color: rgba(113, 113, 113, 0.832);
    border: rgba(170, 170, 170, 0.6) 1px solid; 
    border-left: none;   
    box-sizing: border-box;
    font-size: 13px;
    letter-spacing: 0.035rem;
    font-weight: 500;
    // font-family: 'Segoe UI';
    outline: none;
    
    span {
        padding-left: 12px;
        display: flex;
        align-items: center;
        height: 45px;
        width: 100%;
        position: relative;
        z-index: 1;
    }

    @media (max-width: 1000px) {
        border-left: rgba(170, 170, 170, 0.6) 1px solid;
        border-top: none;
        width: 100%;
        font-size: 12px;
        flex-direction: column;
    }
`

const MlsSubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 47px;
    color: rgb(255, 255, 255);
    background-color: #28a745;
    border: #28803b 1px solid;
    font-weight: 500;
    font-size: 16px;
    // font-family: 'Segoe UI';
    
    @media (max-width: 1000px) {
        width: 100%;
        letter-spacing: 0.025rem;
        height: 50px;
        font-size: 16px;
        font-weight: 500;
    }
`

export default Mls
