export default function Project({ name, skills, des, imgSrc, href }) {
  return (
    <a className="project" href={href} target="_blank">
      <div style={{ fontSize: "larger" }}>{name}</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {skills.map((s) => (
          <img className="project-skill" key={Math.random()} src={s} />
        ))}
      </div>
      <img className="project-image" src={imgSrc}></img>
      <div className="description">{des}</div>
    </a>
  );
}
