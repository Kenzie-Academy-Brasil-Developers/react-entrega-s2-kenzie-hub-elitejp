import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledRegister } from "./styles";
import { useHistory } from "react-router-dom";

import api from "../../Data";

function FormRegister({ setRegisterSucess }) {
  let history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo requerido!")
      .min(3, "Minimo de 3 caracteres!"),

    email: yup.string().required("Campo requerido!").email("Email invalido!"),

    password: yup
      .string()
      .required("Campo requerido!")
      .min(6, "Minimo de 6 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter pelo menos uma letra maiuscula, um numero e um caracter especial"
      ),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "A senha não é a mesma"),

    bio: yup
      .string()
      .required("Campo requerido!")
      .min(12, "Minimo de 12 caracteres"),

    contact: yup.string().required("Campo requerido!"),

    course_module: yup.string().required("Campo requerido!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const singUp = ({ name, email, password, bio, contact, course_module }) => {
    const user = { name, email, password, bio, contact, course_module };
    console.log(user);
    api
      .post("/users", user)
      .then((response) => {
        setRegisterSucess(response.status);
        setTimeout(() => history.push(`/`), 5000);
      })
      .catch((error) => {
        setRegisterSucess(400);
      });
  };

  return (
    <StyledRegister onSubmit={handleSubmit(singUp)}>
      <h2>Crie sua conta</h2>
      <p>Rapido e grátis, vamos nessa</p>

      <label>Nome</label>
      <input
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      {errors.name && <span className="error">{errors.name.message}</span>}

      <label>Email</label>
      <input
        type="text"
        placeholder="Digite aqui seu Email"
        {...register("email")}
      />
      {errors.email && <span className="error">{errors.email.message}</span>}

      <label>Senha</label>
      <input
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <label>Confirmar Senha</label>
      <input
        type="password"
        placeholder="Digite aqui sua senha novamente"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <span className="error">{errors.confirmPassword.message}</span>
      )}

      <label>Bio</label>
      <input type="text" placeholder="Fale sobre você" {...register("bio")} />
      {errors.bio && <span className="error">{errors.bio.message}</span>}

      <label>Contato</label>
      <input
        type="text"
        placeholder="Opção de contato"
        {...register("contact")}
      />
      {errors.contact && (
        <span className="error">{errors.contact.message}</span>
      )}

      <label>Selecionar módulo</label>
      <select
        type="text"
        placeholder="Opção de contato"
        {...register("course_module")}
      >
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Módulo 1
        </option>
        <option value="Segundo módulo (Frontend Avançado)">Módulo 2</option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Módulo 3
        </option>
        <option value="Quarto módulo (Backend Avançado)">Módulo 4</option>
      </select>
      {errors.course_module && (
        <span className="error">{errors.course_module.message}</span>
      )}

      <button type="submit">Cadastrar</button>
    </StyledRegister>
  );
}

export default FormRegister;
