import {
  StyledCreateTechModal,
  StyledErrorModal,
  StyledRegisterModal,
} from "./styles";
import sucess from "../../Images/sucess.png";
import error from "../../Images/error.png";

export function RegisterModal() {
  return (
    <StyledRegisterModal>
      <div className="info">
        <img src={sucess} alt="Sucesso" />
        <h2>Conta criada com sucesso!</h2>
      </div>
      <div className="timer" />
    </StyledRegisterModal>
  );
}

export function ErrorModal() {
  return (
    <StyledErrorModal>
      <div className="info">
        <img src={error} alt="Error" />
        <h2>Ops! Algo deu errado</h2>
      </div>
      <div className="timer" />
    </StyledErrorModal>
  );
}

export function FormModal(props) {
  return <StyledCreateTechModal>{props.children}</StyledCreateTechModal>;
}
