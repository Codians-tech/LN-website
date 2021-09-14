import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Timeline, Tween } from "react-gsap"
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai"
import { BORDER_COLOR, TEXT_C, RED_C } from "../consts"
import BeyongImg from "./appExp/beyongImg"
import { ThoughtBubble } from "./appExp/common"

const Wrap = styled.div`
min-height: 2000px;
`

const SceneWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 400px;
  > h1 {
    margin-bottom: 100px;
  }
`

const CardWrap = styled.div`
  border: 1px solid ${BORDER_COLOR};
  max-width: 400px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2.5px 0px;
  position: relative;
  > img {
    width: 100%;
    border-radius: 10px;
    transition-duration: 0.2s;
    overflow: hidden;
  }

  h3 {
    text-align: left;
    color: #555;
  }
`

const OpWrap = styled.div`
  display: flex;
  > div {
    flex: 1;
  }
`

const ICON_SIZE = 40

const getBlur = (val) => {
  const per = parseInt(val * 100)
  if (val == 0) {
    return 0
  }
  if (per > 0 && per <= 3) {
    return per * 2
  }
  if (per > 3 && per <= 10) {
    return per / 3
  }
} 

const AppExplainer = (props) => (
  <Wrap>
    <Controller>
      <Scene duration={1000} triggerHook={0.05} pin>
        {(progress) => (
          <SceneWrap>
             <h1>Let's look beyond pictures</h1>
              <Tween
                from={{
                  borderRadius: 40,
                  y: 0,
                }}
                to={{
                  y: 200,
                  borderRadius: 300,
                  padding: 0,
                }}
                ease="Strong.easeOut"
                totalProgress={progress - 0.2}
                paused
              >
                <CardWrap>
                  <Tween
                    totalProgress={progress - 0.2}
                    paused
                    from={{
                      opacity: 0,
                    }}
                    to={{
                      opacity: 1,
                    }}
                  >
                    <ThoughtBubble>
                      <h2>Let's talk about pizza 🍕 topping we should ban together?</h2>
                    </ThoughtBubble>
                  </Tween>
                  <Tween
                    ease="Strong.easeOut"
                    totalProgress={progress - 0.1}
                    paused
                    to={{
                      width: 100,
                      height: 100,
                      borderRadius: 400,
                      y: 8,
                    }}
                  >
                    <img
                      src="/static/images/home/blindly-app-01.jpg" alt="Look beyond pictures"
                      style={{
                        filter: `blur(${getBlur(progress)}px)`,
                      }}
                    />
                  </Tween>
                  <Tween
                    ease="Strong.easeOut"
                    totalProgress={progress}
                    paused
                    to={{
                      scale: 0,
                      width:0,
                      height:0,
                      opacity: 0,
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    <h3>Sonali Arora, 27</h3>
                  </Tween>
                  <Tween
                    ease="Strong.easeOut"
                    totalProgress={progress}
                    paused
                    to={{
                      scale: 0,
                      width:0,
                      height:0,
                      opacity: 0,
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    <OpWrap>
                      <div>
                        <AiOutlineClose size={ICON_SIZE} color={TEXT_C}/>
                      </div>
                      <div>
                      <AiOutlineHeart size={ICON_SIZE} color={RED_C}/>
                      </div>
                    </OpWrap>
                  </Tween>
                </CardWrap>
              </Tween>
          </SceneWrap>
        )}
      </Scene>
      <BeyongImg />
    </Controller>
  </Wrap>
)

export default AppExplainer