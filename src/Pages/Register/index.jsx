import Header from "../../components/header";

import { Redirect, useHistory } from "react-router-dom";
import FormRegister from "../../components/FormRegister";
import { ErrorModal, RegisterModal } from "../../components/Modals";
import { useState } from "react";

function Register({ authenticated }) {
  const [registerSucess, setRegisterSucess] = useState(0);

  let history = useHistory();

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      {registerSucess === 201 && <RegisterModal />}
      {registerSucess === 400 && <ErrorModal />}
      <Header>
        <button onClick={() => history.goBack()}>Voltar</button>
      </Header>

      <FormRegister setRegisterSucess={setRegisterSucess} />
    </>
  );
}

export default Register;
