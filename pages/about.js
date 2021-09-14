import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  text-align: left;
  > h1 {
    font-size: 50px;
    margin: 150px auto;
  }

  p {
    max-width: 600px;
  }


`

const AboutUs = (props) => (
  <Wrap className="container">
    <h1>
      We believe dating can we improved,
      <br/>
      if we just people talk freely.
    </h1>
    <h2>
      Our goal
    </h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit cumque expedita neque, maxime iure excepturi earum veritatis nemo officiis quos, repudiandae fugiat esse vel, numquam eveniet necessitatibus sequi consectetur qui magnam illum! Nihil, ut fugit. Minus impedit molestias architecto, accusamus labore reiciendis optio atque consequuntur temporibus possimus magnam. Incidunt, facere!
    </p>
  </Wrap>
)

export default AboutUs