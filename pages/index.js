import React from "react"
import styled from "styled-components"
import AppExplainer from "./../components/appExplainer"
import { BASE_C, mobile, tablet } from "../consts"

const Wrap = styled.div`
`

const Main = styled.main`
  min-height: 600px;
  display: flex;
  text-align: left;
  ${mobile(`
    min-height: 500px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  `)}
`

const Section = styled.div`
  display: flex;
  margin-bottom: 200px;
  ${mobile(`
    flex-direction: column;
    margin-bottom: 100px;
  `)}

  ${props => props.sec1 && `
    ${mobile(`
      flex-direction: column-reverse;
    `)}
  `}
`

const ImageWrap = styled.div`
  flex: 1;

  img {
    width: 100%;
    max-height: 600px;
    max-width: 600px;

    &.hori-img {
      ${tablet(`
        max-width: 400px;
      `)}
    }
  }
`

const ContentWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding: 40px;
  ${mobile(`
     padding: 0px;
  `)}
  h2 {
    font-size: 40px;
    ${mobile(`
      font-size: 30px;
    `)}
  }

  p {
    font-size: 24px;
    ${mobile(`
      font-size: 18px;
    `)}
  }
`

const InfoWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  > h1 {
    font-size: 60px;
    color: #222;
    margin: 250px 0px 0px 0px;
    ${tablet(`
      margin: 150px 0px 0px 0px;
    `)}
    ${mobile(`
      font-size: 40px;
    `)}
  }
  p {
    font-size: 20px;
    max-width: 700px;
    margin-bottom: 50px;
  }
`

const MainImageWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 400px;
  height: 900px;
  overflow: hidden;
  ${mobile(`
    display: none;
  `)}
  > img {
    max-width: 500px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;
    pointer-events: none;
  }
`

const MockVideo = styled.video`
  position: absolute;
  top: 58px;
  width: 280px;
  height: 581px;
  left: 68px;
  border-radius: 56px;
}
`

const CTAWrap = styled.div`
  img {
    max-height: 60px;
  }
`



const Home = (props) => (
  <Wrap>
    <Main className="container">
      <InfoWrap>
        <h1>
          Match beyond Pictures
          <br/>
          {/* then reveal Pictures. */}
        </h1>
        <p>
          Blindly helps you connect with like minded people securely around you and form meaningful connections.
        </p>
        <CTAWrap>
          <a href="https://play.google.com/store/apps/details?id=in.blindly.app">
            <img src="/static/images/home/download-blindy.png" alt="Blindly Download App"/>
          </a>
        </CTAWrap>
      </InfoWrap>
      <MainImageWrap>
        <img src="/static/images/home/blindly-mock-3.png" alt="Blindly Dating app screenshot"/>
        <MockVideo autoPlay muted loop>
          <source src="/static/videos/blindly-mock-view.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </MockVideo>
      </MainImageWrap>
    </Main>
    {/* <AppExplainer /> */}
    <Section className="container" sec1>
      <ContentWrap>
        <h2>
          Unlike any dating app you’ve seen before
        </h2>
        <p>
          Have you ever come across a match on a dating app and found that the
          conversation just isn’t progressing?
          <br/>
          <br/>
          Blindly is here to solve just that! Here, you don’t receive matches based on perfectly edited pictures or poorly replicated bios, but just your thoughts. 
        </p>
      </ContentWrap>
      
      <ImageWrap>
        <img src="/static/images/home/not-happy.png" alt="" style={{ maxWidth: 300 }}/>
      </ImageWrap>
    </Section>
    <Section className="container" sec2>
      <ImageWrap>
        <img src="/static/images/home/anonymous.png" alt="" className="hori-img"/>
      </ImageWrap>
      <ContentWrap>
        <h2>
          Find common interests before you match
        </h2>
        <p>
          Answer thought-provoking questions, ask your own engaging questions or just
          share a joke and match with people whom you can get along with! Only reveal
          your profile once you’re comfortable with your match.
        </p>
      </ContentWrap>
    </Section>
    <Section className="container" sec3>
      <ContentWrap>
        <h2>
          Build with your safety in mind
        </h2>
        <p>
          Your account is firmly secured and only your matches can see your full profile.
          Here, on Blindly, you are in control of your privacy.
        </p>
      </ContentWrap>
      <ImageWrap>
        <img src="/static/images/home/secure.png" alt="" className="hori-img"/>
      </ImageWrap>
    </Section>
  </Wrap>
)

export default Home