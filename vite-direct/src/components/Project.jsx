export default function Project({ name, des, imgSrc, href }) {
  return (
    <a className="project" href={href} target="_blank">
      <div id="name">{name}</div>
      <img src={imgSrc}></img>
      <div>{des}</div>
    </a>
  );
}
