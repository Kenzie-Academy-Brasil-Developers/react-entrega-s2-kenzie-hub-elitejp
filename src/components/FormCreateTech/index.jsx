import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledFormCreateTech } from "./styles";

import api from "../../Data";

function FormCreateTech({ setCreateTech, loadTechs }) {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Campo requerido!")
      .min(3, "Minimo de 3 caracteres!"),

    status: yup.string().required("Campo requerido!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const registerTech = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@KenzieHub:Token")
          )}`,
        },
      })
      .then((response) => loadTechs())
      .catch((err) => console.error(err));
  };

  return (
    <StyledFormCreateTech onSubmit={handleSubmit(registerTech)}>
      <div className="header-form-create-tech">
        <h2>Cadastrar Tecnologia</h2>
        <button onClick={() => setCreateTech(false)}>X</button>
      </div>

      <div className="form-inputs">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite o nome da Tecnologia"
          {...register("title")}
        />
        {errors.title && <span className="error">{errors.title.message}</span>}

        <label>Selecionar status</label>
        <select
          type="text"
          placeholder="Opção de contato"
          {...register("status")}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status && (
          <span className="error">{errors.status.message}</span>
        )}

        <button type="submit">Cadastrar Tecnologia</button>
      </div>
    </StyledFormCreateTech>
  );
}

export default FormCreateTech;
