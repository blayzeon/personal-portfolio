import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <div className="curved1"></div>
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
