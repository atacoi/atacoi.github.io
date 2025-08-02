import "../css/About.css";

function About() {
  return (
    <div id="about-container">
      <h1>Socials</h1>
      <ul>
        <li id="slide">
          <a className="page" href="https://github.com/atacoi" target="_blank">
            GitHub
          </a>
        </li>
        <li id="slide">
          <a
            className="page"
            href="https://leetcode.com/u/atacoi/"
            target="_blank"
          >
            LeetCode
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
