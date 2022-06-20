import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledLogin } from "./styles";
import { useHistory } from "react-router-dom";

import api from "../../Data";

function Login({ setAuthenticated }) {
  let history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo requerido!").email("Email invalido!"),

    password: yup.string().required("Campo requerido!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const singIn = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@KenzieHub:Token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:User", JSON.stringify(user));

        setAuthenticated(true);

        return history.push(`/dashboard/`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <StyledLogin onSubmit={handleSubmit(singIn)}>
      <h2>Login</h2>

      <label>Email</label>
      <input
        type="text"
        placeholder="Endereço de Email"
        {...register("email")}
      />
      {errors.email && <span className="error">{errors.email.message}</span>}

      <label>Senha</label>
      <input type="password" placeholder="Senha" {...register("password")} />
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <button className="login" type="submit">
        Entrar
      </button>

      <p>Ainda não possui cadastro</p>
      <button className="register" onClick={() => history.push("/register")}>
        Cadastre-se
      </button>
    </StyledLogin>
  );
}

export default Login;
