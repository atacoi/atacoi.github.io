import img from "./assets/react.svg";
import Project from "./components/Project";
import GitHub from "./assets/github.png";
import Leetcode from "./assets/leetcode.png";
import LinkedIn from "./assets/linkedin.png";
import walk from "./assets/walk.gif";
import number from "./assets/numbers.gif";
import pin from "./assets/pin.webp";
import phreddit from "./assets/phreddit.gif";
import verbs from "./assets/verbs.gif";

function App() {
  return (
    <div id="App" style={{ marginTop: "27px" }}>
      <img
        src={pin}
        style={{
          width: "45px",
          height: "auto",
          position: "absolute",
          top: "6px",
          zIndex: "2",
        }}
      ></img>
      <div
        style={{
          border: "2px solid black",
          width: "45%",
          maxWidth: "500px",
          height: "30px",
          padding: 0,
          borderTop: "2px solid black",
          borderBottom: "none",
          zIndex: "1",
          backgroundColor: "transparent",
        }}
      ></div>

      <div className="box" style={{ margin: "0 0 0 0" }}>
        <h1 style={{ margin: "10px 0 5px 0" }}>Andrew Tacoi</h1>
        <div id="socials">
          <a href="https://github.com/atacoi" target="_blank">
            <img src={GitHub}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-tacoi-706204326/"
            target="_blank"
          >
            <img src={LinkedIn}></img>
          </a>
          <a href="https://leetcode.com/u/atacoi" target="_blank">
            <img src={Leetcode}></img>
          </a>
        </div>
      </div>

      <div
        style={{
          border: "2px solid black",
          width: "45%",
          height: "10px",
          padding: 0,
          borderBottom: "none",
          borderTop: "none",
          maxWidth: "500px",
        }}
      ></div>

      <div className="box">
        <div>Welcome to my professonal website!</div>
      </div>

      <div
        style={{
          border: "2px solid black",
          width: "45%",
          height: "150px",
          padding: 0,
          borderBottom: "none",
          borderTop: "none",
          maxWidth: "500px",
        }}
      ></div>

      <div className="box" style={{ marginBottom: "0" }}>
        <h2 style={{ margin: "10px 0" }}>Bio</h2>

        <div>
          I'm currently pursuing a bachelor's in computer science at Stony Brook
          University. I began my computer science journey in high school with AP
          Computer Science A. My interests are web development, cryptography,
          low-level programming, and data science. I have experience coding in
          C, Python, HTML, CSS, JavaScript, and Java. For fun, I enjoy kayaking,
          playing video games and going to the beach. Below are some of the many
          projects I have worked on as an undergraduate.
        </div>
      </div>

      <div
        style={{
          border: "2px solid black",
          width: "45%",
          height: "150px",
          padding: 0,
          borderBottom: "none",
          borderTop: "none",
          maxWidth: "500px",
        }}
      ></div>

      <div className="box">
        <h2>Photos</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={img}></img>
          <img src={img}></img>
          <img src={img}></img>
        </div>
      </div>
      <div
        style={{
          border: "2px solid black",
          width: "45%",
          height: "150px",
          padding: 0,
          borderBottom: "none",
          borderTop: "none",
          maxWidth: "500px",
        }}
      ></div>

      <div className="box" style={{ paddingBottom: 0, marginBottom: "2em" }}>
        <h2 style={{ margin: "10px 0" }}>Projects</h2>
        <div id="Projects">
          <Project
            name="Phreddit"
            imgSrc={phreddit}
            des="A recreation of reddit.com developed for Fundamentals of Software Development (CSE 316). Supports user profile, post, community and comment creation, as well as user login and admin profiles."
          />
          <Project
            name="Romanian Grammar Helper"
            imgSrc={verbs}
            href={"https://conjugator-sedd.onrender.com"}
            des="Website dedicated for practicing Romanian grammar with over 900+ verbs available to practice.
Served using Render.com and Mongo Atlas."
          />
        </div>

        <div id="Projects">
          <Project
            name="Simple Ray Caster"
            imgSrc={walk}
            href={"https://github.com/atacoi/Simple-Raycaster"}
            des="A simple raycaster progam based off ID software's Wolfensetin 3D game engine. Developed in a weekend with full sprite-sheet support and tile mapping."
          />
          <Project
            name="Numerical System Converter"
            imgSrc={number}
            href={"https://github.com/atacoi/Number-System-Converter"}
            des="A program made for my systems class entirely in python using the tkinter toolkit that converts one numerical system into another. Supports binary, octal, decimal and hexadecimal conversions."
          />
        </div>
      </div>

      <footer>
        <div>© 2025 Andrew Tacoi</div>
      </footer>
    </div>
  );
}

export default App;
