import React from "react"
import styled from "styled-components"
import { mobile } from "../consts"

const Wrap = styled.div`
  text-align: left;
  margin: 200px auto;
  h1 {
    font-size: 50px;
    ${mobile(`
      font-size: 30px;
    `)}
  }
  p {
    font-size: 18px;
    max-width: 700px;
    margin-top: 80px;
  }
`

const Safety = (props) => (
  <Wrap className="container">
    <h1>
      For us here at Blindly,
      <br/>
      your safety is paramount.
    </h1>
    <p>
      Being open and vulnerable on a dating app can be a daunting concept. We must all take precautions to ensure our own privacy and Blindly aims to help you take those very precautions. 
      First, we see to it that your personal information such as your profile picture and other details remain hidden until you choose to reveal them to any match. Your privacy is entirely in your hands. 
    </p>
  </Wrap>
)

export default Safety