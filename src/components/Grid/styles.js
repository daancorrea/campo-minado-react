import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(${props => props.cols}, 55px);
  grid-template-rows: repeat(${props => props.rows}, 47px);
  column-gap: 5px;
  row-gap: 5px;
`