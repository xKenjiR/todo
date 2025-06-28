import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="md:absolute md:translate-x-[-50%] md:left-[50%] md:w-[40rem]">
      <Header />
      <Body />
    </div>
  );
}

export default App;
