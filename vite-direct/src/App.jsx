import img from "./assets/react.svg";
import Project from "./components/Project";
import GitHub from "./assets/github.png";
import Leetcode from "./assets/leetcode.png";
import LinkedIn from "./assets/linkedin.png";
import walk from "./assets/walk.gif";

function App() {
  return (
    <div id="App">
      <div className="box" style={{ margin: "10% 0 5px 0" }}>
        <h1>Andrew Tacoi</h1>
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

      <div className="box" style={{ marginBottom: "15%" }}>
        <div>Welcome to my professonal website!</div>
      </div>

      <div className="box" style={{ marginBottom: "15%" }}>
        <h2 style={{ margin: "10px 0" }}>Bio</h2>

        <div>
          I'm currently pursing a bachelors in computer science at Stony Brook
          university.
        </div>

        <div>
          My interests are web development, cryptography, low-level programming
          and data science.
        </div>

        <div>
          I have experience coding in C, Python, HTML, CSS, JavaScript and Java.{" "}
        </div>

        <div>
          Below are some of the many projects I have worked on during my time as
          an undergraduate student.
        </div>
      </div>

      <div
        className="box"
        style={{ padding: "1em 0 0 0", marginBottom: "2em" }}
      >
        <h2 style={{ margin: "10px 0" }}>Projects</h2>
        <div id="Projects">
          <Project
            name="test"
            imgSrc={img}
            href={"http://google.com"}
            des="test des"
          />
          <Project
            name="test"
            imgSrc={img}
            href={"http://google.com"}
            des="test des"
          />
          <Project
            name="Simple Ray Caster"
            imgSrc={walk}
            href={"http://google.com"}
            des="test des"
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
