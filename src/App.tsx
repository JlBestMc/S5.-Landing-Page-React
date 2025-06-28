import "./App.css";
import Button from "./components/atoms/Button";
import Card from "./components/molecules/Card";
import Hero from "./components/molecules/Hero";

function App() {
  const nombre1 = "Juan";
  const nombre2 = "Luis";
  return (
    <>
      <Button nombre={nombre1} edad={26} />
      <Button nombre={nombre2} edad={55} />
      <Card />
      <Hero />
    </>
  );
}

export default App;
