import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Navbar = props => (
    <NavbarView {...props}>
        <Links>
            <StyledLink to="property-search">Property Search</StyledLink>
            <StyledLink to="buy">Buy</StyledLink>
            <StyledLink to="sell">Sell</StyledLink>
            <StyledLink to="about">About</StyledLink>
            <StyledLink to="contact">Contact</StyledLink>
            <StyledLink to="testimonials">Testimonials</StyledLink>
        </Links>
    </NavbarView>
)

const StyledLink = styled(Link)`

`
const Links = styled.ul`

`
const NavbarView = styled.div`

`

export default Navbar
