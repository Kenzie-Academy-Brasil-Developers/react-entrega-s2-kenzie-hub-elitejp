import { useEffect } from "react";
import TechCard from "../TechCard";
import { StyledTechList } from "./styles";

function TechsList({ loadTechs, techs, setEditTech }) {
  useEffect(() => {
    loadTechs();
  });

  return (
    <StyledTechList>
      {techs.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          loadTechs={loadTechs}
          setEditTech={setEditTech}
        />
      ))}
    </StyledTechList>
  );
}

export default TechsList;
