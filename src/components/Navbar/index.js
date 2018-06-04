import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    state = {
        isExpanded: false,
    }

    closeMenuOnPageChange(){
        this.setState({
            isExpanded: false
        })
    }

    render() {
        let { isExpanded } = this.state

        return (
            <NavbarView {...this.props}>
                <NavbarContainer>
                    <LogoLinkToHome to="/" onClick={() => {this.closeMenuOnPageChange()}}>
                        <Logo src="/assets/logo.svg" />
                    </LogoLinkToHome>

                    <NavLinksContainer isExpanded={ isExpanded }>
                        
                        <NavLinkWrapper>
                            <NavLink to="/PropertySearch" onClick={() => {this.closeMenuOnPageChange()}}>
                                Property Search
                            </NavLink>
                        </NavLinkWrapper>
                        
                        <NavLinkWrapper>
                            <NavLink to="/Buy" onClick={() => {this.closeMenuOnPageChange()}}>
                                Buyers
                            </NavLink>
                        </NavLinkWrapper>

                        <NavLinkWrapper>
                            <NavLink to="/Sell" onClick={() => {this.closeMenuOnPageChange()}}>
                                Sellers
                            </NavLink>
                        </NavLinkWrapper>

                        <NavLinkWrapper>
                            <NavLink to="/About" onClick={() => {this.closeMenuOnPageChange()}}>
                                About Us
                            </NavLink>
                        </NavLinkWrapper>

                        <NavLinkWrapper>
                            <NavLink to="/Testimonials" onClick={() => {this.closeMenuOnPageChange()}}>
                                Testimonials
                            </NavLink>
                        </NavLinkWrapper>

                        <NavLinkWrapper>
                            <NavLink to="/Contact" onClick={() => {this.closeMenuOnPageChange()}}>
                                Contact
                            </NavLink>
                        </NavLinkWrapper>
                    </NavLinksContainer>

                    <PhoneNumberLinkToContact to="contact" onClick={() => {this.closeMenuOnPageChange()}}>
                        512 669 9649
                    </PhoneNumberLinkToContact>
                </NavbarContainer>
                <NavMenuExpander onClick={() => this.setState({ isExpanded: !isExpanded })}>
                    <Hamburger src="/assets/hamburger.svg" />
                </NavMenuExpander>
            </NavbarView>
        )
    }
}

const NavLinksContainer = styled.div`
    justify-content: space-between;
    display: flex;
    width: 60%;
    height: 73px;
    position: relative;
    top: 2px;
    transition: all .2s ease-in;    

    @media (max-width: 1100px) {
        flex-direction: column;
        background: #343a40;
        height: ${({ isExpanded }) => isExpanded ? "405px" : "0px" };
        overflow: hidden;
        position: absolute;
        right: 0;
        width: 100%;
        top: 58px;
    }
`
const NavLinkWrapper = styled.div`
    width: 100%;
    height: 73px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    &:hover{
        background: rgba(255,255,255,.03);
    }
    
    @media (max-width: 1100px) {
        border-top: #394149 1px solid;
    
        &:nth-child(1){
            border-top: none;
        }
    }
`
const NavLink = styled(Link)`
    text-decoration: none;
    white-space: nowrap;
    width: 100%;
    height: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    padding: 1em;
    box-sizing: border-box;
    color: rgba(255,255,255,.5);
`

const NavbarView = styled.div`
    position: fixed;
    top: 0;
    z-index: 10000;
    height 73px;
    width: 100%;
    background-color: #343a40;
    border-bottom: #3e4750 2px solid;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1100px) {
        height: 55px;
    }
`
const NavbarContainer = styled.div`
    width: 76%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;

    @media (max-width: 1100px) {
        width: 100%;
    }
`
const LogoLinkToHome = styled(Link)`
    width: 91px;
    @media (max-width: 1100px) {
        margin-left: 10px;
    }
`
const Logo = styled.img`
    width: 100%;
`
const PhoneNumberLinkToContact = styled(Link)`
    text-decoration: none;
    position: relative;
    top: 2px;
    font-size: 32px;
    letter-spacing: -0.08rem;
    color: rgba(255, 255, 255, 0.75);
    @media (max-width: 1100px) {
        display: none;
    }
`
const NavMenuExpander = styled.button`
    align-self: flex-end;
    margin-right: 2px;
    width: 57px;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    z-index: 220000000;
    @media (max-width: 1100px) {
        margin-right: 10px;
    }
    @media (min-width: 1101px) {
        display: none;
    }
`
const Hamburger = styled.img`
    width: 100%;
`

export default Navbar
