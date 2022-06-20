import { StyledTechCard } from "./styles";

function TechCard({ tech, setEditTech }) {
  function openEditModal() {
    setEditTech({
      open: true,
      id: tech.id,
      title: tech.title,
      status: tech.status,
    });
  }

  return (
    <StyledTechCard onClick={openEditModal}>
      <h2>{tech.title}</h2>
      <p>{tech.status}</p>
    </StyledTechCard>
  );
}

export default TechCard;
