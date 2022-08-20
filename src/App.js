import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <div className="curved"></div>
        <div className="shadow">
          <div className="margin flex">
            <div className="img">
              <h1 className="subtext">blayzeon</h1>
            </div>
            <div className="blurb">
              <h2>About Me</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                libero sint asperiores saepe nemo minima! Eum aperiam possimus
                earum inventore quasi dolorum magnam itaque ducimus, quod odio
                debitis placeat perspiciatis!
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="margin">
        <h2>Title</h2>
        <div className="tiled">
          <Card title="sfsdfdgdssssgdfgdfg" />
          <Card title="test2" />
          <Card
            title="test3"
            text="dsfsfgdgfd gdsg esdg seg dfgdfg drger4 gsdfges 4rgeg gd fsd gfdg "
          />
          <Card title="test4" text="meow meow" />
          <Card title="test5" text="woof woof" />
          <Card title="test6" />
          <Card title="test7" />
          <Card title="test8" text="mooooo" />
          <Card title="test9" text="chirp chirp" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
