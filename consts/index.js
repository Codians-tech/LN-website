// colors
export const BORDER_COLOR = "#F2F2F2"
export const BASE_C = "#E96594"
export const RED_C = "#e74c3c"
export const TEXT_C = "#444"

export const MOBILE_BREAK_POINT = "700px"
export const TABLET_BREAK_POINT = "900px"

export const tablet = (styles) => `
  @media(max-width: ${TABLET_BREAK_POINT}){
    ${styles}
  }
`

export const mobile = (styles) => `
  @media(max-width: ${MOBILE_BREAK_POINT}){
    ${styles}
  }
`