import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Timeline, Tween } from "react-gsap"
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai"
import { BASE_C } from "../../consts"
import { ThoughtBubble } from "./../appExp/common"

const Wrap = styled.div`
  position: relative;
  display: flex;
  z-index: 100;
  min-height: 100vh;
  h1 {
    font-size: 60px;
    padding: 20px;
  }
`

const InfoWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Aniwrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NewThoughtBubble = styled(ThoughtBubble)`
  position: relative;
  text-align: center;
  transform: none;
  top: 0px;
  left: 0px;

  > h1 {
    font-size: 27px;
  }
`

const UserImage = styled.div`
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 40px;
  > img {
    width: 100%;
    filter: blur(4px);
  }
`

const MatchWrap  = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Comment = ({
  comment,
  src,
  ...props
}) => (
  <MatchWrap {...props}>
    <NewThoughtBubble>
      <h3>{comment}</h3>
    </NewThoughtBubble>
    <UserImage>
      <img src={src} alt={comment}/>
    </UserImage>
  </MatchWrap>
)

const BeyongImageScreen = (props) => (
  <Scene pin duration={1000} triggerHook={0.05}>
    {(progress) => (
      <Wrap>
        <InfoWrap>
          <Tween
            from={{
              opacity: 0,
              y: 200,
            }}
            to={{
              y: 0,
              opacity: 1,
            }}
            duration={1}
            totalProgress={progress * 3}
            progress={progress}
          >
            <NewThoughtBubble>
              <h1>
                Let's talk about pizza 🍕 topping we should ban together?
              </h1>
            </NewThoughtBubble>
            <UserImage>
              <img src="/static/images/home/blindly-app-01.jpg" alt=""/>
            </UserImage>
          </Tween>
        </InfoWrap>
        <Aniwrap>
          <Tween
            staggerFrom={{
              left: 700,
            }}
            staggerTo={{
              left: 0,
              ease: 'Back.easeOut',
            }}
            stagger={0.15}
            totalProgress={progress}
            paused
          >
            <Comment
              comment="aad aaskdkaskdaksdas das dasd"
              src="/static/images/home/match-1.jpg"
            />
            <Comment
              comment="aad aaskdkaskdaksdas das dasd"
              src="/static/images/home/match-2.jpg"
            />
            <Comment
              comment="aad aaskdkaskdaksdas das dasd"
              src="/static/images/home/match-3.jpg"
            />
            <Comment
              comment="aad aaskdkaskdaksdas das dasd"
              src="/static/images/home/match-4.jpg"
            />
            <Comment
              comment="aad aaskdkaskdaksdas das dasd"
              src="/static/images/home/match-5.jpg"
            />
          </Tween>
        </Aniwrap>
      </Wrap>
    )}
  </Scene>
)

export default BeyongImageScreen