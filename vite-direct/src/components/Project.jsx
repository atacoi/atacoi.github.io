export default function Project({ name, des, imgSrc, href }) {
  return (
    <a className="project" href={href} target="_blank">
      <div>{name}</div>
      <img src={imgSrc}></img>
      <div className="description">{des}</div>
    </a>
  );
}
