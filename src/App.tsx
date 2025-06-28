import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="app absolute md:translate-x-[-50%] md:left-[50%] w-full md:w-[40rem] h-full md:shadow-xl bg-white overflow-auto">
      <Header />
      <Body />
    </div>
  );
}

export default App;
