
import bookmark from "./assets/logo-bookmark.svg";
import bookmarkMobile from "./assets/logo-bookmark-mobile.svg";
import burgerIcon from "./assets/icon-hamburger.svg";
import closeBurgerIcon from "./assets/icon-close.svg";
import Navbar from "./components/molecules/Navbar";

function App() {


  return (
    <>
      <div>
        <Navbar 
          burgerIconSrc={burgerIcon}
          closeIconSrc={closeBurgerIcon}
          logoSrc={bookmark}
          logoMobileSrc={bookmarkMobile}>
            
          </Navbar>
      </div>
    </>
  );
}

export default App;
