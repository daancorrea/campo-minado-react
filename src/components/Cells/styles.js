import styled from "styled-components";

import CellImage from "../../assets/cell.png"

export const Container = styled.div`
  height: 66px;
  width: 66px;
  background-image: url(${CellImage});
  background-size: 66px 66px;
  perspective: 1000px;
  margin-left: ${props => props.evenRow ? '-5px' : '25px'};
  cursor: pointer;

  div {
    padding-top: 10px;
  }
`