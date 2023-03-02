import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  background-color: #949494;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const Card = styled.div`
  padding: 15px 30px;
  display: flex;
  align-items: center;

  .edit-icon {
    cursor: pointer;
    transition: 0.5s;
  }
  .icons {
    margin-right: 12px;
  }
`;
export const Options = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .MuiFormControl-root,.MuiOutlinedInput-root {
    border-radius: 12px;
  }
  .MuiOutlinedInput-input {
    background: white;
    border-radius: 12px;
}
.MuiInputBase-input {
  width: auto;
}
  .contador-abelhas, .restart, .linhas-colunas  {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 24px;
    margin-left: 24px;
  }
  .restart {
    background-color:#1DD724 ;
    font-size: 32px;
    transition: .3s;
    cursor: pointer;
  }
  .contador-abelhas {
    background: #FF9900;
  }
  .contador-abelhas p {
    font-size: 32px;
  }
  .contador-abelhas img {
    width: 35px;
    animation-name: abelha;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  //animação da abelha 
  @keyframes abelha {
    0% {
      transform: scale(1);
    }
    50% {
      scale: 1.2;
      transform: rotate(180deg);
    }
    100% {
      transform: scale(1);
      transform: rotate(360deg);
    }
  }

  .linhas-colunas {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #E4E4E4;
  }
  .linhas-colunas div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .numeros {
    font-size: 32px;
    margin-left:12px;
    margin-right:24px;
  }
`;