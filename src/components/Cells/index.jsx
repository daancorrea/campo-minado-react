import { Container } from "./styles";

import BeeImage from "../../assets/abelha.svg";
import FlagImage from "../../assets/flag.png";
import MissImage from "../../assets/miss2.png";

export const Cell = ({ cell }) => {
  return (
    <Container evenRow={cell.row % 2 !== 0} evenCol={cell.col % 2 !== 0}>
      <div>
        <img src="" alt="" />
      </div>
    </Container>
  );
};
