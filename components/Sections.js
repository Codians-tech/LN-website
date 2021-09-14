export const Section = styled.div`
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