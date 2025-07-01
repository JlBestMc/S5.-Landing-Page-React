import Dropdown from "./components/molecules/Dropdown";
import Features from "./components/organismes/Features";
import Header from "./components/organismes/Header";
import iconarrow from "./assets/icon-arrow.svg";
import iconclose from "./assets/icon-close.svg";

function App() {
  return (
    <>
      <Header></Header>
      <Features></Features>
      <Dropdown></Dropdown>
    </>
  );
}

export default App;
