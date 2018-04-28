import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const PageLinks = props => (
    <Links {...props}>
        <PageLink to="property-search">Property Search</PageLink>
        <PageLink to="buy">Buy</PageLink>
        <PageLink to="sell">Sell</PageLink>
        <PageLink to="about">About</PageLink>
        <PageLink to="testimonials">Testimonials</PageLink>
        <PageLink to="contact">Contact</PageLink>
    </Links>
)


const PageLink = styled(Link)`
    text-decoration: none;
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    color: inherit;
`

const Links = styled.ul`
    color: rgba(235, 235, 235, 0.87);
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 50%;
`

export default PageLinks
