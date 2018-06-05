import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Footer = props => (
    <FooterView {...props}>
        <FooterContainer>

            <Copyright>
                Each Office Independently Owned and Operated.
                © 2018 RE/MAX, LLC. All Rights Reserved.
            </Copyright>

            <FooterLogosContainer>
                <RemaxFooterLogoContainer href="https://www.remax.com/realestateagentoffice/georgetown-tx-78626-jacobwest-id30913746.html" target="blank">
                    <RemaxFooterLogo src="/assets/remax-logo-footer.svg" />
                </RemaxFooterLogoContainer>

                <MottoMortgageFooterLogoContainer href="https://www.mottomortgage.com/" target="blank">
                    <MottoMortgageFooterLogo src="/assets/motto-mortgage.png" />
                </MottoMortgageFooterLogoContainer>
            </FooterLogosContainer>
        </FooterContainer>
    </FooterView>
)

const FooterView = styled.div`
    width: 100%;
    height: 110px;
    background: #2d4256;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        height: 170px;
    }
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`

const Copyright = styled.div`
    font-size: 12px;
    color: rgb(101, 130, 167);
    text-align: center;
`

const FooterLogosContainer = styled.div`
    width: 232px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const RemaxFooterLogoContainer = styled.a`
    width: 110px;
`

const MottoMortgageFooterLogoContainer = styled.a`
    width: 109px;
`

const RemaxFooterLogo = styled.img`
    width: 100%;
`

const MottoMortgageFooterLogo = styled.img`
    width: 100%;
`

export default Footer
