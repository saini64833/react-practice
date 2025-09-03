import { useCallback, useState, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [Length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
      console.log(numberAllowed);
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}[]><?/";
      console.log(charAllowed);
    }
    for (let i = 0; i < Length; i++) {
      let len = Math.floor(Math.random() * (str.length + 1));
      pass += str.charAt(len);
      // console.log(pass);
    }
    setPassword(pass);
  }, [Length, charAllowed, numberAllowed, setPassword]);//setpassword put in on function memory and it is optimise this
  const passwordRef=useRef(null);
  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,Length+1);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, charAllowed, passwordGenerator, Length]);

  return (
    <>
      <div className="w-full h-30 max-w-md mx-auto bg-gray-500 shadow-md rounded-lg px-4 my-8 justify-self-center">
        <h1 className="justify-self-center text-white">password Generator</h1>
        <div className="flex">
          <input
            className="  outline-none bg-white w-full py-1 px-4 rounded-l-lg my-2"
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button className="bg-blue-500 py-1 px-4 rounded-r-lg my-2 w-auto outline-none shrink-0 hover:bg-sky-700 hover:cursor-pointer"
          onClick={copyPasswordToClipBoard}>  
            Copy
          </button>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-2">
            <input
              className="max-w-md accent-blue-500 outline-none cursor-pointer"
              type="range"
              min={6}
              max={100}
              value={Length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{Length}</label>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <input
              className="cursor-pointer"
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onClick={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Number</label>
            </div>
            <div className="flex gap-2">
              <input
              className="cursor-pointer"
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onClick={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Charactor</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
