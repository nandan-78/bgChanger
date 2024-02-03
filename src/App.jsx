import { useState } from "react"


function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button
        onClick={() => setColor("red")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "red"}}>
        Red</button>
        <button
        onClick={() => setColor("green")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "Green"}}>
        Green</button>
        <button
        onClick={() => setColor("blue")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "blue"}}>
        Blue</button>
        <button
        onClick={() => setColor("orange")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "orange"}}>
        Orange</button>
        <button
        onClick={() => setColor("grey")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "grey"}}>
       Grey</button>
        <button
        onClick={() => setColor("aqua")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "aqua"}}>
       Aqua</button>
        <button
        onClick={() => setColor("pink")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "pink"}}>
       Pink</button>
        <button
        onClick={() => setColor("black")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "black"}}>
       Black</button>
        <button
        onClick={() => setColor("#57F287")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "#57F287"}}>
       Discord Green</button>
        <button
        onClick={() => setColor("#330072")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "#330072"}}>
       Purple</button>
        <button
        onClick={() => setColor("#FFFF99 ")} 
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
        style={{backgroundColor: "#FFFF99 "}}>
       Canary</button>
        <button
        onClick={() => setColor("#132C2D ")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "#132C2D "}}>
       Night Color</button>
        <button
        onClick={() => setColor("#9E1B32")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "#9E1B32"}}>
       Crimson</button>
        
      </div>
      </div>

      </div>
    </>
  )
}

export default App
