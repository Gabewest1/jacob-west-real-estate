import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Mls from "../../components/Mls"
import SectionHeader from "../../components/SectionHeader"
import { WIDTH_OF_ALL_CONTAINERS } from "../../constants"
import HomeTestimonial from "../../components/HomeTestimonial";
//fsftetetetget
//feature merge test
//feature merge test
//feature merge test
//feature merge test
//feature merge test
class Home extends React.Component {
    render() {
        let dick = 'dick'
        let dick2 = 'dick2'
        return (
            <HomeView {...this.props}>
                <HeroView>
                    <HeroViewContainer>
                        <HeroHeader>The search for your new <BoldenWord>home </BoldenWord>starts here.</HeroHeader>
                        <Mls />
                    </ HeroViewContainer>
                </HeroView>

                <AboutView>
                    <AboutViewContainer>
                        <SectionHeader blueWord="About" greyWord="Us"/>

                        <AboutImgAndTextContainer>
                             <AboutTextContainer>
                                <h3>Jacob West</h3>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                <h3 style={ {'marginTop': '32px'} }>Remax Elite®</h3>

                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </AboutTextContainer>
                            <ClientImgWrapper>
                                <ClientImg src="/assets/jacob2.jpg"/>
                            </ClientImgWrapper>
                        </AboutImgAndTextContainer>

                        <SocialMediaLinksContainer>
                            <SocialMediaLinkWrapper>
                                <SocialMediaIcon src="/assets/facebook.svg" />
                            </SocialMediaLinkWrapper>

                            <SocialMediaLinkWrapper>
                                <SocialMediaIcon src="/assets/twitter.svg" />
                            </SocialMediaLinkWrapper>

                            <SocialMediaLinkWrapper>
                                <SocialMediaIcon src="/assets/instagram.svg" />
                            </SocialMediaLinkWrapper>
                        </SocialMediaLinksContainer>
                    </AboutViewContainer>
                </AboutView>
                
                <TestimonialsView>
                    <TestimonialsViewContainer>
                        <h3>But don't just take my word for it.</h3>                  
                        
                        <TestimonialsAccentHome>
                        </TestimonialsAccentHome>

                        <TestimonialsContainer>
                          <HomeTestimonial 
                                clientName="Jane Doe" 
                                clientWords="I was incredibly absolutly impressed withon my house within DAYS of listing, just as he hoped to when I signed on with Benefit."
                            />

                            <HomeTestimonial 
                                clientName="Jane Doe" 
                                clientWords="I was incredibly absolutly impressed withon my house within DAYS of listing, just as he hoped to when I signed on with Benefit."
                            />

                            <HomeTestimonial 
                                clientName="Jane Doe" 
                                clientWords="I was incredibly absolutly impressed withon my house within DAYS of listing, just as he hoped to when I signed on with Benefit."
                            />
                        </TestimonialsContainer>
                    </TestimonialsViewContainer>
                </TestimonialsView>

                <FeaturedNeighborhoodsView>
                    <FeaturedNeighborhoodsViewContainer>
                        <SectionHeader blueWord="Featured" greyWord="Neighborhoods"/>

                        <p>Property ownership can be a big deal, especially in todays' climate.</p>

                        <HoodsContainer>
                            <TopRowContainer>
                                <HoodWrapper>
                                    <Hood src="/assets/austin.png"/>
                                </HoodWrapper>

                                <HoodWrapper>
                                    <Hood src="/assets/round-rock.png"/>
                                </HoodWrapper>

                                <HoodWrapper>
                                    <Hood src="/assets/pflug.png"/>
                                </HoodWrapper>

                                <HoodWrapper>
                                    <Hood src="/assets/georgetown.png"/>
                                </HoodWrapper>
                            </TopRowContainer>

                            <BottomRowContainer>
                                <HoodWrapper>
                                    <Hood src="/assets/round-rock.png"/>
                                </HoodWrapper>

                                <HoodWrapper>
                                    <Hood src="/assets/austin.png"/>
                                </HoodWrapper>

                                <HoodWrapper>
                                    <Hood src="/assets/georgetown.png"/>
                                </HoodWrapper>

                                <HoodWrapper>
                                    <Hood src="/assets/pflug.png"/>
                                </HoodWrapper>
                            </BottomRowContainer>
                        </HoodsContainer>

                        <p style={ {'marginTop': '60px'} }>Property ownership can be a big deal with.</p>
                    </FeaturedNeighborhoodsViewContainer>
                </FeaturedNeighborhoodsView>

                {/* <GettingStartedView> */}
                    {/* <GettingStartedViewContainer> */}
                        {/* <SectionHeader blueWord="Getting" greyWord="started" /> */}

                        {/* <h3 style={ {'marginTop': '60px'} }>Having to exist in this world can be hard Jacob.</h3> */}
                    {/* </GettingStartedViewContainer> */}
                {/* </GettingStartedView> */}
                
                {/* <HomeContactView> */}
                
                {/* </HomeContactView> */}
            </HomeView>
        )
    }
}

const HomeView = styled.div`
`

const HeroView = styled.div`
    width: 100%;
    height: 100vh;
    background: url('/assets/hero1.png') no-repeat;
    background-size: 120%;
    background-position: 30% 68%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeroViewContainer = styled.div`
    width: ${ WIDTH_OF_ALL_CONTAINERS };
    position: relative;
    bottom: 20px;
`

const HeroHeader = styled.div`
    font-size: 50px;
    color: rgb(250, 250, 250);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    letter-spacing: -0.1rem;
    position: relative;
    top: 6px;
`

const BoldenWord = styled.span`
    font-weight: 500;
    color: rgb(251, 251, 251);
`

const AboutView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AboutViewContainer = styled.div`    width: 100%;
    width: ${ WIDTH_OF_ALL_CONTAINERS };
    margin-top: 130px;
    display: flex;
    flex-direction: column;    
`

const AboutImgAndTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;    
    s
`

const ClientImgWrapper = styled.div`
    width: 284px;
`

const ClientImg = styled.img`
    width: 100%;
`

const AboutTextContainer = styled.div`
    width: 66%;
`

const SocialMediaLinksContainer = styled.div`
    width: 112px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    margin-top: 18px;
`

const SocialMediaLinkWrapper = styled.div`
    width: 36px;
`

const SocialMediaIcon = styled.img`
    width: 100%;
`

const TestimonialsView = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const TestimonialsViewContainer = styled.div`
    width: ${ WIDTH_OF_ALL_CONTAINERS };
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    h3{
        color: #2b2b2b;
    }
`
    
const TestimonialsAccentHome = styled.div`
    width: 30px;
    height: 3px;
    background: #1e1e1e;
`
    
const TestimonialsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
`
    
const FeaturedNeighborhoodsView = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 180px;
`

const FeaturedNeighborhoodsViewContainer = styled.div`
    width: ${ WIDTH_OF_ALL_CONTAINERS };
    display: flex;
    flex-direction: column;
    align-items: center;
`
    
const HoodsContainer = styled.div`
    width: 100%;
    margin-top: 98px;
`

const TopRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const BottomRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`

const HoodWrapper = styled.div`
    width: 210px;
    height: 138px;
    box-shadow: 3px 4px 17px 0 rgba(0, 0, 0, 0.35);
`

const Hood = styled.img`
    width: 100%;
`

export default Home
