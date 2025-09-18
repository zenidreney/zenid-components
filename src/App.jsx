import Star from "./components/Star.jsx"
console.log(Star)

function App() {

  return (
    <>
      <h1>Your components go here</h1>
      <Star onChange={() => console.log("Changed")}/>
    </>
    
  )
}


export default App
