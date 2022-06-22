import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledFormEditTech } from "./styles";

import api from "../../Data";

function FormEditTech({ editTech, setEditTech, loadTechs }) {
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

  const changeTech = (data) => {
    api
      .put(`/users/techs/${editTech.id}`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@KenzieHub:Token")
          )}`,
        },
      })
      .then((response) => {
        loadTechs();
        setEditTech({
          open: false,
        });
      })
      .catch((err) => console.error(err));
  };

  const deleteTech = () => {
    api
      .delete(`/users/techs/${editTech.id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@KenzieHub:Token")
          )}`,
        },
      })
      .then(() => {
        loadTechs();
        setEditTech({
          open: false,
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <StyledFormEditTech onSubmit={handleSubmit(changeTech)}>
      <div className="header-form-edit-tech">
        <h2>Cadastrar Tecnologia</h2>
        <button onClick={() => setEditTech(false)}>X</button>
      </div>

      <div className="form-inputs">
        <label>Nome</label>
        <input type="text" value={editTech.title} {...register("title")} />
        {errors.title && <span className="error">{errors.title.message}</span>}

        <label>Selecionar status</label>
        <select type="text" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status && (
          <span className="error">{errors.status.message}</span>
        )}

        <div className="buttons">
          <button className="alterar" type="submit">
            Salvar alterações
          </button>
          <button className="delete" type="button" onClick={deleteTech}>
            Excluir
          </button>
        </div>
      </div>
    </StyledFormEditTech>
  );
}

export default FormEditTech;
