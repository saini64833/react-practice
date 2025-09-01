import { useState } from "react";
import Button from "./button";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-row gap-10 items-center text-white rounded-md bg-white px-4 py-2 ">
          <Button  onClick={()=>setColor("red")} 
           className="bg-red-500">Red</Button>
          <Button onClick={()=>setColor("green")} 
          className="bg-green-500 ">Green</Button>
          <Button onClick={()=>setColor("blue")} 
          className="bg-blue-500"> Blue</Button>
          <Button onClick={()=>setColor("olive")} 
          className="bg-yellow-300">olive</Button>
          <Button onClick={()=>setColor("gray")}
           className="bg-gray-500">Gray</Button>
          <Button onClick={()=>setColor("yellow")}
          className="bg-yellow-500">Yellow</Button>
          <Button onClick={()=>setColor("pink")} 
          className="bg-pink-500">Pink</Button>
          <Button onClick={()=>setColor("purple")}
          className="bg-purple-500">Purple</Button>
          <Button onClick={()=>setColor("lavender")}
             className="bg-purple-200">Lavender</Button>
          <Button onClick={()=>setColor("white")}
          className="bg-white text-black ">White</Button>
          <Button onClick={()=>setColor("black")}
          className="bg-black">Black</Button>
        </div>
      </div>
    </>
  );
}

export default App;
