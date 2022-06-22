import Header from "../../components/header";

import { Redirect } from "react-router-dom";
import TechsList from "../../components/TechsList";
import { StyledDashboard } from "./styles";
import { useState } from "react";
import { FormModal } from "../../components/Modals";
import FormCreateTech from "../../components/FormCreateTech";

import api from "../../Data";
import FormEditTech from "../../components/FormEditTech";

function Dashboard({ authenticated }) {
  const [createTech, setCreateTech] = useState(false);
  const [editTech, setEditTech] = useState({
    open: false,
    id: "",
    title: "",
    status: "",
  });
  const [techs, setTechs] = useState([]);
  const user = JSON.parse(localStorage.getItem("@KenzieHub:User"));
  const userUrl = `/users/${user?.id}`;

  function loadTechs() {
    if (user) {
      api
        .get(userUrl)
        .then((response) => {
          setTechs(response.data.techs);
        })
        .catch((err) => console.error(err));
    }
  }

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      {createTech && (
        <FormModal>
          <FormCreateTech setCreateTech={setCreateTech} loadTechs={loadTechs} />
        </FormModal>
      )}

      {editTech.open && (
        <FormModal>
          <FormEditTech
            editTech={editTech}
            setEditTech={setEditTech}
            loadTechs={loadTechs}
          />
        </FormModal>
      )}

      <Header>
        <button onClick={logout}>Sair</button>
      </Header>

      <StyledDashboard>
        <hr />

        <h2>Olá, {user?.name}</h2>
        <p>{user?.course_module}</p>

        <hr />

        <div className="techs">
          <h3>Tecnologias</h3>
          <button onClick={() => setCreateTech(true)}>+</button>
        </div>
        <span className="mobile-tip"> Click na tecnologia para editar</span>
      </StyledDashboard>

      <TechsList
        loadTechs={loadTechs}
        techs={techs}
        setEditTech={setEditTech}
      />
    </>
  );
}

export default Dashboard;
