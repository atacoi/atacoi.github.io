import img from "./assets/react.svg";
import Project from "./components/Project";
import GitHub from "./assets/github.png";
import Leetcode from "./assets/leetcode.png";
import Gmail from "./assets/gmail.webp";
import LinkedIn from "./assets/linkedin.png";
import walk from "./assets/walk.gif";
import number from "./assets/numbers.gif";
import pin from "./assets/pin.webp";
import phreddit from "./assets/phreddit.gif";
import verbs from "./assets/verbs.gif";
import ts from "./assets/Typescript.svg";
import python from "./assets/python.png";
import MongoDB from "./assets/mongo.png";
import c from "./assets/c.svg";
import Java from "./assets/java.png";
import Skill from "./components/Skill";

function App() {
  return (
    <div id="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          borderBottom: "2px solid black",
          marginBottom: "30px",
          padding: "5px",
          paddingBottom: 0,
          backgroundColor: "transparent",
        }}
      >
        <a className="navbarItem" href="#about_me">
          About Me
        </a>
        <a className="navbarItem" href="#skills">
          Skills
        </a>
        <a className="navbarItem" href="#projects">
          Projects
        </a>
      </div>
      <img
        src={pin}
        style={{
          width: "45px",
          height: "auto",
          position: "absolute",
          top: "37px",
          zIndex: "2",
          backgroundColor: "transparent",
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

      <div className="box" style={{ margin: "0 0 0 0" }} id="name">
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
          <a href="mailto:andrew.e.tacoi@gmail.com">
            <img src={Gmail}></img>
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
          backgroundColor: "transparent",
          maxWidth: "500px",
        }}
      ></div>

      <div className="box">
        <div>Welcome to my professonal website!</div>
        <img src={img}></img>
      </div>

      <div
        style={{
          border: "2px solid black",
          width: "45%",
          height: "150px",
          padding: 0,
          borderBottom: "none",
          borderTop: "none",
          backgroundColor: "transparent",
          maxWidth: "500px",
        }}
      ></div>

      <div className="box" style={{ marginBottom: "0" }} id="about_me">
        <h2 style={{ margin: "10px 0" }}>About Me</h2>

        <div>
          Hi, I'm Andrew! I'm currently pursuing a bachelor's in computer
          science at Stony Brook University. I began my computer science journey
          in high school with AP Computer Science A. My interests are web
          development, cryptography, low-level programming, and data science. I
          have experience coding in C, Python, HTML, CSS, JavaScript, and Java.
          For fun, I enjoy taking walks, playing video games and spending time
          with my friends and family. Below are some of the many projects I have
          worked on as an undergraduate. Enjoy!
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
          backgroundColor: "transparent",
          maxWidth: "500px",
        }}
      ></div>

      <div className="box" id="skills">
        <h2>Software I've Worked with</h2>
        <div id="skill_container">
          <Skill img={c} text="C" path="C_(programming_language)" />
          <Skill
            img={python}
            text="Python"
            path="Python_(programming_language)"
          />
          <Skill img={img} text="React" path="React_(software)" />
          <Skill img={Java} text="Java" path="Java_(programming_language)" />
          <Skill img={MongoDB} text="MongoDB" path="mongodb" />
          <Skill img={ts} text="TypeScript" path="TypeScript" />
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
          backgroundColor: "transparent",
          maxWidth: "500px",
        }}
      ></div>

      <div
        className="box"
        style={{ paddingBottom: 0, marginBottom: "2em" }}
        id="projects"
      >
        <h2 style={{ margin: "10px 0" }}>Projects</h2>
        <div className="projects">
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
            style={{ height: "500px" }}
          />
        </div>

        <div className="projects">
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

      <footer style={{ marginBottom: "20px", backgroundColor: "transparent" }}>
        <div style={{ backgroundColor: "transparent" }}>
          © 2025 Andrew Tacoi
        </div>
      </footer>
    </div>
  );
}

export default App;
