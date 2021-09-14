import React from "react"
import styled from "styled-components"
import { mobile } from "./../consts"

const Wrap = styled.footer`
  border-top: 1px solid #f2f2f2;
  padding: 60px 0px;

  .footer-container {
    display: flex;
    ${mobile(`
      flex-direction: column;
    `)}
    .footer-sections,
    &.about-wrap {
      text-align: left;
      flex: 1;
      margin-right: 20px;
      max-width: 200px;

      &:last-child{
        margin-right: 0px;
      }
      h5 {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 18px;
      }
      ul {
        margin: 0px;
        padding: 0px;
        list-style: none;
        a {
          color: #111;
          display: block;
          text-decoration: none;
          padding: 8px 0px;
        }
      }

      &.social-wrap {
        > ul {
          display: flex;
          > li {
            flex: 1;
            > a {
              > i {
                font-size: 25px;
                color: #999;
              }
            }
          }
        }
      }

      &.company-wrap {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex: 1;
        ${mobile(`
          margin-top: 50px;
        `)}

        > img {
          max-height: 40px;
          opacity: 0.5;
        }
      }
    }
  }

  .copy-rights-wrap {
    margin-top: 50px;
    > p {
      font-weight: 300;
      font-size: 12px;
      color: #666;
      
    }
  }
`

const Footer = (props) => (
  <Wrap>
    <div className="container">
      <div className="footer-container">
        <div className="safety-wrap footer-sections">
          <h5>Legal</h5>
          <ul>
            <li>
              <a href="/safety.html">
                Safety
              </a>
            </li>
            <li>
              <a href="/safety.html">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/safety.html">
                Terms
              </a>
            </li>
          </ul>
        </div>

        <div className="social-wrap footer-sections">
          <h5>Social</h5>
          <ul>
            <li>
              <a href="/safety.html">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/safety.html">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="/safety.html">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="about-wrap footer-sections">
          <h5>About us</h5>
          <ul>
            <li>
              <a href="/about-us.html">
                Our Team
              </a>
            </li>
            <li>
              <a href="/about-us.html">
                Careers
              </a>
            </li>
            <li>
              <a href="/about-us.html">
                Work with us
              </a>
            </li>
          </ul>
        </div>

        <div className="company-wrap footer-sections">
          <img src="/static/images/blindly-logo.png" alt="Blindly Logo" />          
        </div>
      </div>
    </div>

    <div className="copy-rights-wrap">
      <p>
        © 2021 Codians Tech LLP, All Rights Reserved.
      </p>
      <p>
        Made by people just like you
      </p>
    </div>
  </Wrap>
)

export default Footer