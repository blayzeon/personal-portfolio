import "./App.css";
import Deck from "./components/Deck";
import Footer from "./components/Footer";

//  Social media icons require https://devicon.dev/
const socials = [
  {
    name: "github",
    icon: "devicon-github-original",
    url: "https://github.com/blayzeon",
  },
  {
    name: "linkedin",
    icon: "devicon-linkedin-plain",
    url: "https://www.linkedin.com/in/kristineecarter/",
  },
  {
    name: "twitter",
    icon: "devicon-twitter-original",
    url: "https://twitter.com/kaseith",
  },
];

// Phone and email icons require https://fonts.google.com/icons
const contact = [
  {
    name: "phone",
    span: "call",
    url: "tel:352-448-8481",
    content: "352-448-8481",
  },
  {
    name: "email",
    span: "mail",
    url: "mailto:blayzeon@gmail.com",
    content: "blayzeon@gmail.com",
  },
];

const address = {
  city: "Gainesville",
  state: "FL",
  zip: "32641",
};

const blurb = "Will code for food. See below on how to get in touch:";

const projects = [
  {
    img: "battleship.jpg",
    title: "Battleship",
    github: "https://github.com/blayzeon/battleship",
    demo: "https://blayzeon.github.io/battleship/",
    text: "Simple battleship game with basic AI and CSS graphics.",
  },
  {
    img: "calculator.jpg",
    title: "Calculator",
    github: "https://github.com/blayzeon/calculator",
    demo: "https://blayzeon.github.io/calculator/",
    text: "Basic calculator with a Windows desktop theme.",
  },
  {
    img: "cv.jpg",
    title: "CV Maker",
    github: "https://github.com/blayzeon/cv-project",
    demo: "https://blayzeon.github.io/cv-project/",
    text: "Resume generator made with React.",
  },
  {
    img: "dashboard.jpg",
    title: "Dashboard",
    github: "https://github.com/blayzeon/admin-dashboard",
    demo: "https://blayzeon.github.io/admin-dashboard/",
    text: "Cat-themed admin dashboard.",
  },
  {
    img: "library.jpg",
    title: "Library",
    github: "https://github.com/blayzeon/library",
    demo: "https://blayzeon.github.io/library/",
    text: "Web app for keeping track of books.",
  },
  {
    img: "memory.jpg",
    title: "Memory Game",
    github: "https://github.com/blayzeon/memory-card",
    demo: "https://blayzeon.github.io/memory-card/",
    text: "Click every card exactly once to win.",
  },
  {
    img: "shop.jpg",
    title: "Shop",
    github: "https://github.com/blayzeon/shopping-cart",
    demo: "https://blayzeon.github.io/shopping-cart/",
    text: "React e-commerce shop demo complete with cart and variations.",
  },
  {
    img: "targets.jpg",
    title: "Target Practice",
    github: "https://github.com/blayzeon/target-practice",
    demo: "https://blayzeon.github.io/target-practice/",
    text: "Simple target practice game made with React.",
  },
  {
    img: "todo.jpg",
    title: "Todo",
    github: "https://github.com/blayzeon/todo_list",
    demo: "https://blayzeon.github.io/todo_list/",
    text: "Sticky note themed todo list app.",
  },
  {
    img: "weather.jpg",
    title: "Weather",
    github: "https://github.com/blayzeon/weather-app",
    demo: "https://blayzeon.github.io/weather-app/",
    text: "Simple weather app using promises.",
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <div className="curved">
          <div></div>
        </div>
        <div className="shadow">
          <div className="margin flex">
            <div className="portPic shadow">
              <h1>blayzeon</h1>
            </div>
            <div className="blurb">
              <h2>About Me</h2>
              <div>
                I'm an artist with a customer service and training background
                that fell in love with programming after taking{" "}
                <a href="https://www.edx.org/cs50" target="_blank">
                  Harvard's CS50
                </a>{" "}
                during the pandemic. I've since been following{" "}
                <a href="https://www.theodinproject.com/" target="_blank">
                  The Odin Project
                </a>{" "}
                and plan to pursue a career in web development!
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="margin">
        <h2>My Work</h2>
        <section className="tiled">
          <Deck data={projects} />
        </section>
      </main>

      <Footer
        img="https://media.giphy.com/media/VekcnHOwOI5So/giphy.gif"
        socials={socials}
        contact={contact}
        address={address}
        blurb={blurb}
      />
    </div>
  );
}

export default App;
