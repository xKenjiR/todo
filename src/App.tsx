import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="absolute md:translate-x-[-50%] md:left-[50%] w-full md:w-[40rem] h-full md:shadow-xl bg-white">
      <Header />
      <Body />
    </div>
  );
}

export default App;
