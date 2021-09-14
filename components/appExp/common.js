import React from "react"
import styled from "styled-components"
import { BORDER_COLOR } from "../../consts"


export const ThoughtBubble = styled.div`
  padding: 20px;
  border: 1px solid ${BORDER_COLOR};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -200px;
  background: #fff;
  border-radius: 20px;
  width: 500px;
  background: #ecf0f1;
  &:before,
  &:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #ecf0f1;
    border-width: 20px;
    margin-left: -20px;
  }
  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: ${BORDER_COLOR} ;
    border-width: 22px;
    margin-left: -22px;
  }
`
