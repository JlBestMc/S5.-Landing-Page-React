import './App.css'
import Button from './Button' 
import Card from './Card'
import Hero from './Hero'

function App() {
 const nombre1= "Juan"
 const nombre2= "Luis"
  return (
    <>
   
      <Button  nombre = {nombre1} edad = {26}/>
      <Button  nombre = {nombre2} edad = {55}/>
      <Card/>
      <Hero/>

    </>
  )
}

export default App
