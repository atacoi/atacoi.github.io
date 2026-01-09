import MatrixReduction from "./MatrixReduction";

export default function LinearAlgebra() {
  return (
    <div id="linear-algebra-page-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          borderBottom: "2px solid brown",
          marginBottom: "30px",
          padding: "5px",
          paddingBottom: 0,
          backgroundColor: "transparent",
          marginTop: "10px",
        }}
      >
        <a className="navbarItem" href="/#about_me">
          About Me
        </a>
        <a className="navbarItem" href="/#skills">
          Skills
        </a>
        <a className="navbarItem" href="/#projects">
          Projects
        </a>
        <a className="navbarItem" href="/#/linear-stuff">
          Linear Algebra Stuff
        </a>
      </div>
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "0",
          marginTop: "50px",
        }}
      >
        Linear Algebra Tools :0
      </h1>
      <MatrixReduction />
      <footer
        style={{
          marginBottom: "20px",
          backgroundColor: "transparent",
          position: "absolute",
          bottom: "0",
        }}
      >
        <div style={{ backgroundColor: "transparent" }}>
          © 2025 Andrew Tacoi
        </div>
      </footer>
    </div>
  );
}
