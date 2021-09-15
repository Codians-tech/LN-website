import React, { useState } from "react"
import styled from "styled-components"
import Head from 'next/head';
import { BORDER_COLOR, mobile, TEXT_C, BASE_C } from "./../consts"

const LOGO_SIZE = "60px"

const Wrap = styled.div`
  border-bottom: 1px solid ${BORDER_COLOR};
`

const InnerWrap = styled.header`
  display: flex;
  justify-content: space-between;
`

const NavWrap = styled.nav`
  text-align: right;
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.4s;
  ${mobile(`
    background:#fff;
    position: fixed;
    top: 0px;
    width: 80%;
    height: 100%;
    z-index: 10;
    right: -80%;

    &.open {
      right: 0%;
    }
  `)}

  ul {
    padding: 0px;
    margin: 0px;
    text-align: right;
    flex: 1;
    ${mobile(`
      display: flex;
      flex-direction: column;
    `)}
    li {
      display: inline;
      margin: 0px 20px;
      a {
        text-decoration: none;
        color: ${TEXT_C};
        margin: 10px 0px;
        font-weight: 600;
        &.high {
          color: ${BASE_C};
          text-decoration: underline;
        }
      }
      ${mobile(`
        display: flex;
        flex-direction: column;
        border-top: 1px solid #f2f2f2;
        margin: 0px;
        text-align: left;
        padding: 20px;

        &:last-child {
          border-bottom: 1px solid #f2f2f2;
        }
      `)}
    }
  }
`

const LogoWrap = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  img {
    width: 100%;
    &:nth-child(1) {
      height: ${LOGO_SIZE};
      width: ${LOGO_SIZE};
    }
    &:nth-child(2) {
      height: 50px;
      width: auto;
      margin-left: 10px;
      position: relative;
      top: 5px;
    }
  }
`

const MobileMenu = styled.div`
  position: fixed;
  top: 15px;
  right: 20px;
  width: 40px;
  height: 50px;
  cursor: pointer;
  display: none;
  ${mobile(`
    display: block;
    &.open {
      > .bars {
        &:nth-child(1) {
          transform: rotate(45deg) translateX(8px) translateY(7px)
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translateX(10px) translateY(-10px)
        }
      }
    }
  `)}
    

  > span.bars {
    width: 100%;
    display: block;
    position: relative;
    margin-top: 8px;
    background: ${TEXT_C};
    height: 4px;
    border-radius: 5px;
    transition-duration: 0.4s;
    opacity: 1;
  }
`

const Header = (props) => {
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false)
  return (
    <Wrap>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="theme-color" content="#e96594" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blindly | Blind Dating, Making Friends and much more</title>
        <meta property="description" content="Did you ever have a match on a dating app, and not found conversations moving forward? Blindly is here solve exactly that! No matches based on pictures, videos or copy-pasted bios. But only thoughts."/>
        <meta property="image" content="./img/social-share.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
        <link href="/static/styles/main.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
      <InnerWrap className="container">
          <LogoWrap href="/">
            <img src="/static/images/blindly-logo.png" alt="Blindly Logo" />
            <img src="/static/images/blindly-logo-text.png" alt="Blindly Logo" />
          </LogoWrap>
          <NavWrap className={isMobileMenuOpen ? "open" : ""}>
            <MobileMenu
              className={isMobileMenuOpen ? "open" : ""}
              onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen) } }
            >
              <span className="bars"></span>
              <span className="bars"></span>
              <span className="bars"></span>
            </MobileMenu>
            <ul>
              <li>
                <a href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">
                  About us
                </a>
              </li>
              <li>
                <a href="/safety">
                  Safety
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=in.blindly.app" className="high" target="_blank">
                  Download App
                </a>
              </li>
            </ul>
          </NavWrap>
      </InnerWrap>
    </Wrap>
  )
}

export default Header