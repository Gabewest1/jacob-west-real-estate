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
    letter-spacing: 0.04rem;
    font-weight: 400;
    // text-transform: uppercase;
    color: inherit;
    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 0.1rem;
        height: 60px;
`
const Links = styled.ul`
    color: rgba(235, 235, 235, 0.87);
    padding: 0;
    margin: 0;
    display: flex;
    flex-grow: .4;
    justify-content: space-between;
    text-align: center;
    transition: all .12s ease-in;

    @media (max-width: 1000px) {
        flex-direction: column;
        position: absolute;
        top: 54px;
        overflow: hidden;
        height: ${({ isExpanded }) => isExpanded ? "400px" : "0px"};
        padding: ${({ isExpanded }) => isExpanded ? "14px 0" : "0"};
        background: rgb(34,38,43); 
        width: 100%;
        box-sizing: border-box;
        border-top: rgba(255, 255, 255, 0.07) 1px solid;
    }
`

export default PageLinks
