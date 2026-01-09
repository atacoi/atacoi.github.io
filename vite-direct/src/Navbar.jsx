export default function Navbar() {
  return (
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
      <a className="navbarItem" href="/#/#about_me">
        About Me
      </a>
      <a className="navbarItem" href="/#/#skills">
        Skills
      </a>
      <a className="navbarItem" href="/#/#projects">
        Projects
      </a>
      <a className="navbarItem" href="/#/linear-stuff">
        Linear Algebra Stuff
      </a>
    </div>
  );
}
