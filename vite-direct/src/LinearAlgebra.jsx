import MatrixReduction from "./MatrixReduction";

export default function LinearAlgebra() {
  return (
    <div id="linear-algebra-page-container">
      <Navbar />
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
