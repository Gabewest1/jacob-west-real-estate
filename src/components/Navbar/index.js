import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import PageLinks from "../../components/PageLinks"

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

                    <PageLinks isExpanded={this.state.isExpanded} />

                    <PhoneNumberLinkToContact to="contact">512 669 9649</PhoneNumberLinkToContact>
                </NavbarContainer>
                <NavMenuExpander onClick={() => this.setState({ isExpanded: !isExpanded })}>
                    <Hamburger src="/assets/hamburger.svg" />
                </NavMenuExpander>
            </NavbarView>
        )
    }
}

const NavbarView = styled.div`
    position: fixed;
    top: 0;
    z-index: 10000;
    height 74px;
    width: 100%;
    background-color: rgb(34, 38, 43);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
        height: 55px;
    }
`
const NavbarContainer = styled.div`
    width: 74%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    @media (max-width: 1000px) {
        width: 100%;
    }
`
const LogoLinkToHome = styled(Link)`
    width: 85px;
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
    font-size: 29px;
    letter-spacing: -0.08rem;
    color: rgba(235, 235, 235, 0.96);
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
