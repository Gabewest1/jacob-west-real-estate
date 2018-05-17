import React from "react"
import styled from "styled-components"
import PageLinks from "../../components/PageLinks"

const Footer = props => (
    <FooterView {...props}>
        <FooterContainer>
            <FooterPageLinks />

            <Copyright>
                Each Office Independently Owned and Operated.
                © 2018 RE/MAX, LLC. All Rights Reserved.
            </Copyright>

            <FooterLogosContainer>
                <RemaxFooterLogoContainer>
                    <RemaxFooterLogo src="/assets/remax-logo-footer.svg" />
                </RemaxFooterLogoContainer>

                <MottoMortgageFooterLogoContainer>
                    <MottoMortgageFooterLogo src="/assets/motto-mortgage.png" />
                </MottoMortgageFooterLogoContainer>
            </FooterLogosContainer>
        </FooterContainer>
    </FooterView>
)

const FooterView = styled.div`
    width: 100%;
    height: 170px;
    background: rgb(25,25,25);
    display: flex;
    justify-content: center;
    @media (max-width: 1000px) {
        height: 170px;
    }
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 48px;
    width: 80%;
    @media (max-width: 1000px) {
        margin-top: 27px;
    }
`

const FooterPageLinks = styled(PageLinks)`
    letter-spacing: 0.01rem;
    color: #b1b1b1;
    width: 50%;
    text-transform: uppercase;
    @media (max-width: 1000px) {
        display: none;
    }
`

const Copyright = styled.div`
    font-size: 11px;
    color: rgba(101, 130, 167, 0.56);
    text-align: center;
    margin-top: -20px;
`

const FooterLogosContainer = styled.div`
    width: 232px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media (max-width: 1000px) {
        padding-top: 14px;
    }
`

const RemaxFooterLogoContainer = styled.div`
    width: 110px;
`

const MottoMortgageFooterLogoContainer = styled.div`
    width: 109px;
`

const RemaxFooterLogo = styled.img`
    width: 100%;
`

const MottoMortgageFooterLogo = styled.img`
    width: 100%;
`

export default Footer
