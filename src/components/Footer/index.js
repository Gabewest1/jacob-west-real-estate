import React from "react"
import styled from "styled-components"
import PageLinks from "../../components/PageLinks"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"

const Footer = props => (
    <FooterView {...props}>
        <FooterContainer>
            <FooterPageLinks />

            <Copyright>
                Each Office Independently Owned and Operated. © 2018 RE/MAX, LLC. All Rights Reserved.
            </Copyright>

            <FooterLogosContainer>
                <RemaxFooterLogoContainer>
                    <RemaxFooterLogo src="/assets/remax-logo-footer.svg">
                    </RemaxFooterLogo>
                </RemaxFooterLogoContainer>

                <MottoMortgageFooterLogoContainer>
                    <MottoMortgageFooterLogo src="/assets/motto-mortgage.png">
                    </MottoMortgageFooterLogo>
                </MottoMortgageFooterLogoContainer>
            </FooterLogosContainer>
        </FooterContainer>
    </FooterView>
)

const FooterView = styled.div`
    width: 100%;
    height: 190px;
    background: #1e2021;
    display: flex;
    justify-content: center;
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 52px;
    width: 80%;
`

const FooterPageLinks = styled(PageLinks)`
    font-size: 11px;
    color: #ccc;
    text-transform: uppercase;
`

const Copyright = styled.div`
    font-size: 11px;
    color: rgba(101, 130, 167, 0.56);
    text-align: center;
    margin-top: 8px;
`

const FooterLogosContainer = styled.div`
    width: 232px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
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
