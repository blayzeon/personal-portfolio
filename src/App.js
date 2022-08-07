import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div>
        <h2>Lorem Ipsum</h2>
        <div className="img"></div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic libero
          sint asperiores saepe nemo minima! Eum aperiam possimus earum
          inventore quasi dolorum magnam itaque ducimus, quod odio debitis
          placeat perspiciatis!
        </div>
      </div>

      <div className="margin">
        <h3>Title</h3>
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
      </div>

      <div>
        <div>
          <h3>Contact Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi
            iusto similique fuga non quos repellendus dicta porro quasi, eum
            fugit explicabo, expedita at illo voluptatum aliquid ullam.
            Mollitia, provident?
          </p>
          <address>
            1234 address dr <br /> address, address 12345
          </address>
          <div className="icon-pair">
            <div className="icon"></div>
            <a href="tel:123-555-1234">123-555-1234</a>
          </div>
          <div className="icon-pair">
            <div className="icon"></div>
            <a href="mailto:abc@example.com">abc@example.com</a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
