import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    state = {
        isExpanded: false,
    }

    render() {
        let { isExpanded } = this.state
        console.log(isExpanded)
        return (
            <NavbarView {...this.props}>
                <NavbarContainer>
                    <LogoLinkToHome to="/">
                        <Logo src="/assets/logo.svg" />
                    </LogoLinkToHome>

                    <NavLinksContainer>
                        <NavLinkWrapper>
                            <NavLink to="#">
                                Property Search
                            </NavLink>
                        </NavLinkWrapper>
                        
                        <NavLinkWrapper>
                            <NavLink to="#">
                                Buyers
                            </NavLink>
                        </NavLinkWrapper>

                        <NavLinkWrapper>
                            <NavLink to="#">
                                Sellers
                            </NavLink>
                        </NavLinkWrapper>

                        <NavLinkWrapper>
                            <NavLink to="#">
                                About Us
                            </NavLink>
                        </NavLinkWrapper>

                        <NavLinkWrapper>
                            <NavLink to="#">
                                Testimonials
                            </NavLink>
                        </NavLinkWrapper>

                        <NavLinkWrapper>
                            <NavLink to="#">
                                Contact
                            </NavLink>
                        </NavLinkWrapper>
                    </NavLinksContainer>

                    <PhoneNumberLinkToContact to="contact">512 669 9649</PhoneNumberLinkToContact>
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
`
const NavLink = styled(Link)`
    text-decoration: none;
    white-space: nowrap;
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
    border-bottom: #3e4750 3px solid;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
        height: 55px;
    }
`
const NavbarContainer = styled.div`
    width: 76%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    @media (max-width: 1000px) {
        width: 100%;
    }
`
const LogoLinkToHome = styled(Link)`
    width: 91px;
    @media (max-width: 1000px) {
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
    @media (max-width: 1000px) {
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
    @media (max-width: 1000px) {
        margin-right: 10px;
    }
    @media (min-width: 1001px) {
        display: none;
    }
`
const Hamburger = styled.img`
    width: 100%;
`

export default Navbar
