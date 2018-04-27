import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import PageLinks from "../../components/PageLinks"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"

const Navbar = props => (
    <NavbarView {...props}>
        <NavbarContainer>
            <LogoLinkToHome to="/">
                <Logo src="/assets/logo.svg" />
            </LogoLinkToHome>

            <PageLinks />

            <PhoneNumberLinkToContact to="contact">512 669 9649</PhoneNumberLinkToContact>
        </NavbarContainer>
    </NavbarView>
)

const NavbarView = styled.div`
    position: fixed;
    top: 0;
    z-index: 10000;
    width: 100%;
    background-color: rgb(34, 38, 43);
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavbarContainer = styled.div`
    width: ${WIDTH_OF_ALL_CONTAINERS};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoLinkToHome = styled(Link)`
    width: 85px;
`

const Logo = styled.img`
    width: 100%;
`

const PhoneNumberLinkToContact = styled(Link)`
    text-decoration: none;
    position: relative;
    top: 2px;
    font-size: 29px;
    letter-spacing: -0.08rem;
    color: rgba(235, 235, 235, 0.96);
`

export default Navbar
