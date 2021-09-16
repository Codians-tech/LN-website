import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  text-align: left;
  > h1 {
    font-size: 50px;
    margin: 150px 0px;
    max-width: 900px;
  }

  p {
    max-width: 600px;
    font-size: 18px;
    line-height: 1.8;
  }


`

const AboutUs = (props) => (
  <Wrap className="container">
    <h1>
       Dating has a vast potential for improvement,
       <br/>
       if people just get the chance to talk openly.
    </h1>
    <h2>
      Our goal
    </h2>
    <p>
      The biggest issue facing people on dating apps right now is the lack of proper matches. More often than not, dating apps advance the process of matching by promoting the most interesting profiles, with the most marketable images and bios. Their algorithm takes visual cues into account, but fails to ask the questions that matter the most. 
      The first point of contact for users of these apps is the profile picture, which then becomes the primary motivation for swiping right.
      <br/>
      <br/>
      Once this initial infatuation wears off, the replies start becoming rarer and users turn a blind eye to notifications until eventually, the connection fizzles out. 
      Blindly aims to bridge that gap by placing the emphasis on conversations and relegating the images to make them a second priority. 
      We, here at Blindly, work differently to ensure an unconventional dating experience. A dating experience that gives importance to your mind and your opinions. 
    </p>
  </Wrap>
)

export default AboutUs