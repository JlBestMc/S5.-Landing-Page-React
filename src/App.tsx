import Button from "./components/atoms/Button";
import Anchor from "./components/atoms/anchor";
import Logo from "./components/atoms/Logo";

function App() {

  return (
    <>
    <div>
      <Button content="Get it on Chrome" variant="btnBlue" />
      </div>
      <div>
      <Button content="LOGIN" variant="btnRed" />
      </div>
      <div>
      <Button content="Get it on Firefox" variant="btnWhite" />
      </div>
      <div>
        <Anchor content="CONTACT" ref="#contact"/>
      </div>
      <div>
        <Logo src="./assets/logo-bookmark.svg"/>
      </div>
    </>
  );
}

export default App;
