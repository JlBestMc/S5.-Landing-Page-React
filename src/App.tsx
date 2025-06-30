import Dropdown from "./components/molecules/Dropdown";
import Features from "./components/organismes/Features";
import Header from "./components/organismes/header";
import iconarrow from "./assets/icon-arrow.svg";
import iconclose from "./assets/icon-close.svg";

function App() {
  return (
    <>
      <Header></Header>
      <Features></Features>
      <Dropdown burgerIconSrc={iconarrow} closeIconSrc={iconclose}></Dropdown>
    </>
  );
}

export default App;
