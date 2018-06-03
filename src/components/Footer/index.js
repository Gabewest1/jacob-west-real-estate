import React from "react"
import styled from "styled-components"

const Footer = props => (
    <FooterView {...props}>
        <FooterContainer>

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
    background: black;
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
    height: 100px;
    @media (max-width: 1000px) {
        margin-top: 27px;
    }
`

const Copyright = styled.div`
    font-size: 11px;
    color: rgba(101, 130, 167, 0.56);
    text-align: center;
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
