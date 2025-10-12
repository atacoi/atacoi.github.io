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
import JS from "./assets/js.png";
import Me from "./assets/me.png";

function App() {
  return (
    <div id="App">
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
          top: "50px",
          zIndex: "2",
          backgroundColor: "transparent",
        }}
      ></img>
      <div
        style={{
          border: "2px solid brown",
          width: "45%",
          maxWidth: "500px",
          height: "30px",
          padding: 0,
          borderBottomWidth: "0",
          zIndex: "1",
          backgroundColor: "transparent",
        }}
      ></div>

      <div className="box" style={{ margin: "0 0 0 0" }} id="name">
        <h1
          style={{
            margin: "10px 0 5px 0",
            fontSize: "xxx-large",
            paddingBottom: 0,
          }}
        >
          Andrew Tacoi
        </h1>
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
          border: "2px solid brown",
          width: "45%",
          height: "10px",
          padding: 0,
          borderBottomWidth: "0",
          borderTopWidth: "0",
          backgroundColor: "transparent",
          maxWidth: "500px",
        }}
      ></div>

      <div className="box">
        <div>Welcome to my professonal website!</div>
      </div>

      <div
        style={{
          border: "2px solid brown",
          width: "45%",
          height: "10px",
          padding: 0,
          borderBottomWidth: "0",
          borderTopWidth: "0",
          backgroundColor: "transparent",
          maxWidth: "500px",
        }}
      ></div>

      <div className="box">
        <img style={{ width: "100%", padding: 0 }} src={Me}></img>
      </div>

      <div
        style={{
          border: "2px solid brown",
          width: "45%",
          height: "150px",
          padding: 0,
          borderBottomWidth: "0",
          borderTopWidth: "0",
          backgroundColor: "transparent",
          maxWidth: "500px",
        }}
      ></div>

      <div className="box" style={{ marginBottom: "0" }} id="about_me">
        <h2 style={{ margin: "10px 0 0 0", paddingBottom: 0 }}>About Me</h2>

        <div>
          Hi, I am Andrew! When I was little, I always wanted to create my own
          applications and spent most of my time downloading rogue software on
          my Windows 7 home computer. This inspired me to take AP Computer
          Science A in high school and eventually major in computer science. At
          the moment, I am currently pursuing a bachelor's in computer science
          at Stony Brook University. My interests are web development,
          cryptography, low-level programming, and data science. I have
          experience coding in several programming languages, including C,
          Python, HTML, CSS, JavaScript, and Java. For fun, I enjoy taking
          walks, playing video games and spending time with my friends and
          family. At the top of the page, you can find a link to my socials,
          such as my GitHub, LinkedIn, email and LeetCode. Below are some of the
          many projects I have worked on as an undergraduate. <br /> Enjoy!
        </div>
      </div>

      <div
        style={{
          border: "2px solid brown",
          width: "45%",
          height: "150px",
          padding: 0,
          borderBottomWidth: "0",
          borderTopWidth: "0",
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
          <Skill img={ts} text="TypeScript" path="TypeScript" />
          <Skill img={img} text="React" path="React_(software)" />
          <Skill img={MongoDB} text="MongoDB" path="mongodb" />
          <Skill img={Java} text="Java" path="Java_(programming_language)" />
          <Skill img={JS} text="JavaScript" path="JavaScript" />
        </div>
      </div>
      <div
        style={{
          border: "2px solid brown",
          width: "45%",
          height: "150px",
          padding: 0,
          borderBottomWidth: "0",
          borderTopWidth: "0",
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
            name="Fake-Reddit"
            imgSrc={phreddit}
            skills={[JS, img, MongoDB]}
            des="A recreation of reddit.com developed for Fundamentals of Software Development (CSE 316). Supports user profile, post, community and comment creation. Uses bcrypt to hash and salt user passwords, and supports both user and admin profiles."
          />
          <Project
            name="Romanian Grammar Helper"
            imgSrc={verbs}
            skills={[ts, img, MongoDB, python]}
            href={"https://conjugator-sedd.onrender.com"}
            des="Website dedicated to practicing Romanian grammar with over 900+ verbs available to practice.
Served using Render.com and Mongo Atlas. Over 5+ different conjugation types are supported, including present, imperfect, pluperfect, etc. Data scraped from dexonline.ro using the BeautifulSoup library."
            style={{ height: "500px" }}
          />
        </div>

        <div className="projects">
          <Project
            name="Simple Ray Caster"
            imgSrc={walk}
            skills={[c]}
            href={"https://github.com/atacoi/Simple-Raycaster"}
            des="A simple raycasting program based off ID Software's Wolfenstein 3D game engine. Developed in a weekend with full sprite-sheet support and tile mapping. Raycasting is done through a linear interpolation algorithm written entirely in C."
          />
          <Project
            name="Numerical System Converter"
            imgSrc={number}
            skills={[python]}
            href={"https://github.com/atacoi/Number-System-Converter"}
            des="A program created for practicing numerical system conversion in System Fundamentals I (CSE 220). Programmed in Python using the tkinter toolkit for GUI rendering. Supports binary, octal, decimal and hexadecimal numerical conversions."
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
